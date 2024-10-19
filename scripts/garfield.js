function fetchComics(year) {
    // Clear the existing comics before loading new ones
    const comicsContainer = document.getElementById('comicsContainer');
    comicsContainer.innerHTML = ''; 

    //const baseUrl = "../images/GarfieldComics/";
	const baseUrl = "https://media.githubusercontent.com/media/PB-Banana/Garf-Comics/main/Garfield/";

    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Days in each month (non-leap year)
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        daysInMonth[1] = 29; // February has 29 days in a leap year
    }

    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= daysInMonth[month - 1]; day++) {
            const monthString = padZero(month); // Ensure the month is two digits (e.g., 01, 02)
            const dayString = padZero(day);     // Ensure the day is two digits (e.g., 01, 02)

            // Skip dates before June 19, 1978
            if (year === 1978 && (month < 6 || (month === 6 && day < 19))) {
                continue; // Skip this iteration
            }

            // Construct the URL for the comic
            const url = `${baseUrl}/${year}/${year}-${monthString}-${dayString}.gif`;

            // Create an image element for the comic
			const comicTitle = document.createElement('p');
			comicTitle.innerHTML = `${year}-${monthString}-${dayString}`
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Garfield Comic ${year}-${monthString}-${dayString}`;
            img.style = 'display: block; margin: 10px 0;';
			const hr = document.createElement('hr');
			comicsContainer.appendChild(hr);
			comicsContainer.appendChild(comicTitle);
            comicsContainer.appendChild(img);
        }
    }
}