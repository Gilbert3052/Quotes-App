import React from 'react'

const QuoteButton = ({color, all}) => {

  return (
    <div className='btn_card'>
        <button style={{backgroundColor: color}} className='card_button' onClick={all}>&#62;</button>
    </div>
  )
}

export default QuoteButton