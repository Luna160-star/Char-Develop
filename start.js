function datapage1(){

    const name = document.getElementById("name").value;
    const age = document.getElementById("dob").value;
    const type = document.getElementById("ctype").value;
    const height = document.getElementById("height").value;
    const gender = document.getElementById ("gender").value;
    const relStatus = document.getElementById("rstatus").value;
    const language = document.getElementById("langsp").value;
    const occup = document.getElementById("occupation").value;

    const page1data = {
        name,
        age,
        type,
        height,
        gender,
        relStatus,
        language,
        occup
    };

    localStorage.setItem("info1", JSON.stringify(page1data));

    window.location.href = "page2.html";
}

/*for snowflake part*/

function snowflakefall() {
    const snowake = document.createElement("div");
    snowake.classList.add("snowflake");

    snowake.style.left = Math.random() * window.innerWidth + "px";
    snowake.style.animationDuration = (Math.random() * 2 + 4) + "s";

    document.getElementById("snow").appendChild(snowake);

    setTimeout(() => snowake.remove(), 4000);
}

setInterval (snowflakefall, 150);
