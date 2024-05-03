import React, { useState, useEffect } from "react";
import WorkerList from "./WorkerList";

const App = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => {
        setWorkers(data);
      })
      .catch((error) => {
        console.error("Error fetching workers: ", error);
      });
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDepartment === "" || worker.department === selectedDepartment)
  );

  const departments = [...new Set(workers.map(worker => worker.department))];

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search workers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <WorkerList workers={filteredWorkers} />
    </div>
  );
};

export default App;
