import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #74a4c2;
  box-shadow: 1px 1px 5px gray;
`;

export const FormLabel = styled.label`
  font-size: 28px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
`;

export const FormInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  margin: 0 auto;
  /* padding: 10px; */
  border-radius: 4px;
  padding: 5px 10px;
  background: #62869d;
  color: white;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-shadow: 5px 5px 10px black;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #44728f;
  }
`;
