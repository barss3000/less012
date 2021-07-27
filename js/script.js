'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);