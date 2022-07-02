module.exports = {
    name: "validations",
    actions:{
        valid(matrix){

            var countColumns = matrix[0].length -1;
            var countRows = matrix.length -1;
            var countNitrogenBase = 0;
            var possibleBase = ["A","T","G","C"];
            var isHuman = false;
            var flagStop = false;

            // while (!flagStop) {
                
            //     var currentBase = matrix[countRows][countColumns];
            //     if (possibleBase.some(x=>x == currentBase)) {
            //         if (validSides(countRows, countColumns, false)) {
            //             countNitrogenBase++;
            //         }
            //         if (validSides(countRows, countColumns, true)) {
            //             countNitrogenBase++;
            //         }
            //         if (countNitrogenBase == 2) {
            //             flagStop = true
            //         } 
            //     }

            //     countColumns--;

            //     if (countColumns < 0) {
            //         countColumns = matrix[0].length -1;
            //         countRows--;
            //     }

            //     if (countRows < 0) {
            //         isHuman = true;
            //         flagStop =  true;
            //     }

            // }

            console.log(`es humano ? : ${isHuman}`)
        },

        validSides(x,y, diagonal) {

            var valuesSide = diagonal ? valuesQuadrants : valuesDiagonals;
        
            for (let p = 0; p < valuesSide.length; p++) {
                var lastPositionX = x + (valuesSide[p][0] * (4 -1))
                var lastPositionY = y + (valuesSide[p][1] * (4 -1))
                var count = 1;
                var positionSearched = [];
                if ((lastPositionX < 0 || matrix[0].length < lastPositionX) || (lastPositionY < 0 || lastPositionY > matrix.length)) {
                    continue;
                }
                positionSearched.push(`${x}${y}`)
                for (let s = 1; s < 4; s++) {
                    var positionX = x + (valuesSide[p][0] * s)
                    var positionY = y + (valuesSide[p][1] * s)
                    if(matrix[positionX][positionY] == matrix[x][y]){
                        count ++
                        positionSearched.push(`${positionX}${positionY}`)
                    } 
        
                }
        
                if (count == 4 && !searchedBefore.some(j=>j == positionSearched.sort().join(','))) {
                    searchedBefore.push(positionSearched.sort().join(','));
                    return true;
                }
        
            }
        
            return false;
        }
    }
}