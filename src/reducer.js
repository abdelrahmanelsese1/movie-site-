const InitialState = {
    movies : [],
    count: 0,
}
const reducer=(state = InitialState , action)=>{
    switch(action.type){
        case "add to favourite":
            return {
                ...state,
                movies: [...state.movies ,action.movieId],
                count : state.count + 1
        }
        case "remove from favourite":
            return {
                ...state,
                movies: state.movies.filter((item)=> item !== action.movieId) ,
                count : state.count -1
            }  
        default: 
            return state
    }
}
export default reducer