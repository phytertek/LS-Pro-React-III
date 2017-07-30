import React from 'react'
import Grid from 'material-ui/Grid'
import Card from './Card'

const cardData = [
  {
    owner: 'Phytertek',
    photo: 'https://avatars1.githubusercontent.com/u/1939054?v=3&s=400',
    likes: 0,
    comments: [
      {
        owner: 'Bob',
        comment: 'Like a ninja'
      }
    ]
  },
  {
    owner: 'Phytertek',
    photo: 'https://avatars1.githubusercontent.com/u/1939054?v=3&s=400',
    likes: 0,
    comments: [
      {
        owner: 'Bob',
        comment: 'Like a ninja'
      }
    ]
  },
  {
    owner: 'Phytertek',
    photo: 'https://avatars1.githubusercontent.com/u/1939054?v=3&s=400',
    likes: 0,
    comments: [
      {
        owner: 'Bob',
        comment: 'Like a ninja'
      }
    ]
  }
]

const CardContainer = () => {
  return(
    <div>
      <Grid container align="center" direction="column" justify="center" gutter="16">
        
          {
            cardData.map((card, id) => (
              <Grid item>
                <Card id={id} cardData={card}/>
              </Grid>
            ))
          }
      </Grid>
    </div>
  )
}

export default CardContainer
