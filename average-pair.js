// add whatever parameters you deem necessary
function averagePair(arr, target) {
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j ++){
        if((arr[i] + arr[j])/2 == target){
            return true
        }
    }
}
return false
}

module.exports = {averagePair} ;

// function averagePair(arr, num) {
//     let start = 0; // left pointer
//     let end = arr.length - 1; // right pointer
  
//     while (start < end) {
//       let avg = (arr[start] + arr[end]) / 2;
//       if (avg === num) {
//         return true;
//       } else if (avg < num) {
//         start++;
//       } else {
//         end--;
//       }
//     }
//     return false;
//   }
  