const inviteBtn = document.getElementById("invite-btn");

inviteBtn.addEventListener("click", () => {
  window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1127253883438243950&permissions=8&scope=bot";
});