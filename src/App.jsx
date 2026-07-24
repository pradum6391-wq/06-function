import React from 'react'

const App = () => {

  function btn(){
    console.log("hello btn is clicked");
    
  }
  return (
    <div className='dv'>
      <button onDoubleClick={btn}>Click here</button>
    </div>
  )
}

export default App