export function isLoggedIn() {
  const token = localStorage.getItem("isLoggedIn");
  return token;
}
