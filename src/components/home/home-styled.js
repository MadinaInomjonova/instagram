import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
`;

const Container = styled.div`
  flex: 0.65;
  margin: 0 auto;
  max-width: 1150px;
  padding: 50px;
`;

const Content = styled.div`
  height: 600px;
  width: 400px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 30px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: ${(props) => props.between};
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  height: 40px;
`;

const SendContent = styled.div`
  margin-top: 10px;
  display: flex;
  align-item: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;
export { Wrapper, Container, Flex, Span, Input, Content, SendContent, Button };
