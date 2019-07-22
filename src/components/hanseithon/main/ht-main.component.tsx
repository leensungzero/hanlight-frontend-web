import * as React from 'react';

import { HTMainMethod, HTMainProps } from 'container/hanseithon/main';
import { Device } from 'lib/styles';
import TitleMainImg from 'lib/svg/hanseithon-main-title.svg';
import AcceptPage from 'pages/hanseithon/main/acceptPage';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import logos from 'lib/sponsor/logos.svg';
import moment from 'moment';
import 'moment/locale/ko';

const { useEffect } = React;

const Wrapper = styled.div`
  margin-bottom: 4.375rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${Device.tabletL} {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  font-family: 'Nanum Myeongjo';
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 3.8rem 0;

  @media ${Device.tabletL} {
    margin: 0;
    margin-left: 5%;
    margin-top: 3.1rem;
    margin-bottom: 1.73rem;
  }
  @media ${Device.mobileL} {
    width: 90%;
    margin-top: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

const TitleImg = styled.img`
  width: 20rem;

  @media ${Device.tabletL} {
    width: 11.07rem;
  }
  @media ${Device.mobileL} {
    width: 7.06rem;
  }
`;

const Title = styled.span`
  font-family: inherit;
  font-size: 5.5rem;
  font-weight: bold;
  letter-spacing: normal;
  word-break: keep-all;
  margin-left: 3rem;
  line-height: 1.34;

  @media ${Device.tabletL} {
    font-size: 2.31rem;
    margin-left: 2.38rem;
  }
  @media ${Device.mobileL} {
    font-size: 1.81rem;
    margin-left: 0.81rem;
  }
`;

const ContentWrapper = styled.div`
  font-family: 'Noto Sans KR';
  width: 100%;

  display: flex;
  justify-content: flex-start;

  @media ${Device.tabletL} {
    margin-left: 5%;
    flex-direction: column;
  }
  @media ${Device.mobileL} {
    width: 90%;
  }
`;

const ContentTitleWrapper = styled.span`
  font-family: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;

  b {
    font-family: inherit;
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 3px;

    @media ${Device.tabletL} {
      font-size: 1.5rem;
    }
    @media ${Device.mobileL} {
      font-size: 1.25rem;
    }
  }

  span {
    font-family: inherit;
    font-size: 1rem;

    @media ${Device.tabletL} {
      font-size: 0.94rem;
    }
    @media ${Device.mobileL} {
      font-size: 0.75rem;
    }
  }
