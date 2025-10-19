import { useState, useEffect, type KeyboardEvent } from "react"

interface Props {
    placeholder: string,
    onQuerySearch: (query: string) => void
}

export function SearchBar({ placeholder, onQuerySearch }: Props) {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuerySearch(query)
        }, 700);
        // onQuerySearch(query)

        return () => {
            console.log("funcion de limpieza")
            clearTimeout(timeOutId)
        }

    }, [query, onQuerySearch])

    const handleSearch = () => {
        onQuerySearch(query) // se ejecuta la funcion que se envia desde el padre
        setQuery("") // limiamos el input
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )

}