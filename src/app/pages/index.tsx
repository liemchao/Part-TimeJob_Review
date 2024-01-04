import React from "react";
import { Column } from "react-table";
import StudentTable from "../components/StudentTable";

interface Student {
  id: number;
  name: string;
  age: number;
}

const students: Student[] = [
  { id: 1, name: "John Doe", age: 18 },
  { id: 2, name: "Jane Smith", age: 17 },
  { id: 3, name: "Mike Johnson", age: 19 },
];

const columns: Column<Student>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Student List</h1>
      <StudentTable data={students} columns={columns} />
    </div>
  );
};

export default Home;
