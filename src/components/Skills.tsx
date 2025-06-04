import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { skills } from "../projects/skills";

type SkillsProps = {
  skillsRef: RefObject<HTMLDivElement | null>;
};

export const Skills: FC<SkillsProps> = ({ skillsRef }) => {
  return (
    <Container pt="104px" ref={skillsRef}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: "8", md: "16" }}
        pb={{ base: "50px", md: "145px" }}
      >
        <GridItem colSpan={1}>
          <Box>
            <Heading
              as="h3"
              textStyle="heading"
              fontSize={{ base: "43px", md: "76px" }}
              letterSpacing={{ base: "-2%", md: "0%" }}
              color={{ _light: "gray800", _dark: "white" }}
            >
              My Skills
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Text
              textStyle="paragraph"
              fontSize={{ base: "16px", md: "18px" }}
              color={{ _dark: "gray78", _light: "gray700" }}
              pb="16px"
            >
              I am always looking to add more skills.
            </Text>
            <Flex wrap="wrap" gap="4">
              {skills.map((skill) => (
                <Text
                  key={skill}
                  textStyle="button"
                  fontSize={{ base: "14px", md: "16px" }}
                  color={{ _dark: "gray78", _light: "gray700" }}
                  p={"24px"}
                  borderRadius="50px"
                  borderWidth="1px"
                  borderColor={{ _dark: "#484848", _light: "gray78" }}
                >
                  {skill}
                </Text>
              ))}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};
