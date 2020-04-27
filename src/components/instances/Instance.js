import React, { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import InstanceContext from "../../context/instance/instanceContext";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../Theme";
import Box from "@material-ui/core/Box";
import {Container} from "semantic-ui-react";



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
    <div>
      {/*<Box width={1/4}>*/}
      {/*  <a href={'http://ndexr.com:8000/comment_plot?limit=100000'} target="_blank">*/}
      {/*    <img src={'http://ndexr.com:8000/comment_plot?limit=100000'} alt='' />*/}
      {/*  </a>*/}
      {/*</Box>*/}
      {/*<div>*/}
        {instances !== null && !loading ? (
            <Box container component="main" className={classes.root}>
                {
                    JSON.parse(instances).map(data => {
                        console.log(data)
                        const {author, title, url, subreddit, created_utc, thumbnail, selftext} = data;
                        return <Container xs={3} >
                          <hr/>
                            <div>
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
                              <strong>Selftext:</strong> {selftext}
                            </div>
                          <Grid xs={1}>
                              <a href={url} target="_blank">
                                <img src={url} alt='' />
                              </a>
                          </Grid>

                        </Container>
                    })
                }
            </Box>
        ) : (
          <Spinner />
        )}

    </div>
  );
};

export default Instance;
