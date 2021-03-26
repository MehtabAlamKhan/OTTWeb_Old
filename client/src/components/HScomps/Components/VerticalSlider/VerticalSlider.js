import React, { useEffect, useState } from "react";
import moduleName from "react";

import { HomeRequests } from "../../../Requests";
import axios from "../../../axios";
import {
  SliderWrapper,
  SliderOuterContainer,
  SliderHeading,
  SliderContainer,
  SliderDetailsCont,
  SliderNav,
  SliderBg,
  SliderPost,
  SliderDetails,
} from "./styles";

function VerticalSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(HomeRequests.fetchTrending);
      function setM() {
        setMovies(req.data.results);
      }
      if (movies.length === 0) {
        setM();
      }
      return req;
    }
    fetchData();
  }, []);

  return (
    <SliderWrapper>
      <SliderOuterContainer>
        <SliderHeading>trending</SliderHeading>
        <SliderContainer>
          <SliderDetailsCont></SliderDetailsCont>
          <SliderNav></SliderNav>
        </SliderContainer>
      </SliderOuterContainer>
    </SliderWrapper>
  );
}

export default VerticalSlider;
