import {
  BookmarkBorderOutlined,
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendOutlined,
} from "@mui/icons-material";
import {
  Flex,
  Span,
  Container,
  Content,
  Input,
  SendContent,
  Wrapper,
  Button,
} from "./home-styled";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import "./home.css";

const Home = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random * 5000));
  }, []);

  return (
    <Container>
      <Wrapper>
        <div>
          <Content>
            <Flex>
              <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
              />
              <p className="username">username</p>
            </Flex>
            <div className="content__img">
              <img src="https://picsum.photos/200/300" alt="content image" />
            </div>

            <div className="content__info">
              <Flex between="space-between">
                <div>
                  <i>
                    <FavoriteBorderOutlined />
                  </i>
                  <i>
                    <ModeCommentOutlined />
                  </i>
                  <i>
                    <SendOutlined />
                  </i>
                </div>
                <div>
                  <BookmarkBorderOutlined />
                </div>
              </Flex>

              <p>
                <Span>1,758</Span> likes
              </p>
              <p>
                <Span>username</Span> description
              </p>
              <Input type="text" placeholder="Add a comment..." />
            </div>
          </Content>

          <Content>
            <Flex>
              <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
              />
              <p className="username">username</p>
            </Flex>
            <div className="content__img">
              <img src="https://picsum.photos/200/300" alt="content image" />
            </div>

            <div className="content__info">
              <Flex between="space-between">
                <div>
                  <i>
                    <FavoriteBorderOutlined />
                  </i>
                  <i>
                    <ModeCommentOutlined />
                  </i>
                  <i>
                    <SendOutlined />
                  </i>
                </div>
                <div>
                  <i>
                    <BookmarkBorderOutlined />
                  </i>
                </div>
              </Flex>

              <p>
                <Span>1,758</Span> likes
              </p>
              <p>
                <Span>username</Span> description
              </p>
              <Input type="text" placeholder="Add a comment..." />
            </div>
          </Content>
        </div>

        <div className="add__content">
          <Input className="input" type="text" placeholder="Enter image URL" />
          <SendContent>
            <Input type="text" placeholder="Description..." />
            <Button>
              <SendOutlined className="send__icon" />
            </Button>
          </SendContent>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Home;
