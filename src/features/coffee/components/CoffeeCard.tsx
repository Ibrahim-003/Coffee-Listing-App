import React from 'react';
import { Coffee } from '../../../types/Coffee';
import { StarFilled } from '../icons/StarFilled';
import { StarEmpty } from '../icons/StarEmpty';

interface CoffeeCardProps {
  coffee: Coffee;
}

const CoffeeCard: React.FC<CoffeeCardProps> = React.memo(({ coffee }) => {
  return (
    <div className='relative max-w-[260px] bg-inherit'>
      <div className='absolute top-2 left-1'>
        {coffee.popular && (
          <div className='text-[10px] font-bold text-coffee-bean px-3 py-1 bg-golden-sand rounded-xl'>
            Popular
          </div>
        )}
      </div>
      <img src={coffee.image} alt={coffee.name} className='block w-full rounded-xl' />
      <div className='mt-3'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-bold'>{coffee.name}</h3>
          <span className='bg-mint-frost px-2 py-1 rounded-sm text-deep-onyx font-bold text-xs'>
            {coffee.price}
          </span>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center'>
            <span className='mr-2'>
              {coffee.votes > 0 ? <StarFilled /> : <StarEmpty />}
            </span>
            <span className='mr-1'>{coffee.rating}</span>
            <span className='text-muted-slate font-medium'>
              ({coffee.votes} votes)
            </span>
          </div>
          {!coffee.available && (
            <span className='text-scarlet font-medium'>Sold out</span>
          )}
        </div>
      </div>
    </div>
  );
});

CoffeeCard.displayName = 'CoffeeCard';

export default CoffeeCard;
