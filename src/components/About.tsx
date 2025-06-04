import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FC, RefObject } from "react";

type AboutProps = {
  aboutRef: RefObject<HTMLDivElement | null>;
};

export const About: FC<AboutProps> = ({ aboutRef }) => {
  return (
    <Container pt="104px" ref={aboutRef}>
      <Flex
        as="section"
        pb={{ base: "40px", md: "420px" }}
        flexDir={{ base: "column", md: "row" }}
        justify={"space-between"}
      >
        <Box>
          <Heading
            as="h2"
            textStyle="bigHeading"
            fontSize={{ base: "57px", md: "101px" }}
            lineHeight={{ base: "100%", md: "90%" }}
            color={{ _light: "gray800", _dark: "white" }}
          >
            About me
          </Heading>
        </Box>
        <Box maxW="704px" pt={{ base: "48px", md: "0px" }}>
          <Heading
            as="h4"
            textStyle="subHeading"
            fontSize={{ base: "24px", md: "32px" }}
            color={{ _light: "gray800", _dark: "white" }}
          >
            I am a frontend developer based in Madagascar. Has Software
            Engineering background.
          </Heading>
          <Text
            textStyle="paragraph"
            fontSize={{ base: "16px", md: "18px" }}
            color={{ _dark: "gray78", _light: "gray700" }}
            pt={"16px"}
          >
            I am a frontend developer based in Madagascar looking for exciting
            opportunities. Has Software Engineering background. Likes to focus
            on accessibility, reusability and maintainability when developing. I
            am always passionate and curious to learn more when it comes to new
            technologies and creative coding.
          </Text>
          <Text
            textStyle="paragraph"
            fontSize={{ base: "16px", md: "18px" }}
            color={{ _dark: "gray78", _light: "gray700" }}
            pt={"16px"}
          >
            Currently, I'm a mid-level Front-End Engineer at 90poe. I contribute
            to the creation and maintenance of UI components that power 90poe's
            frontend, ensuring our platform meets web accessibility standards
            and best practices to deliver an inclusive user experience. Also
            working on improving codebase health by analyzing the source code,
            implementing integration tests, and seeking opportunities to improve
            the efficiency of the tech stack with React, Apollo Client, Jest,
            and Typescript.
          </Text>
          <Text
            textStyle="paragraph"
            fontSize={{ base: "16px", md: "18px" }}
            color={{ _dark: "gray78", _light: "gray700" }}
            pt={"16px"}
          >
            In the past, I've had the opportunity to work on developing websites
            that focused more on accessibility. Built interactive and responsive
            UI components to support a seamless browsing experience across
            devices. Focused on SEO and performance optimization, including lazy
            loading, code-splitting best practices for sustainable web
            performance.
          </Text>
          <Text
            textStyle="paragraph"
            fontSize={{ base: "16px", md: "18px" }}
            color={{ _dark: "gray78", _light: "gray700" }}
            pt={"16px"}
          >
            While I am not programming, I enjoy playing with my kids, hanging
            out with my friends and family, watching movies.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
