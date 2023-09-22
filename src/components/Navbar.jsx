import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Navbar(){
    return(
        <Flex as="nav" p="10px">
        <Heading as="h1" >Ninja Tasks</Heading>
        <Spacer/>
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">M</Box>
            <Text>mario@netninja.dev</Text>
            <Button>Logout</Button>
        </HStack>
        </Flex>
    )
}