`;

const Content = styled.div`
  font-family: inherit;
  font-size: 0.94rem;
  line-height: 1.9;
  margin-top: 1.5rem;
  width: 30rem;
  word-break: keep-all;
  color: #000000;

  @media ${Device.mobileL} {
    width: 100%;
    font-size: 0.625rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;

  button {
    width: 11.25rem;
    height: 3.5rem;
    border-radius: 3.93rem;
    color: #ffffff;
    font-family: 'Opne Sans';
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;

    @media ${Device.tabletL} {
      width: 8.75rem;
      height: 2.72rem;
      font-size: 0.75rem;
    }
    @media ${Device.mobileL} {
      width: 7.5rem;
      height: 2.25rem;
      font-size: 0.69rem;
    }
  }
`;

const Button = styled.button<{ disable: boolean }>`
  background-color: ${props => (props.disable ? '#a2a2a2' : '#000000')};
  margin-right: 1.25rem;
`;

const Exaplain = styled.span`
  width: 13rem;
  text-align: center;
  font-family: 'Opne Sans';
  font-size: 0.875rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;

  @media ${Device.mobileL} {
    width: 7.5rem;
    font-size: 0.625rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
`;

const SponsorWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Opne Sans';
  padding-bottom: 2rem;
`;

const SponsorSeparator = styled.div`
  margin-left: 5%;
`;

const Sponsors = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 100%;
    max-width: fit-content;
  }
`;

const SponsorTitle = styled.div`
  font-family: inherit;
  font-size: 1.875rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  @media ${Device.tabletL} {
    font-size: 1.5rem;
  }
  @media ${Device.mobileL} {
    font-size: 1.125rem;
    margin-bottom: 2.31rem;
  }
`;

const LeftSeparator = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7.31rem;

  @media ${Device.mobileL} {
    margin-right: 0;
  }
`;

const RightSeparator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${Device.mobileL} {
    flex-direction: column-reverse;
  }
`;

const TimetableWrapper = styled.div`
  width: 100%;
  margin-top: 4.89rem;

  @media ${Device.mobileL} {
    margin-top: 2rem;
  }
`;

const TimetableBtnWrapper = styled.div`
  width: 100%;
  height: 3.73rem;

  @media ${Device.tabletL} {
    height: 2.71rem;
  }
  @media ${Device.mobileL} {
    height: 2.25rem;
  }
`;

const TimetableTitle = styled.p`
  font-size: 1.81rem;
  font-weight: 800;
  font-family: 'Open Sans';
  margin-top: 1.37rem;
  margin-bottom: 1.49rem;

  @media ${Device.tabletL} {
    margin-left: 5%;
  }
  @media ${Device.mobileL} {
    font-size: 1.25rem;
    margin-left: 5%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const TimetableBtn = styled.button<{ clicked: boolean }>`
  width: 50%;
  height: 100%;
  border: solid 1px #e8e8e8;
  background-color: ${({ clicked }) => (clicked ? '#000000' : '#ffffff')};
  font-size: 1.18rem;
  font-family: 'Open Sans';
  font-weight: bold;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#000000')};
  cursor: pointer;

  @media ${Device.mobileL} {
    font-size: 0.8125rem;
  }
`;

const Timetable = styled.table`
  width: 100%;
  font-size: 1.18rem;
  font-weight: bold;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    width: 100%;
    height: 3.96rem;
    border: solid 1px #e8e8e8;
    font-family: 'Open Sans';
    text-align: center;

    @media ${Device.tabletL} {
      height: 3.1rem;
    }
    @media ${Device.mobileL} {
      height: 2.25rem;
    }

    td {
      border: solid 1px #e8e8e8;
    }
  }

  @media ${Device.tabletL} {
    font-size: 1.06rem;
  }
  @media ${Device.mobileL} {
    font-size: 0.69rem;
  }
`;

const DateCol = styled.col`
  width: 35%;
`;

const ContentCol = styled.col`
  width: 65%;
`;

const OpenLink = styled.div`
  color: #291bfe;
  font-family: 'Noto Sans KR';
  font-size: 17px;

  cursor: pointer;

  margin-bottom: 1rem;

  @media ${Device.mobileL} {
    width: 7.5rem;
    font-size: 0.625rem;
    margin-bottom: 0.25rem;
    margin-left: 0.5rem;
  }
`;

const visitEndTime = moment([2019, 6, 23, 23, 59, 59]);
const joinEndTime = moment([2019, 6, 22, 23, 59, 59]);
const now = moment();

const HTMainComponent: React.FC<
  HTMainMethod & HTMainProps & RouteComponentProps
> = ({
  history,
  deem,
  deemStatus,
  errMessage,
  postObserver,
  accessToken,
  userType,
  postObserverStatus,
  resetStatus,
  getJudgement,
  getTheme,
  getThemeStatus,
  getJudgementStatus,
  themeUrl,
  judgementUrl,
}) => {
  const [rightTableToggle, setRightTableToggle] = React.useState<boolean>(
    false,
  );

  const visit = () =>
    window.confirm('참관 신청 하시겠습니까?')
      ? postObserver(accessToken)
      : alert('한세톤: 休 많은 관심 부탁드립니다.');

  const themeFunc = () =>
    now.isAfter(visitEndTime)
      ? getTheme(accessToken)
      : alert('주제는 수요일에 공개됩니다!');

  const judgementFunc = () =>
    now.isAfter(visitEndTime)
      ? getJudgement(accessToken)
      : alert('심사기준은 수요일에 공개됩니다!');

  useEffect(() => {
    if (postObserverStatus === 'success') {
      alert('신청되었습니다. 확정될 시 한빛 연락처로 연락드리겠습니다!');
    } else if (getThemeStatus === 'success') {
      window.open(themeUrl);
    } else if (getJudgementStatus === 'success') {
      window.open(judgementUrl);
    } else if (
      postObserverStatus === 'failure' ||
      getThemeStatus === 'failure' ||
      getJudgementStatus === 'failure'
    ) {
      alert(errMessage);
    }

    return () => {
      deem(false);
      resetStatus();
    };
  }, [postObserverStatus]);

  return (
    <>
      {deemStatus && <AcceptPage />}
      <Wrapper>
        <TitleWrapper>
          <TitleImg src={TitleMainImg} alt="Main Title" />
          <Title>
            오빠,
            <br />
            쉬면서 하자
          </Title>
        </TitleWrapper>
        <ContentWrapper>
          <LeftSeparator>
            <ContentTitleWrapper>
              <b>쉬어가는 한세톤 : 休</b>
              <span>Hanseithon : 休</span>
            </ContentTitleWrapper>
            <Content>
              <span>
                안녕하세요, 한세사이버보안고등학교 주관 " 한세톤 : 休 "의 신청
                페이지입니다. 한세톤의 참가부터 운영까지 모든 것이 현재
                페이지에서 이루어질 예정입니다. 마음이 잘 맞는 팀원들을 모집하여
                보다 멋진 작품을 선보여주세요. 이번 한세톤 : 休를 통하여
                반복되는 지루한 일상에서 탈피하여 에어배드에서 쉬다 가세요.
              </span>
              <p>참가 신청 : 18일 18시부터</p>
              <p>참가 신청 마감 시간 : 22일 오후 11시 59분까지</p>
            </Content>
          </LeftSeparator>
          <RightSeparator>
            <ButtonWrapper>
              <div>
                <OpenLink onClick={judgementFunc}>
                  심사 기준표 >
                </OpenLink>
                {userType === 'graduate' ? (
                  <Button
                    onClick={visit}
                    disable={now.isAfter(visitEndTime)}
                    disabled={now.isAfter(visitEndTime)}
                  >
                    {now.isAfter(visitEndTime) ? '신청 마감' : '참관신청 해臝'}
                  </Button>
                ) : (
                  <Button
                    onClick={() => deem(true)}
                    disable={now.isAfter(joinEndTime)}
                    disabled={now.isAfter(joinEndTime)}
                  >
                    {now.isAfter(joinEndTime) ? '신청 마감' : '참가신청 해臝'}
                  </Button>
                )}
              </div>
              <div>
                <OpenLink onClick={themeFunc}>
                  주제 공개 >
                </OpenLink>
                <Button
                  onClick={() => {
                    history.push('/hanseithon/current');
                  }}
                  disabled={now.isAfter(joinEndTime)}
                  disable={now.isAfter(joinEndTime)}
                >
                  {now.isAfter(joinEndTime) ? '참가 확인' : '참가현황 봐臝'}
                </Button>
              </div>
            </ButtonWrapper>
          </RightSeparator>
        </ContentWrapper>
        <TimetableWrapper>
          <TimetableBtnWrapper>
            <TimetableBtn
              clicked={!rightTableToggle}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setRightTableToggle(false);
              }}
            >
              7월 25일 (목)
            </TimetableBtn>
            <TimetableBtn
              clicked={rightTableToggle}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setRightTableToggle(true);
              }}
            >
              7월 26일 (금)
            </TimetableBtn>
          </TimetableBtnWrapper>
          <TimetableTitle>TIME TABLE</TimetableTitle>
          <Timetable>
            <colgroup>
              <DateCol />
              <ContentCol />
            </colgroup>
            {!rightTableToggle ? (
              <>
                <tr>
                  <td>16:30 ~ 17:00</td>
                  <td>참가자 입장 및 등록</td>
                </tr>
                <tr>
                  <td>17:00 ~ 17:30</td>
                  <td>키노트</td>
                </tr>
                <tr>
                  <td>17:30 ~ 18:00</td>
                  <td>자율 개발</td>
                </tr>
                <tr>
                  <td>18:00 ~ 19:00</td>
                  <td>저녁 식사</td>
                </tr>
                <tr>
                  <td>19:00 ~ 19:30</td>
                  <td>이벤트 타임</td>
                </tr>
                <tr>
                  <td>19:30 ~ 20:30</td>
                  <td>자율 개발</td>
                </tr>
                <tr>
                  <td>20:30 ~ 21:00</td>
                  <td>멘토단 오리엔테이션</td>
                </tr>
                <tr>
                  <td>21:00 ~ 23:00</td>
                  <td>순차 멘토링</td>
                </tr>
                <tr>
                  <td>23:00 ~ 24:00</td>
                  <td>야식</td>
                </tr>
                <tr>
                  <td>24:00 ~</td>
                  <td>자율 개발</td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td>07:30 ~ 08:00</td>
                  <td>아침 식사</td>
                </tr>
                <tr>
                  <td>08:00 ~ 10:00</td>
                  <td>자율 개발</td>
                </tr>
                <tr>
                  <td>10:00 ~ 10:30</td>
                  <td>이벤트 타임</td>
                </tr>
                <tr>
                  <td>10:30 ~ 12:00</td>
                  <td>자율 개발</td>
                </tr>
                <tr>
                  <td>12:00 ~ 13:00</td>
                  <td>점심 식사</td>
                </tr>
                <tr>
                  <td>13:00 ~ 13:30</td>
                  <td>이벤트 타임</td>
                </tr>
                <tr>
                  <td>13:30 ~ 14:30</td>
                  <td>자율 개발</td>
                </tr>
                <tr>
                  <td>14:30 ~ 15:00</td>
                  <td>파일 제출 및 발표 준비</td>
                </tr>
                <tr>
                  <td>15:00 ~ 18:00</td>
                  <td>발표 및 심사</td>
                </tr>
                <tr>
                  <td>18:00 ~ 18:30</td>
                  <td>시상</td>
                </tr>
              </>
            )}
          </Timetable>
        </TimetableWrapper>
      </Wrapper>
      <SponsorWrapper>
        <SponsorSeparator>
          <SponsorTitle>쉬어가는 스폰서</SponsorTitle>
          <Sponsors>
            <img src={logos} alt="" />
          </Sponsors>
        </SponsorSeparator>
      </SponsorWrapper>
    </>
  );
};

export default HTMainComponent;
