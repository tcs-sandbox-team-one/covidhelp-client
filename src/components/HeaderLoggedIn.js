import React from "react";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

const HeaderLoggedIn = (props) => {
  const handleLogout = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("user");
  };
  return (
    <div>
      <Button variant="contained" color="primary">
        {localStorage.getItem("user")}
      </Button>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default withRouter(HeaderLoggedIn);
