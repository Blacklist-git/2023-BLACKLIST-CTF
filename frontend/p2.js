// declares variables for big circle and small circle in cursor
var cursorBig = document.querySelector(".big");
var cursorSmall = document.querySelector(".small");
var a = document.querySelectorAll("a");

// positions the two circles in a desired placement
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorBig.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorSmall.style.left = x + "px";
  cursorSmall.style.top = y + "px";
});

// adds class when cursor clicks
document.addEventListener("mousedown", function () {
  cursorBig.classList.add("click");
  cursorSmall.classList.add("hover__small");
});

// removes class when cursor stops clicking
document.addEventListener("mouseup", function () {
  cursorBig.classList.remove("click");
  cursorSmall.classList.remove("hover__small");
});

// adds and removes class when mouse hovers and stops hovering
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursorBig.classList.add("hover__big");
    cursorSmall.classList.add("hover__small");
  });
  item.addEventListener("mouseleave", () => {
    cursorBig.classList.remove("hover__big");
    cursorSmall.classList.remove("hover__small");
  });
});

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents the default behavior of the Enter key
    checkFlag(); // Calls the checkFlag function
  }
}

function checkFlag() {
  // Get the input value
  var inputValue = document.getElementById("flagInput").value;

  // Correct flag for comparison
  var correctFlag = "BLACKLIST_CTF{Th1s_I2_X22-2_FlA9}";

  // Compare the input value with the correct flag
  if (
    inputValue === correctFlag ||
    inputValue === "BLACKLIST_CTF%7BTh1s_2s_xSS-!_F1a9%7D"
  ) {
    alert("Catch the flag!");
    window.location.href = "./index.html";
  } else {
    alert("다시 시도해주세요");
  }
}
