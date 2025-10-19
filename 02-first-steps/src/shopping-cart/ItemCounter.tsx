import { useState } from "react"

import './itemCounter.css'

interface Props {
    name: string,
    quantity?: number
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity)

    const handleAdd = () => {
        console.log(`Agregar 1`)
        setCount(count + 1)
    }

    const handleSubtract = () => {
        console.log(`quitar 1`)
        if (count === 1) return;
        setCount(count - 1)
    }

    return (
        <>
            <section className="item-row">
                <span
                    style={{ color: count === 1 ? 'red' : 'black' }}
                    className="item-text"
                >
                    {name}
                </span>

                <button onClick={handleAdd}>+1</button>
                <span> {count} </span>
                <button onClick={handleSubtract}>-1</button>
            </section>
        </>
    )

}