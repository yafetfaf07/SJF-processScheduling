import { useEffect, useState } from "react";
import "./SJF";
import Process from "./SJF";

function App() {
// useEffect(() => {
//   let p = new Process('p1',0,8);
//   let p2= new Process('p2',5,4);
//   let p3 = new Process('p3',2,9);
//   let p4 = new Process('p4',7,10)
//   let listOfProcess:Process [] = [];
//   listOfProcess.push(p);
//   listOfProcess.push(p2);
//   listOfProcess.push(p3);
//   listOfProcess.push(p4)
  
//   listOfProcess.sort((a,b) => a.arrivalTime - b.arrivalTime);
//   listOfProcess= [listOfProcess[0], ...listOfProcess.slice(1).sort((a,b) => a.burstTime - b.burstTime)]
//   for(let i=0; i<listOfProcess.length; i++) {
//     if(i<listOfProcess.length-1) {
//       listOfProcess[i+1].StartTime(listOfProcess[i].startTime, listOfProcess[i].burstTime);
//     } 
//   }
//   console.log(listOfProcess);
  
// },[])

let listOfProcess:Process[] = [new Process('p1',0,7), new Process('p2',2,4), new Process('p3',4,1), new Process('p4',5,4)];

  // let p = new Process('p1',0,8);
  // let p2= new Process('p2',5,4);
  // let p3 = new Process('p3',2,9);
  // let p4 = new Process('p4',7,10)


let displayedData=listOfProcess.sort((a,b) => a.arrivalTime - b.arrivalTime);
listOfProcess=[listOfProcess[0], ...listOfProcess.slice(1).sort((a,b) => a.burstTime - b.burstTime)];

for(let i=0; i<listOfProcess.length; i++) {
  if(i<listOfProcess.length -1) {
    listOfProcess[i+1].StartTime(listOfProcess[i].startTime, listOfProcess[i].burstTime);
  }
}
 


// let x=listOfProcess[1].StartTime(listOfProcess[0].startTime, listOfProcess[0].burstTime)
// let y=listOfProcess[2].StartTime(listOfProcess[1].startTime, listOfProcess[1].burstTime)
// let z=listOfProcess[3].StartTime(listOfProcess[2].startTime, listOfProcess[2].burstTime);
// let a=listOfProcess[4].StartTime(listOfProcess[3].startTime, listOfProcess[3].burstTime);

// x;
// y;
// z;

for(let i=0; i<listOfProcess.length; i++) {
  console.log("Hallleedasdasdasdasdasda")
  console.log("burstTime ",listOfProcess[i].burstTime)
  console.log("arrivalTime ",listOfProcess[i].arrivalTime)

console.log("Waiting time",listOfProcess[i].waitingTime());
console.log("TurnAround time",listOfProcess[i].TurnAroundTime());
console.log("Completion time",listOfProcess[i].CompletionTime());
console.log("Response time",listOfProcess[i].ResponseTime());

console.log("ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

}
  

  // console.log(listOfProcess)
  return (
    <>
      <div className="flex flex-col mx-auto w-[400px] item-center justify-center gap-3">
        <h2 className="text-4xl font-semibold">Process Registration</h2>
        <input
          className="border-[1px] border-gray-500"
          type="text"
          placeholder="Enter Id"
       
        />
        <input
          className="border-[1px] border-gray-500"
          type="number"
          placeholder="Enter arrival time"
      
        />
        <input
          className="border-[1px] border-gray-500"
          type="number"
          placeholder="Enter burst time"
       
        />
        <button onClick={() => {
        }} className="bg-blue-700 w-[30%] mx-auto text-white rounded-lg hover:opacity-[0.7] p-2">
          Add
        </button>
      </div>

      <table className="mx-auto w-[600px]">
        <thead className="h-[80px] bg-red-700">
          <tr className="text-center">
            <th>P</th>
            <th>AT</th>
            <th>BT</th>
            <th>WT</th>
            <th>CT</th>
            <th>TAT</th>
            <th>RT</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="text-center">
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr> */}
          {
            displayedData.map((p,i) => {
              return <tr className="text-center" key={i}>
                <td>{p.id}</td>
                <td>{p.arrivalTime}</td>
                <td>{p.burstTime}</td>
                <td>{p.waitTime}</td>
                <td>{p.completionTime}</td>
                <td>{p.turnAroundTime}</td>
                <td>{p.responseTime}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
