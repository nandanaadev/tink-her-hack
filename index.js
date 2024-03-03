const fetch = require('node-fetch');

const API_KEY = "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";
const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";

async function send_message(message) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    };

    const data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": 'pretend that you are a gynecologist and answer the question'}],
        "max_tokens": 150
    };

    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData.choices[0].message.content;
}

// Example usage
const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    const msg = send_message('lol')
    console.log(msg)
})
