import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTitle,
  DialogActions,  
  DialogContent,
  DialogContentText,
  Button,
  Link, 
} from "@mui/material"

type Props = {
  open: boolean;
  onClose: () => void;
}

const LearnDialog = ({
  open, 
  onClose,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      >
      <DialogTitle>
        {t("Tutorials and Documentation")}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {t("You are about to visit 'Learn.RoboSats' page. This is a community built site hosting tutorials and documentation to help you learn to use RoboSats and understand how it works.")}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{t("Back")}</Button>
        <Button onClick={onClose} autoFocus component={Link} href="https://learn.robosats.com" target="_blank">
          {t("Let's go!")}
        </Button>
      </DialogActions>

    </Dialog>
  )
}

export default LearnDialog;
