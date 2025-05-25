const { Groq } = require("groq-sdk");
const dotenv = require("dotenv");
const prompt = require("./prompt.js");

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main(question) {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    temperature: 0.3,
    top_p: 0.9,
    max_tokens: 512,
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: question,
      },
    ],
  });
  return response.choices[0].message.content;

}

module.exports = {main};
