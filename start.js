

function submitForm(event) {
  event.preventDefault();
  let name = document.forms["start_form"]["username"].value;

  //store name
  sessionStorage.setItem("username", name);
  location.href = "question.html";


}
