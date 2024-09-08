// Grab the form and resume container
var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('resume-container');
// Function to generate resume based on form data
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
    resumeContainer.innerHTML = "\n        <header>\n            <div class=\"personal-info\">\n                <h1>".concat(name, "</h1>\n                <h2>").concat(title, "</h2>\n                <p><b>Email:</b> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Website:</b> <a href=\"").concat(website, "\" target=\"_blank\">").concat(website, "</a></p>\n            </div>\n        </header>\n        <section>\n            <h3>Summary</h3>\n            <p>").concat(summary, "</p>\n        </section>\n        <section>\n            <h3>Education</h3>\n            <p>").concat(education.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Skills</h3>\n            <p>").concat(skills.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Work Experience</h3>\n            <p>").concat(experience.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Projects</h3>\n            <p>").concat(projects.replace(/\n/g, '<br>'), "</p>\n        </section>\n    ");
}
// Form submission event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    generateResume(formData);
});
