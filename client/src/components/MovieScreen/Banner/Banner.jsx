import { useState, useEffect } from "react";
import "../../tvShowComps/Banner/bannerTV.css";
import { Link } from "react-router-dom";
import UserScore from "./../../tvShowComps/Banner/UserScore";
import Play from "../../../icons/play.svg";
import Favorite from "../../../icons/favorite.svg";
import Rate from "../../../icons/rate.svg";
import Bookmark from "../../../icons/bookmark.svg";
import VideoPlayer from "./../../VideoPlayer/VideoPlayer";

function Banner({ showDetails, setShowPlayer, showPlayer }) {
  // console.log(showDetails);
  const [runTime, setRunTime] = useState();
  const [showHomePage, setShowHomePage] = useState(false);

  const genres = showDetails.genres;

  useEffect(() => {
    if (showDetails.runtime) {
      setRunTime(showDetails.runtime);
    }
  }, [showDetails]);


  return (
    <>
      {showPlayer && <VideoPlayer setShowPlayer={setShowPlayer} />}
      {!showPlayer && (
        <div className="tv-screen-banner-cont">
          <div
            className="tv-screen-banner"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${showDetails?.backdrop_path}")`,
              imageRendering: "-webkit-optimize-contrast",
            }}
          ></div>

          <div className="details-cont">
            <div className="tv-poster-cont">
              <a
                onMouseEnter={() => setShowHomePage(true)}
                onMouseLeave={() => setShowHomePage(false)}
                href={showDetails.homepage ? showDetails.homepage : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w300/${showDetails?.poster_path}`}
                  alt="tv-poster"
                ></img>

                {showDetails.homepage && (
                  <>
                    <div
                      className="tv-show-home-page"
                      id="tv-show-home-page"
                      style={{ opacity: showHomePage ? "1" : "0" }}
                    >
                      Home Page
                    </div>

                    <div
                      className="tv-poster-blackout"
                      id="tv-poster-blackout"
                    ></div>
                  </>
                )}
              </a>
            </div>

            <div className="text-cont">
              <h1 className="tv-title">
                {showDetails.name ||
                  showDetails.title ||
                  showDetails.original_name}
              </h1>
              <div className="tv-genre-cont">
                {genres &&
                  genres.map((g) => (
                    <div className="tv-genre" key={g.id}>
                      {g.name}
                    </div>
                  ))}
                <div className="tv-run-time">{runTime && runTime}min</div>
              </div>
              <div className="tv-banner-buttons-cont">
                <UserScore score={showDetails.vote_average} />
                <TVButtons
                  src={Play}
                  alt={"Play"}
                  play
                  setShowPlayer={setShowPlayer}
                />
                <TVButtons src={Favorite} alt={"Favorite"} />
                <TVButtons src={Bookmark} alt={"Bookmark"} />
                <TVButtons src={Rate} alt={"Rate"} />
              </div>
              <div className="tv-overview-cont">
                <h1 className="tv-overview-title">OverView</h1>
                <p className="tv-overview-details">
                  {showDetails && showDetails.overview}
                </p>
              </div>
            </div>
          </div>
          <div className="tv-banner-fade" />
          <div className="tv-screen-poster-cont"></div>
        </div>
      )}
    </>
  );
}

function TVButtons(props) {
  return (
    <>
      <div
        className="tv-banner-icons"
        onClick={() => {
          props.play && props.setShowPlayer(true);
        }}
      >
        <img
          className="tv-banner-icon-img"
          src={props.src}
          alt={props.alt}
          title={props.alt}
        />
      </div>
    </>
  );
}

export default Banner;