//Ini Konversi Nilai
function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return "INVALID SCORE";
    if (score >= 90) return "A";
    if (score >= 75) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";

    return "Tidak Lulus";
  }

  var output = convertScoreToGrade(86); // <-- Input nilainya disini
  console.log(output);