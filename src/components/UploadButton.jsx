import React from "react";
import { Button } from "@material-ui/core";

export default function UploadButton({ handleClickOpen }) {
  return (
    <div>
      <button
        variant="outlined"
        className="btn btn-light"
        onClick={handleClickOpen}
      >
        Subir archivo
      </button>
    </div>
  );
}
