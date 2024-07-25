import styles from './HomePage.module.css'

import { NavLink } from 'react-router-dom'

import Card from './components/item-card'

export default function HomePage({ clickFunction, items }) {

    return (

        <div className={styles["home"]}>
            <div className={styles["title"]}>
                <h1>Welcome to the Outlet!</h1>
                <p>Where high fashion meets low prices</p>
            </div>
            <hr />
            <button className={styles['home-btn']}><NavLink to='shop'>SHOP NOW</NavLink></button>

        </div>

    )

}