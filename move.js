function move(element) {
    element.style.position = "fixed";

    function moveToCoordinates(left, bottom) {
        element.style.left = left + "px";
        element.style.bottom = bottom + "px";
    }
    function moveWithArrowKeys(left, bottom) {
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = left + "px";
        element.style.bottom = bottom + "px";
        function moveCharacter() {
            if (direction === null) {
                character.src = "assets/green-character/static.gif";
            }
            if (direction === "west") {
                move(character).to((x -= 1));
                character.src = "assets/green-character/west.gif";
            }
            if (direction === "east") {
                move(character).to((x += 1));
                character.src = "assets/green-character/east.gif";
            }
            if (direction === "north") {
                move(character).to((y += 1));
                character.src = "assets/green-character/north.gif";
            }
            if (direction === "south") {
                move(character).to((y -= 1));
                character.src = "assets/green-character/south.gif";
            }
            element.style.left = x + "px";
            element.style.bottom = y + "px";
        }
        setInterval(moveCharacter, 1);

        document.addEventListener("keydown", function (e) {
            if (e.repeat) return;

            if (e.key === "ArrowLeft") {
                direction = "west";
            }
            if (e.key === "ArrowUp") {
                direction = "north";
            }
            if (e.key === "ArrowRight") {
                direction = "east";
            }
            if (e.key === "ArrowDown") {
                direction = "south";
            }
        });
        // if (direction === null) {
        //     character.src = "assets/green-character/static.gif";
        // } else if (direction === "north") {
        //     character.src = "assets/green-character/north.gif";
        // } else if (direction === "south") {
        //     character.src = "assets/green-character/south.gif";
        // } else if (direction === "east") {
        //     character.src = "assets/green-character/east.gif";
        // } else if (direction === "west") {
        //     character.src = "assets/green-character/west.gif";
        // }

        document.addEventListener("keyup", function (e) {
            direction = null;
        });
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys,
    };
}
