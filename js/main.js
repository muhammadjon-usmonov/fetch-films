const elFilmsForm = addElement(".films__form");
const elFilmsTemplate = addElement("#films-template").content;
const elFilmsList = addElement(".films__list");
const elFilmsGenres = addElement(".films__genres");
const elSelect = addElement(".films__select");
const elBtns = addElement(".btns");
const elBookmark = addElement(".films__bookmark");
const elNumber = addElement(".number");
const elSearchInput = addElement(".input-search");


const API_KEY = "6d06dce3";
       


fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=films`)
.then( (response)=>response.json())
.then(films =>



    films.Search.forEach(film =>{

        const filmsTemplate = elFilmsTemplate.cloneNode(true);

        filmsTemplate.querySelector(".films__img").src = film.Poster;
        filmsTemplate.querySelector(".films__title").textContent = film.Title;
        filmsTemplate.querySelector(".films__time").textContent = film.Year+("  year");
        filmsTemplate.querySelector(".films__type").textContent = film.Type;

        elFilmsList.appendChild(filmsTemplate);

        console.log(films);
    })
)


elFilmsForm.addEventListener("submit", (evt)=>{
    evt.preventDefault()

    // if(elSearchInput.value!=""){
    //     fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${elSearchInput.value}`)
    //     .then( (response)=>response.json())
    //     .then(films =>
    //         renderFilms(films, elFilmsList)
    //     )
    // }

})



function renderFilms(array, node){
    node.innerHTML = null;

    array.forEach(element => {
        var filmsTemplate = elFilmsTemplate.cloneNode(true)

        filmsTemplate.querySelector(".films__img").src = film.Poster;
        filmsTemplate.querySelector(".films__title").textContent = film.Title;
        filmsTemplate.querySelector(".films__text").textContent = film.Text;
        
        element.appendChild(filmsTemplate);  
    });
}

elFilmsForm.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    searchMovies(films.Title);

})
