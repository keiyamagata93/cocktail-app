import {
  Input,
  Box,
  RadioGroup,
  HStack,
  Radio,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const CocktailForm = ({
  searchfield,
  setSearchfield,
  setCocktail,
  selected,
  setSelected,
  isLoading,
}) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    setCocktail(searchfield);
    setSearchfield('');
  };

  const handleInputChange = e => {
    setSearchfield(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box border="1px" borderColor="black" p="1.5em">
        <RadioGroup value={selected} onChange={setSelected} mb="1em">
          <HStack spacing="2em">
            <Radio value="name">Search by name</Radio>
            <Radio value="ingredient">Search by ingredient</Radio>
          </HStack>
        </RadioGroup>
        <Flex>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              value={searchfield}
              onChange={handleInputChange}
              placeholder="Search"
            />
          </InputGroup>
          <Button ml="1em" isLoading={isLoading} onClick={handleFormSubmit}>
            Submit
          </Button>
        </Flex>
      </Box>
    </form>
  );
};

export default CocktailForm;
