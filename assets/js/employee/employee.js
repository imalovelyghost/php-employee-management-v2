import { controller } from "./employeeController.js";

$(function () {
  var baseUrl = document.querySelector(".navbar").dataset["url"];
  // EVENT LISTENERS
  $("#formEditEmployee").on("submit", submitEmployee);
  $("#returnbtn").on(
    "click",
    () => (window.location.href = baseUrl + "employee/dashboard")
  );

  // FUNCTIONS
  function submitEmployee(e) {
    e.preventDefault();
    var id = $(e.target).attr("data-employee");
    const formData = new FormData(e.target);
    formData.append("id", id);

    controller
      .updateItem(Object.fromEntries(formData.entries()))
      .then((data) => console.log(data));
  }
});