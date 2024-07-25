import { NavLink, Outlet } from "react-router-dom";
import styles from './root.module.css'
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

export default function Root( { cartitems } ) {

    return(

        <>
            <ul>
                <div className={styles['nav-links']}>
                    <NavLink
                        to='/'>
                            Home
                    </NavLink>
                    <NavLink
                        to='shop'>
                            Shop
                    </NavLink>
                </div>
                <NavLink to='checkout'>
                    <ShoppingCart 
                        cartitems={cartitems.length}/>
                </NavLink>
            </ul>
            <div>
                <Outlet />
            </div>        
        </>

    )

}