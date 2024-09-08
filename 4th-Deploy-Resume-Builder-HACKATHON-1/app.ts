const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('resume-container') as HTMLElement;

declare var html2pdf: any;

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

    const url = `${window.location.origin}/${name.toLowerCase().replace(/\s+/g, '-')}/resume`;

    resumeContainer.innerHTML = `
        <header>
            <div class="personal-info" contenteditable="true">
                <h1>${name}</h1>
                <h2>${title}</h2>
                <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Website:</b> <a href="${website}" target="_blank">${website}</a></p>
            </div>
        </header>
        <section>
            <h3>Summary</h3>
            <p contenteditable="true">${summary}</p>
        </section>
        <section>
            <h3>Education</h3>
            <p contenteditable="true">${education.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Skills</h3>
            <p contenteditable="true">${skills.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Work Experience</h3>
            <p contenteditable="true">${experience.replace(/\n/g, '<br>')}</p>
        </section>
        <section>
            <h3>Projects</h3>
            <p contenteditable="true">${projects.replace(/\n/g, '<br>')}</p>
        </section>

        <div>
            <button id="share-btn">Share Resume</button>
            <button id="download-btn">Download as PDF</button>
        </div>
        
        <!-- URL Display -->
        <p id="url-message">Shareable URL: <a href="${url}" target="_blank">${url}</a></p>

        <!-- Red message for editing -->
        <p id="edit-message" class="red-message">
            Please click on the specific area where you want to change anything in your generated resume.
        </p>
    `;

    const shareBtn = document.getElementById('share-btn');
    const downloadBtn = document.getElementById('download-btn');

    if (shareBtn && downloadBtn) {
        shareBtn.addEventListener('click', () => {
            copyToClipboard(url);
        });

        downloadBtn.addEventListener('click', () => {
            downloadResumeAsPDF(name);
        });
    }
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        alert("URL copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function downloadResumeAsPDF(name: string) {
    const element = document.getElementById('resume-container');
    if (element) {
        const options = {
            margin: 0.5,
            filename: `${name}-resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(element).save();
    }
}

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const formData = new FormData(form);
    generateResume(formData);
});