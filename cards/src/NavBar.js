import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('NavBar', {
  root: { 
    width: '100%'
  }
})

const NavBar = props => {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Fauxstagram
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(NavBar)