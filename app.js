function login() {
  const username = document.getElementById("username").value;

  if (username) {
    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
  } else {
    alert("请输入用户名");
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
