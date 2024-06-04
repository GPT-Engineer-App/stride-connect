import { Container, VStack, Box, Text, Image, HStack, IconButton, Input, Button } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const runs = [
  {
    id: 1,
    user: "John Doe",
    distance: "5 km",
    time: "25:30",
    date: "2023-10-01",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/300",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    user: "Jane Smith",
    distance: "10 km",
    time: "50:45",
    date: "2023-10-02",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/300",
    likes: 20,
    comments: 5,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">Run Tracker</Text>
        <Button colorScheme="teal" size="md">Upload Run</Button>
        {runs.map(run => (
          <Box key={run.id} w="100%" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <HStack spacing={4} mb={4}>
              <Image borderRadius="full" boxSize="50px" src={run.avatar} alt={`${run.user} avatar`} />
              <VStack align="start">
                <Text fontWeight="bold">{run.user}</Text>
                <Text fontSize="sm" color="gray.500">{run.date}</Text>
              </VStack>
            </HStack>
            <Image borderRadius="md" src={run.image} alt="Run image" mb={4} />
            <Text fontSize="lg" fontWeight="bold">{run.distance}</Text>
            <Text fontSize="md" color="gray.600">{run.time}</Text>
            <HStack spacing={4} mt={4}>
              <IconButton aria-label="Like" icon={<FaHeart />} />
              <Text>{run.likes}</Text>
              <IconButton aria-label="Comment" icon={<FaComment />} />
              <Text>{run.comments}</Text>
            </HStack>
            <Input placeholder="Add a comment..." mt={4} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;