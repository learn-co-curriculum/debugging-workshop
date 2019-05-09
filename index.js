document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    fetchJoke().then(joke => {

      const username = document.getElementById('name-input').value
      const jokeList = document.getElementById('joke-list')
      const newJokeLi = document.createElement('li')

      newJokeLi.innerHTML = `
      ${username} says: ${joke}
      `
      
      jokeList.appendChild(newJokeLi)
    })
  })
})
