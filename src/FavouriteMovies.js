import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {useDispatch} from "react-redux";
import { removeMovie } from "./action";
import {BsFillStarFill} from 'react-icons/bs'

const FavMovie = (props) => {
    console.log(props)



    const favmovies = props.movies
    const dispatch = useDispatch();
    function delFav(movies){
        dispatch(removeMovie(movies))
    }
  return (
<>

<div className="container" >
            <div className="row">
        
            {favmovies.map((movie,index) => {
                return (
                    
                        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
                                <div className="card " style={{margin:"15px",backgroundColor:"#000",color:"#0d67ea"}}>
                                    <span className="badge btn card-img-overlay text-end" style={{paddingTop:"30px",color:"gold" ,fontSize:"30px",maxWidth:"50px" , maxHeight:"70px"}} onClick={()=>{delFav(movie)}} > <BsFillStarFill/> </span>
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
);




};

function mapStateToProps(state){
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(FavMovie);