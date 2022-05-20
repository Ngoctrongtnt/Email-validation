var $ = function (id) {
    return document.getElementById(id);
};
var joinList = function () {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var isValid = true;

    if (emailAddress1 == "") {
        $("email_address1_error").innerHTML = ("    " + "This field is required.");
        const newLocal = false;
        isValid = newLocal;
    } else { $("email_address1_error").innerText = ""; }

    if (emailAddress1 != emailAddress2) {
        $("email_address2_error").innerText =
            "This entry must equal first entry.";
        isValid = false;
    } else { $("email_address2_error").innerText = ""; }

    if (isValid) {
        // submit the form if all entries are valid//
        $("email_form").submit();
    }
};
window.onload = function () {
    $("join_list").onclick = joinList;
    // $("email_address").focus();
};
