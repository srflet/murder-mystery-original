import React, { Component } from 'react'
import { Centered } from "meteor/empirica:core";
import DevWrapper from '../general/dev-wrapper/DevWrapper';

import DoNotCross from '../general/images/DoNotCross'; // image

// Background for the case
export default class Background extends Component {
    render() {
        const { hasPrev, hasNext, onNext, onPrev } = this.props;

        return (
            <DevWrapper {...this.props}>
                <Centered>
                    <div className="instructions">
                        <h2>Background</h2>
                        <DoNotCross />
                        <br />
                        <p>
                            Please imagine you are a Private Investigator or a PI (e.g. Sherlock Holmes if you will) of a new private investigation firm in New York City. Your firm has been hired by a local businessman Mr. Lee to identify the perpetrator of a terrible automobile collision that resulted in the death of his only daughter. You represent your firm in handling Mr. Lee's case.
         			    </p>
                        <p>
                            The police department has spent 8 weeks on the case but was unable to draw conclusions. However, Mr. Lee has good reasons to believe it was not just an accident, but that one person was responsible for the whole collision. Mr. Lee has made it clear that he will spare no expense in identifying the person who is responsible for his daughter’s death.
                        </p>
                        <p>
                            He has hired you and two other private investigators from two other PI agencies to crack the case.
                        </p>
                        <br />
                        <p>
                            <strong>IMPORTANTLY - The clues that will be available to you are from two sources:</strong>
                        </p>
                        <ol>
                            <li><strong>Notes from the police investigation, which will be available to all three players</strong></li>
                            <li><strong>Clues from your own independent investigation that are UNIQUE to you</strong></li>
                        </ol>
                    </div>
                    <br />

                    <p className="button-holder">
                        <button type="button" onClick={onPrev} disabled={!hasPrev}>
                            Previous
                        </button>
                        &emsp;
                        <button type="button" onClick={onNext} disabled={!hasNext}>
                            Next
                        </button>
                    </p>
                </Centered>
            </DevWrapper>
        )
    }
}
