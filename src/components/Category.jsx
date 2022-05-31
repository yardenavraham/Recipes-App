import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks, GiSlicedBread } from 'react-icons/gi'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
    return (
        <List>
            <SLink to={'/genre/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/genre/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/genre/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/genre/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 2rem;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

&:hover {
      transform:scale(0.9);
      background: linear-gradient(35deg, #aa076b , #61045f);
  }





h4{
    color: white;
    font-size: 0.8rem;
}

svg{
    color:white;
    font-size: 1.5rem;
}

&.active{
    background: linear-gradient(35deg, #aa076b , #61045f);
    svg{
        color:white;
    }
    h4{
        color:white;
    }
}
`;



export default Category