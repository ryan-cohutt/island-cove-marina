const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector("#side-menu");
const menuIcon = document.querySelector("#menu");
const xIcon = document.querySelector("#x");
const contactBtn = document.querySelector(".nav-contact");
const contactForm = document.querySelector("#contact-form")
const contactClose = document.querySelector("#contact-close")
const contactSubmitted = document.querySelector("#contact-submitted")

if (contactForm) {
    contactBtn.addEventListener("click", () => {
        if (contactForm.style.display === "none" || contactForm.style.display === "") {
            contactForm.style.display = "block";
        } else {
            contactForm.style.display = "none";
        }
    });

    contactClose.addEventListener("click", () => {
        contactForm.style.display = "none";
        setTimeout(() => {
            contactSubmitted.style.zIndex = "-1000";
            contactSubmitted.style.opacity = "0";
        }, 1000)
    })
} else {

}


let submitted = false;

function handleFormSubmit(event) {
    submitted = true;
}

function clearFormIfSubmitted() {
    if (submitted) {
        document.getElementById("gform").reset();
        submitted = false;
        contactSubmitted.style.zIndex = "1000";
        setTimeout(() => {
            contactSubmitted.style.opacity = "1";
        }, 1000);
    }
}

hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuIcon.classList.toggle("svg-active");
    xIcon.classList.toggle("svg-active");
});

const key = 'AIzaSyAAtTB-oDPIgju6h-iKK0S2qy8o5goZj9k';
const spreadsheetId = '1pWvuzuRBXHb5cgmoPNIoAY14_TVWILMUtutGn9X24fU';
const boatsNew = 'NewBoats';
const boatsOld = 'PreownedBoats';
const motorsNew = 'NewMotors';
const motorsOld = 'PreownedMotors';



// async function fetchNewBoats() {
//     try {
//         const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1pWvuzuRBXHb5cgmoPNIoAY14_TVWILMUtutGn9X24fU/values/NewBoats?key=AIzaSyAAtTB-oDPIgju6h-iKK0S2qy8o5goZj9k`)
//         const data = await response.json();
//         console.log(data);
//         const container = document.getElementById("nautic-star-boats")

//         data.forEach(boat => {
//             const directImgURL = convertGoogleDriveURL(boat.Image);
//             const card = document.createElement("div");
//             card.classList.add("nautic-cards");

//             card.innerHTML = `
//                 <img src="${directImgURL}" alt="${boat.Title}">
//                 <div class="bg-black">
//                     <p class="dm-reg text-white boat-name">${boat.Title}</p>
//                     <p class="dm-med text-grey boat-color">${boat.Color}</p>
//                 </div>
//                 <h1 class="dm-xtra-bold">${boat.Price}</h1>
//             `;
//             container.appendChild(card);
//             console.log("Converted image URL:", directImgURL);
//         });
//     } catch (error) {
//         console.error("Error fetching new boat data:", error)
//     }
// }

async function fetchHomeBoats() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${boatsNew}?key=${key}`);
        const data = await response.json();

        const values = data.values;
        if (!values || values.length < 2) {
            console.error("No boat data found.");
            return;
        }

        const headers = values[0];
        const rows = values.slice(1, 4);

        const container = document.getElementById("nautic-star-sect");

        rows.forEach(row => {
            const boat = {};
            headers.forEach((header, i) => {
                boat[header] = row[i];
            });

            const directImgURL = convertGoogleDriveURL(boat.Image);
            const card = document.createElement("div");
            card.classList.add("nautic-cards");

            card.innerHTML = `
                <img src="${directImgURL}" alt="${boat.Title}">
                <div class="bg-black">
                    <p class="dm-reg text-white boat-name">${boat.Title}</p>
                    <p class="dm-med text-grey boat-color">${boat.Color}</p>
                </div>
                <h1 class="dm-xtra-bold">${boat.Price}</h1>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching new boat data:", error);
    }
}

async function fetchNewBoats() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${boatsNew}?key=${key}`);
        const data = await response.json();

        const values = data.values;
        if (!values || values.length < 2) {
            console.error("No boat data found.");
            return;
        }

        const headers = values[0];
        const rows = values.slice(1);

        const container = document.getElementById("nautic-star-boats");

        rows.forEach(row => {
            const boat = {};
            headers.forEach((header, i) => {
                boat[header] = row[i];
            });

            const directImgURL = convertGoogleDriveURL(boat.Image);
            const card = document.createElement("div");
            card.classList.add("nautic-cards");

            card.innerHTML = `
                <img src="${directImgURL}" alt="${boat.Title}">
                <div class="bg-black">
                    <p class="dm-reg text-white boat-name">${boat.Title}</p>
                    <p class="dm-med text-grey boat-color">${boat.Color}</p>
                </div>
                <h1 class="dm-xtra-bold">${boat.Price}</h1>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching new boat data:", error);
    }
}

