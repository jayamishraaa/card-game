import card1 from '../src/assets/card1.avif';
import card2 from '../src/assets/card2.avif';
import card3 from '../src/assets/card3.avif';
import card4 from '../src/assets/card4.avif';
import card5 from '../src/assets/card5.avif';
import card6 from '../src/assets/card6.avif';
import card7 from '../src/assets/card7.avif';
import card8 from '../src/assets/card8.avif';
import card9 from '../src/assets/card9.avif';
import cardBack from '../src/assets/card_back.avif';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

// Put the images in an array
const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));