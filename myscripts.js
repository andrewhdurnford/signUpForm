function passConfirm() {
  if (
    document.getElementById("password").value === document.getElementById("confirm").value
  ) {
    document.getElementById("error").innerHTML = "Passwords match!";
  } else {
    document.getElementById("error").innerHTML =
      "*Error: Passwords do not match";
    console.log("erroirrrr");
  }
}
