import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Checkout({setUser}){
    const makeOrder = () =>{
        setUser(prevUser =>{
            return {...prevUser, cart:[],ordered:true}
        })
        window.location.href="/products"
    }
    return(
        <Container className="mt-3" style={{borderRadius:5, width:"600px", background:'rgb(200,200,200)'}}> 
            <Form className="d-flex flex-column"> 
                <Row>
                    <Col className='m-2'>
                        <Form.Group>
                            <h2>Billing Address</h2>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Area Code</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Primary Phone</Form.Label>
                            <Form.Control type='text'></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col className='m-2'>
                        <Form.Group>
                            <h2>Shipping Address</h2>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type='text'></Form.Control>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type='text'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col classname="m-2">
                        <h2>Payment</h2>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text"></Form.Control>
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control type="text"></Form.Control>
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control type="date"></Form.Control>
                    </Col>
                </Row>
                <Row className="m-2">
                    <Button onClick={makeOrder} style={{height:"50px",width:"100px",marginLeft:'auto'}}>Order</Button>
                </Row>
            </Form>
        </Container>
    )
}