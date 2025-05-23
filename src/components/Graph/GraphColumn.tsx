import { clsx } from 'clsx';
import { GraphDataItem } from '../../types/GraphDataItem';
import { FC, useState } from 'react';

interface GraphColumnProps extends GraphDataItem {
  isActive: boolean;
  onActivate: () => void;
}

export const GraphColumn: FC<GraphColumnProps> = ({ amount, day, isActive, onActivate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onActivate}
      tabIndex={0}
      style={{ height: `${amount * 2.5}px` }}
      className={clsx(
        'w-12 flex justify-center items-center text-center flex-row rounded-md p-4 transition-all duration-300 ease-in-out cursor-pointer',
        isActive ? 'bg-[#74b0bf]' : 'bg-[#ec755d]',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={clsx(
          'absolute p-1 text-white text-xs pointer-events-none transition-opacity duration-300',
          isHovered ? 'opacity-100' : 'opacity-0',
        )}
      >
        {`$${amount}`}
      </span>
    </button>
  );
};
