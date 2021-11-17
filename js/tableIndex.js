let basicApi = `https://moviesmern.herokuapp.com`;

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

function printMovies(obj) {
  console.log(obj);
  for (const item of obj.data) {
    theTable.innerHTML += `<tr>
    <td>${item._id}</td>
    <td>${item.movieName}</td>
    <td><img class="tableImgs" src="${item.image}"></td>
    <td>${item.synopsis}</td>
    <td>${item.rating}</td>

    </tr>


    `;
  }
}
