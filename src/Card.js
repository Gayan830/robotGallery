import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robot' src='https://robohash.org/test?200*200' />
                <div>
                    <h2>Jane</h2>
                    <p>Jane@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Card
