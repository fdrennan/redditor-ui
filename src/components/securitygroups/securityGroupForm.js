import React, { useState, useContext, useEffect } from "react";
import SecurityGroupContext from "../../context/securitygroup/securityGroupContext";
import useStyles from "../../Theme";

import Grid from "@material-ui/core/Grid";
const SecurityGroupForm = () => {
  const [currentSg, setSg] = useState({
    sgName: "testr"
  });

  const securityGroupContext = useContext(SecurityGroupContext);
  const { getSecurityGroup, securityGroups } = securityGroupContext;

  const { sgName } = currentSg;

  useEffect(() => {
    getSecurityGroup();
    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    setSg({ ...currentSg, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  const classes = useStyles();

  return (
    <Grid justify="center" container component="main" className={classes.root}>
      <img src="http://ndexr.com:8000/comment_plot?limit=40000&granularity=1 minutes&timezone=MST" alt="Smiley face" height="1200" width="1700"></img>
    </Grid>
  );
};

export default SecurityGroupForm;
