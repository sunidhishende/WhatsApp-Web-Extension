const html = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
            <div style="padding:8px">
            <button id="rotate">
            <span class="material-symbols-outlined" style="color:#aebbc0"> rotate_right </span>
            </button>
            </div>`;

//TODO: Dynamically populate the class names since whatsapp probably keeps updating the names
//TODO: I use dark theme so the icon is set accordingly, can make fn to detect theme and set icon accordingly.
function rotateImage() {
    const imageTags = document.querySelectorAll('[class^="_ajuf _ajuh _ajui _ajug"]');
    const imageTag = imageTags[0];
    rotateString = imageTag.style.rotate;
    finalRotateString = "";
    if (rotateString == "") {
        finalRotateString = '90deg';
    } else {
        rotate = (90 + parseInt(rotateString.substring(0, rotateString.length - 3))) % 360;
        finalRotateString = rotate.toString() + 'deg';
    }
    imageTag.style.rotate = finalRotateString;
}

function addRotateButton() {
    var rotateButton = document.getElementById("rotate");
    if (!rotateButton) {
        const addIcons = document.querySelectorAll('[class="_ajv7"]');
        const addIcon = addIcons[0];
        addIcon.insertAdjacentHTML('beforebegin', html);
        rotateButton = document.getElementById("rotate");
        rotateButton.addEventListener('click', function() {
            rotateImage();
        })
    }
}

const observer = new MutationObserver(function(mutation_record, mutation_observer) {
    if (mutation_record[0] && mutation_record[0].addedNodes[0] && mutation_record[0].addedNodes[0].classList.contains('x10l6tqk')) {
        const imageTags = document.querySelectorAll('[class^="_ajuf _ajuh _ajui _ajug"]');
        const imageTag = imageTags[0];
        if (imageTag) {
            addRotateButton();
        }
    }
});

function addObserverIfDesiredNodeAvailable() {
    var targetNode = document.querySelector('[class="_aiwn _aiwm app-wrapper-web font-fix os-win _ap4q"]');
    if (!targetNode) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
        return;
    }
    var config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
}
addObserverIfDesiredNodeAvailable();