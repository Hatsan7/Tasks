$(document).ready(function () {
    showStartModel()
})
function showStartModel() {
    if (localStorage.getItem('modalYesBtn')!=1){
    setTimeout(function () {
        $('#exampleModal').modal('show');
        $('#modal-yes-btn').on('click', function () {
            localStorage.setItem('modalYesBtn', 1);
            $('#exampleModal').modal('hide')
        });
    }, 5000);
}
}