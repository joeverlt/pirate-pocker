import { cards as cardsValues, colors as colorsValues } from "./constants.mjs";

const isSuccessive = (cards) => {
  const reverse = Array.from(cards).reverse()
  let i = 0
  let result = true
  while(i < reverse.length - 1) {
    if(reverse[i] - reverse[i + 1] !== 1) {
      result = false
      break
    }
    i++
  }
  return result
}

const sort = (cards) => cards.sort((a, b) => {
  const x = cardsValues[a[0]]
  const y = cardsValues[b[0]]
  if(x < y) return -1;
  if(x > y) return 1;
  return 0
})

const formatHand = (hand) => {
  let numbers = [
    cardsValues[hand[0][0]],
    cardsValues[hand[1][0]],
    cardsValues[hand[2][0]],
    cardsValues[hand[3][0]],
    cardsValues[hand[4][0]],
  ]
  const colors = [
    colorsValues[hand[0][1]],
    colorsValues[hand[1][1]],
    colorsValues[hand[2][1]],
    colorsValues[hand[3][1]],
    colorsValues[hand[4][1]]
  ]

  return { numbers, colors }
}

const getDuplicates = data => {
  let duplicated = [];
  const numbers = [...data].sort();
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] === numbers[i]) {
      duplicated.push(numbers[i]);
    }
  }
  return duplicated
}

const removeDuplicates = data => {
  const duplicated = getDuplicates(data)
  var filtered = data.filter((value, index, arr) => !duplicated.includes(value))
  return filtered
}

const getHighForFull = data => {
  const full = {}
  for (let i of data) {
    full[i] = full[i] ? full[i] + 1 : 1
  }
  const keys = Object.keys(full)
  return full[keys[0]] > full[keys[1]] ? Object.keys(full)[0] : Object.keys(full)[1]
}

const getHighHand = (cards, type) => {
  switch(type) {
    case "Carta Alta": return { high: Math.max(...cards), highType: Math.max(...cards) }
    case "Poker": return { highType: getDuplicates(cards)[0], high: Math.max(...cards) }
    case "Escalera": return { highType: cards[0], high: Math.max(...cards) }
    case "Escalera Color": return { highType: cards[0], high: Math.max(...cards) }
    case "Escalera Real": return { highType: cards[0], high: Math.max(...cards) }
    case "Color": return { highType: Math.max(...cards), high: Math.max(...cards) }
    case "1 Par": return { highType: getDuplicates(cards)[0], high: Math.max(...removeDuplicates(cards)) }
    case "2 Pares": return { highType: Math.max(...getDuplicates(cards)), high: Math.max(...removeDuplicates(cards)) }
    case "Pierna": return { highType: getDuplicates(cards)[0], high: Math.max(...cards) }
    case "Full": return { highType: getHighForFull(cards), high: Math.max(...cards) }
  }
}

export { sort, isSuccessive, formatHand, getHighHand }