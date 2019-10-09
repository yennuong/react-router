import React, { Component } from 'react';
import { Route,NavLink} from "react-router-dom";

const menus = [
    {
        name: 'Trang Chu',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'San pham',
        to: '/products',
        exact: false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact})=>{
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    <NavLink to={to} className="my-link"> {label} </NavLink>
                </li>
            )
        }}/>
    )
}

class Menu extends Component {


    render() {

        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
    showMenus = (menus) =>{
        let result = '';
        if (menus.length > 0){
            result = menus.map((menu,index) => {
                return (
                    <MenuLink
                        key ={index}
                        to={menu.to}
                        label={menu.name}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;
