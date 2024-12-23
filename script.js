function downloadGame() {
    var platform = document.querySelector('input[name="platform"]:checked').value;
    var downloadLink;
    var fileName;

    if (platform === "android") {
        downloadLink = "jeu.apk";
        fileName = "my-game.apk";
    } else if (platform === "windows") {
        downloadLink = "anes.exe";
        fileName = "my-game.exe";
    }

    var a = document.createElement("a");
    a.href = downloadLink;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
