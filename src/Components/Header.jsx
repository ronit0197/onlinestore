import React from 'react'
import { Container } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Header = ({ title, image }) => {
  return (
    <Container fluid className='header'>
      <div className="row">
        <div className="col-6">
          <h6 className='header-welcome'>Welcome to Urban Basket</h6>
          <h1>{title}</h1>
          <p>
            Shirts, Pants, Trousars, T-Shirts, Printed T-Shirts<br />
            Joggers, Full T-Shirts, Full Shirts, Half Shirts<br /> and many more...
          </p>
          <Link to="/categories" className='btn custom-btn'>Explore Categories <Icon.ArrowRight /></Link>
        </div>
        <div className="col-6">
          <img src={image} alt="Header_img" className='w-100' />
        </div>
      </div>
    </Container>
  )
}

export default Header