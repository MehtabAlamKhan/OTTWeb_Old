import React from "react";
import { MovieRequests } from "../../../Requests";
import Row from "../../Components/Row/Row";

function index() {
  return (
    <>
      <Row
        title="POPULAR MOVIES"
        fetchUrl={MovieRequests.fetchPopularMovies}
        isLargeRow
        md_movie
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={MovieRequests.fetchTopRatedMovies}
        isLargeRow
        md_movie
      />
      <Row
        title="NOW PLAYING"
        fetchUrl={MovieRequests.fetchNowPlayingMovies}
        md_movie
        isLargeRow
      />
      <Row
        title="UPCOMING MOVIES"
        fetchUrl={MovieRequests.fetchUpComingMovies}
        md_movie
        isLargeRow
      />
    </>
  );
}

export default index;
