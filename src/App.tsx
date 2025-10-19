// import { useState } from "react";
import "./App.css";
import LabelGenerator from "./Components/LabelGenerator.jsx";
// import FormData from "./Components/FormData/FormData";
// import Preview from "./Components/Preview/Preview";

function App() {
  // const [currentPage, setCurrentPage] = useState("preview");

  // const handlePageChange = (page: string) => {
  //   setCurrentPage(page);
  // };
  return (
    <>
      <LabelGenerator />
    </>

    // <>
    //   {currentPage == "preview" && (
    //     <Preview handlePageChange={handlePageChange} />
    //   )}
    //   {currentPage == "formData" && (
    //     <FormData handlePageChange={handlePageChange} />
    //   )}
    // </>
  );
}

export default App;
