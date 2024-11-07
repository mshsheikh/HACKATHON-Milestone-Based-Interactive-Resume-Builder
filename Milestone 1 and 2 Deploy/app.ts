const toggleSummaryBtn = document.getElementById('toggle-summary-btn') as HTMLButtonElement;
const summarySection = document.getElementById('summary-section') as HTMLElement;

const toggleEducationBtn = document.getElementById('toggle-education-btn') as HTMLButtonElement;
const educationSection = document.getElementById('education-section') as HTMLElement;

const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

const toggleExperienceBtn = document.getElementById('toggle-experience-btn') as HTMLButtonElement;
const experienceSection = document.getElementById('experience-section') as HTMLElement;

const toggleProjectsBtn = document.getElementById('toggle-projects-btn') as HTMLButtonElement;
const projectsSection = document.getElementById('projects-section') as HTMLElement;

toggleSummaryBtn.addEventListener('click', () => {
    if (summarySection.style.display === 'none') {
        summarySection.style.display = 'block';
        toggleSummaryBtn.textContent = 'Hide Summary';
    } else {
        summarySection.style.display = 'none';
        toggleSummaryBtn.textContent = 'Show Summary';
    }
});

toggleEducationBtn.addEventListener('click', () => {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducationBtn.textContent = 'Hide Education';
    } else {
        educationSection.style.display = 'none';
        toggleEducationBtn.textContent = 'Show Education';
    }
});

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});

toggleExperienceBtn.addEventListener('click', () => {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        toggleExperienceBtn.textContent = 'Hide Experience';
    } else {
        experienceSection.style.display = 'none';
        toggleExperienceBtn.textContent = 'Show Experience';
    }
});

toggleProjectsBtn.addEventListener('click', () => {
    if (projectsSection.style.display === 'none') {
        projectsSection.style.display = 'block';
        toggleProjectsBtn.textContent = 'Hide Projects';
    } else {
        projectsSection.style.display = 'none';
        toggleProjectsBtn.textContent = 'Show Projects';
    }
});