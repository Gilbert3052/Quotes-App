import React from 'react'
import QuoteButton from './QuoteButton'


const QuotesBox = ({rQuote, rColor, rAll}) => {

  return (
    <div className='QuoteBox'>
        <p className='card_quote'>{rQuote.quote}</p>
        <h1 className='card_name'>{rQuote.author}</h1>
        <QuoteButton 
          color = {rColor}
          all = {rAll} 
        />
    </div>
  )
}

export default QuotesBox