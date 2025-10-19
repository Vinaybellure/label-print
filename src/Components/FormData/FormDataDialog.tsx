import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./FormData.css";
// import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FormDataDialog = (props: any) => {
  const { handleChangeItem, formData } = props;
  // const [itemDetails, setItemDetails] = useState({
  //   productName: "",
  //   style: "",
  //   size: "",
  //   colour: "",
  //   gender: "",
  //   mrp: "",
  //   qty: "",
  //   country: "",
  //   customerCare: "",
  //   email: "",
  // });
  // const [itemList, setItemList] = useState<
  //   Array<{
  //     productName: string;
  //     style: string;
  //     size: string;
  //     colour: string;
  //     gender: string;
  //     mrp: string;
  //     qty: string;
  //     country: string;
  //     customerCare: string;
  //     email: string;
  //   }>
  // >([]);

  const handleOnChange = (e: any) => {
    handleChangeItem(e);
    // let value = e.target.value;
    // setItemDetails((prev) => ({ ...prev, [e.target.name]: value }));
  };

  // const handleAddData = () => {
  //   setItemDetails((prev) => ({
  //     ...prev,
  //     productName: "",
  //     style: "",
  //     size: "",
  //     colour: "",
  //     gender: "",
  //     mrp: "",
  //     qty: "",
  //     country: "",
  //     customerCare: "",
  //     email: "",
  //   }));
  //   setItemList((prev) => [...prev, itemDetails]);
  //   handlePageChange("preview");
  // };

  // const handleClear = () => {
  //   setItemDetails((prev) => ({
  //     ...prev,
  //     productName: "",
  //     style: "",
  //     size: "",
  //     colour: "",
  //     gender: "",
  //     mrp: "",
  //     qty: "",
  //     country: "",
  //     customerCare: "",
  //     email: "",
  //   }));
  // };

  return (
    <>
      <Box className="form-box">
        <TextField
          name="productName"
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          size="small"
          value={formData.productName}
          onChange={handleOnChange}
        />
        <TextField
          name="monthYear"
          id="outlined-basic"
          label="Month and year of Manufacture"
          variant="outlined"
          size="small"
          value={formData.monthYear}
          onChange={handleOnChange}
        />
        <TextField
          name="style"
          id="outlined-basic"
          label="Style"
          variant="outlined"
          size="small"
          value={formData.style}
          onChange={handleOnChange}
        />
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.size}
            name="size"
            label="Size"
            onChange={handleOnChange}
            sx={{ textAlign: "center" }}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
            <MenuItem value="XXL">XXL</MenuItem>
            <MenuItem value="XXXL">XXXL</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="color"
          value={formData.color}
          id="outlined-basic"
          label="Colour"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.gender}
            name="gender"
            label="Gender"
            onChange={handleOnChange}
            sx={{ textAlign: "center" }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="female">Boy</MenuItem>
            <MenuItem value="female">Girl</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          value={formData.mrp}
          name="mrp"
          label="MRP"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        <TextField
          id="outlined-basic"
          name="qty"
          value={formData.qty}
          label="Net Qty"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        <TextField
          name="origin"
          value={formData.origin}
          id="outlined-basic"
          label="Country of Origin"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        <TextField
          name="customerCare"
          value={formData.customerCare}
          id="outlined-basic"
          label="Customer Care"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        <TextField
          name="email"
          value={formData.email}
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
        {/* <Box>
          <Button variant="outlined" onClick={handleAddLabel}>
            Add Data & Preview
          </Button>
          <Button
            variant="outlined"
            //  onClick={handleClear}
          >
            Clear
          </Button>
        </Box> */}
      </Box>
    </>
  );
};
export default FormDataDialog;
