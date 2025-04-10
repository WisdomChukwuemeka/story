import {Data} from "../js/dataset"
import { useState, useEffect } from "react"

export const Layout = () => {
  const [search, setSearch] = useState([])
  const [result, setResult] = useState([])
  const [message, setMessage] = useState("")
 

  const url = Data
  useEffect(() => {
    setResult(url)
    
  }, [search, url])


  const searchButton = (event) => {
    event.preventDefault()
    const filteredData = url.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    if(filteredData){
      setResult(filteredData)
    }
  } 
  const Genre = () => {
    const filtered = url.filter((item) => item.genre === "Abuse")
    setResult(filtered)
}
  

  return(
    <>
      <div className="center">
        <div className="button">
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchButton}>Search</button>
          <button onClick={Genre}>Genre</button>
        </div>

        <div className="second-container">
          <div>
            {result.length > 0 ? (
              <div className="content">
              {result.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.name}</h4>
                <p>{item.genre}</p>
              </div>
            ))}
              </div>
            ) : (
              <p>No result found</p>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}