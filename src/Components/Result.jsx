import React from 'react'

const Result = (props) => {
      const img = `https://source.unsplash.com/user/erondu/500x300/?${props.name}`
  return (
    <>
 
    <img src={img} alt='search' />
   
    </>
  )
}

export default Result