/* @provengo summon selenium */

/**
 * This story opens a new browser window, logs into Moodle, navigates to a course, and submits an assignment.
 */
bthread('Assignment Submission', function () {
  let session = new SeleniumSession('assignmentSubmission');
  session.start(URL);

  // Login process
  enterUsername(session, { username: studentuser });
  enterPassword(session, { password: password });
  clickLoginButton(session);

  // Navigate to course and assignment
  openStudentCourse(session);
  openStudentAssignment(session);

  // Add submission
  clickAddSubmission(session);

  // Submit assignment
  enterSubmissionText(session, { text: submissionText });
  clickSaveButton(session);
});

/**
 * This story opens a new browser window, logs into Moodle as a teacher, navigates to a course, and changes assignment settings to individual submissions.
 */
bthread('Change Assignment to Individual Submissions', function () {
  let session = new SeleniumSession('assignmentSettings');
  session.start(URL);

  // Login process
  enterUsername(session, { username: teacheruser });
  enterPassword(session, { password: password });
  clickLoginButton(session);

  // Navigate to course and assignment
  openTeacherCourse(session);
  openTeacherAssignment(session);

  // Open assignment settings
  clickSettingsButton(session);

  // Change group submission settings
  clickGroupSubmissionSettings(session);
  setGroupSubmissionToIndividual(session);
  saveSettings(session);
});