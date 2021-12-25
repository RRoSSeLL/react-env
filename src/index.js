import { render } from "react-dom";
import App from "./components/app/app";
import "./index.scss";

/**
 * Main js script to load the react application
 */
const root = document.getElementById("app-root");

render(<App />, root);
