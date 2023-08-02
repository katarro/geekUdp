import { useState } from "react";

export const useFileUpload = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([
    {
      id: 1,
      title: "Control Cálculo 1",
      description: "Control optimización derivadas y límites",
    },
    {
      id: 2,
      title: "Control Cálculo 2",
      description: "Control integración y series",
    },
  ]);

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleClickOpen = () => {
    setLoading(true); // start loading
    setOpen(true);
    setLoading(false); // end loading
  };

  const handleConfirm = () => {
    handleFileUpload(file, title, description);
    setConfirmOpen(false);
  };
  const handleFileUpload = (file, title, description) => {
    setFiles([...files, { file, title, description }]);
  };

  return {
    open,
    loading,
    files,
    confirmOpen,
    handleClickOpen,
    handleConfirm,
    handleFileUpload,
    setOpen,
    setConfirmOpen
  };
};
