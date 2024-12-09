Here’s a sample `README.md` file for your GitHub repository based on the provided code:

---

# Mandatory Form Validation Script

This repository provides a simple JavaScript snippet to validate mandatory form fields in a web form. It ensures that required fields are filled before form submission and provides user-friendly feedback for incomplete inputs.

## Features

- **Real-time Input Validation**: When a user starts typing in a mandatory field, the error styling (`is-invalid`) is removed.
- **On Submit Validation**: Ensures all mandatory fields are completed before submitting the form.
- **Error Highlighting**: Adds a CSS class (`is-invalid`) to the parent element of empty fields for visual feedback.

## Code Explanation

### Key Components

1. **Mandatory Field Selection**
   ```javascript
   var mandatoryElements = document.querySelectorAll('.mandatory');
   ```
   Selects all elements with the `mandatory` class.

2. **Real-time Validation**
   ```javascript
   mandatoryElements.forEach(element => {
       element.addEventListener('input', (event) => {
           element.parentElement.classList.remove('is-invalid');
       });
   });
   ```
   Listens for input events on each mandatory field and removes the `is-invalid` class from the parent element if the field is no longer empty.

3. **Form Submission**
   ```javascript
   btnSignIn.addEventListener('click', function(e) {
       var submit = MandatoryValidation();
       if (submit) document.forms["frmlogin"].submit();
   });
   ```
   Attaches a click event listener to the submit button. Validates the form using the `MandatoryValidation` function before submitting.

4. **Validation Function**
   ```javascript
   MandatoryValidation = () => {
       let submit = true;
       mandatoryElements.forEach(element => {
           if (element.value === '') {
               element.parentElement.classList.add('is-invalid');
               submit = false;
           }
       });
       return submit;
   };
   ```
   Checks each mandatory field. If a field is empty, the `is-invalid` class is added, and submission is prevented.

## Usage

1. Include this script in your HTML file.
2. Mark mandatory input fields with the class `mandatory`.
3. Define the `is-invalid` class in your CSS for visual feedback (e.g., a red border).
4. Ensure your form has a `name` attribute (e.g., `frmlogin`) and a submit button with the ID `btnSignIn`.

### Example HTML
```html
<form name="frmlogin">
    <div>
        <input type="text" class="mandatory" placeholder="Username">
    </div>
    <div>
        <input type="password" class="mandatory" placeholder="Password">
    </div>
    <button type="button" id="btnSignIn">Sign In</button>
</form>

<style>
    .is-invalid {
        border: 1px solid red;
    }
</style>
```

## Customization

- Modify the `is-invalid` class in CSS to fit your design needs.
- Adapt the `MandatoryValidation` function if additional validation rules are required.

## License

This project is open-source and available under the [MIT License](LICENSE).


