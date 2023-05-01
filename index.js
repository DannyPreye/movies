const API_KEY = "c64217bf43660888b9007fe20443481b";
const url = (newQuery) =>
    `https://api.themoviedb.org/3/${newQuery}?api_key=${API_KEY}&language=en-US`;

const image_url = "https://image.tmdb.org/t/p/w500";
const movieDiv = document.getElementById("movie");
const menuIcon = document.getElementById("menu-icon");
const menuContent = document.getElementById("sm-menu-content");

console.log(menuIcon, menuContent, movie);

menuIcon.addEventListener("click", () => {
    if (menuContent.classList.contains("left-[-100%]")) {
        menuContent.classList.remove("left-[-100%]");
        menuContent.classList.add("left-0");
    } else {
        menuContent.classList.remove("left-0");
        menuContent.classList.add("left-[-100%]");
    }
});

const fetchMovie = async (url) => {
    const daniel = await fetch(url);
    const data = await daniel.json();

    const movies = data.results;

    console.log(movies);

    movies.forEach((movie) => {
        const movieCard = document.createElement("a");
        movieCard.href = `./movie.html?id=${movie.id}?media_type=${movie.media_type}`;
        movieCard.innerHTML = `
        <div class="rounded-[12px] shadow-md">
            <img src="${image_url}${movie.poster_path}" alt="${movie.title}" />
            <p class="font-bold text-gray-200 py-4 px-2">${
                movie.original_title || movie.name
            }</p>
        </div>
        `;

        movieDiv.appendChild(movieCard);
    });
};

fetchMovie(url("trending/all/day"));
