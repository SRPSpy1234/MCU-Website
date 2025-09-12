document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const searchResults = document.getElementById('search-results');

    // Helper to highlight and scroll to section
    function highlightSection(hash) {
        // Remove previous highlights
        document.querySelectorAll('.highlighted-section').forEach(el => {
            el.classList.remove('highlighted-section');
        });

        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.classList.add('highlighted-section');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // Listen for hash changes (for direct navigation)
    window.addEventListener('hashchange', () => {
        highlightSection(window.location.hash);
    });

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query) {
            // Expanded data for search functionality
            const data = [
                // Characters
                { name: 'Iron Man', link: '/pages/characters.html#iron-man' },
                { name: 'Captain America', link: '/pages/characters.html#captain-america' },
                { name: 'Thor', link: '/pages/characters.html#thor' },
                { name: 'Black Widow', link: '/pages/characters.html#black-widow' },
                { name: 'Spider-Man', link: '/pages/characters.html#spider-man' },
                { name: 'Doctor Strange', link: '/pages/characters.html#doctor-strange' },
                { name: 'Hulk', link: '/pages/characters.html#hulk' },
                { name: 'Hawkeye', link: '/pages/characters.html#hawkeye' },
                { name: 'Scarlet Witch', link: '/pages/characters.html#scarlet-witch' },
                { name: 'Vision', link: '/pages/characters.html#vision' },
                { name: 'Black Panther', link: '/pages/characters.html#black-panther' },
                { name: 'Okoye', link: '/pages/characters.html#okoye' },
                { name: 'Shuri', link: '/pages/characters.html#shuri' },
                { name: 'Falcon', link: '/pages/characters.html#falcon' },
                { name: 'Winter Soldier', link: '/pages/characters.html#winter-soldier' },
                { name: 'Loki', link: '/pages/characters.html#loki' },
                { name: 'Ant-Man', link: '/pages/characters.html#ant-man' },
                { name: 'Wasp', link: '/pages/characters.html#wasp' },
                { name: 'Captain Marvel', link: '/pages/characters.html#captain-marvel' },
                { name: 'Nick Fury', link: '/pages/characters.html#nick-fury' },
                { name: 'Star-Lord', link: '/pages/characters.html#star-lord' },
                { name: 'Gamora', link: '/pages/characters.html#gamora' },
                { name: 'Drax', link: '/pages/characters.html#drax' },
                { name: 'Rocket', link: '/pages/characters.html#rocket' },
                { name: 'Groot', link: '/pages/characters.html#groot' },
                { name: 'Mantis', link: '/pages/characters.html#mantis' },
                { name: 'Nebula', link: '/pages/characters.html#nebula' },
                { name: 'Yondu', link: '/pages/characters.html#yondu' },
                { name: 'Wong', link: '/pages/characters.html#wong' },
                { name: 'Valkyrie', link: '/pages/characters.html#valkyrie' },
                { name: 'Hela', link: '/pages/characters.html#hela' },
                { name: 'Thanos', link: '/pages/characters.html#thanos' },
                // Movies
                { name: 'Iron Man (2008)', link: '/pages/movies.html#iron-man' },
                { name: 'Captain America: The First Avenger (2011)', link: '/pages/movies.html#captain-america' },
                { name: 'Thor (2011)', link: '/pages/movies.html#thor' },
                { name: 'The Avengers (2012)', link: '/pages/movies.html#avengers' },
                { name: 'Guardians of the Galaxy (2014)', link: '/pages/movies.html#guardians' },
                { name: 'Black Widow (2021)', link: '/pages/movies.html#black-widow' },
                { name: 'Spider-Man: Homecoming (2017)', link: '/pages/movies.html#spider-man' },
                { name: 'Doctor Strange (2016)', link: '/pages/movies.html#doctor-strange' },
                { name: 'Black Panther (2018)', link: '/pages/movies.html#black-panther' },
                { name: 'Ant-Man (2015)', link: '/pages/movies.html#ant-man' },
                { name: 'Captain Marvel (2019)', link: '/pages/movies.html#captain-marvel' },
                { name: 'Avengers: Infinity War (2018)', link: '/pages/movies.html#infinity-war' },
                { name: 'Avengers: Endgame (2019)', link: '/pages/movies.html#endgame' },
                { name: 'Doctor Strange in the Multiverse of Madness (2022)', link: '/pages/movies.html#multiverse' },
                // Events
                { name: 'Steve Rogers becomes Captain America', link: '/pages/timeline.html#steve-rogers' },
                { name: 'Tony Stark becomes Iron Man', link: '/pages/timeline.html#tony-stark' },
                { name: 'The Avengers assemble', link: '/pages/timeline.html#avengers-assemble' },
                { name: 'Thanos snaps half of all life', link: '/pages/timeline.html#thanos-snap' },
                { name: 'Avengers defeat Thanos', link: '/pages/timeline.html#avengers-defeat-thanos' },
                { name: 'Wanda Maximoff becomes Scarlet Witch', link: '/pages/timeline.html#wanda-scarlet-witch' },
                { name: 'Sam Wilson becomes Captain America', link: '/pages/timeline.html#sam-wilson' },
                { name: 'Multiverse begins to unravel', link: '/pages/timeline.html#multiverse' },
                // Add more as needed
            ];

            const filteredData = data.filter(item => item.name.toLowerCase().includes(query));

            filteredData.forEach(item => {
                const resultItem = document.createElement('button');
                resultItem.className = 'search-result-btn';
                resultItem.textContent = item.name;
                resultItem.onclick = () => {
                    window.location.href = item.link;
                    // Wait for navigation, then highlight
                    setTimeout(() => {
                        highlightSection(item.link.substring(item.link.indexOf('#')));
                    }, 500);
                };
                searchResults.appendChild(resultItem);
            });
        }
    });

    // Highlight if page loads with a hash
    if (window.location.hash) {
        highlightSection(window.location.hash);
    }
});