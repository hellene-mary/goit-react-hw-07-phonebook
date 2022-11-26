import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 10px;
`;

export const ContactItem = styled.li`
  font-size: 26px;
  margin-top: 12px;
  display: flex;
  align-items: center;
  /* height: auto; */
`;

export const ContactIcon = styled.div`
  margin-right: 15px;
  border: 1px solid #787878;
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled.p`
  ::first-letter {
    color: ${p => p.rgb};
  }
  span {
    text-decoration: underline;
  }
`;

export const ContactDelete = styled.button`
  color: black;
  margin-right: 0;
  margin-left: auto;
  /* border: 1px solid #787878; */
  border: none;
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  svg {
    /* margin-right: 10px; */
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
  }
`;
