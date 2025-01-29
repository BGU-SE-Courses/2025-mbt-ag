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
  session.moveToElement(xpaths.settingsWindow.groupSubmissionEnabledCheckbox);
  session.click(groupSubmission.no)
}

function saveSettings(session) {
  session.moveToElement(xpaths.settingsWindow.saveButton);
  session.click(xpaths.settingsWindow.saveButton);
}
