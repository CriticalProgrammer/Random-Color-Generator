const GetRandomColor = () => {
    const RandomNumber = Math.floor(Math.random() * 16777215);
    const RandomColorCode = "#" + RandomNumber.toString(16);
    document.getElementById("btn").style.backgroundColor = RandomColorCode;
    document.body.style.backgroundColor = RandomColorCode;
    document.getElementById("Hex-Color-Code").innerHTML = RandomColorCode;
    document.getElementById("CP-Logo").style.borderColor= RandomColorCode;

}
document.getElementById("btn").addEventListener(
    "click",
    GetRandomColor
)
GetRandomColor();