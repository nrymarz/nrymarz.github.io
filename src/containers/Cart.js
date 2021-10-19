import { ListGroup, ListGroupItem } from "react-bootstrap"
import {useMemo} from 'react'
export default function Cart({cart}){
    const cartCount = useMemo(()=>{
        const map = {}
        cart.forEach(item=>{
            map[item.title] = (map[item.title] || 0) + 1
        })
        return map
    },[cart])

    const uniqueCart = useMemo(()=>{
        const map = {}
        const u = []
        cart.forEach(item =>{
            if(!map[item.title]) u.push(item)
            map[item.title] = true
        })
        return u
    },[cart])

    return(
        <>
            <h1 className="text-center my-3">Your Cart</h1>
            <ListGroup className="m-auto mt-3" style={{width:"700px"}}>
                {uniqueCart.map(item => 
                    <ListGroupItem className='d-flex'>
                        {item.title}
                        <span className="ms-auto"><b>${item.price}</b> x <b>{cartCount[item.title]}</b></span>
                    </ListGroupItem>)
                }
                <ListGroupItem variant="secondary" className="d-flex"><b>Total</b><b className="ms-auto">${cart.reduce((a,v)=>a + v.price,0).toFixed(2)}</b></ListGroupItem>
                <a href="/checkout" style={{textAlign:'right', marginTop:'5px',marginRight:'10px'}}>Checkout</a>
            </ListGroup>
        </>
    )
}