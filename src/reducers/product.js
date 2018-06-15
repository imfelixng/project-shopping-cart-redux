import * as types from '../constants/actionTypes';

let initState = [
    {
        id: 1,
        name: 'Iphone X',
        description : 'Đây là Iphone X',
        price: 500,
        inventory : 10,
        img: 'img/iphoneX.jpg',
        rating : 4
    },
    {
        id: 2,
        name: 'Iphone 8',
        description : 'Đây là Iphone 8',
        price: 400,
        inventory : 15,
        img: 'img/iphone8.jpg',
        rating : 5
    },
    {
        id: 3,
        name: 'Iphone 7',
        description : 'Đây là Iphone 7',
        price: 370,
        inventory : 10,
        img: 'img/iphone7.jpg',
        rating : 4
    },
    {
        id: 4,
        name: 'Iphone 6',
        description : 'Đây là Iphone 6',
        price: 350,
        inventory : 10,
        img: 'img/iphone6.png',
        rating : 4
    },
    {
        id: 5,
        name: 'Iphone 5',
        description : 'Đây là Iphone 5',
        price: 300,
        inventory : 10,
        img: 'img/iphone5.jpg',
        rating : 3
    },
    {
        id: 6,
        name: 'Iphone 4',
        description : 'Đây là Iphone 4',
        price: 200,
        inventory : 10,
        img: 'img/iphone4.png',
        rating : 5
    }
];


const product = (state = initState, action) => {
    switch(action.type){
        case types.LIST_ALL : {
            return [...state];
        }
        default: return [...state];
    }
}

export default product;