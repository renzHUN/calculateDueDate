/**
  * @desc calculate due date from submit date and working hours
  * @param <Date> submitDate
  * @param <Number> turnAround
  * @return <Date> duaDate
*/

exports.calculateDueDate = function (submitDate, turnAround) {
    'use strict';
    var remainigHours = turnAround;
    var checkedDate = new Date(submitDate);
    var nonWorkingHours = 0;

    do {

        // increment by one hour the checked date
        checkedDate.setTime(checkedDate.getTime() + 60 * 60 * 1000);

        // check the actual date by the rules
        if (
            (checkedDate.getDay() === 0) ||
            (checkedDate.getDay() === 6) ||
            (checkedDate.getHours() < 9) ||
            (checkedDate.getHours() >= 17)
        ) {

            // if nonworking hour, increment the nonworking hour counter
            nonWorkingHours++;
        } else {

            // if working hour, decrase the working hour countdown
            remainigHours--;
        }

    // loop while the working hour countdown reach zero
    } while (remainigHours > 0);

    // sum working and nonworking hours and calculate the due date
    var dueDate = new Date(submitDate.getTime() + (turnAround + nonWorkingHours) * 60 * 60 * 1000);
    return dueDate;
};