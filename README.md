# 🚀 KIMI MCP AGENT

**MCP-based AI Agent (Memory + Context + Planning) with Perplexity AI**

Built on iPad by **Ankit Rajput** 💪

## 🎯 What is MCP?

**MCP = Memory + Context + Planning**

- **Memory**: Tracks conversation history (last 5 messages)
- **Context**: Understands who you are and what you need
- **Planning**: Smart 3-step approach to handle requests

## ⚡ Powered by Perplexity AI

Uses **Perplexity's Sonar model** with real-time web search capabilities for accurate, up-to-date responses!

## 📦 Installation

```bash
npm install express openai dotenv
```

## 🔐 Setup

1. Create `.env` file:
```
PERPLEXITY_API_KEY=pplx-your-key-here
```

2. Get your Perplexity API key from [perplexity.ai](https://www.perplexity.ai/settings/api)

## 🚀 Run

```bash
node server.js
```

Server starts at: `http://localhost:3000`

## 🧪 Test

```bash
curl -X POST http://localhost:3000/kimi \
  -H "Content-Type: application/json" \
  -d '{"message":"Bhai, kya haal hai?"}'
```

## 🎨 Features

✅ Hindi + English mix responses  
✅ Memory of last 5 messages  
✅ Context-aware replies  
✅ Planning-based approach  
✅ **Perplexity AI powered with real-time search**  

## 📱 Built on iPad

Yes, you read that right! This entire project was coded on an iPad using Replit mobile. 3+ days, 100+ errors, but never gave up! 🔥

## 👨‍💻 Author

**Ankit Rajput**  
iPad Developer | AI Enthusiast

---

**Status**: Working Locally  
**Tech**: Perplexity AI (FREE API!)  
**Effort**: 💯 Dedication!