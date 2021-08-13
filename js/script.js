'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;    // если выражение true
        } else {
            personalMovieDB.privat = true;    // если выражение false
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i < 4; i++) {
        //     const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //     personalMovieDB.genres[i - 1] = genre;

        //     if (genre != null && genre != '' && genre.length <= 15) {
        //         console.log('done!!!');
        //     } else {
        //         console.log('error!!!!');
        //         i--;
        //     }
        // }
            // второй способ
        for (let i = 1; i <2; i++) {
            let genres = prompt(`Введите ваши жанры через запятую (,)`).toLowerCase();

            if (genres === null || genres === '') {
                console.log('error!!!!');
                i--;
            } else {
                console.log('done!!!');
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};















