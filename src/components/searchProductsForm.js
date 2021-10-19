import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function SearchProductsForm({query,setQuery}){
    const searchProduct = (e)=>{
        window.location.href = "http://localhost:3000/products"
    }
    return(
        <Form className='my-1' style={{width:"100%"}} onSubmit={searchProduct}>
            <Form.Group as={Row} className="g-0">
                <Col>
                    <Form.Control 
                        type='text' 
                        placeholder="Search Products By Title" 
                        value={query} 
                        onChange={e=>setQuery(e.target.value)}
                    >
                    </Form.Control>
                </Col>

                <Col style={{maxWidth:'100px'}}>
                    <Button className="w-100" onClick={searchProduct}>Search</Button>
                </Col>

            </Form.Group>
        </Form>
    )
}