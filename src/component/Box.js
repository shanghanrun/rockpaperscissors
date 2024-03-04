import React from 'react'

const Box = ({who, image, result}) => {
  return (
    <div className="box">
        <h1>{who}</h1>
        <img className="item-img" src={image} alt='' />
        <h2>{result}</h2>
        
    </div>
  )
}

export default Box