window.addEventListener("load", function () {
    var editor = textArea.document;
    editor.designMode = "on";

    boldButton.addEventListener("click", function () {
        editor.execCommand("Bold", false, null);
    }, false);

    italicButton.addEventListener("click", function () {
        editor.execCommand("Italic", false, null);
    }, false);

}, false);