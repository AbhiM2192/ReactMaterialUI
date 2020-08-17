import React from 'react'
import { AppBar, Toolbar, Typography,IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';

const useStyles = makeStyles((theme) =>{
    console.log(theme)
    return {
        typoStyles:{   
        flexGrow:1
    },
    voiceIconStyles:{
        color:theme.palette.common.white
    }
    
}
})
function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typoStyles} >
                    This is our header
                </Typography>
                <IconButton aria-label="Enable Voice search">
                    <SettingsVoiceIcon className={classes.voiceIconStyles}/>
                </IconButton>
                
            </Toolbar>
        </AppBar>
    )
}

export default Header
