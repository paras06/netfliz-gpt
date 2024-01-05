import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import { SecondaryContainer } from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*

        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList *n
              - cards * n

        */}
    </div>
  );
};

export default Browse;
