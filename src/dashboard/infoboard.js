import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  Link
} from "react-router-dom";

import "./scss/infoboard.scss"

const InfoCard = (props) => {
  return(
      <div className={"col-4 py-4"}>
        <div className={"d-flex flex-column align-items-center justify-content-center position-relative"}>
          <i className={"fs-3 bi bi-" + props.icon} />
          <span className={"fs-5 fw-bold"}>{props.value}</span>
          <span className={"fw-light"}>{props.name}</span>
          <Link className={"stretched-link"} to={props.target} />
        </div>
      </div>
  )
}



export const InfoBoard = (props) => {
  return(
      <div className={"container text-secondary"} id={"infoBoard"}>
         <div className={"row fs-5 py-3"}>
            Overview
        </div>
        <div className={"row bg-white"}>
          <InfoCard icon={"building"} value={"2"} name={"Datacenter"} target={"/datacenter"} />
          <InfoCard icon={"graph-up"} value={"1"} name={"Business"} target={"/business"}/>
          <InfoCard icon={"grid"} value={"3"} name={"Application"} target={"/application"}/>
        </div>
      </div>
  )
}