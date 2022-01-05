import { hands } from "./constants.mjs"

const pokerHand = (cards, colors) => {
  let count
  let i
  let offset
  const init = 1<<cards[0]|1<<cards[1]|1<<cards[2]|1<<cards[3]|1<<cards[4];
  for (i = -1, count = offset = 0; i<5; i++, offset = Math.pow(2, cards[i]*4)) {
    count += offset*((count/offset&15)+1)
  }
  count = count % 15 - ((init/(init&-init) == 31) || (init == 0x403c) ? 3 : 1)
  count -= (colors[0] == (colors[1]|colors[2]|colors[3]|colors[4])) * ((init == 0x7c00) ? -5 : 1)
  const result = Object.keys(hands)[count]
  return { score: hands[result], hand: result }
}

export default pokerHand