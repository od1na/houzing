import styled from 'styled-components';

const getType = (type) => {
  switch (type) {
    case 'secondary':
      return {
        border: '1px solid #e6e9ec',
        color: '#0d263b',
      };
    case 'primary':
      return {
        background: '#0061df',
        color: '#ffffff',
        border: 'none',
      };
    default:
      return {
        border: '1px solid #e6e9ec',
        color: '#ffffff',
      };
  }
};

const Container = styled.input`
  display: flex;
  height: ${({ height }) => height || '44px'};
  width: ${({ width }) => (width ? width : '100%')};
  border-radius: 2px;
  padding-left: ${({ pl }) => pl || '15px'};
  padding: ${({ pd }) => `${pd}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  border: 0px solid #e6e9ec;
  border-bottom: 2px solid #e6e9ec;
  outline: none;

  :focus {
    border-bottom: 2px solid #0061df;
  }
  /* ${({ type }) => getType(type)} */
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 30px;
`;

export { Container, Wrapper, Icon };
