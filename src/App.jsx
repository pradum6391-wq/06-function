import React from 'react'

const App = () => {

  // function btn(){
  //   console.log("hello btn is clicked");
    
  // }

  // function mouseEnter(){
  //      console.log("mouse enter");
       
  // }
   
  function inputChange(val){
    console.log(val);
    
  }

  return (
    <div className='dv'>
      {/* <button onMouseEnter={mouseEnter} onDoubleClick={btn}>Click here</button> */}
      <button onClick={function(){
        console.log("btn is clicked");
      }}>Click Here</button>

      {/* <input onChange={(elem)=>{
        console.log(elem.target.value);
        
      }} type="text" placeholder='enter your name' /> */}

      <input onChange={(elem)=>{
       inputChange(elem.target.value) 
      }} type="text" placeholder='enter your name' />

    </div>
  )
}

export default App