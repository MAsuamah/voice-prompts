import { getResponse } from "../api/generateResponse";


const Response = () => { 

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getResponse('Write a poem.')
  
      if(!response.ok) {
        throw new Error('something went wrong!')
      } 
  
      const res = await response.json()
      console.log(res)
    }
  
    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={onSubmit}>Click2</button>
    </>
  )
}


export default Response;