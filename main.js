const mobiles = [
    {
        name: 'iPhone 12',
        price: 15000
    },

    {
        name: 'Samsung Galaxy S21',
        price: 17000
    }
];

function createMobile() {
    let newName = prompt('Enter the name of the mobile:');
    let newPrice = prompt('Enter the price of the mobile:');
    let newMobile = {
        name: newName,
        price: newPrice
    };
    mobiles.push(newMobile);
    showMobiles();

}

function showMobiles() {
    console.clear();
    for (let i = 0; i < mobiles.length; i++) {
        console.log(`${i + 1}- ${mobiles[i].name} => ${mobiles[i].price}`);
    }
}
showMobiles();

function deleteMobile() {
    const index = prompt('Enter the number of the mobile to delete:') - 1;
    mobiles.splice(index, 1);
    showMobiles();
}

function updateMobile() {
    const index = prompt('Enter the number of the mobile to update:') - 1;

    const newName = prompt('Enter the new name of the mobile:');
    const newPrice = prompt('Enter the new price of the mobile:');

    const newMobile = {
        name: newName,
        price: newPrice
    };
    mobiles.splice(index, 1, newMobile);
    showMobiles();
}


// 1 - 10
// 2 - undefined 
// 3 - Error 
// 4 - Error
// 5 - "Hello"
// 6 - undefined
// 7 - undefined
// 8 - 10 - 20 - 30
// 9 - Error