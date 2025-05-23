import { clsx } from 'clsx';
import { FC } from 'react';

interface ContainerProps {
  className: string;
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('min-h-screen min-w-screen flex justify-center items-center flex-col', className)}>
      {children}
    </div>
  );
};
