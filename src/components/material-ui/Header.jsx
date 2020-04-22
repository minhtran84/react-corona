import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
   headerTypography: {
       flex: 1
   } 
}))

const Header = ({ themeMode, lightMode, darkMode }) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.headerTypography}>
                    COVID-19 Tracker APP
                </Typography>
                {/* <TrackChangesIcon /> */}
                { themeMode === 'light' ? (
                    <IconButton color="inherit" onClick={darkMode}>
                        <Brightness2Icon />
                    </IconButton>
                ) : (
                    <IconButton color="inherit" onClick={lightMode}>
                        <Brightness7Icon />
                    </IconButton>
                )}                
            </Toolbar>
        </AppBar>
    );
}

export default Header;