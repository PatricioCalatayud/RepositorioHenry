import styled from "styled-components";
import NavBar from "../navbar/Navbar";
import SearchBar from "../searchbar/Searchbar";
import Categories from "../../category_folder/categories/Categories";
import Profile from "../profile/Profile";
import { useState } from "react";

const HeaderContainer = styled.header`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.complementary};
  color: ${(props) => props.theme.colors.primary};
`

const ImageContainer = styled.div`
  width:80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const Image = styled.img`
  width: calc(100% - 20px);
  height:auto;
  margin-right: 10px;
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`

const MenuButton = styled.button`
  background:none;
  border:none;
  cursor:pointer;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <ImageContainer>
        <Image src="https://via.placeholder.com/150" alt="logo" />
        <Title>DropTech</Title>
      </ImageContainer>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuButton>
      <Container isOpen={isMenuOpen}>
        <NavBar/>
        <SearchBar/>
        <Categories/>
      </Container>
      <Profile/>
    </HeaderContainer>
  );
}

export default Header;