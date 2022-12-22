import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2dccd3;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 22px;
  cursor: pointer;
  margin-right: 10px;
`;

const HomePageView = () => {
  return (
    <div>
      <h2 style={{ border: '4px solid #2dccd3', padding: '10px' }}>Final Project</h2>
      <Link to={'/employees'} >
        <StyledButton> All Employees </StyledButton>
      </Link>
      <Link to={'/tasks'} >
        <StyledButton> All Tasks </StyledButton>
      </Link>

    </div>
  );
}




export default HomePageView;