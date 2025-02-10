// script.js

// Sample movie data for demonstration purposes
const movieDataPool = [
    { 
        title: 'ផែនការកម្ទេចសុខនខពិសោធន៍', 
        imageUrl: 'https://image.tmdb.org/t/p/w300/o4z5rtTS2jZgL1OaTLV0sxIyVxO.jpg', 
        link: `/movie/${encodeURIComponent('ផែនការកម្ទេចសុខនខពិសោធន៍')}.html` 
    },
    { 
        title: 'សោកនាដកម្មលើយន្តហោះ', 
        imageUrl: 'https://image.tmdb.org/t/p/original/zHoEGiZ8webTnaPlNB7DmxAJ14B.jpg', 
        link: `/movie/${encodeURIComponent('សោកនា')}.html` 
    },
    { 
        title: 'ភ្លើងស្នេហ៍ខុសជំនាន់', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcwIZmaWbYLZw6jH5GIdbYU45r1APdyb2lg&s', 
        link: `/movie/${encodeURIComponent('ភ្លើងស្នេហ៍ខុសជំនាន់')}.html` 
    },
    { 
        title: 'Memories of the Alhambra', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BODJhZTE2ZmMtZDdjMi00NTZlLWI1ZWYtNWY3NDhhYjc1NTU5XkEyXkFqcGc@._V1_QL75_UX582_.jpg', 
        link: `/movie/${encodeURIComponent('Memories')}.html` 
    },
    { 
        title: 'Dominion of Darkness', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDhlYjhkNmYtYzIwZS00NDBlLTgwNmQtYzVkY2U0MDI2ZGFiXkEyXkFqcGc@._V1_QL75_UX796.5_.jpg', 
        link: `/movie/${encodeURIComponent('Dominion')}.html` 
    },
    { 
        title: 'មហន្តរាយធ្លាក់យន្តហោះ', 
        imageUrl: 'https://image.tmdb.org/t/p/w300/sgz16oJ5sKUGcwy96OjSrujqmuI.jpg', 
        link: `/movie/${encodeURIComponent('មហន្តរាយធ្លាក់យន្តហោះ')}.html` 
    },
    { 
        title: 'Den of Thieves 2', 
        imageUrl: 'https://i.ytimg.com/vi/rzCNYieVIQU/maxresdefault.jpg', 
        link: `/movie/${encodeURIComponent('DenofThieves')}.html` 
    },
    { 
        title: 'The Witch Part 2', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfok9qbKBq0Pu2T5uwktPQgvod2TFOAir6fg&s', 
        link: `/movie/${encodeURIComponent('TheWitch')}.html` 
    },
    { 
        title: 'LITTLE FOREST 2020', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y6C2lrUZOrhY3AEKbjqP0fhfqxWGAmDIlQ&s', 
        link: `/movie/${encodeURIComponent('LITTLEFOREST')}.html` 
    },
    { 
        title: 'Operation Undead', 
        imageUrl: 'https://image.tmdb.org/t/p/original/elxYvqymNurnpUJmlEgoDGogXwq.jpg', 
        link: `/movie/${encodeURIComponent('កោះទាហានខ្មោចឆៅ')}.html` 
    },
    { 
        title: 'Push', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk0MjI0ODAyMV5BMl5BanBnXkFtZTcwOTU0ODIzMw@@._V1_QL75_UX492_.jpg', 
        link: `/movie/${encodeURIComponent('Push')}.html` 
    },
    { 
        title: 'បងប្អូនសង្ហាកំពូលស៊យ', 
        imageUrl: 'https://image.tmdb.org/t/p/original/2AxzcOOVnRB07iHbxXSnq4zqOD6.jpg', 
        link: `/movie/${encodeURIComponent('បងប្អូនសង្ហាកំពូលស៊យ')}.html` 
    },
    { 
        title: 'កូនទានាំស្នេហ៍', 
        imageUrl: 'https://image.tmdb.org/t/p/original/rbYJTwO4lufOxsHwUDQ7YNwHpOA.jpg', 
        link: `/movie/${encodeURIComponent('កូនទានាំស្នេហ៍')}.html` 
    },
    { 
        title: 'សង្គ្រោះចំណាប់ខ្មាំងលើយន្តហោះ', 
        imageUrl: 'https://image.tmdb.org/t/p/original/f2NlgtD6PkW1jWdZ60saRVeWFSV.jpg', 
        link: `/movie/${encodeURIComponent('សង្គ្រោះចំណាប់ខ្មាំងលើយន្តហោះ')}.html` // ✅ Fixed Syntax Error
    },
    { 
        title: 'Who Am I?', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY6yj5FVaThwGMNRnFDl1rh22r_nrzmIsbA&s', 
        link: `/movie/${encodeURIComponent('WhoAmI')}.html` 
    },
    { 
        title: 'Nothing Serious', 
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGQ0ZWRmMDEtYWQyZC00NWE4LTgwNzItZmQxZWU4ZTMxNDA4XkEyXkFqcGc@._V1_.jpg', 
        link: `/movie/${encodeURIComponent('NothingSerious')}.html` 
    }
  
];

console.log(movieDataPool);



// Function to fetch a random set of movies
function getRandomMovieSet(num) {
    const uniqueMovies = new Set();
    
    while (uniqueMovies.size < num && uniqueMovies.size < movieDataPool.length) {
        const randomIndex = Math.floor(Math.random() * movieDataPool.length);
        uniqueMovies.add(movieDataPool[randomIndex]);
    }

    return Array.from(uniqueMovies);
}


// Function to create movie cards dynamically
function createMovieCards() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear existing content

    const randomMovies = getRandomMovieSet(15); // Get a random set of 5 movies

    randomMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
 
        const movieImage = document.createElement('div');
        movieImage.classList.add('movie-image');
        movieImage.onclick = () => window.location.href = movie.link;

        const img = document.createElement('img');
        img.src = movie.imageUrl;
        img.alt = 'Movie Poster';
        movieImage.appendChild(img);

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        movieContainer.appendChild(movieImage);
        movieContainer.appendChild(movieTitle);
        movieCard.appendChild(movieContainer);
        movieGrid.appendChild(movieCard);
    });
}

// Call the function to create movie cards when the page loads
document.addEventListener('DOMContentLoaded', createMovieCards);

// Auto-scroll functionality
const movieGrid = document.getElementById('movieGrid');
const scrollInterval = 3000;  // Set the time interval for auto-scroll (3 seconds)
let scrollIndex = 0;
const cardWidth = document.querySelector('.movie-card').offsetWidth + 20; // Width of a single movie card + gap

function autoScroll() {
    scrollIndex++;
    if (scrollIndex >= movieGrid.children.length) {
        scrollIndex = 0; // Reset to the first card when the last one is reached
        createMovieCards(); // Generate a new set of random movies
    }
    movieGrid.style.transform = `translateX(-${scrollIndex * cardWidth}px)`; // Scroll by the width of one card
}

// Set the auto-scroll interval
setInterval(autoScroll, scrollInterval);
