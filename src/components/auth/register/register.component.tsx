import * as React from 'react';
import styled from 'styled-components';
import { Inputs, Buttons, WrongLabel, InputsGroup } from 'lib/styles';
import { RouteComponentProps } from 'react-router-dom';
import { RegisterProps, RegisterMethod } from 'container/auth/register';
import { useInputs } from 'lib/hooks';
import {
  id as idRegExp,
  password as passwordRegExp,
} from 'lib/RegExp/RegExp.json';

const { useEffect, useState } = React;

interface RegisterState {
  id: string;
  password: string;
  rePassword: string;
}

const RegisterWrapper = styled.div`
  width: 38.125rem;
  height: 38rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);
  margin-top: 1rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const GreetingDiv = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'Noto Sans', 'Noto Sans KR';
  font-weight: bold;
  color: #4470ff;
  margin-top: 3rem;
  /* margin-bottom: 2rem; */
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const RegisterComponent: React.FC<
  RegisterProps & RegisterMethod & RouteComponentProps
> = ({
  registerStatus,
  signKey,
  register,
  history,
  reset,
  idExist,
  idExistStatus,
}) => {
  const [inputs, inputsChange] = useInputs<RegisterState>({
    id: '',
    password: '',
    rePassword: '',
  });
  const [idValidation, setIdValidation] = useState<boolean>(true);
  const [pwValidation, setPwValidation] = useState<boolean>(true);
  const [rpwValidation, setRpwValidation] = useState<boolean>(true);

  const { id, password, rePassword } = inputs;

  const idCheck = (str: string): boolean => new RegExp(idRegExp).test(str);
  const pwCheck = (str: string): boolean =>
    new RegExp(passwordRegExp).test(str);
  const rPwCheck = (str: string): boolean => str === password;

  const registerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id && password && rePassword) {
      const idCheckResult = idCheck(id);
      const pwCheckResult = pwCheck(password);
      const rpwCheckResult = rPwCheck(rePassword);

      setIdValidation(idCheckResult);
      setPwValidation(pwCheckResult);
      setRpwValidation(rpwCheckResult);

      if (idCheckResult && pwCheckResult && rpwCheckResult) {
        idExist({ id });
      }
    }
  };

  useEffect(() => {
    if (
      pwValidation &&
      rpwValidation &&
      idValidation &&
      idExistStatus === 'success-false'
    ) {
      register({ id, password, signKey });
    }
  }, [
    id,
    idExistStatus,
    idValidation,
    password,
    pwValidation,
    register,
    rpwValidation,
    signKey,
  ]);

  useEffect(() => {
    if (!signKey.length) {
      history.push('/auth');
    } else {
      if (registerStatus === 'success') {
        console.log('성공');
        history.push('/auth');
      } else if (registerStatus === 'failure') {
        alert('회원가입에 실패하였습니다.');
      }
    }
  }, [registerStatus, history]);

  useEffect(
    () => () => {
      reset();
    },
    [],
  );

  return (
    <React.Fragment>
      <RegisterWrapper>
        <GreetingDiv>회원가입</GreetingDiv>
        <Form onSubmit={registerSubmit}>
          <InputWrapper>
            <InputsGroup width='28.75rem' height='6.5rem'>
              {(!idValidation || idExistStatus === 'success-true') && (
                <WrongLabel>
                  형식이 잘못되었거나 중복되는 아이디 입니다!
                </WrongLabel>
              )}
              <Inputs
                wrong={!idValidation || idExistStatus === 'success-true'}
                width='28.75rem'
                height='4.375rem'
                active={!!id}
                value={id}
                type='text'
                placeholder='아이디'
                name='id'
                autoComplete='off'
                onChange={inputsChange}
              />
            </InputsGroup>
            <InputsGroup width='28.75rem' height='6.5rem'>
              {!pwValidation && <WrongLabel>형식이 잘못되었습니다!</WrongLabel>}
              <Inputs
                wrong={!pwValidation}
                width='28.75rem'
                height='4.375rem'
                active={!!password}
                value={password}
                type='password'
                name='password'
                autoComplete='off'
                placeholder='비밀번호'
                onChange={inputsChange}
              />
            </InputsGroup>
            <InputsGroup width='28.75rem' height='6.5rem'>
              {!rpwValidation && (
                <WrongLabel>비밀번호와 일치하지 않습니다!</WrongLabel>
              )}
              <Inputs
                wrong={!rpwValidation}
                width='28.75rem'
                height='4.375rem'
                active={!!rePassword}
                value={rePassword}
                name='rePassword'
                autoComplete='off'
                placeholder='비밀번호 재입력'
                type='password'
                onChange={inputsChange}
              />
            </InputsGroup>
          </InputWrapper>
          <Buttons
            width='28.75rem'
            height='4.375rem'
            active={!!(id.length && password.length && rePassword.length)}
          >
            회원가입
          </Buttons>
        </Form>
      </RegisterWrapper>
    </React.Fragment>
  );
};

export default RegisterComponent;
