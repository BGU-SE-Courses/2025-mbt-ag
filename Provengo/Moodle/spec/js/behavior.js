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
  sync({ request: Event('login', {'session': {'name': session.name},'username': studentuser})})

  // Navigate to course and assignment
  openStudentCourse(session);
  sync({ request: Event('studentOpenCourse', {'session': {'name': session.name}}) })
  openStudentAssignment(session);
  sync({ request: Event('studentOpenAssignment', {'session': {'name': session.name}}) })


  // Add submission
  clickAddSubmission(session);
  sync({ request: Event('studentClickAddSubmission', {'session': {'name': session.name}}) })

  // Submit assignment
  enterSubmissionText(session, { text: submissionText });
  sync({ request: Event('studentEnterSubmissionText', {'session': {'name': session.name},'text': submissionText}) })
  clickSaveButton(session);
  sync({ request: Event('studentSaveGroupSubmission', {'session': {'name': session.name}}) })
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
  sync({ request: Event('login', {'session': {'name': session.name},'username': teacheruser})})

  // Navigate to course and assignment
  openTeacherCourse(session);
  sync({ request: Event('teacherOpenCourse', {'session': {'name': session.name}}) })
  openTeacherAssignment(session);
  sync({ request: Event('teacherOpenAssignment', {'session': {'name': session.name}}) }) 

  // Open assignment settings
  clickSettingsButton(session);
  sync({ request: Event('teacherClickSettingsButton', {'session': {'name': session.name}}) })

  // Change group submission settings
  clickGroupSubmissionSettings(session);
  sync({ request: Event('teacherClickGroupSubmissionSettings', {'session': {'name': session.name}}) })
  setGroupSubmissionToIndividual(session);
  sync({ request: Event('teacherSetGroupSubmissionToIndividual', {'session': {'name': session.name}}) })
  saveSettings(session);
  sync({ request: Event('teacherSaveSettings', {'session': {'name': session.name}}) })
  // sync({ block: Event('saveGroupSubmission') }) ???
});

bthread('Student submits assignment before teacher changes settings', function() {
  sync({ waitFor: Event('studentSaveGroupSubmission', {'session': {'name': 'assignmentSubmission'}}) })
  sync({ waitFor: Event('teacherSaveSettings', {'session': {'name': 'assignmentSettings'}}) })
  Ctrl.doMark('studentSubmitAssignmentBeforeTeacherChangesSettings')
})