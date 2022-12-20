import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ top }) => !top && "center"};
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;

const Img = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #e6e9ec;
  margin-top: 20px;
`;

const Message = styled.textarea`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  resize: none;
`;

const Checkbox = styled.input`
  width: 38px;
  height: 38px;
  background: #ffffff;
  border: 2px solid #e6e9ec;
  margin-right: 8px;
`;

export { Container, Wrapper, Img, Title, Desc, Input, Message, Checkbox };
