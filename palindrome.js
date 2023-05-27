//Shyon Seyed-Emami, CSC102, Assignment 3.1

//Function name
function palindromeChecker()
{
    // Validates User Input 
    let userInput = document.getElementById("string1").value;
    if (userInput == "") {
        alert("INVALID: A word must be typed");
        return false;
    }

    var str = document.getElementById("string1").value;
    alert(str)

    var rev = str;
    // var splitString = "hello".split(""); 
    var splitString = str.split("");

    // ["h", "e", "l", "l", "o"] 
    alert(splitString) 

    // Step 2. Use the reverse() method to reverse the new created array 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse(); 
    
    // ["o", "l", "l", "e", "h"] 
    alert(reverseArray) 

    // Step 3. Use the join() method to join all elements of the array into a string 
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
    
    // "olleh" 
    alert(joinArray) 

    //Step 4. Return the reversed string 
    document.getElementById("updatedString").innerHTML = "reverse of string = " + joinArray

    if (joinArray == str)
    {
        alert("This is a Palindrome")
    }
    if (joinArray != str)
    {
        alert("This is not a Palindrome")
    }
    //Gives the user an option to enter another word
    const shouldContinue = confirm("Do you want to enter another word?"); //Confirm window box: https://www.w3schools.com/jsref/met_win_confirm.asp
    if (!shouldContinue) {
      alert("FINISHED")
    }
    else if (shouldContinue) {
    // Clears the input field for the next word
    const inputField = document.getElementById("string1");
    inputField.value = "";
    }
} 
    