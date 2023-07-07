import './Header.css'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';
function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/'>
        <a className="navbar-brand" href="/">E-commerce</a>
      </Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to = '/'>
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </Link>
        
      </li>
      <li className="nav-item">
        <Link to = {!user && '/login'}>
        <a onClick={handleAuthentication} className="nav-link" href="/">{user ? 'Sign Out':'Sign In'}</a>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genres
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Genre 1</a>
          <a className="dropdown-item" href="/">Genre 2</a>
          <a className="dropdown-item" href="/">Genre 3</a>
          <a className="dropdown-item" href="/">Genre 4</a>
        </div>
      </li>
      <li className="nav-item">
        <Link to = '/checkout'>
          <a className="nav-link" href="/">Orders</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to = '/checkout'>
          <a className="nav-link" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>

        </Link>
        <span className="cart_count">{basket.length}</span>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>

  )
}

export default Header
