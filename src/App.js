import React, { useState, useEffect } from 'react';
import CocktailForm from './components/CocktailForm';
import CocktailGrid from './components/CocktailGrid';
import RandomCocktail from './components/RandomCocktail';
import Footer from './components/Footer';

import {
  ChakraProvider,
  theme,
  Container,
  Box,
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

const App = () => {
  const [searchfield, setSearchfield] = useState('');
  const [cocktail, setCocktail] = useState('');
  const [cocktailData, setCocktailData] = useState([]);
  const [selected, setSelected] = useState('name');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    selected === 'name' ? getDataByName() : getDataByIngredient();
  }, [cocktail]);

  const getDataByName = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    const data = await response.json();
    setCocktailData(data.drinks);
    console.log(data.drinks);
    setIsLoading(false);
  };

  const getDataByIngredient = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktail}`
    );
    const data = await response.json();
    setCocktailData(data.drinks);
    setIsLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <Center my="2em">
          <Heading size="2xl">Cocktails 4 Life</Heading>
        </Center>
        <Flex>
          <Box
            w="75%"
            minH="70vh"
            borderRight="1px"
            borderColor="black"
            pr="1em"
          >
            <CocktailForm
              searchfield={searchfield}
              setSearchfield={setSearchfield}
              setCocktail={setCocktail}
              selected={selected}
              setSelected={setSelected}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <CocktailGrid cocktailData={cocktailData} cocktail={cocktail} />
          </Box>
          <RandomCocktail />
        </Flex>
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
