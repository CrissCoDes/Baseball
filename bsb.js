
const MissHit = 
['1B Hit', 'Double', 'Triple', "Home Run!!!", 'Foul-Ball', 'Swing and a miss',
 'Strike One', 'Strike Two', 'Punch-Out',  'Ball One', 'Second Ball', 'Third Ball', 'Base On Ball']


const Pitch = () => {
    const Strike = Math.floor(Math.random()* 3);
    const Random = Math.floor(Math.random()* 6);

    switch(Random){
        case 0:
            console.log(MissHit[5])
            break;
        case 1:
            console.log(MissHit[4])
            break;
        case 2:
            console.log(MissHit[0])
            break;
        case 3:
            console.log(MissHit[1])
            break;
        case 4:
            console.log(MissHit[2])
            break;
        case 5:
            console.log(MissHit[3])
            break;
    }
    console.log(Random);
    console.log(Strike);

    if (Strike === 1 && Random === 0 || Random === 0){
        console.log(MissHit[6])
    }else if (Strike === 2 && Random === 0 || Random === 0){
        console.log(MissHit[7])
    }else if (Strike === 3 && Random === 0){
        console.log(MissHit[8])
     }else if (Strike === - 1 && Random === 1){
         console.log(MissHit[9])
     }else if (Strike === -2 && Random === 1){
     console.log(MissHit[10])
     }else if (Strike === -3 && Random === 1){
         console.log(MissHit[11])
     }else if (Strike === -4){
         console.log(MissHit[12])
     }
    } 


Pitch()
