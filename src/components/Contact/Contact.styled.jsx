import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  border: 1px solid gray;
  border-radius: 5px;
  background: #74a4c2;
  box-shadow: 1px 1px 5px gray;
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export const ContactData = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonDelete = styled.button`
  border-radius: 4px;
  height: 35px;
  padding: 0 5px;
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
