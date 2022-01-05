import { assert } from "chai"
import v1 from "../src/poker.v1.mjs"
import v2 from "../src/poker.v2.mjs"
import { cards, colors } from "../src/constants.mjs";

describe("Poker Hand tests: ", () => {
  const checkValues = (rank, suit, score, hand) => {
    const resultV1 = v1(rank, suit)
    assert.equal(resultV1.score, score)
    assert.equal(resultV1.hand, hand)
    const resultV2 = v2(rank, suit)
    assert.equal(resultV2.score, score)
    assert.equal(resultV2.hand, hand)
  }

  const checkTypes = (rank, suit) => {
    const resultV1 = v1(rank, suit)
    assert.typeOf(resultV1, "object")
    assert.typeOf(resultV1.score, "number")
    assert.typeOf(resultV1.hand, "string")
    const resultV2 = v2(rank, suit)
    assert.typeOf(resultV2, "object")
    assert.typeOf(resultV2.score, "number")
    assert.typeOf(resultV2.hand, "string")
  }

  describe("Tests for 'Escalera Real': ", () => {
    const rank = [cards['T'], cards['J'], cards['Q'], cards['K'], cards['A']]
    const suit = [colors["S"], colors["S"], colors["S"], colors["S"], colors["S"]]
    const score = 10
    const hand = "Escalera Real"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Escalera Color': ", () => {
    const rank = [cards['7'], cards['8'], cards['9'], cards['T'], cards['J']]
    const suit = [colors["S"], colors["S"], colors["S"], colors["S"], colors["S"]]
    const score = 9
    const hand = "Escalera Color"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Poker': ", () => {
    const rank = [cards['8'], cards['8'], cards['8'], cards['8'], cards['J']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 8
    const hand = "Poker"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Full': ", () => {
    const rank = [cards['8'], cards['8'], cards['8'], cards['4'], cards['4']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 7
    const hand = "Full"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Color': ", () => {
    const rank = [cards['8'], cards['2'], cards['A'], cards['T'], cards['K']]
    const suit = [colors["S"], colors["S"], colors["S"], colors["S"], colors["S"]]
    const score = 6
    const hand = "Color"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Escalera': ", () => {
    const rank = [cards['2'], cards['3'], cards['4'], cards['5'], cards['6']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 5
    const hand = "Escalera"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Pierna': ", () => {
    const rank = [cards['2'], cards['2'], cards['2'], cards['5'], cards['6']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 4
    const hand = "Pierna"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for '2 Pares': ", () => {
    const rank = [cards['2'], cards['2'], cards['4'], cards['4'], cards['6']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 3
    const hand = "2 Pares"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for '1 Par': ", () => {
    const rank = [cards['2'], cards['2'], cards['4'], cards['5'], cards['6']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 2
    const hand = "1 Par"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })

  describe("Tests for 'Carta Alta': ", () => {
    const rank = [cards['2'], cards['5'], cards['4'], cards['7'], cards['K']]
    const suit = [colors["S"], colors["C"], colors["D"], colors["H"], colors["S"]]
    const score = 1
    const hand = "Carta Alta"
    it("Check values", () => checkValues(rank, suit, score, hand))
    it("Check types", () => checkTypes(rank, suit))
  })
})