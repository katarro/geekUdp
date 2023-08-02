import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

export default function ConfirmationDialog({
  open,
  handleClose,
  handleConfirm,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Confirmar subida, una vez subido no podrá eliminarlo
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancelar
        </Button>

        <Button onClick={handleConfirm} color="primary">
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
