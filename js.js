const url = 'https://api.adviceslip.com/advice'

async function getPhrase(){
    const response = await fetch (url)
    const data = await response.json()
    const phrase = document.querySelector('.phrase')
    const innerPhrase = document.createElement('p')
    innerPhrase.innerText = data.slip.advice
    phrase.appendChild(innerPhrase)
}
getPhrase()