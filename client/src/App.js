import React, { useEffect } from "react";

import TVShowScreen from "./components/Screens/TVShowScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieScreen from "./components/Screens/MovieScreen";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { Provider } from "react-redux";
import store from "./store";
import { loaduser } from "./actions/authAction";

function App() {
  useEffect(() => {
    console.log("Trying to Load user");
    store.dispatch(loaduser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          {/* <VideoPlayer /> */}
          {/* <HomeScreen /> */}
          <Route path="/" exact component={HomeScreen} />
          <Route path="/tv/:id" component={TVShowScreen} />
          <Route path="/movie/:id" component={MovieScreen} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
