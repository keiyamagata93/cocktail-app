import { Flex, Image, Text } from '@chakra-ui/react';

const Cocktail = ({ cocktail }) => {
  return (
    <Flex align="center" direction="column" mb="1em" p=".5em">
      <Image src={cocktail.strDrinkThumb} boxSize="180px" mb=".7em" />
      <Text>{cocktail.strDrink}</Text>
    </Flex>
  );
};

export default Cocktail;
