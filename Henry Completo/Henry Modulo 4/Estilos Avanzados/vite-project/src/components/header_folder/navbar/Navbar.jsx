import styled from "styled-components";



const itemsNavBar= [
    "Home",
    "About",
    "Products",
    "Contact",
    ]


    const NavBarContainer = styled.div`
    width:400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

const ItemNavBar = styled.div`
font-size: 20px;
font-weight:bold;
cursor:pointer;
&:hover{
    color:${(props) => props.theme.colors.terciary};
}
`

function NavBar() {
  return (
    <NavBarContainer>
      {itemsNavBar.map((item,index) => {
        return < ItemNavBar key={index}>{item}</ItemNavBar>
      })}
    </NavBarContainer>      
  );
}
export default NavBar;