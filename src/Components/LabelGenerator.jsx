import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Snackbar,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FormDataDialog from "./FormData/FormDataDialog";
import Logo from "../assets/logo.png";
import "./LabelGenerator.css";

const A4_WIDTH = 794; // px
const A4_HEIGHT = 1123; // px
const LABELS_PER_PAGE = 9; // 3 cols × 9 rows approx.

export default function LabelPrinter() {
  const [labels, setLabels] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // barcode: "8907979418367",
    productName: "",
    monthYear: "",
    style: "",
    size: "",
    color: "",
    gender: "",
    mrp: "",
    qty: "",
    origin: "",
    customerCare: "",
    email: "",
  });
  const [snackbar, setSnackbar] = useState("");

  const printRef = useRef();

  const handleAddLabel = () => {
    if (labels.length >= LABELS_PER_PAGE) {
      setSnackbar(
        "A4 page is full. Please delete or print before adding more."
      );
      return;
    }
    setLabels([...labels, { ...formData, id: Date.now() }]);
    setFormData({
      productName: "",
      monthYear: "",
      style: "",
      size: "",
      color: "",
      gender: "",
      mrp: "",
      qty: "",
      origin: "",
      customerCare: "",
      email: "",
    });
    setOpen(false);
  };

  const handleDuplicate = (label) => {
    if (labels.length >= LABELS_PER_PAGE) {
      setSnackbar(
        "A4 page is full. Please delete or print before adding more."
      );
      return;
    }
    setLabels([...labels, { ...label, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setLabels(labels.filter((l) => l.id !== id));
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef, // ✅ this avoids "There is nothing to print"
    documentTitle: "Labels",
    pageStyle: `
    @page {
      size: A4 portrait;
      margin: 10mm;
    }
    @media print {
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `,
  });

  const handleChangeItem = (e) => {
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const handleClear = () => {
    setFormData({
      productName: "",
      monthYear: "",
      style: "",
      size: "",
      color: "",
      gender: "",
      mrp: "",
      qty: "",
      origin: "",
      customerCare: "",
      email: "",
    });
    setOpen(false);
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f0f0f0", minHeight: "100vh" }}>
      {/* Action Buttons */}
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Label
        </Button>
        <Button variant="outlined" onClick={handlePrint}>
          Print
        </Button>
      </Box>

      {/* A4 Preview (always fixed size) */}
      <div
        ref={printRef}
        style={{
          background: "white",
          width: `${A4_WIDTH}px`,
          height: `${A4_HEIGHT}px`,
          margin: "0 auto",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          padding: "16px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "min-content",
          gap: "12px",
          overflow: "hidden",
        }}
      >
        {labels.map((label) => (
          <Card
            key={label.id}
            variant="outlined"
            sx={{
              width: "194px",
              position: "relative",
              border: "1px solid black",
              p: "6px",
            }}
          >
            <CardContent sx={{ p: 1, textAlign: "left" }}>
              {/* <Typography variant="caption" sx={{ letterSpacing: "6px" }}>
                ||||| |||| |||| |
              </Typography> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img src={Logo} style={{ height: "30px" }} />
              </div>

              {/* <Typography variant="caption">4 8 9203</Typography> */}
              <hr />
              <Typography
                variant="body2"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  textAlign: "center",
                }}
              >
                {label.productName}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Month & Year of Mannufacture: {label.monthYear}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Style: {label.style}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Size: {label.size}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Color: {label.color}
              </Typography>
              {/* <Typography variant="body2">
                Product: {label.productName}
              </Typography> */}
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Gender: {label.gender}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                MRP: Rs. {label.mrp}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Net Qty: {label.qty}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "9px" }}>
                Country of Origin: {label.origin}
              </Typography>
              <hr />
              <Typography
                variant="caption"
                display="block"
                sx={{ fontSize: "11px", lineHeight: "8px" }}
              >
                Email:
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontSize: "11px", lineHeight: "8px" }}
              >
                {label.email}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: 1, fontSize: "11px", lineHeight: "8px" }}
              >
                Customer care:
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontSize: "11px", lineHeight: "8px" }}
              >
                {label.customerCare}
              </Typography>
            </CardContent>

            {/* Actions */}
            <Box
              sx={{
                position: "absolute",
                top: 2,
                right: 2,
                display: "flex",
                gap: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleDuplicate(label)}
                sx={{ bgcolor: "white" }}
              >
                <ContentCopyIcon fontSize="small" className="no-print" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleDelete(label.id)}
                sx={{ bgcolor: "white" }}
              >
                <DeleteIcon fontSize="small" className="no-print" />
              </IconButton>
            </Box>
          </Card>
        ))}
      </div>

      {/* Popup Form */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Label Data</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <FormDataDialog
            formData={formData}
            handleChangeItem={handleChangeItem}
            handleAddLabel={handleAddLabel}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClear}>Cancel</Button>
          <Button onClick={handleAddLabel} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for warnings */}
      <Snackbar
        open={!!snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar("")}
        message={snackbar}
      />
    </Box>
  );
}
