import { h, render } from "preact";
import { App } from "./App";
import { setup } from "goober";

setup(h);

render(<App />, document.getElementById("app")!);
