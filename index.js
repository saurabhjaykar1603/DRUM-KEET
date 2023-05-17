let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",
    function handleClick() {
        alert("I got click");
        //what to do whem click 
    });

}






