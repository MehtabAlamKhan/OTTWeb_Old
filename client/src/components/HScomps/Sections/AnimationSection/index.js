import React from "react";
import { AnimatedRequests } from "../../../Requests";
import Row from "../../Components/Row/Row";

function index() {
  return (
    <>
      <Row
        title="POPULAR"
        fetchUrl={AnimatedRequests.fetchPopular}
        isLargeRow
        md_movie
      />
      <Row
        title="JAPANESE"
        fetchUrl={AnimatedRequests.fetchJapanese}
        md_movie
        isLargeRow
      />
      <Row
        title="COMING SOON"
        fetchUrl={AnimatedRequests.fetchLatest}
        isLargeRow
        md_movie
      />
      {/* <Row
        title="TOP RATED"
        fetchUrl={AnimatedRequests.fetchTopRatedTV}
        md_movie
        isLargeRow
      /> */}
    </>
  );
}

export default index;
