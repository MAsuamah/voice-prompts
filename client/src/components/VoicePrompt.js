import { useRef } from 'react';

const VoicePrompt = () => {
  const socket = useRef(null)
  //const recorder = useRef(null)
  
  const runApp = async () => {

    const response = await fetch('http://localhost:8000');
    const data = await response.json();

    if(data.error){
      alert(data.error)
    }
    
    const { token } = data;

    socket.current = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

    console.log(socket)

  };

  return (
    <>
      <button onClick={runApp}>hey</button>
    </>
  )
}

export default VoicePrompt;