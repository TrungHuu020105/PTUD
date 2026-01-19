import { renderHome, renderTasks, renderAbout, renderNotFound } from "./views.js";

const routes = {
    "/home": renderHome,
    "/tasks": renderTasks,
    "/about": renderAbout
};

export function router() {
    const app = document.getElementById("app");
    const hash = location.hash.replace("#", "") || "/home";

    localStorage.setItem("lastRoute", hash);

    const render = routes[hash] || renderNotFound;
    app.innerHTML = "";
    render(app);
}