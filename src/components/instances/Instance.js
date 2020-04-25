import React, { useContext, useEffect } from "react";

import Spinner from "../layout/Spinner";
import InstanceContext from "../../context/instance/instanceContext";
import SecurityGroupContext from "../../context/securitygroup/securityGroupContext";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../Theme";


const Instance = () => {
  const classes = useStyles();

  const instanceContext = useContext(InstanceContext);
  const securityGroupContext = useContext(SecurityGroupContext);
  const { instances, getInstances, loading } = instanceContext;
  const { createKeyFile } = securityGroupContext;

  useEffect(() => {
    getInstances();
    createKeyFile("ndexr");
    // eslint-disable-next-line
  }, []);

  if (instances !== null && instances.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  const refreshInstances = () => {
    getInstances();
  };

  if (instances === "false") {
    return (
      <Typography>
        <h1>Create an instance to get started</h1>
      </Typography>
    );
  }

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={refreshInstances}
      >
        Refresh
      </Button>
      <div>
        <br />
      </div>

      <div>
        {instances !== null && !loading ? (
            <div>
                {
                    JSON.parse(instances).map(data => {
                        const row = {data};
                        console.log(row)
                        return <div key={`${row.data['created_utc']}-${row.data['author']}`}>
                            <strong>Title:</strong> {row.data['title']}
                            <br/><br/>
                        </div>
                    })
                }
            </div>
            // JSON.parse(instances).map(x => <div>x</div>)

            // {console.log(instances)}
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Instance;
