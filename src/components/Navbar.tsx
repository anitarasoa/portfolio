import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FC, RefObject, useEffect, useRef, useState } from "react";
import { ColorModeButton } from "./ui/color-mode";
import { LuMenu, LuX } from "react-icons/lu";

type NavbarProps = {
  scrollToSection: (sectionRef: RefObject<HTMLDivElement | null>) => void;
  workRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  profileRef: RefObject<HTMLDivElement | null>;
};

const Navbar: FC<NavbarProps> = ({
  scrollToSection,
  workRef,
  aboutRef,
  contactRef,
  skillsRef,
  profileRef,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navRef = useRef<RefObject<HTMLDivElement>>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: EventTarget | null; }) => {
      if (!navRef.current?.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  });

  const clickMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Box>
      <Flex
        as="nav"
        alignItems="center"
        paddingBlock={"24px"}
        paddingInline={{ base: "0px", sm: "60px" }}
        bg={{ _light: "gray200", _dark: "gray.950" }}
        position="fixed"
        width="100%"
        zIndex={1}
      >
        <Heading
          as="h1"
          fontFamily="heading"
          fontWeight="400"
          fontSize={{ base: "28px", md: "32px" }}
          lineHeight={{ base: "100%", md: "150%" }}
          letterSpacing={"-1%"}
          textTransform="uppercase"
          color={{ _dark: "gray78", _light: "gray700" }}
        >
          Anita Rasoa
        </Heading>

        <Spacer />

        <HStack
          gap={8}
          hideBelow="sm"
          fontFamily="nav"
          fontWeight="500"
          fontSize="16px"
          lineHeight={"24px"}
          letterSpacing={"-3%"}
          color={{ _dark: "gray78", _light: "gray700" }}
          css={{ "--color": "gray78" }}
        >
          <Link
            onClick={() => scrollToSection(profileRef)}
            style={{ color: "var(--color)" }}
          >
            Profile
          </Link>
          <Link
            onClick={() => scrollToSection(workRef)}
            style={{ color: "var(--color)" }}
          >
            Work
          </Link>
          <Link
            onClick={() => scrollToSection(aboutRef)}
            style={{ color: "var(--color)" }}
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection(skillsRef)}
            style={{ color: "var(--color)" }}
          >
            Skills
          </Link>
          <Link
            onClick={() => scrollToSection(contactRef)}
            style={{ color: "var(--color)" }}
          >
            Contact
          </Link>
          <ColorModeButton />
        </HStack>

        <HStack hideFrom="sm">
          <Button
            onClick={clickMenu}
            variant="ghost"
            color={{ _light: "black", _dark: "white" }}
          >
            <LuMenu color={"gray78"} />
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
      {toggleMenu && (
        <Box
          ref={navRef}
          hideFrom="sm"
          bg={{ _light: "gray200", _dark: "blackAlpha.600" }}
          pos="fixed"
          top={0}
          right={0}
          w={"200px"}
          h={"100vh"}
          transitionProperty={"all"}
          transitionDuration={".5s"}
          transitionDelay={"0s"}
          transformOrigin={"right center"}
          perspective={"500px"}
          rotateX={"-90deg"}
          zIndex={99999}
          pt={"100px"}
          pl={"50px"}
        >
          <Button
            onClick={() => setToggleMenu(false)}
            variant="ghost"
            pos={"absolute"}
            top={2}
            right={2}
          >
            <LuX />
          </Button>
          <Flex as="nav" flexDir="column" gap={"20px"}>
            <Link
              onClick={() => scrollToSection(profileRef)}
              colorScheme="teal"
            >
              Profile
            </Link>
            <Link onClick={() => scrollToSection(workRef)} colorScheme="teal">
              Work
            </Link>
            <Link onClick={() => scrollToSection(aboutRef)} colorScheme="teal">
              About
            </Link>
            <Link onClick={() => scrollToSection(skillsRef)} colorScheme="teal">
              Skills
            </Link>
            <Link
              onClick={() => scrollToSection(contactRef)}
              colorScheme="teal"
            >
              Contact
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
