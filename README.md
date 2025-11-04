# 🤖 KIMI MCP AGENT

**MCP = Memory + Context + Planning**

An intelligent AI assistant that remembers conversations, understands context, and plans responses smartly. Powered by Grok API with Hindi + English mix support.

## 🌟 Features

- **Memory**: Remembers last 5 messages for context
- **Context**: Understands conversation flow
- **Planning**: Smart response strategy
- **Bilingual**: Hindi + English mix responses
- **REST API**: Easy integration

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Setup

1. Copy `.env.example` to `.env`
2. Add your Grok API key:
```
GROK_API_KEY=xai-your-key-here
```

### Run

```bash
npm start
```

Server will start at `http://localhost:3000`

## 📝 API Usage

### Test Endpoint
```bash
curl http://localhost:3000
```

### Chat with Agent
```bash
curl -X POST http://localhost:3000/kimi \
  -H "Content-Type: application/json" \
  -d '{"message":"Bhai, kya haal hai?"}'
```

### Response
```json
{
  "reply": "Sab badhiya bhai! Aap batao, kaise help kar sakta hoon?",
  "mcp": {
    "memory": [
      {"role": "user", "content": "Bhai, kya haal hai?"},
      {"role": "assistant", "content": "Sab badhiya bhai!..."}
    ]
  }
}
```

## 🏗️ Architecture

```
MCP Agent
├── Memory: Last 5 messages
├── Context: System prompt + conversation history
└── Planning: 3-step smart reply strategy
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI**: Grok API (via OpenAI SDK)
- **Language**: JavaScript

## 📊 Project Status

- ✅ Locally working
- ✅ MCP architecture implemented
- ⏳ Awaiting $5 Grok credits for full deployment

## 👨‍💻 Author

**Ankit Rajput**

Built with ❤️ on iPad after 3+ days of learning and 100+ errors!

---

*"Maine haar nahi maani – main lada!"*
