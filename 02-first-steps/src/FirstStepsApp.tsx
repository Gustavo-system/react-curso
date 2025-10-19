import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: "Producto 1", quantity: 1 },
    { productName: "Producto 2", quantity: 2 },
    { productName: "Producto 3", quantity: 3 },
    { productName: "Producto 4", quantity: 3 },
    { productName: "Producto 5", quantity: 3 },
    { productName: "Producto 6", quantity: 3 },
]


export function FirstStepApp() {

    return (
        <>
            <h1>Carrito de compras</h1>
            {/* <p>Todo chiquito todo panzon</p> */}

            {/* <MyAwesomeApp /> */}

            {/* <ItemCounter productName="Nintendo Switch" quantity={10} />
            <ItemCounter productName="Play 6" quantity={5} />
            <ItemCounter productName="Xbox" quantity={0} /> */}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }

        </>
    )

}