import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  /**Fetch Figma data */
  useEffect(() => {
    const url = `https://api.figma.com/v1/files/${
      import.meta.env.VITE_FILE_KEY
    }`;

    const fetchFigmaData = async () => {
      try {
        const response = await axios({
          method: "get",
          url,
          headers: { "X-Figma-Token": import.meta.env.VITE_FIGMA_TOKEN },
        });
        console.log(response);
      } catch (error) {
        // Handle the error here, you can log it or show a user-friendly message
        console.error("Error fetching Figma data:", error);
      }
    };

    fetchFigmaData();
  }, []);

  return <div>React</div>;
}

export default App;
