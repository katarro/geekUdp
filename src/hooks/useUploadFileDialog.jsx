import React from "react";
export const useUploadFileDialog = () => {
  const [file, setFile] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [openConfirmationDialog, setOpenConfirmationDialog] =
    React.useState(false);

  const handleSubmit = () => {
    if (file && title && description) {
      setOpenConfirmationDialog(true);
    } else {
      alert("Por favor, rellena todos los campos.");
    }
  };

  return {
    file,
    title,
    description,
    setFile,
    setTitle,
    setDescription,
    handleSubmit,
    setOpenConfirmationDialog,
    openConfirmationDialog,
  };
};
