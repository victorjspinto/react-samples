export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            console.log('book selected reduced')
            return action.payload;
    }

    return state;
}