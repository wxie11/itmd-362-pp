# Production Problem 04: Implementing HCI Guidelines for Touchscreens

## The Problem

Using the HCI guidelines from either Apple/iOS, Android/Google, or Windows, redesign the login page at
http://my.iit.edu/ for a touch-friendly environment. Use this to kickstart your work on Project 2.

**You only need to sketch your redesign**, and in the text below, reference at least three different
points of guidance from chosen HCI guidelines that went into your redesign sketches (you might
want to do multiple sketches, each highlighting a different feature of the same overall design).
Focus on touch-related elements.

## Resources

* Apple iOS HCI Guidlines:
  https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/
* Android:
  https://developer.android.com/design/index.html
* Windows Desktop Guidelines:
  https://developer.microsoft.com/en-us/windows/desktop/design

## Deliverables

Small commits to your Production Problems repository that include:

1) photographs of sketches of your new design, from your sketchbook
* Inside the sketch folder.
2) an explanation of three different points of guidance from your chosen guidelines (point to the
   specific URL where the guidance can be found) that you implemented in your sketch, written below:

* The current IIT login page is not mobile first and also only has one media query for big screens. That said, in the smaller screens like in phones and tablets, users have to zoom in to see the login box. Since we are focus on touch-related elements, I only sketch for small screens. My sketch is very simple and basic login page, there is two text fields for users to put in their username and password and some buttons. The main function is to let users log in to their student portal so all the other information in current iit page makes the page complicated.

* HCI Guideline One (URL): https://developer.apple.com/ios/human-interface-guidelines/controls/text-fields/
* Guideline from site: "Show a hint in a text field to help communicate purpose. A text field can contain
placeholder text—such as "Email" or "Password"—when there’s no other text in the field. Don’t use a separate
label to describe a text field when placeholder text is sufficient."
* How you implemented it in your sketch: Instead of labeling two text fields as 'Username' and 'Password' in current
iit login page, I put them as placeholder in my sketch because this allows me to have more spaces for touch targets for a smaller screen.



* HCI Guideline Two (URL): https://material.io/guidelines/usability/accessibility.html#accessibility-style
* Guideline from site: "Touch targets should be at least 48 x 48 dp...In most cases, touch targets should be
separated by 8dp of space or more to ensure balanced information density and usability."
* How you implemented it in your sketch: All the touch targets have a height of 48dp, such as the text fields and buttons and all the them are separated at least 8dp. These provide room for fingers and avoid unwanted responses.



* HCI Guideline Three (URL): https://developer.apple.com/ios/human-interface-guidelines/user-interaction/gestures/
* Guideline from site: "As a general rule, use standard gestures. People are familiar with the standard gestures and don’t appreciate being forced to learn different ways to do the same thing."
* How you implemented it in your sketch: Every component in the login page only uses one standard gesture: tap. The consistency makes the experience become natural and intuitive to users.
