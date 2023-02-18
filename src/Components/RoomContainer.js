import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsLists from './RoomList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'


function RoomContainer({context}){
  const {loading, sortedRooms, rooms} = context;
  if(loading){
                return <Loading />;
              }
              return(
                <>
          <RoomsFilter rooms={rooms} />
          <RoomsLists rooms={sortedRooms} />
              </>
              );
}

export default withRoomConsumer(RoomContainer)














// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsLists from './RoomList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const {loading,sortedRooms,rooms} =value
//           if(loading){
//             return <Loading />;
//           }
//           return(
//             <div>
//       Hello from room container
//       <RoomsFilter rooms={rooms} />
//       <RoomsLists rooms={sortedRooms} />
//           </div>
//         );
//         }
//       }

//     </RoomConsumer>
    
//   );
// }
