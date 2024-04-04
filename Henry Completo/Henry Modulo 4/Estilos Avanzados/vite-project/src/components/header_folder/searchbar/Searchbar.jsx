
import styled from "styled-components";

const Input=styled.input`
width: 100%; 
padding: 0.5rem; 
border-radius: 0.5rem; 
border: 1px solid ${(props) => props.theme.colors.border};
font-size: 1rem;
outline: none;
`

const ButtonSearch=styled.button`
background-color:${(props) => props.theme.colors.primary};
  padding: 0.5rem;
   border: none; 
   border-radius: 0.5rem; cursor: pointer; 
   font-size: 1rem; 
   margin-left: 0.5rem;
   outline: none; 
   cursor: pointer;
   
   &:hover{
    background-color:${(props) => props.theme.colors.terciary};
  }
   `
const SearchBarContainer=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
padding: 10px;
width:300px;
`



function Searchbar() {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Search" />
      <ButtonSearch>Search</ButtonSearch>   
    </SearchBarContainer>
  );
}

export default Searchbar;