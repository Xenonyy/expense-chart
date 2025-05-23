import { Container } from './components/Container/Container';
import { Graph } from './components/Graph/Graph';
import { Box } from './components/Box/Box';
import { Text } from './components/Text/Text';
import data from './api/data.json';

export const App = () => {
  return (
    <Container className="bg-[#f7e8db]">
      <Box className="bg-[#ec755d] w-lg h-24 rounded-2xl p-5">
        <Box className="w-full h-full justify-start items-start flex-col">
          <Text className="text-white text-sm mt-[-2px] pb-1" text="My balance" />
          <Text className="text-white text-2xl font-medium" text="$921.48" />
        </Box>
        <img src={'logo.svg'} alt="logo" className="pr-4 h-18 w-18"></img>
      </Box>
      <Box className="bg-white w-lg h-full rounded-2xl p-8 mt-5">
        <Box className="w-full h-full justify-start items-start flex-col">
          <Text className="text-[#2e1e12] text-3xl font-semibold" text="Spending - Last 7 days" />
          <Box className="w-full h-full justify-evenly items-start flex-col">
            <Graph data={data} />
            <div className="w-full h-1 bg-[#f7f2ea] my-10" />
          </Box>
          <Box className="w-full h-full justify-start items-start flex-row">
            <Box className="w-full h-full justify-start items-start flex-col">
              <Text className="text-[#a4a19c] text-base mt-[-2px] pb-1" text="Total this month" />
              <Text className="text-[#2e1e12] text-4xl font-semibold" text="$478.33" />
            </Box>
            <Box className="w-full h-full items-end flex-col ">
              <Text className="font-medium" text="+2.4%" />
              <Text className="text-[#a4a19c] mt-[-2px] pb-1" text="from last month" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
