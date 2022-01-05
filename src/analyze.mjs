import pokerHand from "./poker.v1.mjs"
import fs from "fs"
import { formatHand, getHighHand } from "./utils.mjs"

const analyze = async () => {
  const analize = new Promise((resolve, reject) => {
    const scores = {
      player1: 0,
      player2: 0
    }
    fs.readFile('./src/data.txt', 'utf-8', (err, data) => {
      if(err) reject(err)
      const rounds = data.split('\n')
      for (let round of rounds) {
        if (round) {
          const cards1 = formatHand(round.slice(0, 14).split(" "))
          const cards2 = formatHand(round.slice(15).split(" "))
          const hand1 = pokerHand(cards1.numbers, cards1.colors)
          const hand2 = pokerHand(cards2.numbers, cards2.colors)
          if(hand1.score > hand2.score) scores.player1 += 1
          if(hand1.score < hand2.score) scores.player2 += 1
          if(hand1.score === hand2.score) {
            const high1 = getHighHand(cards1.numbers, hand1.hand)
            const high2 = getHighHand(cards2.numbers, hand2.hand)
            if(high1.highType > high2.highType) scores.player1 += 1
            if(high1.highType < high2.highType) scores.player2 += 1
            if(high1.highType === high2.highType) {
              if(high1.high > high2.high) scores.player1 += 1
              if(high1.high < high2.high) scores.player2 += 1
            }
          }
        }
      }
      resolve(scores)
    })
  })
  const result = await analize
  return result
}

export default analyze
