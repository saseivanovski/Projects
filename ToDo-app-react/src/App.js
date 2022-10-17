import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // To Do's Tasks
  const [toDo, setToDo] = useState([]);

  // Temporary State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Search Todos
  const [searchData, setSearchData] = useState("");

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change (prepare) Task for Update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update Task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h1>To Do</h1>
      <br />

      {/* {Update Task} */}
      {/* if update data has something inside display true, if not display false */}
      {updateData && updateData ? (
        <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              ></input>
            </div>
            <div className="col-auto">
              <button
                onClick={updateTask}
                className="btn btn-lg btn-warning spaceTheButtons"
              >
                Update
              </button>
              <button onClick={cancelUpdate} className="btn btn-lg btn-danger">
                Cancel
              </button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* {Add Task} */}
          {/* as we type in addtask input the value is stored in temporary state */}
          <div className="row">
            <div className="col">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg"
              ></input>
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg btn-warning">
                Add Tasks
              </button>
            </div>
          </div>
          <br />
        </>
      )}

      {/* {Search ToDos} */}
      <div className="row">
        <div className="col searchDiv">
          <input
            className="form-control form-control-lg"
            placeholder="Search..."
            onChange={(e) => setSearchData(e.target.value)}
          ></input>
        </div>
      </div>

      {/* {Display ToDos} */}
      {/* if there are no tasks on screen display text */}
      {toDo && toDo.length ? "" : "Empty"}

      {/* sorting the todos, filtering and maping */}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .filter((task) => {
            if (searchData === "") {
              return task;
            } else {
              return task.title
                .toLowerCase()
                .includes(searchData.toLowerCase());
            }
          })
          .map((task, index) => {
            return (
              // tasks are comming from maping
              <React.Fragment key={task.id}>
                <div className="col taskMain">
                  <div>
                    <span className="taskNumber">{`${index + 1}.`}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faWandMagicSparkles} />
                    </span>
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
