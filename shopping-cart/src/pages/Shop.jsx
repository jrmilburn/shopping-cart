import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "./components/item-card"
import styles from './Shop.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function Shop( { clickFunction, items, isLoading } ) {

    return (

        <> 

            {isLoading ? (
                <div className={styles["loading"]}>
                    <h2>Loading...</h2>
                </div>
            ) : (
                <div className={styles["cards"]}>
                {items.length > 0 ? (
                    items.map(item => (
                        <Card 
                            key={uuidv4()}  // Assuming item has an id property for the key
                            itemProperties={item}
                            clickFunction={clickFunction}
                            isCheckout={false}
                        />
                    ))
                ) : (
                    null  // Or a fallback UI if desired
                )}
                </div>
            )}


            
        </>

    )

}