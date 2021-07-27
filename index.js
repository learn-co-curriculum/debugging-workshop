document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  
  const username = document.getElementById('name-input').value

  let joke;
  fetchJoke()

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      joke = jokeData.joke
    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newJokeLi = document.createElement('li')
    fetchJoke()
    newJokeLi.innerHTML = `
    <span class="username">${event.target[0].value} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  })
})
