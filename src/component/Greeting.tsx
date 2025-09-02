import { useState } from "react"

interface greetingProp{
    name : string,
    age? : number
}
const Greeting = (props:greetingProp) => {
    const [count,setCount] =useState<number>(0)
    const [isClicked, setIsClicked] = useState<boolean>(true)
    const [value, setValue] = useState<string>("")
    const handleChange = (e:any) =>{
        const tem = e.target.value

     console.log(tem)
     setValue(e.target.value)

    }
  return (
    <div>
      <h1>hello {props.name}! {props.age && `your age is ${props.age} years old.`}</h1>
      <p>counting:{count}</p>
      <button onClick={() => setCount(prev => prev+1)}> increment </button>
      <p>{isClicked? 'lorefgbdnbvkjhgiterngfbtrugfdmnbrt':''}</p>
      <button onClick={()=>setIsClicked(prev =>!prev)}>{!isClicked ? 'show':'hide'}</button>

      <input onChange={handleChange} type="text"placeholder="enter your name" />
      <p>your sentences is : {value}</p>
    </div>
  )
}

export default Greeting
