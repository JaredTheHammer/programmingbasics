// Javascript code starts here
    // Define grading thresholds
    const grades = [
        {threshold: 0, grade: 'F'},
        {threshold: 60, grade: 'D-'},
        {threshold: 63, grade: 'D'},
        {threshold: 67, grade: 'D+'},
        {threshold: 70, grade: 'C-'},
        {threshold: 73, grade: 'C'},
        {threshold: 77, grade: 'C+'},
        {threshold: 80, grade: 'B-'},
        {threshold: 83, grade: 'B'},
        {threshold: 87, grade: 'B+'},
        {threshold: 90, grade: 'A-'},
        {threshold: 93, grade: 'A'},
        {threshold: 97, grade: 'A+'}
    ];

    // Define error and success messages
    const ERR_INVALID_GRADE = 'The grade entered is not valid. Please enter a grade between 1 and 100.';
    const ERR_GRADE_NOT_FOUND = 'The grade could not be determined. Please check your input.';
    const MSG_GRADE_RESULT = 'Your letter grade is ';

    // Get DOM elements
    const gradeInput = document.getElementById('grade');
    const outputMessage = document.getElementById('output-message');
    const form = document.getElementById('grading-form');

    // Function to validate input grade
    const validateGrade = (grade) => {
        if (grade === '' || isNaN(grade) || grade < 1 || grade > 100) {
            gradeInput.value = '';
            return ERR_INVALID_GRADE;
        }
        return null;
    }

    // Function to update output message
    function setState(newState) {
        if (newState.hasOwnProperty('error')) {
            outputMessage.innerText = newState.error;
            outputMessage.className = 'output-message error';
            outputMessage.style.opacity = newState.error ? '1' : '0';
            outputMessage.style.display = newState.error ? 'block' : 'none';
        }
        if (newState.hasOwnProperty('success')) {
            outputMessage.innerText = newState.success;
            outputMessage.className = 'output-message success';
            outputMessage.style.opacity = newState.success ? '1' : '0';
            outputMessage.style.display = newState.success ? 'block' : 'none';
        }
    }


    // Add event listener to form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const grade = Number(gradeInput.value);
        console.log(grade);
        const error = validateGrade(grade);

        if (error) {
            setState({ error });
            console.log(error)
        } else {
            const result = grades.reverse().find(gradeInfo => grade >= gradeInfo.threshold);
            grades.reverse(); // revert to original order
            if (result) {
                setState({ success: MSG_GRADE_RESULT + result.grade });
                gradeInput.value = '';
            } else {
                gradeInput.value = '';
                setState({ error: ERR_GRADE_NOT_FOUND });
            }
        }
    });

    // Add event listener to reset button
    document.getElementById('reset-button').addEventListener('click', function(event) {
        // Prevent the form from resetting with the browser's default action
        event.preventDefault();

        // Manually clear the input field
        gradeInput.value = '';

        // Clear the output message
        outputMessage.innerText = '';
        outputMessage.style.opacity = '0';
    });
