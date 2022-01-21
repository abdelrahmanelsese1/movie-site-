

export const addMovie = (movieId)=>{
    return{
        type : "add to favourite",
        movieId,
    }
}
export const removeMovie = (movieId)=>{
    return{
        type : "remove from favourite",
        movieId,
    }
}