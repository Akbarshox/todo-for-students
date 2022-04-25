const todo = (state = [{title: "Todo1"}], action) => {
   switch (action.payload) {
      case 'ADD_TODO':
         return console.log(action.payload)
   }
   return state
}

export default todo;