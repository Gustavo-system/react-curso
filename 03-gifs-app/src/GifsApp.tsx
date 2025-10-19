import { useState, useEffect } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./sheard/components/CustomHeader";
import { SearchBar } from "./sheard/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";


export function GifsApp() {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    useEffect(() => {
        console.log("useEffect ejecutado")
    })

    const handleSearch = async (query: string) => {
        // console.log({ "handleSearch": query })
        query.trim().toLowerCase()
        if (query.length == 0) return
        // console.log("paso la validacion del campo vacio")
        if (previousTerms.includes(query)) return
        // const currentTerms = previousTerms.slice(0, 7)
        // currentTerms.unshift(query)
        // setPreviousTerms(currentTerms)
        setPreviousTerms([query, ...previousTerms].slice(0, 7))

        // realizamos la peticion http
        const gifs = await getGifsByQuery(query);
        // console.log({ gifs })
        setGifs(gifs)
    }

    const handleTermClicked = (term: string) => {
        console.log({ "handleTermClicked": term })
    }

    return (
        <>
            {/* Header */}
            <CustomHeader
                titile="Buscador de Gifs"
                description="Busca y comparte el mejror gif"
            />

            {/* Search */}
            <SearchBar
                placeholder="Busca lo que quieras"
                onQuerySearch={(query) => handleSearch(query)}
            />

            {/* Busquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={(term) => handleTermClicked(term)}
            />

            {/* Gifs */}
            <GifList gifs={gifs} />

        </>
    )

}