async function fetchPreownedBoats() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${boatsOld}?key=${key}`);
        const data = await response.json();

        const values = data.values;
        if (!values || values.length < 2) {
            console.error("No boat data found.");
            return;
        }

        const headers = values[0];
        const rows = values.slice(1);

        const container = document.getElementById("preowned-boats");

        rows.forEach(row => {
            const boat = {};
            headers.forEach((header, i) => {
                boat[header] = row[i];
            });

            const directImgURL = convertGoogleDriveURL(boat.Image);
            const card = document.createElement("div");
            card.classList.add("nautic-cards");

            card.innerHTML = `
                <img src="${directImgURL}" alt="${boat.Title}">
                <div class="bg-black">
                    <p class="dm-reg text-white boat-name">${boat.Title}</p>
                    <p class="dm-med text-grey boat-color">${boat.Color}</p>
                </div>
                <h1 class="dm-xtra-bold">${boat.Price}</h1>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching new boat data:", error);
    }
}

async function fetchNewMotors() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${motorsNew}?key=${key}`);
        const data = await response.json();

        const values = data.values;
        if (!values || values.length < 2) {
            console.error("No motor data found.");
            return;
        }

        const headers = values[0];
        const rows = values.slice(1);

        const container = document.getElementById("new-motors");

        rows.forEach(row => {
            const motor = {};
            headers.forEach((header, i) => {
                motor[header] = row[i];
            });

            if (motor.Sale == "OnSale") {
                const directImgURL = convertGoogleDriveURL(motor.Image);
                const card = document.createElement("div");
                card.classList.add("nautic-cards");

                card.innerHTML = `              
                    <div class="motor-item">
                        <div>
                            <button class="text-white dm-xtra-bold">Sale</button>
                            <img src="${directImgURL}" alt="${motor.Title}">
                        </div>
                        <h4 class="dm-med text-green">${motor.Title}</h4>

                        <p class="dm-bold"><span class="text-grey">${motor.Price}</span> ${motor.NewPrice}</p>
                    </div>
                `;
                container.appendChild(card);
            } else {
                const directImgURL = convertGoogleDriveURL(motor.Image);
                const card = document.createElement("div");
                card.classList.add("nautic-cards");

                card.innerHTML = `              
                    <div class="motor-item">
                        <div>
                            <img src="${directImgURL}" alt="${motor.Title}">
                        </div>
                        <h4 class="dm-med text-green">${motor.Title}</h4>
                        <p class="dm-bold">${motor.Price}</p>
                    </div>
                `;
                container.appendChild(card);
            }
        });
    } catch (error) {
        console.error("Error fetching new motor data:", error);
    }
}

async function fetchOldMotors() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${motorsOld}?key=${key}`);
        const data = await response.json();

        const values = data.values;
        if (!values || values.length < 2) {
            console.error("No motor data found.");
            return;
        }

        const headers = values[0];
        const rows = values.slice(1);

        const container = document.getElementById("old-motors");

        rows.forEach(row => {
            const motor = {};
            headers.forEach((header, i) => {
                motor[header] = row[i];
            });

            if (motor.Sale == "OnSale") {
                const directImgURL = convertGoogleDriveURL(motor.Image);
                const card = document.createElement("div");
                card.classList.add("nautic-cards");

                card.innerHTML = `              
                    <div class="motor-item">
                        <div>
                            <button class="text-white dm-xtra-bold">Sale</button>
                            <img src="${directImgURL}" alt="${motor.Title}">
                        </div>
                        <h4 class="dm-med text-green">${motor.Title}</h4>

                        <p class="dm-bold"><span class="text-grey">${motor.Price}</span> ${motor.NewPrice}</p>
                    </div>
                `;
                container.appendChild(card);
            } else {
                const directImgURL = convertGoogleDriveURL(motor.Image);
                const card = document.createElement("div");
                card.classList.add("nautic-cards");

                card.innerHTML = `              
                    <div class="motor-item">
                        <div>
                            <img src="${directImgURL}" alt="${motor.Title}">
                        </div>
                        <h4 class="dm-med text-green">${motor.Title}</h4>
                        <p class="dm-bold">${motor.Price}</p>
                    </div>
                `;
                container.appendChild(card);
            }
        });
    } catch (error) {
        console.error("Error fetching new motor data:", error);
    }
}


function convertGoogleDriveURL(driveURL) {
    // Match the file ID from Google Drive share links
    const match = driveURL.match(/\/d\/([^\/]+)\//) || driveURL.match(/id=([^&]+)/);
    if (match && match[1]) {
        return `https://drive.google.com/thumbnail?id=${match[1]}`;
    }
    return driveURL; // fallback if format doesn't match
}

document.addEventListener("DOMContentLoaded", (event) => {
    const boatID = document.querySelector("#preowned-boats")
    const motorID = document.querySelector("#old-motors")
    const homeID = document.querySelector("#home-header")
    
    if (boatID) {
        fetchNewBoats();
        fetchPreownedBoats();
    } else if (motorID) {
        fetchNewMotors();
        fetchOldMotors();
    } else if (homeID) {
        fetchHomeBoats()
    } else {

    }
});
