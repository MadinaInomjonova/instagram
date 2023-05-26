import styled from "styled-components";

const Logo = styled.img`
  height: 90px;
  width: auto;
  padding-left: 10px;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: ${(props) => (props.mbottom ? "40px" : "7px")};
  &:hover {
    background-color: lightgray;
    border-radius: 5px;
    transition: 0.3s all ease;
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export { Logo, Li, Span };
