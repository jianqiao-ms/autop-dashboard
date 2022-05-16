import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  useParams

} from "react-router-dom";

import "./scss/application.scss"
import {InfoBoard} from "./infoboard";
import {Datacenter} from "./datacenter";



const List = (props) => {
  return (
    <table className="table">
      <thead className={"table-white"}>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Datacenter</th>
        <th scope="col">ComputingResource</th>
        <th scope="col">Deployment Type</th>
        <th scope="col">Operation</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>mall-api</td>
        <td>aliyun-tjxak</td>
        <td>ASK-BJ-CDH-uyanglife</td>
        <td>Kubernetes</td>
        <td>
            <i className={"bi bi-terminal-dash"} data-bs-toggle="tooltip" data-bs-placement="top" title="live view logs"/>
        </td>
      </tr>
      </tbody>
    </table>
  )
}



const Detail = (props) => {
  const {id} = useParams();

  return (<>
    <div className={"d-flex align-items-center py-3"}>
      <span className={"fs-4"}>Application</span>
      <span className={"ms-5"}>mall-api</span>
    </div>
    <div className={"d-flex flex-column"}>
      <ul className="nav nav-tabs w-100" id="applicationTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#info"
                  role="tab" aria-controls="info" aria-selected="true">
            <i className={"bi bi-card-list me-1"} />Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="logtail-tab" data-bs-toggle="tab" data-bs-target="#logtail"
                  role="tab" aria-controls="logtail" aria-selected="false">
            <i className={"bi bi-terminal-plus me-1"} /> Tail
          </button>
        </li>
      </ul>
      <div className="tab-content" id="applicationTabContent">
        <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">...</div>
        <div className="tab-pane fade" id="logtail" role="tabpanel" aria-labelledby="logtail-tab">...</div>
      </div>
    </div>
  </>)
}



export const Application = (props) => {
  return (
    <div className={"container"} id={"applicationRoot"}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
    </div>
  )
}