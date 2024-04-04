import styled from "styled-components";
import { categoriesToPreLoad } from "../../../utils/preLoadData"
import PropType from "prop-types";

const ProducCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
border: 1px solid #ccc;
border-radius: 10px;
background-color: ${({theme}) => theme.colors.secondary};
color:${({theme})=> theme.colors.primary};
margin: 10px;
width: 300px;
img{
    width: 100%;
    border-radius: 10px;
}
h2{
    margin: 10px 0;
}

h3{
    margin: 10px 0;

}
h4{
    margin: 10px 0;
}
`

function ProductCard ({ product }){
    return (
        <ProducCardContainer>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <h3>¨{categoriesToPreLoad[product.categoryId].name}</h3>
            <h4> Disponible:{product.stock}</h4>
        </ProducCardContainer>
    );
}


ProductCard.propTypes = {
    product:PropType.shape({
        name:PropType.string.isRequired,
        price:PropType.number.isRequired,
        description:PropType.string.isRequired,
        image:PropType.string.isRequired,
        categoryId:PropType.number.isRequired,
        stock:PropType.number.isRequired
    }).isRequired,
};


export default ProductCard

    