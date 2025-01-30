Feature: Group submits to an assignment

  As a student in a group
  I want to submit to a group assignment
  So that the submission is recorded for all group members

#  Background:
#    Given I am logged in as a teacher
#    When I am logged in with "admin" and "I#X^M8rDZu"
#    And I create a new course named "New Course"
#    And I create a new assignment named "Assignment 1" with submission type set to group

  Scenario: Successfully submit as a group
    Given I am logged in as a student
    When I am logged in as a student with "student1" and "Password123*"
    And I navigate to the assignment "Assignment 1"
    And I click Add submission
    And I write "hello" as the answer
    And I click the submit button
    Then the system should confirm the submission was successful

