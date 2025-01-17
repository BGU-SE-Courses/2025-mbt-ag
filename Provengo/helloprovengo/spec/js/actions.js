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

function login(session, data) {
  sync({ request: Event('start(login)', {'session':{'name':session.name},'data':data})})
  with(session) {
    writeText(xpaths.loginWindow.usernameInput, data.username)
    writeText(xpaths.loginWindow.passwordInput, data.password)
    click(xpaths.loginWindow.loginButton)
  }
  sync({ request: Event('end(login)', {'session':{'name':session.name},'data':data})})
}

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
  session.click(xpaths.studentMainWindow.myCourses);
  session.click(xpaths.studentCoursesPage.course1);
}

function openStudentAssignment(session) {
  session.click(xpaths.studentCourseWindow.assignmentButton);
}

function clickAddSubmission(session) {
  session.click(xpaths.studentAssignmentWindow.addSubmissionButton);
}

function enterSubmissionText(session, data) {
  session.moveToElement(xpaths.submissionWindow.submissionInput);
  session.writeText(xpaths.submissionWindow.submissionInput, data.text);
}

function clickSaveButton(session) {
  session.moveToElement(xpaths.submissionWindow.saveButton);
  session.click(xpaths.submissionWindow.saveButton);
}


function openTeacherCourse(session) {
  session.click(xpaths.teacherMainWindow.myCourses);
  session.click(xpaths.teacherCoursesPage.course1);
}

function openTeacherAssignment(session) {
  session.click(xpaths.teacherCourseWindow.assignmentButton);
}

function clickSettingsButton(session) {
  session.click(xpaths.teacherAssignmentWindow.settingsButton);
}

function clickGroupSubmissionSettings(session) {
  session.moveToElement(xpaths.settingsWindow.groupSubmissionSettingsButton);
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
  session.moveToElement(xpaths.settingsWindow.groupSubmissionEnabledCheckbox);
  session.click(groupSubmission.no)
}

function saveSettings(session) {
  session.moveToElement(xpaths.settingsWindow.saveButton);
  session.click(xpaths.settingsWindow.saveButton);
}
