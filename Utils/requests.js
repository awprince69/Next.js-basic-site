/* eslint-disable import/no-anonymous-default-export */
const API_KEY= process.env.API_KEY;


export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/day?api_key=${API_KEY}`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:"Mystrey",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV:{
        title:"TV",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },

}