let num1, num2;
        num1 = Number(prompt("Please enter the first number: "));
        num2 = Number(prompt("Please enter the first number: "));

        document.getElementById("num1").textContent = num1;
        document.getElementById("num2").textContent = num2;

        let docResult = document.getElementById("result");

        // Function declarations
        function add(){
            res = num1 + num2;
            docResult.textContent = res;
        }

        function subtract(){
            res = num1 - num2;
            docResult.textContent = res;
        }

        function multiply(){
            res = num1 * num2;
            docResult.textContent = res;
        }

        function divide(){
            res = num1 / num2;
            docResult.textContent = res;
        }