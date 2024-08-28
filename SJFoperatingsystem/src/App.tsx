import { useState } from "react";
import Process from "./SJF";
import "./App.css";

function App() {
  let [index, setindex] = useState<number>(0);

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
  let nums = [
    {
      b1: 7,
      b2: 4,
      b3: 1,
      b4: 4,
    },
    {
      b1: 5,
      b2: 8,
      b3: 2,
      b4: 6,
    },
    {
      b1: 10,
      b2: 7,
      b3: 4,
      b4: 6,
    },
  ];
  // for(let i=0; i<nums.length; i++) {
  //   settotalbursttime(nums[i].b1+nums[i].b2 + nums[i].b3 + nums[i].b4);
  // }
  function clicked() {
    console.log(index);
    if (index < nums.length - 1) setindex(index + 1);
    else {
      setindex(0);
    }
    console.log(index);
  }
  console.log("Outside", index);

  let listOfProcess: Process[] = [
    new Process("p2", 2, nums[index].b2),
    new Process("p3", 4, nums[index].b3),
    new Process("p4", 5, nums[index].b4),
    new Process("p1", 0, nums[index].b1),
  ];

  // let p = new Process('p1',0,8);
  // let p2= new Process('p2',5,4);
  // let p3 = new Process('p3',2,9);
  // let p4 = new Process('p4',7,10)

  let displayedData = listOfProcess.sort(
    (a, b) => a.arrivalTime - b.arrivalTime
  );
  listOfProcess = [
    listOfProcess[0],
    ...listOfProcess.slice(1).sort((a, b) => a.burstTime - b.burstTime),
  ];

  for (let i = 0; i < listOfProcess.length; i++) {
    if (i < listOfProcess.length - 1) {
      listOfProcess[i + 1].StartTime(
        listOfProcess[i].startTime,
        listOfProcess[i].burstTime
      );
    }
  }

  // let x=listOfProcess[1].StartTime(listOfProcess[0].startTime, listOfProcess[0].burstTime)
  // let y=listOfProcess[2].StartTime(listOfProcess[1].startTime, listOfProcess[1].burstTime)
  // let z=listOfProcess[3].StartTime(listOfProcess[2].startTime, listOfProcess[2].burstTime);
  // let a=listOfProcess[4].StartTime(listOfProcess[3].startTime, listOfProcess[3].burstTime);

  // x;
  // y;
  // z;

  for (let i = 0; i < listOfProcess.length; i++) {
    console.log("Hallleedasdasdasdasdasda");
    console.log("burstTime ", listOfProcess[i].burstTime);
    console.log("arrivalTime ", listOfProcess[i].arrivalTime);

    console.log("Waiting time", listOfProcess[i].waitingTime());
    console.log("TurnAround time", listOfProcess[i].TurnAroundTime());
    console.log("Completion time", listOfProcess[i].CompletionTime());
    console.log("Response time", listOfProcess[i].ResponseTime());

    console.log("ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
  }

  // console.log(listOfProcess)
  return (
    <>
      <div className="flex flex-col mx-auto w-[400px] item-center justify-center gap-3">
        <h2 className="text-4xl font-semibold text-center">
          Shortet Job First
        </h2>
        <span className="text-2xl text-center">Non-preemptive</span>

        <button
          onClick={() => {
            clicked();
          }}
          className="bg-blue-700  text-white rounded-3xl p-2 ml-[300px]  hover:opacity-[0.7]"
        >
          Generate
        </button>
      </div>

      <table className="mx-auto w-[600px] border border-gray-600 mt-5">
        <thead className="h-[80px] bg-blue-600">
          <tr className="text-center text-white">
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
          {displayedData.map((p, i) => {
            return (
              <tr className="text-center border-b border-gray-500" key={i}>
                <td className="p-5">{p.id}</td>
                <td className="p-5">{p.arrivalTime}</td>
                <td className="p-5">{p.burstTime}</td>
                <td className="p-5">{p.waitTime}</td>
                <td className="p-5">{p.completionTime}</td>
                <td className="p-5">{p.turnAroundTime}</td>
                <td className="p-5">{p.responseTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mx-auto w-[600px] flex justify-center items-center mt-10">
        {displayedData.map((d, i) => {
          return (
            <>
              <div
                key={i}
                id={"i" + i.toString()}
                style={{
                  width: `${d.burstTime * 50 + 10}px`,
                  padding: "30px",
                  position: "relative",
                }}
              >
                {d.id}

                <div
                  style={{
                    transform: ``,
                    position: "absolute",
                    left: `${d.burstTime * 50 + 10}`,
                  }}
                >
                  {d.burstTime}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
