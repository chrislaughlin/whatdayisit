import React from "react";
import "./styles.css";
import useFetch from "@chrislaughlin/usefetch";

import styled from "styled-components";

import WhatGif from "./whatday.gif";

const StyledTitle = styled.h1`
  font-size: 70px;
  color: #ba2640;
  font-family: "Permanent Marker", cursive;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTheDay = styled.span`
  font-family: "Permanent Marker", cursive;
  font-size: 30px;
  color: #fa2a00;
`;

const StyledNotDayText = styled.span`
  font-family: "Permanent Marker", cursive;
  font-size: 15px;
  color: black;

`;

const App = () => {
  const theDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  );

  const { data } = useFetch("https://extreme-ip-lookup.com/json/");

  return (
    <StyledContainer>
      <StyledTitle>What fucking day is it?</StyledTitle>
      <div>
        <img
          src={WhatGif}
          alt="monday no tuesday no wednesday what day? Thursday"
        />
      </div>
      <p>
        <StyledNotDayText>its fucking </StyledNotDayText> 
        <StyledTheDay>{theDay}</StyledTheDay>
        <StyledNotDayText>in fucking </StyledNotDayText> 
        <StyledTheDay>{data && data.city}</StyledTheDay>
      </p>
    </StyledContainer>
  );
};

export default App;
