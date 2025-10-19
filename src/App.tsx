// import { useState } from "react";
import "./App.css";
// import LabelGenerator fro./Components/LabelGenerator.jsjsx";
// import FormData from "./Components/FormData/FormData";
// import Preview from "./Components/Preview/Preview";
import LabelGenerator from "./Components/LabelGenerator.tsx";

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
