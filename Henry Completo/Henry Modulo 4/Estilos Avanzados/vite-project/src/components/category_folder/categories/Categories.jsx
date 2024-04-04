import styled from "styled-components";
import CategoryList from "../caregory_list/CategoryList";



const CategoryContainer = styled.div`

padding: 20px;
cursor: pointer;
border-radius:5px;
font-weight: bold;

`

function Catogories() {
  return (
   <CategoryContainer>
      <CategoryList/>
      </CategoryContainer>
    
  );
}

export default Catogories;