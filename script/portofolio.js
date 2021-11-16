function fillForm() {
    let resultValue = document.getElementById("resultNama").innerText;
    document.getElementById("nama").value = resultValue;

    resultValue = document.getElementById("resultRole").innerText;
    document.getElementById("Role").value = resultValue;

    resultValue = document.getElementById("resultAvailability").innerText;
    document.getElementById("Availability").value = resultValue;

    resultValue = document.getElementById("resultUsia").innerText;
    document.getElementById("Usia").value = Number(resultValue);

    resultValue = document.getElementById("resultLokasi").innerText;
    document.getElementById("Lokasi").value = resultValue;

    resultValue = document.getElementById("resultPengalaman").innerText;
    document.getElementById("Experience").value = Number(resultValue);

    resultValue = document.getElementById("resultEmail").innerText;
    document.getElementById("Email").value = resultValue;

    let myForm = getMyForm();
    myForm.classList.remove("hidden");
}

function submitForm() {
    let formValue = document.getElementById("nama").value;
    document.getElementById("resultNama").innerText = formValue;

    formValue = document.getElementById("Role").value;
    document.getElementById("resultRole").innerText = formValue;

    formValue = document.getElementById("Availability").value;
    document.getElementById("resultAvailability").innerText = formValue;

    formValue = document.getElementById("Usia").value;
    document.getElementById("resultUsia").innerText = formValue;

    formValue = document.getElementById("Lokasi").value;
    document.getElementById("resultLokasi").innerText = formValue;

    formValue = document.getElementById("Experience").value;
    document.getElementById("resultPengalaman").innerText = formValue;

    formValue = document.getElementById("Email").value;
    document.getElementById("resultEmail").innerText = formValue;

    cleanForm();

    let myForm = getMyForm();
    myForm.classList.add("hidden");
}

function cleanForm() {
    document.getElementById("nama").value = "";
    document.getElementById("Role").value = "";
    document.getElementById("Availability").value = "";
    document.getElementById("Usia").value = "";
    document.getElementById("Lokasi").value = "";
    document.getElementById("Experience").value = "";
    document.getElementById("Email").value = "";
}

function getMyForm() {
    return document.getElementById("myForm");
}

// adding event listener
document.getElementById("submitBtn").addEventListener("click", submitForm);
document.getElementById("editBtn").addEventListener("click", fillForm);