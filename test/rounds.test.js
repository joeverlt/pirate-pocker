import { assert } from "chai"
import v1 from "../src/poker.v1.mjs"
import v2 from "../src/poker.v2.mjs"
import { cards, colors } from "../src/constants.mjs";
import { formatHand, getHighHand } from "../src/utils.mjs";

describe("Poker Hand tests: ", () => {
  const getWinner = (player1, player2) => {
    const score = {
      p1: 0,
      p2: 0
    }
    const hand1 = v1(player1.numbers, player1.colors)
    const hand2 = v1(player2.numbers, player2.colors)
    if(hand1.score > hand2.score) score.p1 += 1
    if(hand1.score < hand2.score) score.p2 += 1
    if(hand1.score == hand2.score) {
      const high1 = getHighHand(player1.numbers, hand1.hand)
      const high2 = getHighHand(player2.numbers, hand2.hand)
      if(high1.highType > high2.highType) score.p1 += 1
      if(high1.highType < high2.highType) score.p2 += 1
      if(high1.highType === high2.highType) {
        if(high1.high > high2.high) score.p1 += 1
        if(high1.high < high2.high) score.p2 += 1
      }
    }

    if(score.p1 > score.p2) {
      assert.operator(score.p1, '>', score.p2)
      console.log(' -------------------------------------------------> Player 1 win')
    }
    if(score.p1 < score.p2) {
      assert.operator(score.p1, '<', score.p2)
      console.log(' -------------------------------------------------> Player 2 win')
    }

  }

  describe("Tests for 'Round 1': ", () => {
    const player1 = formatHand(["6S", "5H", "7S", "5C", "KD"])
    const player2 = formatHand(["2C", "TD", "8S", "8D", "3S"])
    it("Check Winner", () => getWinner(player1, player2))
  })

  describe("Tests for 'Round 2': ", () => {
    const player1 = formatHand(["8C", "5D", "AC", "JS", "9S"])
    const player2 = formatHand(["5C", "2C", "8S", "7D", "QH"])
    it("Check Winner", () => getWinner(player1, player2))
  })

  describe("Tests for 'Round 3': ", () => {
    const player1 = formatHand(["AH", "AC", "9C", "2D", "AS"])
    const player2 = formatHand(["7D", "3D", "QD", "TD", "6D"])
    it("Check Winner", () => getWinner(player1, player2))
  })

  describe("Tests for 'Round 4': ", () => {
    const player1 = formatHand(["6S", "4D", "QH", "9H", "QC"])
    const player2 = formatHand(["6D", "3D", "QS", "QD", "7H"])
    it("Check Winner", () => getWinner(player1, player2))
  })

  describe("Tests for 'Round 5': ", () => {
    const player1 = formatHand(["4C", "2H", "2D", "4S", "4D"])
    const player2 = formatHand(["9D", "3D", "3C", "9S", "3S"])
    it("Check Winner", () => getWinner(player1, player2))
  })
})