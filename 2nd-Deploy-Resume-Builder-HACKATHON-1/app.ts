// Grab the form and resume container
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('resume-container') as HTMLElement;

// Function to generate resume based on form data
function generateResume(data: FormData) {
    const name = data.get('name') as string;
    const title = data.get('title') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const website = data.get('website') as string;
    const summary = data.get('summary') as string;
    const education = data.get('education') as string;
    const skills = data.get('skills') as string;
    const experience = data.get('experience') as string;
    const projects = data.get('projects') as string;

    resumeContainer.innerHTML = `
        <header>
            <div class="personal-info">
                <h1>${name}</h1>
                <h2>${title}</h2>
                <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Website:</b> <a href="${website}" target="_blank">${website}</a></p>
            </div>
        </header>
        <section>
            <h3>Summary</h3>
            <p>${summary}</p>
        </section>
        <section>
            <h3>Education</h3>
            <p>${education.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Skills</h3>
            <p>${skills.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Work Experience</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Projects</h3>
            <p>${projects.replace(/\n/g, '<br>')}</p>
        </section>
    `;
}

// Form submission event
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const formData = new FormData(form);
    generateResume(formData);
});
