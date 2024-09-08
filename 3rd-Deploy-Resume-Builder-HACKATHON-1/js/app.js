var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('resume-container');
function generateResume(data) {
    var name = data.get('name');
    var title = data.get('title');
    var email = data.get('email');
    var phone = data.get('phone');
    var website = data.get('website');
    var summary = data.get('summary');
    var education = data.get('education');
    var skills = data.get('skills');
    var experience = data.get('experience');
    var projects = data.get('projects');
    resumeContainer.innerHTML = "\n        <header>\n            <div class=\"personal-info\" contenteditable=\"true\">\n                <h1>".concat(name, "</h1>\n                <h2>").concat(title, "</h2>\n                <p><b>Email:</b> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Website:</b> <a href=\"").concat(website, "\" target=\"_blank\">").concat(website, "</a></p>\n            </div>\n        </header>\n        <section>\n            <h3>Summary</h3>\n            <p contenteditable=\"true\">").concat(summary, "</p>\n        </section>\n        <section>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Projects</h3>\n            <p contenteditable=\"true\">").concat(projects.replace(/\n/g, '<br>'), "</p>\n        </section>\n\n        <!-- Add the red message after the resume -->\n        <p id=\"edit-message\" class=\"red-message\">\n            Please click on the specific area where you want to change anything in your generated resume.\n        </p>\n    ");
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    generateResume(formData);
});
