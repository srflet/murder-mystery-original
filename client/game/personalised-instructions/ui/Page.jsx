import React, { Component } from 'react';

// Importing the pages
import Start from '../pages/Start';
import IndependentInvestigation from '../pages/IndependentInvestigation';
import IntroDiscussion from '../pages/IntroDiscussion';
import InitialWhodunit from '../pages/InitialWhodunit';
import TestIncentives from '../pages/TestIncentives';
import ClueHints from '../pages/ClueHints';
import DiscussionInstructionsPage from '../pages/DiscussionInstructionsPage';
import PoliceInformation from '../pages/PoliceInformation';
import SummaryClues from '../pages/SummaryClues';
import ComNComp from '../pages/ComNComp';

// Based on the currentPage number (that the player can change with navigating buttons),
// show that page and passed down all the props.

export default class Page extends Component {
    render() {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);

        if (currentPage === 1) {
            return (
                <Start {...this.props} />
            )
        } else if (currentPage === 2) {
            return (
                <PoliceInformation {...this.props} />
            )
        } else if (currentPage === 3) {
            return (
                <IndependentInvestigation {...this.props} />
            )
        } else if (currentPage === 4) {
            return (
                <SummaryClues {...this.props} />
            )
        } else if (currentPage === 5) {
            return (
                <InitialWhodunit {...this.props} />
            )
        } else if (currentPage === 6) {
            return (
                <IntroDiscussion {...this.props} />
            )
        } else if (currentPage === 7) {
            return (
                <ComNComp {...this.props} />
            )
        } else if (currentPage === 8) {
            return (
                <TestIncentives {...this.props} />
            )
        } else if (currentPage === 9) {
            return (
                <ClueHints {...this.props} />
            )
        } else if (currentPage === 10) {
            return (
                <DiscussionInstructionsPage {...this.props} />
            )
        }
    }
}
