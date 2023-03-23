// WEATHER DATA from weather.gov
MAX_DATA = {
  2022: {
    JAN: 52,
    FEB: 69,
    MAR: 68,
    APR: 73,
    MAY: 89,
    JUN: 90,
    JUL: 100,
    AUG: 98,
    SEP: 84,
    OCT: 78,
    NOV: 77,
    DEC: 63,
  },
  2021: {
    JAN: 52,
    FEB: 50,
    MAR: 74,
    APR: 78,
    MAY: 92,
    JUN: 100,
    JUL: 95,
    AUG: 96,
    SEP: 86,
    OCT: 78,
    NOV: 70,
    DEC: 64,
  },
  2020: {
    JAN: 74,
    FEB: 64,
    MAR: 72,
    APR: 62,
    MAY: 83,
    JUN: 92,
    JUL: 95,
    AUG: 94,
    SEP: 85,
    OCT: 78,
    NOV: 75,
    DEC: 63,
  },
};

STAT_DIGITS = 2;
STAT_PREFIX = "";
STAT_POSTFIX = "";

MIN_DATA = {
  2022: {
    JAN: 04,
    FEB: 10,
    MAR: 17,
    APR: 35,
    MAY: 41,
    JUN: 51,
    JUL: 61,
    AUG: 63,
    SEP: 48,
    OCT: 39,
    NOV: 25,
    DEC: 11,
  },
  2021: {
    JAN: 07,
    FEB: 11,
    MAR: 13,
    APR: 29,
    MAY: 44,
    JUN: 54,
    JUL: 57,
    AUG: 62,
    SEP: 52,
    OCT: 41,
    NOV: 26,
    DEC: 20,
  },
  2020: {
    JAN: 14,
    FEB: 12,
    MAR: 19,
    APR: 31,
    MAY: 34,
    JUN: 47,
    JUL: 59,
    AUG: 58,
    SEP: 44,
    OCT: 28,
    NOV: 22,
    DEC: 16,
  },
};
STAT_DIGITS = 2;
STAT_PREFIX = "";
STAT_POSTFIX = "%";

MONTH = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

MONTH_CODES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Loading typefaces

let fontHeader;
// var fontBody;

function preload() {
  fontHeader = "PT Serif";
  // fontBody = loadFont("fonts/EBGaramond-Regular.ttf");
}

//Turning data into images
function setup() {
  createCanvas(2300, 950);
  noStroke();
  background(28, 28, 28);

  // ------------------ 2022
  // MAX
  var spacing = 100;
  for (each in MAX_DATA[2022]) {
    var MAX_barLength = MAX_DATA[2022][each] * 4;
    spacing += 80;

    fill("#e0470b");
    rect(spacing, height - 185 - MAX_barLength, 20, MAX_barLength);
  }

  // MIN
  var spacing = 100;
  for (each in MIN_DATA[2022]) {
    var MIN_barLength = MIN_DATA[2022][each] * 4;
    spacing += 80;

    fill("#0288D1");
    rect(spacing, height - 185 - MIN_barLength, 20, MIN_barLength);
  }

  // ------------------ 2021
  // MAX
  var spacing = 80;
  for (each in MAX_DATA[2021]) {
    var MAX_barLength = MAX_DATA[2021][each] * 4;
    spacing += 80;

    fill("#f07f2e");
    rect(spacing, height - 185 - MAX_barLength, 20, MAX_barLength);
  }

  // MIN
  var spacing = 80;
  for (each in MIN_DATA[2021]) {
    var MIN_barLength = MIN_DATA[2021][each] * 4;
    spacing += 80;

    fill("#4FC3F7");
    rect(spacing, height - 185 - MIN_barLength, 20, MIN_barLength);
  }

  // ------------------ 2020
  // MAX
  var spacing = 60;
  for (each in MAX_DATA[2020]) {
    var MAX_barLength = MAX_DATA[2020][each] * 4;
    spacing += 80;

    fill("#ffc3ab");
    rect(spacing, height - 185 - MAX_barLength, 20, MAX_barLength);
  }

  // MIN
  var spacing = 60;
  for (each in MIN_DATA[2020]) {
    var MIN_barLength = MIN_DATA[2020][each] * 4;
    spacing += 80;

    fill("#B3E5FC");
    rect(spacing, height - 185 - MIN_barLength, 20, MIN_barLength);
  }

  //TITLE
  noStroke();
  textSize(55);
  fill("#999");
  textFont(fontHeader);
  text("Boston Over the Years", 110, 85, 600, 185);

  //SUBTITLE
  fill("#444");
  textSize(100);
  text("[                  ]", 690, 60, 800, 185);

  fill("#777");
  textSize(26);
  // textFont(fontBody);
  text(
    "Boston's monthly maximums and minimums, from 2020 to 2022",
    746,
    87,
    400,
    200
  );

  //KEY
  textSize(17);

  fill("#0288D1");
  text("2022 Min/Max", 990, 260, 500, 200);
  rect(950, 260, 15, 15);
  fill("#e0470b");
  rect(963, 260, 15, 15);

  fill("#4FC3F7");
  text("2021 Min/Max", 990, 235, 500, 200);
  rect(950, 235, 15, 15);
  fill("#f07f2e");
  rect(963, 235, 15, 15);

  fill("#B3E5FC");
  text("2020 Min/Max", 990, 210, 500, 200);
  rect(950, 210, 15, 15);
  fill("#ffc3ab");
  rect(963, 210, 15, 15);

  //labels
  var spacing = 150;
  for (var i = 0; i < MIN_DATA[2022].length; i++) {
    spacing += 60;
    fill("#999");
    rect(spacing, 753, 28, 28);
  }

  //LABELS
  var spacing = 75;
  for (var i = 0; i < MONTH.length; i++) {
    spacing += 80;
    fill("#999");
    text(MONTH[i], spacing, 800);
  }
}

function draw() {
  var spacing = 75;
  //collision with labels
  setup();
  for (var i = 0; i < 12; i++) {
    spacing += 80;
    hit = collidePointRect(mouseX, mouseY, spacing, 775, 40, 40);
    if (hit) {
      fill("#aaa");
      text(
        "2020 - " +
          " Min " +
          MIN_DATA[2020][each] +
          "°F;  Max " +
          MAX_DATA[2020][each] +
          "°F;",
        spacing,
        840
      );
      text(
        "2021 - " +
          " Min " +
          MIN_DATA[2021][each] +
          "°F;  Max " +
          MAX_DATA[2021][each] +
          "°F;",
        spacing,
        860
      );
      text(
        "2022 - " +
          " Min " +
          MIN_DATA[2022][each] +
          "°F;  Max " +
          MAX_DATA[2022][each] +
          "°F;",
        spacing,
        880
      );
    }
  }
}

console.log(MONTH_CODES);
console.log(MAX_DATA[2022]);
console.log(MIN_DATA[2022]);
console.log(MONTH.length);
