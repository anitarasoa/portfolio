import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { RefObject, useRef } from "react";
import { Work } from "./components/Work";

function App() {
  const workRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionRef: RefObject<HTMLDivElement | HTMLButtonElement | null>) => {
    window.scrollTo({
      top: (sectionRef as RefObject<HTMLDivElement>).current.offsetTop - 84,
      behavior: "smooth",
    });
  };

  return (
    <Grid divideY="2px" templateColumns={{ base: "1fr", md: "1fr" }} gap={0}>
      <GridItem>
        <Navbar
          scrollToSection={scrollToSection}
          workRef={workRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          skillsRef={skillsRef}
          profileRef={profileRef}
        />
      </GridItem>
      <GridItem>
        <Profile
          contactRef={contactRef as RefObject<HTMLButtonElement | null>}
          profileRef={profileRef}
          scrollToSection={scrollToSection}
        />
      </GridItem>
      <GridItem>
        <Work workRef={workRef} />
      </GridItem>
      <GridItem>
        <About aboutRef={aboutRef} />
      </GridItem>
      <GridItem>
        <Skills skillsRef={skillsRef} />
      </GridItem>
      <GridItem>
        <Contact contactRef={contactRef} />
      </GridItem>
    </Grid>
  );
}

export default App;
