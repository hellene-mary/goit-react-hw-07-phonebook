import styled from 'styled-components';
import { getRandomHexColor } from './utils/getColorsFn';

export const Container = styled.div`
  border: 1px solid rgb(176 176 176);
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px 2px #787878bf;
  border-radius: 5px;
  h1 {
    font-size: 55px;
    text-align: center;
    padding-bottom: 15px;
    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }

  h2 {
    font-size: 35px;
    margin-top: 40px;
    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }
`;
