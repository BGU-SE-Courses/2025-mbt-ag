/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = 'https://sandbox.moodledemo.net/login/index.php';;

const xpaths = {
  loginWindow: {
    usernameInput: "//*[@id='username']",
    passwordInput: "//*[@id='password']",
    loginButton: "//*[@id='loginbtn']"
  },

  studentMainWindow: {
    myCourses: '//a[@role="menuitem" and contains(text(), "My courses")]'
  },
  studentCoursesPage: {
    course1: '/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/section[1]/div[1]/aside[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[3]/span[2]'
  },
  studentCourseWindow: {
    assignmentButton: "/html/body/div[2]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]"
  },
  studentAssignmentWindow: {
    addSubmissionButton: '/html/body/div[2]/div[4]/div[1]/div[2]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/button[1]'
  },
  submissionWindow: {
    submissionInput: "//*[@id='id_onlinetext_editor_ifr']",
    saveButton: '/html/body/div[3]/div[4]/div[1]/div[2]/div[1]/section[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]/input[1]'
  },


  teacherMainWindow: {
    myCourses: '//a[@role="menuitem" and contains(text(), "My courses")]'
  },
  teacherCoursesPage: {
    course1: '/html/body/div[2]/div[3]/div[1]/div[2]/div[1]/section[1]/div[1]/aside[1]/section[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[3]/span[2]'
  },
  teacherCourseWindow: {
    assignmentButton: '/html/body/div[2]/div[5]/div[1]/div[3]/div[1]/section[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]'
  },
  teacherAssignmentWindow: {
    settingsButton: '/html/body/div[2]/div[4]/div[1]/div[2]/nav[1]/ul[1]/li[2]/a[1]'
  },
  settingsWindow: {
    groupSubmissionSettingsButton: '/html/body/div[3]/div[4]/div[1]/div[3]/div[1]/section[1]/div[2]/form[1]/fieldset[6]/div[1]/div[1]/a[1]',
    groupSubmissionEnabledCheckbox: "//*[@id='id_teamsubmission']",
    saveButton: "//*[@id='id_submitbutton2']"
  }
}

const groupSubmission = {
  yes: "//*[@id='id_teamsubmission']/option[@value='1']",
  no: "//*[@id='id_teamsubmission']/option[@value='0']"
}

const searchTerm = 'pizza'
const studentuser = 'student'
const teacheruser = 'teacher'
const password = 'sandbox24'
const submissionText = 'This is a good submission'