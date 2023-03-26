import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SearchEngine from "./SearchEngine";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SearchEngine />
    <footer>
      <a href="#" target="_blank" rel="nonreferrer">
        Open-source code{" "}
      </a>
      , by Jennifer Torres
    </footer>
  </StrictMode>
);
