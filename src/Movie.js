import {useParams} from "react-router-dom";
import {useState, useEffect}  from  "react"
import axios from "axios";


const Mymovie = (props)=> {
    const params  = useParams()
    const [movieinfo, setMovieInfo] = useState ({})
    console.log(params)
    


    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=62ffb746111b1206c6f9525436be498f`)
        .then((res)=>{
            setMovieInfo (res.data);
        })
        .catch((err)=>{
        })
    })

    return(
        <>
        <div className="container" style={{paddingTop:"20px" ,color:"white"}}>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movieinfo.poster_path}`} alt=""/>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h1 style={{color:"#0d67ea"}}>{movieinfo.original_title}</h1>
                    <p>{movieinfo.tagline}</p>
                    <p>Status: {movieinfo.status}</p>
                    <p>Release Date: {movieinfo.release_date}</p>
                    <p>Rate: {movieinfo.vote_average}</p>
                    <p>Language: {movieinfo.original_language}</p>
                    <h3>Overview</h3>
                    <p>{movieinfo.overview}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Mymovie
