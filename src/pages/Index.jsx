// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Container, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) return;

    // Simulating an API call to GPT-3.5 Turbo
    const simulatedApiResponse = `This is a simulated response for the prompt: "${prompt}"`;
    setResponse(simulatedApiResponse);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          GPT-3.5 Turbo Prompt Tool
        </Text>
        <Textarea placeholder="Enter your prompt here..." value={prompt} onChange={handleInputChange} size="lg" />
        <Button rightIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleSubmit}>
          Send Prompt
        </Button>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="semibold">Response:</Text>
          <Text mt={2}>{response || "No response yet. Enter a prompt and submit!"}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
