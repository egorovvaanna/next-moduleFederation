import React from "react";
import ReactDOM from "react-dom";
import {Header} from './components/Header';
import { Main } from "./components/Main";
import "./index.css";
import {Footer} from 'app_2/Footer'

const App = () => (
  <div className="container">
    <Header/>
    <Main/>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
