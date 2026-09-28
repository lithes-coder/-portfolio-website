document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendation-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');
    const recommendationList = document.getElementById('recommendation-list');

    // Function to show popup
    function showPopup() {
        popup.classList.remove('hidden');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('recommender-name').value;
        const text = document.getElementById('new-recommendation').value;

        if (name && text) {
            // Create new recommendation element
            const newRec = document.createElement('div');
            newRec.classList.add('recommendation');
            newRec.innerHTML = `<p>"${text}" - ${name}</p>`;

            // Append to the list
            recommendationList.appendChild(newRec);

            // Trigger showPopup ONLY when a new recommendation is successfully submitted
            showPopup();

            // Reset the form fields
            form.reset();
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Close popup if user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
