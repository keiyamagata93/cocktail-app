import { useState, useEffect } from 'react';

import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const RandomCocktail = () => {
  const [random, setRandom] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getRandomCocktail();
  }, []);

  const getRandomCocktail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      setRandom(data.drinks[0]);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <Box ml="1em" w="25%">
      <Heading size="lg" pb="1em">
        Random Cocktail
      </Heading>
      {error && <Text>Something went wrong...</Text>}
      <Image src={random.strDrinkThumb} size="100%" mb=".7em" pb="1em" />
      <Heading size="md" pb="1em">
        {random.strDrink}
      </Heading>
      <Text pb="1em">{random.strInstructions}</Text>
      <Button onClick={getRandomCocktail} isLoading={isLoading}>
        Get a new one
      </Button>
    </Box>
  );
};

export default RandomCocktail;
