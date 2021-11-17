// // Adding Movie to API. ---: movieName, rating , ,image  synopsis ,date.---

// let moviesApi = 'https://moviesmern.herokuapp.com/movies/saveMovie';

class Movie {
  // movieName;
  // image;
  // linkToMovie;
  // synopsis;
  // rating;
  constructor(movieName, image, linkToMovie, synopsis, rating) {
    this.movieName = movieName;
    this.image = image;
    this.linkToMovie = linkToMovie;
    this.synopsis = synopsis;
    this.rating = rating;
  }
}
// let theForm = document.getElementById("theForm");

// theForm.addEventListener("submit",(event)=>{
//   event.preventDefault();

//   let somMovie = new Movie(nameInput.value,imgInput.value,synoInput.value,linkToMovie.value,ratingInput.value);
    

//     let options = {
//       method: 'POST',
//       body: JSON.stringify({somMovie}),
//       headers: {'Content-Type':'application/json'},
//     };

//  let addMovie = async ()=>{
//       try {
//         return await fetch(moviesApi, options)
//         .then(respone=> {respone.json()})
//       } catch (error) {
//         return error;
//       }
//     }
//   addMovie().then(data => {
//     console.log(data);
//   });


// })
theForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let movie =  new Movie (movieName.value,moviesPicture.value,moviesLink.value,movieSynopsis.value,movieRating.value)

  let options = {
      method: 'POST',
      body: JSON.stringify({movie}),
      headers:{
       'Content-Type':'application/json'
      }
  }
  
  let postUrl = 'https://moviesmern.herokuapp.com/movies/saveMovie';                                                 
  
  let sendDataToApi = async () => {
      try{
          return await fetch(postUrl,options)
           .then(res => res.json())
      }
      catch(err){
          return err;
      }
  }

  sendDataToApi()
   .then(data => alert("Movie ADDED."));

})