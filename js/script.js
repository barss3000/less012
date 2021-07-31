'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!!!');
        } else {
            console.log('error!!!!');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
        // console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
        // console.log("Вы киноман");
    } else if(personalMovieDB.count >= 10 || personalMovieDB.count <30) {
        alert("Вы классический зритель");
        // console.log("Вы классический зритель");
    } else {
        alert("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    // if (personalMovieDB.privat == false) {
    //     console.log(personalMovieDB);
    //     alert('Базу можно посмотреть в Console')
    // } else {
    //     alert('Частная база');
    // }
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
// showMyDB()

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

        if (genre != null && genre != '' && genre.length <= 15) {
            console.log('done!!!');
        } else {
            console.log('error!!!!');
            i--;
        }
    }
}

writeYourGenres()