import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import InstanceContext from "../../context/instance/instanceContext";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../Theme";
import Box from "@material-ui/core/Box";
import {Container} from "semantic-ui-react";
import Paper from '@material-ui/core/Paper';




const Instance = () => {
  const classes = useStyles();

  const instanceContext = useContext(InstanceContext);

  const { instances, getInstances, loading } = instanceContext;


  useEffect(() => {
    getInstances({instances});

    // eslint-disable-next-line
  }, []);

  if (instances !== null && instances.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  if (instances === "false") {
    return (
      <Typography>
        <h1>Create an instance to get started</h1>
      </Typography>
    );
  }

  return (
    <Grid   m={2} component="main" >
        {instances !== null && !loading ? (
            <Box>
                {
                    JSON.parse(instances).map(data => {
                        console.log(data)
                        const {author, title, url, subreddit, thumbnail,  created_utc, selftext} = data;
                        return (
                            <Box m={2}>

                              <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="flex-start"
                              >
                                <Box>
                                  <strong>Author:</strong> <a href={`http://reddit.com/u/${author}`} target="_blank">{author}</a>
                                  <br/>
                                  <strong>Title:</strong> {title}
                                  <br/>
                                  <strong>Created:</strong> {created_utc}
                                  <br/>
                                  <strong>url:</strong> <a href={url} target="_blank">{title}</a>
                                  <br/>
                                  <strong>Subreddit:</strong> <a href={`http://reddit.com/r/${subreddit}`} target="_blank">{subreddit}</a>
                                  <br/>
                                  <strong>Selftext:</strong> {selftext && `${selftext.toString().slice(0, 500)}.......`}
                                </Box>

                                <a href={url} target="_blank">
                                  <img src={thumbnail} alt='' />
                                </a>
                              </Grid>
                            </Box>

                        )
                    })
                }
            </Box>
        ) : (
          <Spinner />
        )}

    </Grid>
  );
};

export default Instance;
