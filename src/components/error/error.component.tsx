import * as React from 'react';

import { ErrorMethod, ErrorProps } from 'container/error/error.container';
import Illust from 'lib/svg/error-illust.svg';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const { useState, useEffect } = React;

const Wrapper = styled.div`
  height: calc(85vh);
  font-family: 'Spoqa Han Sans';

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  width: 100%;
  max-width: 64rem;
  height: 18.75rem;

  display: flex;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ErrorImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Title = styled.p`
  font-size: 3rem;
  font-family: inherit;
  color: #000000;
  margin: 0;
`;

const Content = styled.span`
  font-size: 1.25rem;
  font-family: inherit;
  color: #a8a8a8;
`;

const Button = styled.button`
  width: 14.75rem;
  height: 3.75rem;
  border-radius: 2.5rem;
  border: solid 4px #ff6584;
  background-color: #ffffff;
  font-size: 1.125rem;
  font-family: inherit;
  color: #ef3c5b;
  cursor: pointer;
`;

const ErrorComponent: React.FC<
  ErrorProps & ErrorMethod & RouteComponentProps
> = ({ onError, code, name, message, history, setError, resetError }) => {
  const toMain = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push('/');
  };

  useEffect(() => {
    if (!onError) {
      setError({
        code: 404,
        name: 'Page Not Found',
        message:
          '죄송합니다. 찾으시는 페이지가 존재하지 않습니다. URL과 인터넷 연결 상태가 옳바른지 확인해주세요.',
        description: '',
      });
    }

    return () => resetError();
  }, []);

  return (
    <Wrapper>
      <Center>
        <LeftWrapper>
          <Title>
            {code} - {name}
          </Title>
          <Content>{message}</Content>
          <Button onClick={toMain}>메인으로</Button>
        </LeftWrapper>
        <ErrorImg src={Illust} alt="" />
      </Center>
    </Wrapper>
  );
};

export default ErrorComponent;
