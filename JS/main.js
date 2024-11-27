async function adviceGenerator() {
    let apiUrl = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
    let text = document.querySelector('.text');
    let header = document.querySelector('.header');

    try {
        const response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);

       
        let advice = `❝${data.slip.advice}❞`;
        let chars = advice.split(''); 
        text.textContent = ''; 
        header.textContent = `Advice #${data.slip.id}`;
        let index = 0;

        let interval = setInterval(() => {
            if (index < chars.length) {
                text.textContent += chars[index];
                index++;
            } else {
                clearInterval(interval); 
            }
        }, 40); 
    } catch (error) {
        text.textContent = "❝Oops! Something went wrong.❞"; 
    }
}


document.addEventListener('DOMContentLoaded', adviceGenerator);
