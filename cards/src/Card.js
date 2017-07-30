import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('Card', {
  card: {
    maxWidth: 500
  }
})

export const aCard = (props) => {
  const classes = props.classes
  const { owner, photo, likes, comments } = {...props.cardData}
  return(
    <div key={props.id}>
      <Card className={classes.card}>
        <Grid container align="center" direction="column" justify="center" gutter="5">
          <Grid item>
            <CardMedia>
              <img src={photo} alt="URL"/>
            </CardMedia>
          </Grid>
          <CardContent>
            <Typography type="headline" component="h2">
              {owner}
            </Typography>
            <Typography component="p">
              {comments.map(c => `${c.owner} - ${c.comment}`)}
            </Typography>
            <Typography component="p">
              Likes: {likes}
            </Typography>
          </CardContent>
          <Grid item>
            <CardActions>
              <Button dense color="primary">
                Like
              </Button>
              <Button dense color="secondary">
                Share
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  cardData: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(aCard)