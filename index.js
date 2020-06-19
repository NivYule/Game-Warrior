const type = [ "archer", "axeman", "sword man" ];

const image = [];

function generateWarriors(numbersOfWarriors){
    if(typeof numbersOfWarriors !== 'number') return;
    const warriors = [];
    for (let index = 0; index < numbersOfWarriors; index++) {
        warriors.push(generateSingleWarrior(index));
    }
    return warriors;
}

function generateSingleWarrior(index){
    return {
        power: _generatePower(),
        level: _generateLevel(),
        type: _generateType(),
        damage: _generateDamage(),
        // image: _generateImage(),
    };

    function _generatePower(){
        return Math.ceil(Math.random() * 101) + 1;
    }
    function _generateLevel(){
        return Math.ceil(Math.random() * 10) + 1;
    }
    function _generateType(){
        return Math.floor(Math.random() * 3);
    }
    function _generateDamage(){
        return generateSingleWarrior.power * generateSingleWarrior.level;
    }
    function _generateImage(){
    }
}