import { useContext } from "react";
import { UserContext } from "providers/UserProvider";
import Box from "components/atoms/Box/Box";
import Button from "components/atoms/Button/Button";
import { WelcomeUser } from "utils/utils";
import { ButtonPanel, Content, HighlightedText, LeftSide, RightSide, Wrapper } from "./Login.style";
import Title from "components/atoms/Title/Title";
import { handlerCurrentUser, getUserById } from "utils/utils";

const Login = () => {
  const [user, setUser, users] = useContext(UserContext);

  const logIn = () => {
    setUser(true);
    localStorage.setItem("loggedIn", "true");
  };

  return (
    <Wrapper>
      <LeftSide>
        <Title color="background" margin="0px 10px 5px">
          Journal
        </Title>
        <Box
          width="clamp(300px,100%,80%)"
          backgroundColor="rgba(255,255,255,0.4)"
          margin="auto auto 10px"
          border="none"
        >
          <h3>Attention!</h3>
          <p>It is a dummy login panel to the University or school system intended for teachers and students</p>
          <p>To log in, choose one of the 3 accounts prepared for you! Then press the "Sign In" button</p>
        </Box>
      </LeftSide>
      <RightSide>
        <HighlightedText> Welcome in E-dziennik, Sign In!</HighlightedText>
        <Box width="clamp(300px,100%,40%)">
          <Content>
            <div>
              <HighlightedText>
                <WelcomeUser level={user.level} />
              </HighlightedText>
            </div>
            <ButtonPanel>
              <Button disabled onClick={() => {}}>
                Admin
              </Button>
              <Button
                onClick={() => {
                  handlerCurrentUser(getUserById(users, "0"), setUser);
                }}
              >
                Teacher
              </Button>
              <Button
                onClick={() => {
                  handlerCurrentUser(getUserById(users, "1"), setUser);
                }}
              >
                Student
              </Button>
            </ButtonPanel>
          </Content>
          <Button onClick={logIn}>Sign In</Button>
        </Box>
      </RightSide>
    </Wrapper>
  );
};

export default Login;
