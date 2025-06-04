import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { toaster, Toaster } from "./ui/toaster";

type ContactProps = {
  contactRef: RefObject<HTMLDivElement | null>;
};

interface formValues {
  name: string;
  email: string;
  subject?: string;
  message?: string;
}

export const Contact: FC<ContactProps> = ({ contactRef }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formValues>();

  const onSubmit = async (data: formValues) => {
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      toaster.create({
        title: result.message,
        type: "success",
      });

      if (response.ok) {
        reset();
      }
    } catch (error) {
      toaster.create({
        title: error,
        type: "error",
      });
    }
  };

  return (
    <Container ref={contactRef} pt="104px">
      <Toaster />
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: "16", md: "16" }}
        pb={{ base: "50px", md: "285px" }}
      >
        <GridItem colSpan={1}>
          <Box>
            <Heading
              as="h3"
              textStyle="heading"
              fontSize={{ base: "43px", md: "76px" }}
              letterSpacing={{ base: "-2%", md: "0%" }}
              color={{ _light: "gray800", _dark: "white" }}
              pb="16px"
            >
              Let’s connect
            </Heading>
            <Flex pb="8px" gap="2">
              <Text
                textStyle="paragraph"
                fontSize={{ base: "16px", md: "18px" }}
                color={{ _dark: "gray78", _light: "gray700" }}
              >
                Say hello at
              </Text>
              <Link
                borderBottomWidth="1px"
                borderColor="yellowGreen"
                href="mailto:anita.rasmarie@gmail.com"
                target='_blank'
                color={{ _light: "gray800", _dark: "white" }}
              >
                anita.rasmarie@gmail.com
              </Link>
            </Flex>
            <Flex gap="2">
              <Text
                textStyle="paragraph"
                fontSize={{ base: "16px", md: "18px" }}
                color={{ _dark: "gray78", _light: "gray700" }}
              >
                For more info, here’s my
              </Text>
              <Link
                borderBottomWidth="1px"
                borderColor="yellowGreen"
                color={{ _light: "gray800", _dark: "white" }}
                target="_blank"
                href="/anita-cv.pdf"
              >
                resume
              </Link>
            </Flex>
            <HStack pt="32px" gap="8">
              <Link
                bg={"none"}
                p="0px"
                href="https://github.com/anitarasoa"
                target='_blank'
                aria-label="Github profile"
              >
                <FaGithub style={{ color: "#D3E97A" }} size="32" />
              </Link>
            </HStack>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack gap="4">
              <Field.Root invalid={!!errors.name} required>
                <Field.Label
                  textStyle="fieldLabel"
                  color={{ _dark: "gray78", _light: "gray700" }}
                >
                  Name <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  bg={{ _light: "gray200", _dark: "#1A1A1A" }}
                  style={{ border: "none" }}
                />
                <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root required invalid={!!errors.email}>
                <Field.Label
                  textStyle="fieldLabel"
                  color={{ _dark: "gray78", _light: "gray700" }}
                >
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  bg={{ _light: "gray200", _dark: "#1A1A1A" }}
                  style={{ border: "none" }}
                />
                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root>
                <Field.Label
                  textStyle="fieldLabel"
                  color={{ _dark: "gray78", _light: "gray700" }}
                >
                  Subject
                </Field.Label>
                <Input
                  {...register("subject")}
                  bg={{ _light: "gray200", _dark: "#1A1A1A" }}
                  style={{ border: "none" }}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label
                  textStyle="fieldLabel"
                  color={{ _dark: "gray78", _light: "gray700" }}
                >
                  Message
                </Field.Label>
                <Textarea
                  {...register("message")}
                  size="xl"
                  style={{ border: "none" }}
                  bg={{ _light: "gray200", _dark: "#1A1A1A" }}
                />
              </Field.Root>
              <Button
                textStyle="button"
                fontSize={{ base: "14px", md: "16px" }}
                color={{ _dark: "vampireBlack", _light: "gray800" }}
                type="submit"
                bg="yellowGreen"
                width="fit-content"
                borderRadius="100px"
                mt="4"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </GridItem>
      </Grid>
    </Container>
  );
};
