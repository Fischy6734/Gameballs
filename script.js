// script.js
document.addEventListener('DOMContentLoaded', () => {
    const htmlInput = document.getElementById('htmlInput');
    const cssInput = document.getElementById('cssInput');
    const jsInput = document.getElementById('jsInput');
    const outputFrame = document.getElementById('outputFrame');

    // Load saved content from localStorage
    htmlInput.value = localStorage.getItem('htmlContent') || '';
    cssInput.value = localStorage.getItem('cssContent') || '';
    jsInput.value = localStorage.getItem('jsContent') || '';

    // Save content to localStorage on input change
    const saveContent = () => {
        localStorage.setItem('htmlContent', htmlInput.value);
        localStorage.setItem('cssContent', cssInput.value);
        localStorage.setItem('jsContent', jsInput.value);
        updateOutput();
    };

    htmlInput.addEventListener('input', saveContent);
    cssInput.addEventListener('input', saveContent);
    jsInput.addEventListener('input', saveContent);

    // Update output frame
    const updateOutput = () => {
        const output = `
            <html>
            <head>
                <style>${cssInput.value}</style>
            </head>
            <body>
                ${htmlInput.value}
                <script>${jsInput.value}</script>
            </body>
            </html>
        `;
        const blob = new Blob([output], { type: 'text/html' });
        outputFrame.src = URL.createObjectURL(blob);
    };

    // Download project
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const zip = new JSZip();
        zip.file("index.html", htmlInput.value);

        if (cssInput.value) {
            const cssFileName = prompt("Enter CSS file name:", "style.css") || "style.css";
            zip.file(cssFileName, cssInput.value);
        }

        if (jsInput.value) {
            const jsFileName = prompt("Enter JS file name:", "script.js") || "script.js";
            zip.file(jsFileName, jsInput.value);
        }

        zip.generateAsync({ type: "blob" }).then(function(content) {
            saveAs(content, "project.zip");
        });
    });

    // Initial output update
    updateOutput();
});
