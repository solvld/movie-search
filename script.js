const apiKey = 'e333f3a7';

function SearchMovies() {
  const searchQuery = document.querySelector('#searchInput').value;

  if (searchQuery.trim() === '') {
    alert('Enter movie title')
    return
  }

  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (data.Response === 'True') {
        displayMovies(data.Search)
        console.log(data.Search)
      } else {
        alert('Movies not found');
      }
    })
    .catch(error => console.log('Error', error))
}

function displayMovies(movies) {
  const movieResultContainer = document.querySelector('.movieResults');
  movieResultContainer.innerHTML = '';

  movies.forEach(element => {
    const movieElement = document.createElement('div');
    movieElement.innerHTML = 
    `
        <div class="movieCard">
          <div id="movieImgBlock">
            <img src="${element.Poster}"/>
          </div>

          <h2>${element.Title}</h2>

          <p>${element.Year}</p>
        </div>
    `;
    movieResultContainer.appendChild(movieElement);
  });
}