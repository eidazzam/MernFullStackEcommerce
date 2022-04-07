import React, { Fragment } from 'react'
import {Route, Link} from 'react-router-dom'
import Search from './Search'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const { cartItems } = useSelector(state => state.cart || {})

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/606/924/original/icon-shop-online-business-icon-flat-design-vector.jpg" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className='input-group'>
                        <input type="text" id="search_field"
                            className='form-control'
                            placeholder='Enter Product Name ...'
                        />
                        <div className='input-group-append'>
                            <button id="search_btn" className='btn'>
                                <i className='fa fa-search' aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                    <Link to="/login" className='btn' id="login_btn" >Login</Link>
                    <span id='cart' className='ml-3'>Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </div>
            </nav>

        </Fragment>
    )
}

export default Header