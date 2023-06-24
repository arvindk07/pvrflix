import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  return <div>hello</div>;
};

export default App;
