import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {GiForkKnifeSpoon} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiForkKnifeSpoon style={{color: '#aa076b'}}/>
        <Logo to={"/"}>Bon Appétit</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 400;
  //font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
