import express from "express"
import fetch from "node-fetch"
const app = express()
const port = 3000

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  next()
})

// Proxy route for Clash of Clans API
app.get("/api/clashofclans/:playerTag", async (req, res) => {
  try {
    const playerTag = req.params.playerTag
    const apiKey = "YOUR_CLASH_OF_CLANS_API_KEY"
    const url = `https://api.clashofclans.com/v1/players/${encodeURIComponent(
      playerTag
    )}`
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    }

    const response = await fetch(url, { headers })
    const player = await response.json()
    res.json(player)
  } catch (err) {
    console.log(err)
    res.status(500).send("Internal Server Error")
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
