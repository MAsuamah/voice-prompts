export const getResponse = async (promptInput) => {

    const response = await fetch('http://localhost:8000/key');
    const SECRET_KEY = await response.json()

    const data = {
      prompt: promptInput,
      temperature: 0,
      max_tokens: 64,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }; 

    return fetch('https://api.openai.com/v1/engines/text-ada-001/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SECRET_KEY}`,
      },
      body: JSON.stringify(data)
    });;
}