const type = [ "archer", "axeman", "sword man" ];

const image = [ 'https://i.pinimg.com/originals/3b/c6/58/3bc658bd4c08044efe40b56634405c34.png', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d941379-a362-4b47-b4bd-1ba234ef435c/dcvreyz-23e8123a-9cd7-4727-8c9d-f204dc159514.jpg/v1/fill/w_1024,h_1307,q_75,strp/orange_axeman_by_d3_arts_dcvreyz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMzA3IiwicGF0aCI6IlwvZlwvMGQ5NDEzNzktYTM2Mi00YjQ3LWI0YmQtMWJhMjM0ZWY0MzVjXC9kY3ZyZXl6LTIzZTgxMjNhLTljZDctNDcyNy04YzlkLWYyMDRkYzE1OTUxNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IloPFWbecPHjc04FbJw6ZEDSdN6VtIkyOALFz1ctpE4', 'https://vignette.wikia.nocookie.net/maplestory/images/5/5e/Artwork_Warrior_1M.png/revision/latest?cb=20121122115207'];

function generateWarriors(numbersOfWarriors){
    if(typeof numbersOfWarriors !== 'number') return;
    const warriors = [];
    for (let index = 0; index < numbersOfWarriors; index++) {
        warriors.push(generateSingleWarrior(index));
        warriors[index].type = type[warriors[index].image];
        warriors[index].image = image[warriors[index].image];
        warriors[index].damage = warriors[index].power * warriors[index].level;
    }
    return warriors;
}

function generateSingleWarrior(index){
    return {
        power: _generatePower(),
        level: _generateLevel(),
        image: _generateImage(),
    };
    
    function _generatePower(){
        return Math.ceil(Math.random() * 101) + 1;
    }
    function _generateLevel(){
        return Math.ceil(Math.random() * 10) + 1;
    }
    function _generateImage(){
        return Math.floor(Math.random() * 3);
    }
}