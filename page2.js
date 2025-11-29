function datapage2(){

    const personality = document.getElementById("mbti").value;
    const humor = document.getElementById("sohumor").value;
    const socialab = document.getElementById("social").value;
    const styledecision = document.getElementById("decisionst").value;
    const styleorg = document.getElementById("organizedst").value;
    const stylethink = document.getElementById("thinkst").value;
    const stylecomm = document.getElementById("Communicationst").value;
    const styleworld = document.getElementById("worldst").value;

    const page2data = {
        personality,
        humor,
        socialab,
        styledecision,
        styleorg,
        stylethink,
        stylecomm,
        styleworld
    };

    localStorage.setItem("info2", JSON.stringify(page2data));

    
    window.location.href= "page3.html";
}