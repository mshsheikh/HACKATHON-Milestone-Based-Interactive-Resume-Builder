var toggleSummaryBtn = document.getElementById('toggle-summary-btn');
var summarySection = document.getElementById('summary-section');
var toggleEducationBtn = document.getElementById('toggle-education-btn');
var educationSection = document.getElementById('education-section');
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills-section');
var toggleExperienceBtn = document.getElementById('toggle-experience-btn');
var experienceSection = document.getElementById('experience-section');
var toggleProjectsBtn = document.getElementById('toggle-projects-btn');
var projectsSection = document.getElementById('projects-section');
toggleSummaryBtn.addEventListener('click', function () {
    if (summarySection.style.display === 'none') {
        summarySection.style.display = 'block';
        toggleSummaryBtn.textContent = 'Hide Summary';
    }
    else {
        summarySection.style.display = 'none';
        toggleSummaryBtn.textContent = 'Show Summary';
    }
});
toggleEducationBtn.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducationBtn.textContent = 'Hide Education';
    }
    else {
        educationSection.style.display = 'none';
        toggleEducationBtn.textContent = 'Show Education';
    }
});
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});
toggleExperienceBtn.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        toggleExperienceBtn.textContent = 'Hide Experience';
    }
    else {
        experienceSection.style.display = 'none';
        toggleExperienceBtn.textContent = 'Show Experience';
    }
});
toggleProjectsBtn.addEventListener('click', function () {
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
        toggleProjectsBtn.textContent = 'Hide Projects';
    }
    else {
        projectsSection.style.display = 'none';
        toggleProjectsBtn.textContent = 'Show Projects';
    }
});
