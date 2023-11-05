"use client"
import { useEffect, useState } from 'react'
// import axios from '@/lib/api'
import axios from 'axios'

const useGetMovies = () => {
    const [dataMovies, setDataMovies] = useState([])

    // useEffect (() => {
    //     axios.get('/discover/movie')
    //         .then ((res) => setDataMovies(res.data))
    //         .catch ((err) => console.log(err))
    // }, [])

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.themoviedb.org/3/discover/movie',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDlkNWI5MGIwNTM3ZmEwMDM1YzllZWRjYjMyNmI1NiIsInN1YiI6IjY1M2M4YzkyNTE5YmJiMDEzODMxZGU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dhOq_BDhG_qLIkVWVqdeAtMI-XjiiZ8D3fm5OhzNx6E'
  }
};

axios.request(config)
.then((response) => {
    setDataMovies(response.data);
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});



    return dataMovies
}

export {
    useGetMovies
}