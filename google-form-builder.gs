/**
 * Creates one combined Google Form for the wedding RSVP, accommodation questions,
 * and Jeju trip interest.
 *
 * How to use:
 * 1. Open https://script.google.com/ and create a new project.
 * 2. Paste this file into Code.gs.
 * 3. Run createWeddingRSVPForm().
 * 4. Approve permissions.
 * 5. Open View > Logs and copy the responder URL into the website.
 */
function createWeddingRSVPForm() {
  const form = FormApp.create("Wuk Jin & Emma's Korean Wedding RSVP");

  form.setTitle("Wuk Jin & Emma's Korean Wedding RSVP");
  form.setDescription(
    "Please reply by 31 January 2027. This single form covers the wedding RSVP, dietary restrictions, approximate travel dates, accommodation interest, and Jeju trip interest."
  );
  form.setConfirmationMessage(
    "Thank you for replying! We will use your answers to plan the wedding day, accommodation, and the Jeju trip."
  );
  form.setAllowResponseEdits(true);

  form.addSectionHeaderItem()
    .setTitle("Wedding RSVP")
    .setHelpText("Please submit one response per household/group if you are travelling together.");

  form.addMultipleChoiceItem()
    .setTitle("Will you attend the wedding on 3 April 2027?")
    .setChoiceValues(["Yes", "No", "Not sure yet"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Names of all guests included in this response")
    .setHelpText("Please write the full names of everyone in your group.")
    .setRequired(true);

  form.addListItem()
    .setTitle("Number of people")
    .setChoiceValues(["1", "2", "3", "4", "5", "6+ / I will explain below"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Dietary restrictions or allergies")
    .setHelpText("Please write any allergies, food restrictions, or important dietary notes. Write 'none' if there are none.")
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle("Travel dates")
    .setHelpText("Approximate dates are fine if your flights are not booked yet.");

  form.addTextItem()
    .setTitle("Approximate arrival date in Korea")
    .setHelpText("Example: 1 April 2027, or 'not booked yet'.")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Approximate departure date from Korea")
    .setHelpText("Example: 10 April 2027, or 'not booked yet'.")
    .setRequired(false);

  form.addSectionHeaderItem()
    .setTitle("Accommodation")
    .setHelpText("These answers are for planning only and do not guarantee a reservation yet.");

  form.addMultipleChoiceItem()
    .setTitle("Would you like to stay at the wedding venue the night before the wedding?")
    .setHelpText("This refers to the hanok-style accommodation at/near Chojeong Haenggung before the wedding.")
    .setChoiceValues(["Yes", "Maybe / please send more information", "No"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Would you like to stay at Saenggeo Jincheon Natural Recreation Forest after the wedding for 1 night?")
    .setHelpText("This is recommended for guests joining the barbecue after-party at the groom's parents' place.")
    .setChoiceValues(["Yes", "Maybe / please send more information", "No"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Accommodation notes")
    .setHelpText("Room preferences, who you would like to stay with, accessibility needs, or questions.")
    .setRequired(false);

  form.addSectionHeaderItem()
    .setTitle("Jeju group trip")
    .setHelpText("We would like to organize a Jeju trip together after the wedding. The itinerary is not finalized yet.");

  form.addMultipleChoiceItem()
    .setTitle("Are you interested in joining the Jeju trip after the wedding?")
    .setChoiceValues(["Yes", "Maybe", "No"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Jeju trip notes")
    .setHelpText("Timing constraints, rooming preferences, activity preferences, or questions.")
    .setRequired(false);

  form.addSectionHeaderItem()
    .setTitle("Contact")
    .setHelpText("Please provide the best way to reach you for follow-up questions.");

  form.addTextItem()
    .setTitle("Best contact for follow-up")
    .setHelpText("Email, WhatsApp number, or preferred contact method.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Anything else we should know?")
    .setRequired(false);

  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Responder URL: " + form.getPublishedUrl());
}
