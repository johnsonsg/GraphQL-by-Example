const GraphQL_URL = 'http://localhost:9000/'

async function fetchGreeting() {
  const response = await fetch(GraphQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `
    })
  })
  const { data } = await response.json()
  // console.log(data)
  return data
}

const element = document.getElementById('greeting')
element.textContent = 'Loading...'

// fetchGreeting().then(data => {
//   element.textContent = data.greeting
// })

// destructure data
fetchGreeting().then(({ greeting }) => {
  element.textContent = greeting
})
