import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "./components/item-card"
import styles from './Shop.module.css'

export default function Shop( { clickFunction } ) {

    const [shopItems, setShopItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                json.forEach(item => {
                    const tmp = {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        img: item.image,
                        description: item.description
                    }
                    setShopItems(prevItems => [...prevItems, tmp]);
                    setIsLoading(false);
                })
            });

            return () => {
                shopItems;
            }

    }, []);

    return (

        <>
            {isLoading ? (<div className={styles["loading"]}>
                    <h3>Loading shop items...</h3>
                </div>) : (
                        <div className={styles["cards"]}>
                        {shopItems.length > 0 ? (
                            shopItems.map(item => (
                                <Card 
                                    key={item.id}  // Assuming item has an id property for the key
                                    itemProperties={item}
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