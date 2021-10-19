import Product from '../components/product'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Products({products, addToCart}){
    return(
        <CardGroup className="mx-auto mt-2" style={{width:"95%"}}>
            {products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}
        </CardGroup>
    )
}