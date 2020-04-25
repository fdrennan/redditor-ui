import React, { useState, useContext, useEffect } from "react";
import InstanceContext from "../../context/instance/instanceContext";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../Theme";
import Box from "@material-ui/core/Box";

const InstanceForm = () => {
  const classes = useStyles();
  const instanceContext = useContext(InstanceContext);

  const {
    addInstance,
    updateInstance,
    clearCurrentInstance,
    instance,
    getInstances
  } = instanceContext;

  useEffect(() => {
    if (instance !== null) {
      setInstance(instance);
    } else {
      setInstance({
        key: "covid",
        limit: "100",



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
      addInstance(currentInstance);
      getInstances();
    } else {
      updateInstance(currentInstance);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentInstance();
  };

  return (
    <Box m={2} p={2} border={1} borderRadius={16}>
      <form className={classes.form} onSubmit={onSubmit}>
        <div>
          <Typography>
            <h1>Search Reddit</h1>
          </Typography>
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
        </div>

        <div>
          {instance && (
            <div>
              <button onClick={clearAll}>Clear</button>
            </div>
          )}
        </div>
      </form>
    </Box>
  );
};

export default InstanceForm;
