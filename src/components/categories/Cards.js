import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


import '../lists/Table.css';
        const Cards = (props) => {
            const { currencies, history} = props;
            return (
                    <Container>
                        {currencies.map((currency) => (
                        <div 
                        key={currency.id}
                        onClick={ () => history.push(`/currency/${currency.id}`)}
                        >
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center">
                            <Card>
                                <CardContent>
                                    <Typography  color="textSecondary" gutterBottom>
                                            {currency.name} 
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                            [Insert image here.]
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                            <CardActions>
                                <Button size="small">View {currency.name}  </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        </div>
                    ))}
                 </Container>
            );
        }
        Cards.propTypes = {
            currencies: PropTypes.array.isRequired,
            history: PropTypes.object.isRequired
        }
        
        export default withRouter(Cards);