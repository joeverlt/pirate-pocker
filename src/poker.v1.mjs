import { sort, isSuccessive } from "./utils.mjs";
import { hands } from "./constants.mjs";

const pokerHand = (cards, colors) => {
  const hand = {}
  const colored = {}
  for (let i in cards) {
    const number = cards[i]
    const color = colors[i]
    hand[number] = hand[number] ? hand[number] + 1 : 1
    colored[color] = colored[color] ? colored[color] + 1 : 1
  }
  const keys = sort(Object.keys(hand))
  const values = sort(Object.values(hand))
  const isColored = Object.keys(colored).length === 1
  const isStraight = isSuccessive(keys) && Object.keys(hand).length == 5
  let result = 1
  if(values.includes(2) && values.length > 3) result = 2
  if(values.includes(2) && values.length == 3) result = 3
  if(values.includes(3)) result = 4
  if(isStraight) result = 5
  if(isColored) result = 6
  if(values.includes(3) && values.includes(2)) result = 7
  if(values.includes(4)) result = 8
  if(isColored && isStraight) result = 9
  if(isColored && isStraight && keys[0] == '10') result = 10

  const reducer = (accum, prevKey) => {
    let newKey = hands[prevKey]
    if (!accum.hasOwnProperty(newKey)) accum[newKey] = []
    accum[newKey].push(prevKey)
    return accum
  }

  let formattedHands = Object.keys(hands).reduce(reducer, {})

  return { score: result, hand: formattedHands[result][0] }
}

export default pokerHand