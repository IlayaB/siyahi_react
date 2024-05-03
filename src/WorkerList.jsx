import React from "react";

const WorkerList = ({ workers }) => {
  return (
    <ul>
      {workers.map((worker) => (
        <li key={worker.id}>
          <div>
            <strong>Name:</strong> {worker.name}
          </div>
          <div>
            <strong>Role:</strong> {worker.role}
          </div>
          <div>
            <strong>Department:</strong> {worker.department}
          </div>
         
        </li>
      ))}
    </ul>
  );
};

export default WorkerList;
