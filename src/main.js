if (document.querySelector('html').clientWidth <= 414) {
  const share = document.querySelector("#foo-perfil");

  share.addEventListener("click", function (e) {
    if (document.querySelector("#foo-share").classList.contains("is-hidden")) {
      document.querySelector("#foo-share").classList.remove("is-hidden");

      document.querySelector("#foo-perfil").classList.add("is-hidden");
    } else {
      document.querySelector("#foo-share").classList.add("is-hidden");

      document.querySelector("#foo-perfil").classList.remove("is-hidden");
    }
  });

  const share1 = document.querySelector("div.container_share");
  share1.addEventListener("click", function (e) {
    if (document.querySelector("#foo-share").classList.contains("is-hidden")) {
      document.querySelector("#foo-share").classList.remove("is-hidden");

      document.querySelector("#foo-perfil").classList.add("is-hidden");
    } else {
      document.querySelector("#foo-share").classList.add("is-hidden");

      document.querySelector("#foo-perfil").classList.remove("is-hidden");
    }
  });
}
