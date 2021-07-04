import Cocktail from './Cocktail';

import { Flex, Text } from '@chakra-ui/react';

const CocktailGrid = ({ cocktailData, cocktail }) => {
  return (
    <>
      <Text mt="1em">Search term: {cocktail}</Text>
      <Flex
        wrap="wrap"
        justify={
          cocktailData && cocktailData.length < 4
            ? 'flex-start'
            : 'space-between'
        }
        mt="1em"
      >
        {cocktailData ? (
          cocktailData.map(cocktail => (
            <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
          ))
        ) : (
          <Text>No Cocktails Found</Text>
        )}
      </Flex>
    </>
  );
};

export default CocktailGrid;
