import { Box, Button, Typography } from "@mui/material";
import LabelDesign from "../LabelDesign/LabelDesign";
import "./Preview.css";

const Preview = (props: any) => {
  const { handlePageChange } = props;
  return (
    <Box className="preview">
      <Typography>Preview Screen</Typography>
      <Box className="preview-screen"></Box>
      <LabelDesign />
      <Button onClick={() => handlePageChange("formData")}>
        Add Label Data
      </Button>
    </Box>
  );
};
export default Preview;
