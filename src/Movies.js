import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {BsFillStarFill} from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./action";

const Movies = () => {
    const [Movies, setMovies] = useState([])
    const movies  = useSelector((state) => state.movies);
	const dispatch = useDispatch();
    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=62ffb746111b1206c6f9525436be498f`)
        .then((res)=>{
            setMovies(res.data.results)
        })
        .catch((err)=>{
        
        },[])
    })
    const addfav=(movieId)=>{
        dispatch(addMovie(movieId))
    }
     
    
    return(
        <>
        
        <div className="container" >
            <div className="row">
        
            {Movies.map((movie) => {
                return (
                    
                        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
                                <div className="card " style={{margin:"15px",backgroundColor:"#000",color:"#0d67ea"}}>
                                    <span className="badge btn card-img-overlay text-end" style={{paddingTop:"30px",color:"gold" ,fontSize:"30px",maxWidth:"50px" , maxHeight:"70px"}} onClick={()=>{addfav(movie)}} > <BsFillStarFill/> </span>
                                    <div className="services-img text-center py-4">
                                        <Link to={`/movie/${movie.id}`}>
                                            <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                                        </Link>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title ">{movie.original_title}</h5>
                                    </div>
                                </div>
                        </div>
                        )
            })}
            </div>
        </div>
            
        
        </>
    )
}
export default Movies