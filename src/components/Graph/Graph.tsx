import { FC, useState } from 'react';
import { GraphColumn } from './GraphColumn';
import { GraphData } from '../../types/GraphDataItem';
import { Box } from '../Box/Box';

export const Graph: FC<GraphData> = ({ data }) => {
  const [activeDay, setActiveDay] = useState<string>('');

  return (
    <Box className="justify-around items-end flex-row pt-10">
      {data.map((data) => (
        <Box className="flex-col" key={data.amount}>
          <GraphColumn
            key={data.day}
            amount={data.amount}
            day={data.day}
            isActive={activeDay === data.day}
            onActivate={() => setActiveDay(data.day)}
          />
          {data.day}
        </Box>
      ))}
    </Box>
  );
};
