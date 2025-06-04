import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import projects from "../projects/projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";

type WorkProps = {
  workRef: RefObject<HTMLDivElement | null>;
};

export const Work: FC<WorkProps> = ({ workRef }) => {
  return (
    <Container ref={workRef} pt="104px" pb={16}>
      <Box maxW="600px">
        <Heading
          as="h3"
          textStyle="heading"
          fontSize={{ base: "43px", md: "58px" }}
          letterSpacing={{ base: "-2%", md: "0%" }}
          color={{ _light: "gray800", _dark: "white" }}
          pb="16px"
        >
          Featured Project
        </Heading>
        <Text
          textStyle="paragraph"
          fontSize={{ base: "16px", md: "18px" }}
          color={{ _dark: "gray78", _light: "gray700" }}
        >
          Here are some of the selected projects that showcase my passion as
          frontend developer.
        </Text>
      </Box>
      <Box>
        {projects.map(
          ({
            id,
            title,
            description,
            image,
            client,
            year,
            role,
            github,
            demo,
            technologies,
          }) => (
            <Grid
              key={id}
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={{ base: "16", md: "16" }}
              pt="50px"
              pb={{ base: "40px", md: "48px" }}
              alignItems="center"
            >
              <GridItem colSpan={1} alignContent="center">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  w={{ base: "100%", md: "600px" }}
                  h={{ base: "100%", md: "600px" }}
                  bg={{ _light: "gray.400", _dark: "#1A1A1A" }}
                  borderRadius={"12px"}
                  p="40px"
                >
                  <Image
                    src={image}
                    borderRadius={"12px"}
                    alignContent="center"
                    w={{ base: "100%", md: "488px" }}
                    h={{ base: "100%", md: "347px" }}
                  />
                </Flex>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading
                  as="h4"
                  textStyle="subHeading"
                  fontSize={{ base: "24px", md: "32px" }}
                  color={{ _light: "gray800", _dark: "white" }}
                  pb={4}
                >
                  {title}
                </Heading>
                <Text
                  textStyle="paragraph"
                  fontSize={{ base: "16px", md: "18px" }}
                  color={{ _dark: "gray78", _light: "gray700" }}
                >
                  {description}
                </Text>
                <Box divideY="2px" pt={8} borderBottomWidth="2px">
                  <Text
                    fontFamily="paragraph"
                    fontWeight="600"
                    lineHeight="150%"
                    fontSize="16px"
                    textTransform="uppercase"
                    color={{ _light: "gray800", _dark: "white" }}
                    pb={4}
                  >
                    Project info
                  </Text>
                  {client && (
                    <Flex
                      flexDir="row"
                      justifyContent="space-between"
                      textStyle="projectInfo"
                      pt={4}
                      pb={4}
                    >
                      <Text color={{ _light: "gray800", _dark: "white" }}>
                        Client
                      </Text>
                      <Text color={{ _dark: "gray78", _light: "gray700" }}>
                        {client}
                      </Text>
                    </Flex>
                  )}
                  {year && (
                    <Flex
                      flexDir="row"
                      justifyContent="space-between"
                      textStyle="projectInfo"
                      pt={4}
                      pb={4}
                    >
                      <Text color={{ _light: "gray800", _dark: "white" }}>
                        Year
                      </Text>
                      <Text color={{ _dark: "gray78", _light: "gray700" }}>
                        {year}
                      </Text>
                    </Flex>
                  )}
                  {role && (
                    <Flex
                      flexDir="row"
                      justifyContent="space-between"
                      textStyle="projectInfo"
                      pt={4}
                      pb={4}
                    >
                      <Text color={{ _light: "gray800", _dark: "white" }}>
                        Role
                      </Text>
                      <Text color={{ _dark: "gray78", _light: "gray700" }}>
                        {role}
                      </Text>
                    </Flex>
                  )}
                </Box>
                <Flex
                  flexDir="row"
                  justifyContent="space-between"
                  textStyle="projectInfo"
                  pt={4}
                  pb={4}
                  gap={32}
                >
                  <Text color={{ _light: "gray800", _dark: "white" }}>
                    Technologies
                  </Text>
                  <Flex wrap="wrap" gap={4}>
                    {technologies.map((technology) => (
                      <Text color={{ _dark: "gray78", _light: "gray700" }}>
                        {technology}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
                <HStack pt={12} gap={8}>
                  {demo && (
                    <Link
                      href={demo}
                      textStyle="link"
                      height="30px"
                      fontSize={{ base: "14px", md: "16px" }}
                      color="yellowGreen"
                      borderBottomWidth="2px"
                      borderBottomColor="yellowGreen"
                    >
                      <Text>Live demo</Text>
                      <FaArrowRight
                        size={18}
                        style={{ color: "#D3E97A", rotate: "-50deg" }}
                      />
                    </Link>
                  )}
                  {github && (
                    <Link
                      href={github}
                      textStyle="link"
                      fontSize={{ base: "14px", md: "16px" }}
                      color="yellowGreen"
                      height="30px"
                      borderBottomWidth="2px"
                      borderBottomColor="yellowGreen"
                    >
                      <Text>See on github</Text>
                      <FaGithub size={18} style={{ color: "#D3E97A" }} />
                    </Link>
                  )}
                </HStack>
              </GridItem>
            </Grid>
          )
        )}
      </Box>
    </Container>
  );
};
