const visor = document. querySelector(".visor");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonPressed = button.textContent;
        
        if(button.id === "c") {
            visor.textContent = "0";
            return;
        }

        if(button.id === "backspace") {
            if(visor.textContent.length === 1 || visor.textContent === " Erro!") {
                visor.textContent = "0";
            } else {
                    visor.textContent = visor.textContent.slice(0, -1);
            }
            return;
        }

        if(button.id === "igual") {
            try {
                visor.textContent = eval(visor.textContent);
            } catch {
                visor.textContent = " Erro!"
            }
            
            return;
        }

        if(visor.textContent === "0" || visor.textContent === " Erro!" ) {
            visor.textContent = buttonPressed;
        } else {
            visor.textContent += buttonPressed;
        }
    })
})