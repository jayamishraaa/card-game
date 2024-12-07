import React from 'react';
// Types
import { CardType } from '../setup';
// Styles
import { Wrapper, FrontImg, BackImg } from './Card.styles.ts';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick} className='h-40 lg:w-30 shadow-slate-800 shadow-lg'>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt='card-front' />
      <BackImg flipped={card.flipped} src={card.backImage} alt='card-back' />
    </Wrapper>
  );
};

export default Card;