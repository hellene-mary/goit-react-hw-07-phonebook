import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 40px;

  input {
    padding: 8px;
  }
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
`;

export const FormListItem = styled.li`
  margin-right: 10px;
  p {
    margin-bottom: 8px;
    font-size: 25px;
  }
`;

export const FormButton = styled.button`
  /* border-radius: 50%; */
  border-radius: 5px;
  height: 40px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: green;
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;

/* .form button svg {
  width: 25px;
  height: 25px;
} */
