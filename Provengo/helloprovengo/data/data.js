/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'https://sandbox.moodledemo.net';

const xpaths = {
  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]'
  },
  mainWindow: {
    loginButton: '//a[@href="login/index.php"]',
  },
  loginWindow: {
    usernameInput: '//div[2]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]',
    passwordInput: '//body/div[2]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/input[1]',
    loginButton: '//body/div[2]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/button[1]'
  },

  studentMainWindow: {
    courseNameButton: '//body/div[2]/div[3]/div[1]/div[2]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/h3[1]/a[1]'
  },
  courseWindow: {
    assignmentButton: '//body/div[2]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]'
  },
  studentAssignmentWindow: {
    addSubmissionButton: '//body/div[2]/div[4]/div[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/button[1]'
  },
  submissionWindow: {
    submissionInput: '//body/div[3]/div[4]/div[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/fieldset[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]',
    saveButton: '//body/div[3]/div[4]/div[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]/input[1]'
  },

  teacherMainWindow: {
    courseNameButton: '//body/div[2]/div[3]/div[1]/div[2]/div[1]/section[1]/div[1]/div[2]/div[1]/div[1]/div[1]/h3[1]/a[1]'
  },
  courseWindow: {
    assignmentButton: '//body/div[2]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]'
  },
  teacherAssignmentWindow: {
    settingsButton: '//body/div[2]/div[4]/div[1]/div[2]/nav[1]/ul[1]/li[2]/a[1]'
  },
  settingsWindow: {
    groupSubmissionSettingsButton: '//body/div[3]/div[4]/div[1]/div[3]/div[1]/section[1]/div[2]/form[1]/fieldset[6]/div[1]/div[1]/a[1]',
    groupSubmissionEnabledCheckbox: '//body/div[3]/div[4]/div[1]/div[3]/div[1]/section[1]/div[2]/form[1]/fieldset[6]/div[2]/div[1]/div[2]/select[1]',
    saveButton: '//body/div[3]/div[4]/div[1]/div[3]/div[1]/section[1]/div[2]/form[1]/div[4]/div[2]/div[1]/div[1]/div[2]/span[1]/input[1]'
  }
}

const groupSubmission = {
  yes: "//option[@value='1']",
  no: "//option[@value='0']"
}

const searchTerm = 'pizza'
const studentuser = 'student'
const teacheruser = 'teacher'
const password = 'sandbox24'
const submissionText = 'This is a good submission'