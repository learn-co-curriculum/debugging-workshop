document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let username;
  let joke;

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      joke = jokeData.joke
      const newJokeLi = document.createElement('li')
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      ` 
      jokeList.append(newJokeLi)
    })
  }

  form.addEventListener('submit', (event) => {
    username = document.getElementById('name-input').value
    event.preventDefault()
    if(username !== "") {
      fetchJoke()
     
    }
  })
})
