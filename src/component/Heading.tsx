
type nameProp= {
    name:string,
    age:number,
    addres: string | number
}


const Heading = ({name,age,addres}:nameProp) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{addres}</p>
    </div>
  )
}

export default Heading







