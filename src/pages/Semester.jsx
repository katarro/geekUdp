import UploadDialog from "../components/UploadFileDialog";
import ConfirmDialog from "../components/ConfirmDialog";
import { useFileUpload } from "../hooks/useFileUpload";
import UploadButton from "../components/UploadButton";
import Typography from "@material-ui/core/Typography";
import FileList from "../components/UploadedFiles";
import { useParams } from "react-router-dom";
import "../styles/Semester.css";
import React from "react";

export default function Semester() {
  const { semesterNumber } = useParams();
  const {
    open,
    loading,
    files,
    confirmOpen,
    handleClickOpen,
    handleConfirm,
    handleFileUpload,
    setOpen,
    setConfirmOpen,
  } = useFileUpload();

  return (
    <div>
      <Typography
        variant="h5"
        style={{
          color: "#4db6ac",
          fontWeight: "bold",
          backgroundColor: "#004d40",
          padding: "10px",
        }}
      >
        Semestre {semesterNumber}
        <div classname="btn-upload" style={{ marginTop: "15px" }}>
          <UploadButton handleClickOpen={handleClickOpen} />
        </div>
      </Typography>
      <div>
        <div>
          <UploadDialog
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
            handleFileUpload={handleFileUpload}
          />
          <ConfirmDialog
            open={confirmOpen}
            handleClose={() => {
              setConfirmOpen(false);
            }}
            handleConfirm={handleConfirm}
          />
          {loading && <p>Subiendo archivo...</p>} {/* display loading text */}
          <FileList files={files} />
        </div>
      </div>
    </div>
  );
}
