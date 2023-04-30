import React,{useState} from 'react'

const Search = () => {
const [image, setImage] = useState("")
const inputEvent = (event)=>{
  const data = event.target.value;
  setImage(data)
}
  return (
   <>
   <form className="d-flex searchbar" role="search">
   <input className="form-control me-2" value={image} type="search" placeholder="Search" onChange={inputEvent} aria-label="Search"/>
   <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
   </>
  )
}

export default Search