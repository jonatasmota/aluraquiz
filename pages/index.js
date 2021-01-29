import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import db from "../db.json";

import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Alura Quiz - {db.title}</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>CSS is Awesome</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolum sit amet</p>
              <form
                onSubmit={(eventInfos) => {
                  eventInfos.preventDefault();

                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="userName"
                  onChange={(eventInfos) => {
                    setName(eventInfos.target.value);
                  }}
                  placeholder="Digite seu nome"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Styled Component is too</h1>
              <p>Lorem ipsum dolum sit amet</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/jonatasmota" />
      </QuizBackground>
    </>
  );
}
