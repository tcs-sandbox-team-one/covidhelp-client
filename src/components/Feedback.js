import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function Feedback() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>Feedback</Box>
    </div>
  );
}
