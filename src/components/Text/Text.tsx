import { FC } from 'react';

interface TextProps {
  className: string;
  text: string;
}

export const Text: FC<TextProps> = ({ className = 'text-center text-white', text }) => {
  return <span className={className}>{text}</span>;
};
