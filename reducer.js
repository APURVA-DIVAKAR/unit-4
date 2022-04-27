export const reducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT":{
            return(
             {
                 ...state,
                 count : state.count++,
             }
            )
        }
        case "DECREMENT":{
            return(
                {
                    ...state,
                    count : state.count--,
                }
                
            )
        }
        case "ADD":{
           var x= +action.payload.input
           console.log(typeof(x))
           let update = x+state.count
        //    console.log(update)
         
           return{
               ...state,
               count:state.count=update
           }
        }
        case "DIVIDE":{
            var x= +action.payload.input
            console.log(typeof(x))
            let update =Math.floor(x/state.count)
         //    console.log(update)          
            return{
                ...state,
                count:state.count=update
            }
        }
        case "SUBTRACT":{
            var x= +action.payload.input
           console.log(typeof(x))
           let update = x-state.count
        //    console.log(update)
         
           return{
               ...state,
               count:state.count=update
           }
        }
        case "MULTIPLY":{
            var x= +action.payload.input
            console.log(typeof(x))
            let update = x*state.count
         //    console.log(update)
          
            return{
                ...state,
                count:state.count=update
            }
        }
    }
}