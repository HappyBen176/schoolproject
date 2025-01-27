var storyPoint = 0;
var page = 0;

function turn(direction) {
  if (direction == 0) {
    if (storyPoint == 0) {
      return;
    } else {
      storyPoint -= 1;
    }
  } else {
    if (storyPoint == 22) {
      return;
    } else {
      storyPoint += 1;
    }
  }

  updatePage(storyPoint);
}

function updatePage(Point) {
  page = Point;

  if (page == 0) {
    print("=)");
    document.getElementById("omg").src = "Untitledpresentation-01.png";
  } else if (page == 1) {
    document.getElementById("omg").src = "Untitled presentation-02.png";
  } else if (page == 2) {
    document.getElementById("omg").src = "Untitled presentation-03.png";
  } else if (page == 3) {
    document.getElementById("omg").src = "Untitled presentation-04.png";
  } else if (page == 4) {
    document.getElementById("omg").src = "Untitled presentation-05.png";
  } else if (page == 5) {
    document.getElementById("omg").src = "Untitled presentation-06.png";
  } else if (page == 6) {
    document.getElementById("omg").src = "Untitled presentation-07.png";
  } else if (page == 7) {
    document.getElementById("omg").src = "Untitled presentation-08.png";
  } else if (page == 8) {
    document.getElementById("omg").src = "Untitled presentation-09.png";
  } else if (page == 9) {
    document.getElementById("omg").src = "Untitled presentation-10.png";
  } else if (page == 10) {
    document.getElementById("omg").src = "Untitled presentation-11.png";
  } else if (page == 11) {
    document.getElementById("omg").src = "Untitled presentation-12.png";
  } else if (page == 12) {
    document.getElementById("omg").src = "Untitled presentation-13.png";
  } else if (page == 13) {
    document.getElementById("omg").src = "Untitled presentation-14.png";
  } else if (page == 14) {
    document.getElementById("omg").src = "Untitled presentation-15.png";
  } else if (page == 15) {
    document.getElementById("omg").src = "Untitled presentation-16.png";
  } else if (page == 16) {
    document.getElementById("omg").src = "Untitled presentation-17.png";
  } else if (page == 17) {
    document.getElementById("omg").src = "Untitled presentation-18.png";
  } else if (page == 18) {
    document.getElementById("omg").src = "Untitled presentation-19.png";
  } else if (page == 19) {
    document.getElementById("omg").src = "Untitled presentation-20.png";
  } else if (page == 20) {
    document.getElementById("omg").src = "Untitled presentation-21.png";
  } else if (page == 21) {
    document.getElementById("omg").src = "Untitled presentation-22.png";
  }
}
