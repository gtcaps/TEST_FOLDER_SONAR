// Archivo JavaScript con errores intencionados para probar SonarQube
// Este archivo contiene múltiples tipos de problemas de calidad de código

// 1. Variables no utilizadas
var unusedVariable = "Esta variable nunca se usa";
let anotherUnusedVar = 42;
const UNUSED_CONSTANT = "también sin usar";

// 2. Variables redeclaradas
var duplicateVar = "primera declaración";
var duplicateVar = "segunda declaración"; // Error: redeclaración

// 3. Funciones con demasiados parámetros
function tooManyParameters(a, b, c, d, e, f, g, h, i, j) {
    return a + b + c + d + e + f + g + h + i + j;
}

// 4. Funciones sin return explícito
function noReturnValue(x) {
    if (x > 0) {
        console.log("Positive");
    }
    // Falta return statement
}

// 5. Comparaciones con == en lugar de ===
function badComparisons(value) {
    if (value == null) { // Debería ser ===
        return false;
    }
    if (value == undefined) { // Debería ser ===
        return false;
    }
    if (value == 0) { // Debería ser ===
        return true;
    }
}

// 6. Uso de eval() - práctica peligrosa
function dangerousEval(code) {
    return eval(code); // SonarQube marcará esto como vulnerable
}

// 7. Función con complejidad ciclomática alta
function complexFunction(a, b, c, d) {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    if (a > b) {
                        if (b > c) {
                            if (c > d) {
                                return "case1";
                            } else {
                                return "case2";
                            }
                        } else {
                            return "case3";
                        }
                    } else {
                        return "case4";
                    }
                } else {
                    return "case5";
                }
            } else {
                return "case6";
            }
        } else {
            return "case7";
        }
    } else {
        return "case8";
    }
}

// 8. Bucle infinito potencial
function potentialInfiniteLoop() {
    var i = 0;
    while (i < 10) {
        console.log(i);
        // Falta incrementar i, bucle infinito
    }
}

// 9. Try-catch vacío
function emptyCatch() {
    try {
        throw new Error("Something went wrong");
    } catch (e) {
        // Catch vacío - mala práctica
    }
}

// 10. Uso de var en lugar de let/const
function oldStyleVariables() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i); // Problema de closure con var
        }, 100);
    }
}

// 11. Función duplicada (mismo nombre)
function duplicateFunction() {
    return "primera versión";
}

function duplicateFunction() {
    return "segunda versión"; // Redefinición de función
}

// 12. Magic numbers sin constantes
function magicNumbers(price) {
    var tax = price * 0.21; // Magic number
    var discount = price * 0.15; // Magic number
    var shipping = 5.99; // Magic number
    return price + tax - discount + shipping;
}

// 13. Strings concatenados en lugar de template literals
function oldStringConcatenation(name, age) {
    return "Hello " + name + ", you are " + age + " years old.";
}

// 14. Función que modifica parámetros
function modifyParameter(arr) {
    arr.push("modified"); // Modifica el parámetro original
    return arr;
}


// 15. Alert en código de producción
function showAlert(message) {
    alert(message); // No recomendado para producción
}

/*
// 16. Console.log olvidado
function debugFunction(data) {
    console.log("Debug info:", data); // Console.log en código
    return data.processed;
}

// 17. Switch sin default
function switchWithoutDefault(type) {
    switch (type) {
        case 'A':
            return 1;
        case 'B':
            return 2;
        case 'C':
            return 3;
        // Falta case default
    }
}

// 18. Función con muchas líneas (code smell)
function tooLongFunction() {
    var result = 0;
    console.log("Starting long function");
    result += 1;
    console.log("Step 1");
    result += 2;
    console.log("Step 2");
    result += 3;
    console.log("Step 3");
    result += 4;
    console.log("Step 4");
    result += 5;
    console.log("Step 5");
    result += 6;
    console.log("Step 6");
    result += 7;
    console.log("Step 7");
    result += 8;
    console.log("Step 8");
    result += 9;
    console.log("Step 9");
    result += 10;
    console.log("Step 10");
    return result;
}

// 19. Uso de this sin contexto claro
function confusingThis() {
    return this.someProperty; // 'this' puede ser undefined
}

// 20. Nested callbacks (callback hell)
function callbackHell() {
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    console.log("Nested callbacks");
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}

// 21. Regex sin escape
function unsafeRegex(input) {
    var pattern = new RegExp(".*" + input + ".*"); // Vulnerable a ReDoS
    return pattern.test("some string");
}

// 22. Operador ternario anidado
function nestedTernary(a, b, c) {
    return a > b ? (b > c ? a : c) : (a > c ? b : a); // Difícil de leer
}
*/
