import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
export default function Login({setUser}){
    const [userInfo,setUserInfo] = useState({name:'',password:''})

    const login = e =>{
        e.preventDefault()
        const user = Object.assign(userInfo,{cart:[]})
        sessionStorage.setItem('user',JSON.stringify(user))
        setUser(user)
    }
    
    return(
        <Container className='d-flex m-auto mt-3 flex-column justify-content-center'>
            <h1 className='text-center'>Log In</h1>
            <Form className='m-auto' onSubmit={login} style={{width:'300px'}}>
                <Form.Group>
                    <Form.Label><b>User Name:</b></Form.Label>
                    <Form.Control type="text" placeholder="Name" value={userInfo.name} onChange={e=>setUserInfo({ ...userInfo, name:e.target.value})}/>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Label><b>Password:</b></Form.Label>
                    <Form.Control type="password" placeholder='password' value={userInfo.password} onChange={e=>setUserInfo({ ...userInfo, password:e.target.value})}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-2">
                    Sign in
                </Button>
            </Form>
        </Container>
    )
}
