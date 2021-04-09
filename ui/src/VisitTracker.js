import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import {config} from './constants';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function VisitTracker() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [visitCount, setVisitCount] = React.useState(0);
  const apiUrl = config['API_URL'] + '/count';

  React.useEffect(() => {
    setLoading(true);
  
    setTimeout(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setVisitCount(Number(data));
          setLoading(false);
        });
    }, 2000);

  }, [apiUrl]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Total visits
        </Typography>
        <Typography variant="h5" component="h2">
            {
                loading ? <CircularProgress /> : visitCount
            }
            
        </Typography>
      </CardContent>
    </Card>
  );
}