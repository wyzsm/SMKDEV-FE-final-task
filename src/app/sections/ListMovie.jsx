"use client"
import { useGetMovies } from "@/hooks/useMovies"

export default function ListMovie() {
    const data = useGetMovies()
    console.log(data);
    return(
        <>
        
        </>
    )
}