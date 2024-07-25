import { Form } from "react-router-dom"
import styles from './item-card.module.css'
import { useState } from "react";

export default function Card( {itemProperties} ) {

    const [numItems, setNumItems] = useState(1);

    function handleIncrease() {

        setNumItems(numItems + 1);

    }

    function handleDecrease() {

        if(numItems > 0) {
            setNumItems(numItems - 1);
        }

        return
    }

    return (
        <div className={styles["card"]}>
            <Form>
                <h2>{itemProperties.title}</h2>
                <div className={styles["img-div"]}><img src={itemProperties.img} alt="" /></div>
                <p>${itemProperties.price}</p>
                <div className={styles["add-to-cart"]}>
                    <button type="submit">Add to Cart</button>
                    <input type="text" placeholder="1" value={numItems} />
                    <div className={styles["plus-minus"]}>
                        <button onClick={handleIncrease}>+</button>
                        <button onClick={handleDecrease}>-</button>
                    </div>
                </div>
                
            </Form>
        </div>
    )

}