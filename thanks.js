function downloadinfo() {

    const page1 = JSON.parse(localStorage.getItem("info1"));
    const page2 = JSON.parse(localStorage.getItem("info2"));
    const page3 = JSON.parse(localStorage.getItem("info3"));

    const filecombine = {
        ...page1,
        ...page2,
        ...page3
    };

    ///*this part, i took help of chatgpt in creating and understanding it*///
    let textContent = " CHARACTER DATA \n\n ";
    for (let data in filecombine) {
        textContent += `${data}: ${filecombine[data]}\n`;
    }

    const blob = new Blob([textContent], {type: "text/plain"});
    const link = document.createElement("a");

    link.href= URL.createObjectURL(blob);
    link.download = "CharacterProfile.txt";
    link.click();
}
