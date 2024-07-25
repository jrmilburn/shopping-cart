import Card from "./components/item-card"
import { v4 as uuidv4 } from 'uuid'

export default function Checkout( {items} ) {

    console.log(items);

    return (

        <>
            <div className="checkout">
                {items.map(item =>( 
                    <Card 
                        key={uuidv4()}  // Assuming item has an id property for the key
                        itemProperties={item}
                        isCheckout={true}/>
                ))}
            </div>
        </>

    )

}