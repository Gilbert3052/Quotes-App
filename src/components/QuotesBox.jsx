import React from 'react'
import QuoteButton from './QuoteButton'


const QuotesBox = ({rQuote, rColor, rAll, quoteSvg}) => {

  return (
    <div className='QuoteBox'>
        <div className="card_quote">
        <i className='bx bxs-quote-alt-left'></i>
          <p className='quote'>{rQuote.quote}</p>
        </div>
        <h1 className='card_name'>{rQuote.author}</h1>
        <QuoteButton 
          color = {rColor}
          all = {rAll} 
        />
    </div>
  )
}

export default QuotesBox