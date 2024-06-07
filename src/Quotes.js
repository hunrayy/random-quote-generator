
import { useEffect, useState } from "react"
import Cssloader from "./Cssloader"
import axios from "axios"


const Quotes = () => {

    const [loading, setLoading] = useState(true)
    const [quotes, setQuotes] = useState("")

    const getQuote =  async () => {
        setLoading(true)
        await fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length)
            setQuotes(data[randomNum])
            // console.log(quotes)
            setLoading(false)
        })


        // axios.get("https://type.fit/api/quotes")
        // .then((data) => {
        //     let randomNum = Math.floor(Math.random() * data.length)
        //     setQuotes(data[randomNum])
        //     })
        //     setLoading(false)
    }


    useEffect(() => {getQuote()}, [])


    if (loading) {
        return(
            <Cssloader />
        )
    }
    
    return<>
        <div className="App">
            <div className="quote">
                <p>"{quotes ? quotes.text : ""}"</p>
                <p>-- {quotes ? quotes.author : ""}</p>
                <div className="btnContainer">
                    <button onClick={getQuote} className="btn">Get Quotes</button>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${quotes ? quotes.text : ""}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn">Tweet</a>
                </div>
            </div>

            
        </div>
    </>
}
export default Quotes











// import { useEffect, useState } from "react";
// import Cssloader from "./Cssloader";


// const Quotes = () => {
//     const [quotes, setQuotes] = useState("")
//     const [loading, setLoading] = useState(true)

//     const getQuotes = () => {
//          fetch("https://type.fit/api/quotes")
//          .then(res => res.json())
//          .then(data => {
//             let random = Math.floor(Math.random() * data.length)
//             setQuotes(data[random])
//          } )
//          setLoading(false)
//     }

    
//     useEffect(()=> {getQuotes()}, [])
//     if(loading) {
//         return(
//             <Cssloader />
//         )
//     }
//     return(
//         <>
//         <div>
//             {quotes.text}
//             {quotes.author}
//             <button onClick={getQuotes}>Get Quotes</button>
//             <button>Tweet</button>
//         </div>
        
//         </>
//     )
// }
// export default Quotes






