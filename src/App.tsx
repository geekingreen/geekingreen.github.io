import { createGlobalStyles } from "goober/global";
import Router, { Route } from "preact-router";
import { Index } from "./routes/Index";

const GlobalStyles = createGlobalStyles`
  html, body {
    background: #000;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export function App() {
  return (
    <>
      {/* @ts-expect-error global styles is a function */}
      <GlobalStyles />
      <Router>
        <Route path="/" component={Index} />
      </Router>
    </>
  );
}
