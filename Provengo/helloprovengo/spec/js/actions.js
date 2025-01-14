// function composeQuery(session, data) {
//   session.writeText(xpaths.searchWindow.searchInput, data.text)
// }

// function startSearch(session) {
//   with(session) {
//     click(xpaths.searchWindow.searchButton)
//   }
// }

// function feelLucky(session) {
//   with(session) {
//     click(xpaths.searchWindow.feelingLuckyButton)
//   }
// }

function enterUsername(session, data) {
  session.writeText(xpaths.loginWindow.usernameInput, data.username);
}

function enterPassword(session, data) {
  session.writeText(xpaths.loginWindow.passwordInput, data.password);
}

function clickLoginButton(session) {
  session.click(xpaths.loginWindow.loginButton);
}

function openStudentCourse(session) {
  session.click(xpaths.studentMainWindow.courseNameButton);
}

function openStudentAssignment(session) {
  session.click(xpaths.courseWindow.assignmentButton);
}

function clickAddSubmission(session) {
  session.click(xpaths.studentAssignmentWindow.addSubmissionButton);
}

function enterSubmissionText(session, data) {
  session.writeText(xpaths.submissionWindow.submissionInput, data.text);
}

function clickSaveButton(session) {
  session.click(xpaths.submissionWindow.saveButton);
}


function openTeacherCourse(session) {
  session.click(xpaths.teacherMainWindow.courseNameButton);
}

function openTeacherAssignment(session) {
  session.click(xpaths.courseWindow.assignmentButton);
}

function clickSettingsButton(session) {
  session.click(xpaths.teacherAssignmentWindow.settingsButton);
}

function clickGroupSubmissionSettings(session) {
  session.click(xpaths.settingsWindow.groupSubmissionSettingsButton);
}

function setGroupSubmissionToIndividual(session) {
  // session.selectDropdown(xpaths.settingsWindow.groupSubmissionEnabledCheckbox, "0");
  // const script = `
  //   const dropdown = document.evaluate('${xpaths.settingsWindow.groupSubmissionEnabledCheckbox}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  //   dropdown.value = 'No'; // Set the value to 'No'
  //   dropdown.dispatchEvent(new Event('change')); // Trigger change event
  // `;
  // session.executeScript(script);
  session.click(groupSubmission.yes)
}

function saveSettings(session) {
  session.click(xpaths.settingsWindow.saveButton);
}
