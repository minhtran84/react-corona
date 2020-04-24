import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styles from './Header.module.css';

const Header = ({ themeMode, lightMode, darkMode }) => {
    return (
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Typography className={styles.header}>
                    COVID-19 Tracker APP
                </Typography>
                {/* <TrackChangesIcon /> */}
                { themeMode === 'light' ? (
                    <React.Fragment>
                        <Typography>Light theme</Typography>
                        <IconButton color="inherit" onClick={darkMode}>
                            <Brightness2Icon />
                        </IconButton>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography>Dark theme</Typography>
                        <IconButton color="inherit" onClick={lightMode}>
                            <Brightness7Icon />
                        </IconButton>
                    </React.Fragment>
                )}                
            </Toolbar>
        </AppBar>
    );
}

export default Header;