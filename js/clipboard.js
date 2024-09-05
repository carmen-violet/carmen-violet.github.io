function copyToClipboard(id) {
    var copyTextArea = document.getElementById(id);

    try {
        copyTextArea.focus();
        copyTextArea.select();
    } 
    catch (err) {}

    try {
        copyTextArea.setSelectionRange(0, 99999); /* For mobile devices */
    } catch (err) {}

    try {
        document.execCommand('copy');
        showSnackbar("copiato")
    } catch (err) {}

    
    copyTextArea.focus();
}