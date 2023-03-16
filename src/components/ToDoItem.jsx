
import React, { useState } from "react";

function ToDoItem(props) {
  // const [iD, sId] = useState(false);

  // function hC() {
  //   sId((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);

        // task ta jokhun ei click hocche
        // unChecked bole key/variable  ta trigger hocche
        // Unchecked ke trigger korchi amra with the index of the task
        // mane task r index take amra send korchi unchecked ke
        //
        //
        //
      }}
    >
      {/* <li style={{ textDecoration: iD ? "line-through" : "none" }}>
        {props.task}
      </li> */}
      <li>{props.pall}</li>
    </div>
  );
}
export default ToDoItem;
