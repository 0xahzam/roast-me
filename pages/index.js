import Head from "next/head";
import {
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  Input,
  Box,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    // console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    // console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  return (
    <div className="main">
      <Head>
        <title>Roast Me - by @0xahzam</title>
        <link rel="shortcut icon" href="musk.png" />
        <meta name="description" content="Come and get roasted by GPT3" key="desc" />
        <meta property="og:title" content="Come and get roasted by GPT3" />
        <meta
          property="og:image"
          content="musk.png"
        />
      </Head>
      <Flex justify={"center"} fontFamily={"Syne, sans-serif"}>
        <Flex
          flexDir={"column"}
          color={"white"}
          marginTop={{ base: "90px", md: "40px" }}
          width={{ base: "328px", md: "528px" }}
        >
          <Text
            fontSize={{ base: "54px", md: "64px" }}
            fontWeight={"700"}
            textAlign={"center"}
          >
            Roast Me
          </Text>
          <ButtonGroup marginTop={"44px"} spacing={"0"}>
            <Input
              fontSize={{ base: "18px", md: "20px" }}
              color={"white"}
              placeholder="start typing here"
              value={userInput}
              onChange={onUserChangedText}
              border={""}
              borderLeft={"1px solid #272726"}
              borderTop={"1px solid #272726"}
              borderBottom={"1px solid #272726"}
              height={"70px"}
              borderRadius={""}
              borderTopLeftRadius={"7px"}
              borderBottomLeftRadius={"7px"}
              background={"#0D0D0D"}
            />

            <Button
              height={"70px"}
              border={""}
              rounded={""}
              background={"#FE4E12"}
              width={"115px"}
              _hover={{ background: "" }}
              borderTopRightRadius={"7px"}
              borderBottomRightRadius={"7px"}
              onClick={callGenerateEndpoint}
            >
              {" "}
              <Image
                src="rightarrow.svg"
                alt=""
                height={"38px"}
                width={"38px"}
              />{" "}
            </Button>
          </ButtonGroup>
          <Text
            background={"#0D0D0D"}
            marginTop={"30px"}
            border={"1px solid #272726"}
            borderRadius={"7px"}
            fontSize={{ base: "18px", md: "20px" }}
            paddingTop={"30px"}
            paddingLeft={"20px"}
            paddingRight={"20px"}
            paddingBottom={"30px"}
            align={"center"}
            textAlign={"left"}
          >
            {apiOutput}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
