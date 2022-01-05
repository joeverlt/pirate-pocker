import express from "express"
import analyze from "./src/analyze.mjs";

const app = express()

const port = 3000

app.get('/', async (req, res) => {
  const data = await analyze()
  console.log(data)
  res.json(data)
})

app.listen(port, () => console.log(`Open http://localhost:${port}`))