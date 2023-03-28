import React from 'react'

function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
    <div className='titleCloseBtn'>
        <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className='title'>
          <h1>I'm happy to you with .</h1>
        </div>
        <div className='body'>
          <p>Let's begin your order please..</p>
        </div>
        <div className='footer'>
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Modal