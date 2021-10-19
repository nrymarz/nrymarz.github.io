import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from './containers/Login'
import Container from 'react-bootstrap/Container'
import Products from './containers/Products'
import Cart from './containers/Cart'
import { Route, Switch,Redirect } from 'react-router-dom';
import {useState, useEffect} from 'react'
import SearchProductsForm from './components/searchProductsForm';
import Checkout from './containers/Checkout'
import Alert from 'react-bootstrap/Alert'

function App() {
  const [products,setProducts] = useState([])
  const [results,setResults] = useState(products)
  const [query,setQuery] = useState('')
  const [user,setUser] = useState({name:'',password:'',cart:[]})
  const [loggedIn,setLoggedIn] = useState(false)

  const addToCart = (item,quantity) =>{
    user.ordered = false
    const newArr = new Array(parseInt(quantity)).fill(item)
    console.log(newArr)
    setUser({...user,cart: user.cart.concat(newArr)})
  }

  useEffect(()=>{
    const userInfo = sessionStorage.getItem('user')
    if(userInfo){
      setUser(JSON.parse(userInfo))
    }
  },[])

  useEffect(()=>{
    const info = JSON.stringify(user)
    sessionStorage.setItem('user',info)
    if(user.name.length > 2) setLoggedIn(true)
  },[user])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>setProducts(json))
  },[])

  useEffect(()=>{
    setResults(products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())))
  },[query,products])

  return (
    <main>
      <Navbar bg='dark' variant='dark' className="p-2 pb-2">
        <Navbar.Brand className="mx-3">Nathan's Online Shop</Navbar.Brand>
        <Container fluid className='w-75'>
          <SearchProductsForm query={query} setQuery={setQuery}/>
        </Container>
        <Nav className="mx-3 justify-content-around" style={{width:"275px"}}>
          {loggedIn ?
            <Navbar.Text>Hello, <i>{user.name}</i></Navbar.Text> :
            <Nav.Link href="/login">Log In</Nav.Link>
          }
          <Nav.Link href='/products'>Products</Nav.Link>
          <Nav.Link href="/cart">Cart{user.cart.length > 0 ? `(${user.cart.length})` : null }</Nav.Link>
        </Nav>
      </Navbar>

      <Alert show={user.ordered} variant='success' className='text-center m-2'>
        <Alert.Heading>Order Successful</Alert.Heading>
      </Alert>

      <Switch>
        <Route exact path='/'>
          <Redirect to="/products" />
        </Route>

        <Route path="/products">
          <Products products={results} addToCart={addToCart} />
        </Route>

        <Route path="/cart" >
          <Cart cart={user.cart} />
        </Route>

        <Route path="/checkout">
          <Checkout setUser={setUser}/>
        </Route>

        <Route path='/login' >
          {loggedIn ? <Redirect to="/products"/> : <Login setUser={setUser} />}
        </Route>
      </Switch>

    </main>
  );
}

export default App;
