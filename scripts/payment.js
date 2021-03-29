/*jslint browser:true */

(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function PaymentList(selector) {
    if (!selector) {
        throw new Error('No selector provided');
        }
        this.$payElement = $(selector);
        if (this.$payElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    PaymentList.prototype.addClickHandler = function (fn) {
        this.$payElement.on('click', 'input', function (event) {
        var email = event.target.value;
        this.removeRow(email);
        fn(email);
        }.bind(this));
    };

    PaymentList.prototype.addRow = function (coffeeOrder) {
        // Create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        // Add the new row instance's $element property to the checklist
        this.$payElement.append(rowElement.$payElement);
    };

    // PaymentList.prototype.addSubmitHandler = function (fn) {
    //     console.log('Setting submit handler for form');
    //     this.$payElement.on('submit', function (event) {
    //         event.preventDefault();

    //         var data = {};
    //         $(this).serializeArray().forEach(function (item) {
    //             data[item.name] = item.value;
    //             console.log(item.name + ' is ' + item.value);
    //         });
    //         console.log(data);
    //         fn(data);
    //         this.reset();
    //         this.elements[0].focus();
    //     });
    // };

    App.PaymentList = PaymentList;
    window.App = App;
})(window);
