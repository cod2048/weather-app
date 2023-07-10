import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
    return (
        <div>
            <Button variant="success">Current Location</Button>{' '}
            <Button variant="success">paris</Button>{' '}
            <Button variant="success">new york</Button>{' '}
        </div>
    )
}

export default WeatherButton
