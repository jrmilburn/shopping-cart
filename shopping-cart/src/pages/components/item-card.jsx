import { Form } from "react-router-dom"
import styles from './item-card.module.css'
import { useState } from "react";

export default function Card({ itemProperties, clickFunction, isCheckout }) {
    const [numItems, setNumItems] = useState(1);

    function handleIncrease() {
        setNumItems(prevNumItems => prevNumItems + 1);
    }

    function handleDecrease() {
        setNumItems(prevNumItems => (prevNumItems > 0 ? prevNumItems - 1 : 0));
    }

    function handleInputChange(e) {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumItems(value);
        }
    }

    return (
        <>
            {isCheckout ? (
                <div className={styles["card-checkout"]}>
                    <h2>{itemProperties.title}</h2>
                    <div className={styles["img-div"]}><img src={itemProperties.img} alt="" /></div>
                    <p>${itemProperties.price}</p>
                    <p>Quantity: {itemProperties.amount}</p>
                </div>
            ) : (
                <div className={styles["card"]}>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            clickFunction({
                                title: itemProperties.title,
                                price: itemProperties.price,
                                img: itemProperties.img,
                                amount: numItems,
                            });
                        }}
                    >
                        <h2>{itemProperties.title}</h2>
                        <div className={styles["img-div"]}><img src={itemProperties.img} alt="" /></div>
                        <p>${itemProperties.price}</p>
                        <div className={styles["add-to-cart"]}>
                            <button type="submit">Add to Cart</button>
                            <p>{numItems}</p>
                            <div className={styles["plus-minus"]}>
                                <button type="button" onClick={handleIncrease}>+</button>
                                <button type="button" onClick={handleDecrease}>-</button>
                            </div>
                        </div>
                    </Form>
                </div>
            )}
        </>
    );
}