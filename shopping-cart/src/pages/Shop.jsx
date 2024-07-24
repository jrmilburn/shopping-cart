import { useOutletContext } from "react-router-dom"

export default function Shop( { clickFunction } ) {

    return (

        <button onClick={clickFunction}>Click me!</button>

    )

}