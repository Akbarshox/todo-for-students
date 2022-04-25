import React, {useEffect, useState} from 'react';

export default function FetchData() {
   const [mainData, setMainData] = useState([]);
   const date = new Date();

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
         .then(res => res.json())
         .then(json => setMainData(json.slice(0, 20)))
   }, [])

   const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      return day + '.' + month + '.' + year
   }

   return (
      <div>
         {mainData.map(el =>
            <div>
               <p>{el.title}</p>
               {formatDate(date)}
            </div>
         )}
      </div>
   )
}