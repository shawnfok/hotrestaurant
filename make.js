$("#submit-btn").click(function (event) {

    event.preventDefault();
    const formName = $("#name").val().trim();
    const formPhone = $("#phone").val().trim();
    const formEmail = $("#email").val().trim();
    const formId = $("#id").val().trim();

    const table = {
        name: formName,
        phone: formPhone,
        email: formEmail,
        id: formId
    }

    $.post("api/tables", table);
});


