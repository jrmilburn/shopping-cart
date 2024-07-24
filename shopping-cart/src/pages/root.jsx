import { NavLink, Outlet } from "react-router-dom";
import styles from './root.module.css'
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

export default function Root( { shoppingitems } ) {

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
                <NavLink>
                    <ShoppingCart 
                        shoppingitems={shoppingitems}/>
                </NavLink>
            </ul>
            <div>
                <Outlet />
            </div>        
        </>

    )

}