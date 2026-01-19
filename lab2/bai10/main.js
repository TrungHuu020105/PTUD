import { router } from "./router.js";

window.addEventListener("hashchange", router);
window.addEventListener("load", () => {
    const last = localStorage.getItem("lastRoute");
    if (last) location.hash = `#${last}`;
    router();
});