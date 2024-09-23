var numberOfDrumButtons = document.querySelectorAll(".drum").length;

    document.querySelectorAll(".drum")[0].addEventListener("click", function() {
        let drum1 = new Audio('sounds/drum-1.mp3');
        drum1.play();
    });

    document.querySelectorAll(".drum")[1].addEventListener("click", function() {
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    });

    document.querySelectorAll(".drum")[2].addEventListener("click", function() {
        let drum2 = new Audio('sounds/drum-2.mp3');
        drum2.play();
    });

    document.querySelectorAll(".drum")[3].addEventListener("click", function() {
        let drum3 = new Audio('sounds/drum-3.mp3');
        drum3.play();
    });

    document.querySelectorAll(".drum")[4].addEventListener("click", function() {
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
    });

    document.querySelectorAll(".drum")[5].addEventListener("click", function() {
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
    });