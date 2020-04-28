import React, { useState, useContext, useEffect } from "react";
import InstanceContext from "../../context/instance/instanceContext";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "../../Theme";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
const InstanceForm = () => {
  const classes = useStyles();

  const instanceContext = useContext(InstanceContext);

  const {
    clearCurrentInstance,
    instance,
    getInstances
  } = instanceContext;

  useEffect(() => {
    if (instance !== null) {
      getInstances(instance);
    } else {
      setInstance({
        ...currentInstance
      });
    }
  }, [instanceContext, instance]);

  const [currentInstance, setInstance] = useState({
    key: "covid",
    limit: "100"
  });

  const {
    limit,
    key
  } = currentInstance;

  const onChange = e =>
    setInstance({ ...currentInstance, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (instance === null) {
      getInstances(currentInstance);
    } else {
      getInstances(currentInstance);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentInstance();
  };

  return (
    <div>
      <form
          // className={classes.form}
          onSubmit={onSubmit}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography>
              <h1>Search Reddit</h1>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="key"
                label="Search Phrase"
                autoComplete="key"
                autoFocus
                type="text"
                placeholder="Instance Storage: 50"
                name="key"
                value={key}
                onChange={onChange}
            />
          </Grid>
            <Grid item xs={6}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="limit"
            label="Maximum results - up to 1000"
            autoComplete="email"
            autoFocus
            type="text"
            name="limit"
            value={limit}
            onChange={onChange}
          />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
            value={instance ? "Update Contact" : "Start Server"}
          >
            Run Query
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default InstanceForm;
