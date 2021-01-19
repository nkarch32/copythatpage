import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './Navbar';

function Navigation() {
    return(
        <div className="navbar sticky-top" expand="md">
            <Navbar>
                <NavbarBrand color="white" href="#">
                    <h2>Copy That! <i className="fa fa-pencil"></i></h2>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation;