import { useUploadFileDialog } from "../hooks/useUploadFileDialog";
import ConfirmationDialog from "./ConfirmDialog";
import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
export default function UploadFileDialog({
  open,
  handleClose,
  handleFileUpload,
}) {
  const {
    file,
    title,
    description,
    openConfirmationDialog,
    setFile,
    setTitle,
    setDescription,
    handleSubmit,
    setOpenConfirmationDialog,
  } = useUploadFileDialog();

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <input
            type="file"
            onChange={() => {
              setFile(event.target.files[0]);
            }}
            required
          />
          <TextField
            margin="dense"
            label="Título"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            label="Descripción"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Subir
          </Button>
        </DialogActions>
      </Dialog>
      {openConfirmationDialog && (
        <ConfirmationDialog
          open={openConfirmationDialog}
          handleClose={() => setOpenConfirmationDialog(false)}
          handleConfirm={() => {
            handleFileUpload(file, title, description);
            handleClose();
            setFile(null);
            setTitle("");
            setDescription("");
            setOpenConfirmationDialog(false);
          }}
        />
      )}
    </div>
  );
}
