function datapage3() {

    const worldlive = document.getElementById("worldcheck").value;
    const past = document.getElementById("pastq").value;
    const plot = document.getElementById("plotpointers").value;

    const page3data = {
        worldlive,
        past,
        plot
    };

    localStorage.setItem("info3", JSON.stringify(page3data));

    window.location.href = "thankyou.html";

}