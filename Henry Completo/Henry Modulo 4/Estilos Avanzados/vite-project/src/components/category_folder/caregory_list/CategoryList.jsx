import styled from "styled-components";
import { categoriesToPreLoad } from "../../../utils/preLoadData";
import Category from "../category/Caterogy"

const CategoryListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
gap: 10px;
`

function CategoryList() {
  return (
   <CategoryListContainer>
{categoriesToPreLoad.map((category,index) => {
        return <Category key={index} category={category}/>
      })
}
    </CategoryListContainer>
  );
}

export default CategoryList;