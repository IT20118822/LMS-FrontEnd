import classes from "./SpecializationName.module.css";
import deleteI from "../../../../Assets/delete.png"
import DeleteFacultiesPopup from "./DeleteFacultiesPop/DeleteFacultiesPopup";
import { useState } from "react";


const SpecializationName = (props) => {
  const [onDelete, setOnDelete] = useState(false);
  const clickH = () => {
    setOnDelete((state) => !state);
  };
  const hide = () => {
    setOnDelete((state) => !state);
  };
  const deleteCourse = (id) => {};
  return (
    <div className={classes.main_out}>
      <div className={classes.popup}>
        {onDelete && (
          <DeleteFacultiesPopup
            hide={hide}
            onDelete={() => deleteCourse("id")}
          />
        )}
      </div>
      <ul className={classes.main_in}>
        <li>
          <a href="/faculties/semesteryear/:semester">
            <div>{props.SpecializationName}</div>
          </a>

          <a onClick={clickH}>
            <img src={deleteI} className={classes.img_buttons}></img>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SpecializationName;
