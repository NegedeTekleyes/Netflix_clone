import React, { useEffect, useState } from "react";
import instance from "../../utils/axios"; // your axios instance
import requests from "../../utils/requests";
import './Banner.css'
const Banner = () => {
  const [movie, setMovie] = useState(null);

  // Fetch random banner movie
  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(requests.fetchNetflixOriginals);
        console.log(requests)
        const results = request.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  // Function to cut long text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
