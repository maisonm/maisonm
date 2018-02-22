const subBtn = document.getElementById('btn-round1');
const roundArr = [];

subBtn.addEventListener('click', handicapFormula);

function handicapFormula() {

   const fullRoundScore = document.getElementById('full-round-score').value;
   const courseRating = document.getElementById('course-rating').value;
   const courseSlope = document.getElementById('course-slope').value;
   const averageDifficulty = 113;
   const handicapMath = (fullRoundScore - courseSlope) * averageDifficulty / courseRating;
   const handicapIndex = Math.round(handicapMath * 100) / 100;

   displayHandicapIndex(handicapIndex);
   roundArr.push(handicapIndex);
   roundScore(roundArr);


};

function roundScore(arr) {

   const round = document.getElementsByClassName('rnd-output');

   for (let i = 0; i <= round.length; i++) {

      if (arr[i]) {

         round[i].innerHTML = arr[i];

      } else if (arr.length === 5) {

         calculateTrueHandicap(arr);
      } else {

         return false;
      }
   }
}

function calculateTrueHandicap(arr) {

   const averageHandicapOutput = document.getElementById('average-handicap');
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   const differentialSum = arr.reduce(reducer);
   const handicapCalc = differentialSum / 5;
   const handicap = Math.round(handicapCalc * 100) / 100;

   averageHandicapOutput.innerHTML = handicap;

}

function displayHandicapIndex(handicap) {

   const handicapOutput = document.getElementById('handicap');
   handicapOutput.innerHTML = handicap;

};