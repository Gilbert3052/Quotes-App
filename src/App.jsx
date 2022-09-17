import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from "./json/quotes.json"
import colors from "./utils/color.js"

function App() {

  const getIndexRandom = arr => parseInt(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = colors[getIndexRandom(colors)]

  const [quote, setQuote] = useState(firstQuote)
  const [color, setColor] = useState(firstColor)  

  const backgroundObject = {
    backgroundColor: color,
    color: color
  }

  const getRandomAll = () => {
    setQuote(quotes[getIndexRandom(quotes)])
    setColor(colors[getIndexRandom(colors)])
  }

  return (
    <div style={backgroundObject} className="App">
      <QuotesBox 
        rQuote = {quote} 
        rColor = {color}
        rAll = {getRandomAll}  
      />
    </div>
  )
}

export default App
