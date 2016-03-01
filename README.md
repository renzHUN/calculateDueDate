Due date calculator
=========

Calculate due date from submit date and working hours

## Installation

  npm install calculateduedate --save

## Usage

  var calculator = require('calculateduedate');

  var dueDate = calculator.calculateDueDate(new Date(2016, 2, 1, 12, 2), 2)

  console.log(dueDate.toString());

## Tests

  npm test

## Release History

* 0.1.0 Initial release