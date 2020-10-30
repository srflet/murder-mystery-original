import React, { Component } from 'react'

export default class CluesCheckGameTip extends Component {
    render() {
        return (
            <div className="game-tip">
                <span>
                    <strong><u>Game tip:</u></strong> These hints can help you get started, <strong>Look at what type of unique clues other players have and try to ask specific questions (e.g., "Hi, what is the gender of the guilty person?").</strong> You will need more than your own unique clues to have a chance to find the guilty person.
            </span>
            </div>
        )
    }
}
