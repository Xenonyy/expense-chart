import { clsx } from 'clsx';
import { GraphDataItem } from '../../types/GraphDataItem';
import { FC, useState } from 'react';
import { Box } from '../Box/Box';

interface GraphColumnProps extends GraphDataItem {
  isActive: boolean;
  onActivate: () => void;
}

export const GraphColumn: FC<GraphColumnProps> = ({ amount, day, isActive, onActivate }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Box className="relative flex flex-col items-center">
      <button
        onClick={onActivate}
        tabIndex={0}
        style={{
          height: `${amount * 2.5}px`,
        }}
        className={clsx(
          'w-8 sm:w-12 lg:w-14 mx-1 rounded-sm transition-all duration-300 ease-in-out cursor-pointer flex items-end justify-center',
          {
            'bg-[#ec755d] hover:bg-[#f7a48f]': !isActive,
            'bg-[#74b0bf] hover:bg-[#97c7d3]': isActive,
          },
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></button>
      <span
        className={clsx(
          'absolute -top-7 left-1/2 -translate-x-1/2 p-1 rounded bg-black text-white text-xs pointer-events-none transition-opacity duration-300',
          isHovered ? 'opacity-100' : 'opacity-0',
        )}
      >
        {`$${amount}`}
      </span>
    </Box>
  );
};
