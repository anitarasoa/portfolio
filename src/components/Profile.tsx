import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import anitaImage from "../assets/anita.jpg";

type profileProps = {
  profileRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLButtonElement | null>;
  scrollToSection: (sectionRef: RefObject<HTMLButtonElement | null>) => void;
};

export const Profile: FC<profileProps> = ({
  contactRef,
  profileRef,
  scrollToSection,
}) => (
  <Container ref={profileRef} pt="145px">
    <Flex
      as="section"
      pb={{ base: "40px", md: "80px" }}
      flexDir={{ base: "column", md: "row" }}
      justify={"space-between"}
    >
      <Box
        maxW={"695px"}
        alignSelf={"center"}
        pb={{ base: "40px", sm: "40px", md: "0px" }}
      >
        <Heading
          as="h2"
          textStyle="bigHeading"
          fontSize={{ base: "57px", md: "101px" }}
          lineHeight={{ base: "100%", md: "90%" }}
          color={{ _light: "gray800", _dark: "white" }}
        >
          <Text>Hi I'am</Text>
          <Text>Anita Rasoa.</Text>
        </Heading>
        <Text
          textStyle="paragraph"
          fontSize={{ base: "16px", md: "18px" }}
          color={{ _dark: "gray78", _light: "gray700" }}
          pt={"16px"}
        >
          A Madagascar based software developer passionate about building
          accessible and user friendly website and mobile applications.
        </Text>
        <HStack gap={4} pt={"32px"}>
          <Button
            onClick={() => scrollToSection(contactRef)}
            bg="yellowGreen"
            p={"24px"}
            borderRadius="100px"
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              textStyle="button"
              fontSize={{ base: "14px", md: "16px" }}
              color={{ _dark: "vampireBlack", _light: "gray800" }}
              pr={"16px"}
            >
              Contact me
            </Text>
            <Box
              hideBelow="sm"
              bg={{ _dark: "vampireBlack", _light: "gray800" }}
              borderRadius={"100px"}
              width="10px"
              height="10px"
              alignSelf={"center"}
            ></Box>
            <Box
              hideFrom="sm"
              p="10px"
              bg={{ _dark: "vampireBlack", _light: "gray800" }}
              borderRadius={"100px"}
              alignSelf={"center"}
            >
              <FaArrowRight style={{ color: "white", rotate: "-50deg" }} />
            </Box>
          </Button>
          <Link href="https://github.com/anitarasoa" target="_blank">
            <Button
              bg={{ _dark: "#222222", _light: "gray800" }}
              borderRadius={"100px"}
              w={"54px"}
              h={"54"}
              p={"24px"}
            >
              <FaGithub style={{ color: "#D3E97A" }} />
            </Button>
          </Link>
        </HStack>
      </Box>
      <Box>
        <Image
          src={anitaImage}
          w={{ base: "100%", md: "600px" }}
          h={{ base: "400px", sm: "600px", md: "700px" }}
          borderRadius={"16px"}
        />
      </Box>
    </Flex>
  </Container>
);
