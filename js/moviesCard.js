let basicApi = `https://moviesmern.herokuapp.com`;
let IDapi="https://moviesmern.herokuapp.com/movies/movie";
async function JacobsApi(api) {
  try {
    return await fetch(api).then((response) => response.json());
  } catch (error) {
    return error;
  }
}
JacobsApi(`${basicApi}/movies/all`).then((res) => {
  printMovies(res);
});

function printMovies(arr) {
  console.log(arr);

  for (const obj of arr.data) {
    theMovies.innerHTML += `<div class="moviesCard">
    <h2 class ="moviesCardH2">${obj.movieName}</h2>
    <h4 class ="moviesCardRates">Rating:${obj.rating}</h4>
    <img src ="${obj.image}"/><br>
    <button class ="delBtn" onclick = "DeleteMovie('${obj._id}')" >Delete</button><br>
    <button class ="delBtn" onclick =  >Learn More!</button>

    </div>`;
  }
}


function sortByName(arr) {
  console.log(arr);
  arr.data.sort((a,b)=>{
    if (a.movieName != undefined && b.movieName != undefined){
      if(a.movieName.toLowerCase() < b.movieName.toLowerCase()) return -1;}})
  for (const obj of arr.data) {
    theMovies.innerHTML += `<div class="moviesCard">
    <h2 class ="moviesCardH2">${obj.movieName}</h2>
    <h4 class ="moviesCardRates">Rating:${obj.rating}</h4>
    <img src ="${obj.image}"/><br>
 <button class ="delBtn" onclick = "DeleteMovie('${obj._id}')" >Delete</button>
 <button class ="delBtn" onclick =  >Learn More!</button>
    
    </div>`;
  }
}

function sortByRating(arr) {
  console.log(arr);
  arr.data.sort((a,b)=>{return b.rating-a.rating})
  for (const obj of arr.data) {
    theMovies.innerHTML += `<div class="moviesCard">
    <h2 class ="moviesCardH2">${obj.movieName}</h2>
    <h4 class ="moviesCardRates">Rating:${obj.rating}</h4>
    <img src ="${obj.image}"/><br>
    <button class ="delBtn" onclick = "DeleteMovie('${obj._id}')" >Delete</button>
    <button class ="delBtn" onclick =  >Learn More!</button>

    
    </div>`;
  }
}
function sortByDate(arr) {
  console.log(arr);
  arr.data.sort((a,b)=>{return a.date-b.date})
  for (const obj of arr.data) {
    theMovies.innerHTML += `<div class="moviesCard">
    <h2 class ="moviesCardH2">${obj.movieName}</h2>
    <h4 class ="moviesCardRates">Rating:${obj.rating}</h4>
    <img src ="${obj.image}"/><br>
    <button class ="delBtn" onclick = "DeleteMovie('${obj._id}')" >Delete</button>
    <button class ="delBtn" onclick =  >Learn More!</button>

    
    </div>`;
  }
}


let optionsDelete ={
  method:"DELETE",
}
async function DeleteMovie (id){
try {
  return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`,optionsDelete).then(res=>{alert("Movie Has Been DELETED!")})
} catch (error) {
  
}
}



sortBtn.onclick = ()=>{

  switch (theSelector.value) {
    case "byName":
      theMovies.innerHTML=""
      JacobsApi(`${basicApi}/movies/all`).then((res) => {
        sortByName(res);
      });
      break;
  
    case "byRating":
      theMovies.innerHTML=""
      JacobsApi(`${basicApi}/movies/all`).then((res) => {
        sortByRating(res);
      })
      break;
    case "byDate":
      theMovies.innerHTML=""
      JacobsApi(`${basicApi}/movies/all`).then((res) => {
        sortByDate(res);
      });
      break;

  } 



}



async function getIdData (id){
  try {
    return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`,optionsDelete)
  } catch (error) {
    
  }
  }


