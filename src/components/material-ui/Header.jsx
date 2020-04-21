import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
   headerTypography: {
       flex: 1
   } 
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.headerTypography}>
                    COVID-19 Tracker APP
                </Typography>
                <TrackChangesIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;