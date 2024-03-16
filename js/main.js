(function () {
    let newUsersList = document.querySelector('.new-users-list');

   
    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here

    // TASK 1: TTHE FORM AND IT'S VALUES
    // form input values and event listener for form submission
    const newUserForm = document.querySelector('.new-user-form');

    newUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        const usernameElement = document.getElementsByName("username")[0];
        const cityElement = document.getElementsByName("city")[0];
        const provinceElement = document.getElementsByName("province")[0];
    
        const username = usernameElement.value;
        const city = cityElement.value;
        const province = provinceElement.value;

    // TASK 2: VALIDATING THE FORM ELEMENTS
    let isFormValid = true;
    
    // Validating username
    if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
        usernameElement.classList.remove('is-invalid');
    } else {
        isFormValid = false;
        usernameElement.classList.add('is-invalid');
    }
    
    // Validating the city
    if (!hasWhiteSpace(city) && isValueNotEmpty(city)) {
        cityElement.classList.remove('is-invalid');
    } else {
        isFormValid = false;
        cityElement.classList.add('is-invalid');
    }

    // Validating the province
    if (!hasWhiteSpace(province) && isValueNotEmpty(province)) {
        provinceElement.classList.remove('is-invalid');
    } else {
        isFormValid = false;
        provinceElement.classList.add('is-invalid');
    }

    // Adding user if form is valid
    if (isFormValid) {
        addUser(username, city, province);

    // to reset form values
        // newUserForm.reset(); or
        usernameElement.value = '';
        cityElement.value = '';
        provinceElement.value = '';
    }
});   

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // function to add a new user to the list
    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();