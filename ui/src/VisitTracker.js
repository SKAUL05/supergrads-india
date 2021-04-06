import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  React.useEffect(() => {

    setLoading(true);

    //update visit count in database and fetch latest count
    setTimeout(() => {
        setLoading(false);
        setVisitCount(visitCount + 1); //update actual visit count from database
    }, 2000);
  }, []);

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