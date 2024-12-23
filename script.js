function downloadGame() {
    var platform = document.querySelector('input[name="platform"]:checked').value;
    var downloadLink;

    if (platform === "android") {
        downloadLink = "jeu.apk";
    } else if (platform === "windows") {
        downloadLink = "anes.exe";
    }

    var a = document.createElement("a");
    a.href = downloadLink;
    a.download = true;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
