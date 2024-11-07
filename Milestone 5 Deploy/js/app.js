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
    var url = "".concat(window.location.origin, "/").concat(name.toLowerCase().replace(/\s+/g, '-'), "/resume");
    resumeContainer.innerHTML = "\n        <header>\n            <div class=\"personal-info\" contenteditable=\"true\">\n                <h1>".concat(name, "</h1>\n                <h2>").concat(title, "</h2>\n                <p><b>Email:</b> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <p><b>Website:</b> <a href=\"").concat(website, "\" target=\"_blank\">").concat(website, "</a></p>\n            </div>\n        </header>\n        <section>\n            <h3>Summary</h3>\n            <p contenteditable=\"true\">").concat(summary, "</p>\n        </section>\n        <section>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n        </section>\n        <section>\n            <h3>Projects</h3>\n            <p contenteditable=\"true\">").concat(projects.replace(/\n/g, '<br>'), "</p>\n        </section>\n\n        <div>\n            <button id=\"share-btn\">Share Resume</button>\n            <button id=\"download-btn\">Download as PDF</button>\n        </div>\n        \n        <!-- URL Display -->\n        <p id=\"url-message\">Shareable URL: <a href=\"").concat(url, "\" target=\"_blank\">").concat(url, "</a></p>\n\n        <!-- Red message for editing -->\n        <p id=\"edit-message\" class=\"red-message\">\n            Please click on the specific area where you want to change anything in your generated resume.\n        </p>\n    ");
    var shareBtn = document.getElementById('share-btn');
    var downloadBtn = document.getElementById('download-btn');
    if (shareBtn && downloadBtn) {
        shareBtn.addEventListener('click', function () {
            copyToClipboard(url);
        });
        downloadBtn.addEventListener('click', function () {
            downloadResumeAsPDF(name);
        });
    }
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        alert("URL copied to clipboard!");
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
}
function downloadResumeAsPDF(name) {
    var element = document.getElementById('resume-container');
    if (element) {
        var options = {
            margin: 0.5,
            filename: "".concat(name, "-resume.pdf"),
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save();
    }
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    generateResume(formData);
});
