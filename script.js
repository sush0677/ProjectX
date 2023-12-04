document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.account-opening-form');
    const localStorageKey = 'accountOpeningFormData';

    // Save Function
    function saveFormData() {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => { data[key] = value });
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        alert('Form data saved!');
    }

    // Load Function
    function loadFormData() {
        const savedData = JSON.parse(localStorage.getItem(localStorageKey));
        if (savedData) {
            Object.entries(savedData).forEach(([key, value]) => {
                if (form.elements[key]) form.elements[key].value = value;
            });
        }
    }

    // Load saved data when the page is loaded
    loadFormData();

    // Numeric Validation
    function validateNumericInput(event) {
        if (event.key < '0' || event.key > '9') {
            event.preventDefault();
            alert('Only numeric values are allowed here.');
        }
    }

    // Alphabetic Validation
    function validateAlphabeticInput(event) {
        if (!event.key.match(/[a-zA-Z\s]/)) {
            event.preventDefault();
            alert('Only alphabetic characters are allowed here.');
        }
    }

    // Attaching validation functions to fields
    document.getElementById('engineCapacity').addEventListener('keypress', validateNumericInput);
          document.getElementById('modelYear').addEventListener('keypress', validateNumericInput);
          document.getElementById('seatingCapacity').addEventListener('keypress', validateNumericInput);
    document.getElementById('mobile').addEventListener('keypress', validateNumericInput);
    document.getElementById('paymentAmount').addEventListener('keypress', validateNumericInput);
    document.getElementById('national-id').addEventListener('keypress', validateNumericInput);
    document.getElementById('firstName').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('lastName').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('customerDetails').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('cancelledby').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('companyname').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('POBox').addEventListener('keypress', validateNumericInput);
    document.getElementById('phonenumber').addEventListener('keypress', validateNumericInput);
    document.getElementById('faxnumber').addEventListener('keypress', validateNumericInput);
    document.getElementById('routingnumber').addEventListener('keypress', validateNumericInput);
    document.getElementById('make').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('type').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('inputWhoDelivered').addEventListener('keypress', validateAlphabeticInput);
    document.getElementById('inputWhoReceived').addEventListener('keypress', validateAlphabeticInput);
    // Save button functionality
    document.querySelector('.btn.save').addEventListener('click', function(event) {
        event.preventDefault();
        saveFormData();
    });

    // Cancel button functionality
    document.querySelector('.btn.cancel').addEventListener('click', function() {
        form.reset();
        localStorage.removeItem(localStorageKey);
        alert('Form data cleared!');
    });

    // Submit button functionality
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        // Here, you can add code to handle the form data, e.g., send it to a server
        form.reset();
        localStorage.removeItem(localStorageKey);
    });

    document.addEventListener('DOMContentLoaded', function () {
        const savedData = localStorage.getItem('insuranceFormData');
        if (savedData) {
            const formValues = JSON.parse(savedData);
            Object.keys(formValues).forEach(key => {
                const element = insuranceForm.elements.namedItem(key);
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = formValues[key];
                    } else {
                        element.value = formValues[key];
                    }
                }
            });
        }
    });
});