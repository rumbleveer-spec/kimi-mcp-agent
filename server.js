require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');

const app = express();
app.use(express.json());

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: "https://api.perplexity.ai"
});

let mcp = {
  memory: [],
  context: "You are a helpful assistant in Kimi App. Answer in Hindi + English mix.",
  plan: "1. Understand user 2. Recall memory 3. Give smart reply"
};

app.post('/kimi', async (req, res) => {
  const { message } = req.body;
  mcp.memory.push({ role: "user", content: message });

  const systemPrompt = `${mcp.context}\nPlan: ${mcp.plan}\nHistory: ${JSON.stringify(mcp.memory.slice(-5))}`;

  try {
    const response = await perplexity.chat.completions.create({
      model: "llama-3.1-sonar-small-128k-online",
      messages: [
        { role: "system", content: systemPrompt },
        ...mcp.memory.slice(-5)
      ]
    });

    const reply = response.choices[0].message.content;
    mcp.memory.push({ role: "assistant", content: reply });

    res.json({ reply, mcp: { memory: mcp.memory.slice(-2) } });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send(`
    <pre>
KIMI MCP AGENT LIVE!

MCP = Memory + Context + Planning
Powered by Perplexity AI

curl -X POST /kimi -d '{"message":"Bhai, kya haal hai?"}'
    </pre>
  `);
});

app.listen(3000, () => {
  console.log("KIMI MCP AGENT LIVE: http://localhost:3000");
});