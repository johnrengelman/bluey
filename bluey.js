async function pickEpisode() {
    // Fetch the list of Bluey episodes from a JSON file
    let dataUrl = 'https://www.episodate.com/api/show-details?q=bluey'
    const response = await fetch(dataUrl);
    const data = await response.json();
    const episodes = data.tvShow.episodes;
    
    // Pick a random episode from the list
    const randomIndex = Math.floor(Math.random() * episodes.length);
    const randomEpisode = episodes[randomIndex];
    
    // Display the episode title, season, episode number, and thumbnail
    const episodeDetails = document.getElementById('episode-details');
    episodeDetails.innerHTML = `
      <h2>The randomly selected Bluey episode is:</h2>
      <p>${randomEpisode.name}</p>
      <p>Season ${randomEpisode.season}, Episode ${randomEpisode.episode}</p>
    `;

    // Start the animation to cycle through the episode thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      thumbnails[currentIndex].classList.add('stop-animation');
      currentIndex = (currentIndex + 1) % thumbnails.length;
      thumbnails[currentIndex].classList.remove('stop-animation');
    }, 3000);
  }