// @provengo summon ctrl

/**
 * List of events "of interest" that we want test suites to cover.
 */


const GOALS = [
    any(/studentOpenCourse/),
    any(/studentOpenAssignment/),
    any(/studentClickAddSubmission/),
    any(/studentEnterSubmissionText/),
    any(/teacherSaveSettings/),
    Ctrl.markEvent("studentSubmitAssignmentBeforeTeacherChangesSettings")
];

// Domain specific:
const makeGoals_domainSpecific = function(){
    return [ [ any(/studentOpenCourse/), any(/studentOpenAssignment/), any(/studentClickAddSubmission/), any(/studentEnterSubmissionText/), any(/teacherSaveSettings/) ],
             [ any(/studentOpenCourse/), any(/studentOpenAssignment/), any(/studentClickAddSubmission/), any(/teacherSaveSettings/) ],
             [ any(/studentOpenCourse/), any(/studentOpenAssignment/), any(/teacherSaveSettings/) ],
             [ any(/studentOpenCourse/), any(/teacherSaveSettings/) ],
             [ any(/teacherSaveSettings/) ],
             [ Ctrl.markEvent("studentSubmitAssignmentBeforeTeacherChangesSettings") ] ];
}

// Two way:
function isLegalPair( event1, event2 ) {
    return !((event1.match(/studentOpenAssignment/) && event2.match(/studentOpenCourse/)) ||
                (event1.match(/studentClickAddSubmission/) && event2.match(/studentOpenAssignment/)) ||
                (event1.match(/studentEnterSubmissionText/) && event2.match(/studentClickAddSubmission/)) ||
                event1.match(/studentEnterSubmissionText/) && event2.match(/studentOpenAssignment/) ||
                event1.match(/studentEnterSubmissionText/) && event2.match(/studentOpenCourse/));
}

const makeGoals = function(){
    let events = [ any(/studentOpenCourse/), any(/studentOpenAssignment/), any(/studentClickAddSubmission/), any(/studentEnterSubmissionText/), any(/teacherSaveSettings/) ];
    let pairs = [];
    for (let i=0; i<events.length; i++) {
        for (let j=i+1; j<events.length; j++) {
            if (isLegalPair(events[i], events[j])) {
                pairs.push([events[i], events[j]]);
            }
        }
    }
    return pairs;
}

/**
 * Ranks test suites by how many events from the GOALS array were met.
 * The more goals are met, the higher the score.
 * 
 * It make no difference if a goal was met more then once.
 *
 * @param {Event[][]} ensemble The test suite to be ranked.
 * @returns Number of events from GOALS that have been met.
 */
function rankByMetGoals( ensemble ) {
    const unreachedGoals = [];
    for ( let idx=0; idx<GOALS.length; idx++ ) {
        unreachedGoals.push(GOALS[idx]);
    }

    for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
        let test = ensemble[testIdx];
        for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
            let event = test[eventIdx];
            for (let ugIdx=unreachedGoals.length-1; ugIdx >=0; ugIdx--) {
                let unreachedGoal = unreachedGoals[ugIdx];
                if ( unreachedGoal.contains(event) ) {
                    unreachedGoals.splice(ugIdx,1);
                }
            }
        }
    }

    return GOALS.length-unreachedGoals.length;
}

/**
 * Ranks potential test suites based on the percentage of goals they cover.
 * Goal events are defined in the GOALS array above. An ensemble with rank
 * 100 covers all the goal events.
 *
 * Multiple ranking functions are supported - to change ranking function,
 * use the `ensemble.ranking-function` configuration key, or the 
 * --ranking-function <functionName> command-line parameter.
 *
 * @param {Event[][]} ensemble the test suite/ensemble to be ranked
 * @returns the percentage of goals covered by `ensemble`.
 */
 function rankingFunction(ensemble) {
    
    // How many goals did `ensemble` hit?
    const metGoalsCount = rankByMetGoals(ensemble);
    // What percentage of the goals did `ensemble` cover?
    const metGoalsPercent = metGoalsCount/GOALS.length;

    return metGoalsPercent * 100; // convert to human-readable percentage
}

