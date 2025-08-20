import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
        <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row  title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title = 'fetchTopRatedMovies' fetchUrl={requests.fetchTopRatedMovies} />
        <Row title=  "fetchComedyMovies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="fetchRomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="fetchTvShows" fetchUrl={requests.fetchTvShows} />
</>
)
}

export default RowList