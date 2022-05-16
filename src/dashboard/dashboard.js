import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import "./scss/dashboard.scss"

import {Header} from "./header";
import {InfoBoard} from "./infoboard";
import {Datacenter} from "./datacenter";
import {Application} from "./application";


export const Dashboard = (props) => {
  return(<>
    <Header />
    <div id={"dashboardRoot"}>
      <Routes>
        <Route path="/" element={<InfoBoard />} />
        <Route path="datacenter/*" element={<Datacenter />} />
        <Route path="application/*" element={<Application />} />
      </Routes>
    </div>
  </>)
}