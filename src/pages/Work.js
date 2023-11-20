import React from "react";
import { WorkList } from "../helpers/WorkList";
import WorkItem from "../components/WorkItem";
import "../styles/Work.css";

function Work() {
  return (
    <div className="work">
      <h1 className="workTitle">Nos Travaux</h1>
      <div className="workList">
        {WorkList.map((workItem, key) => {
          return (
            <WorkItem
              key={key}
              image={workItem.image}
              name={workItem.name}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
