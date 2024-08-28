interface calculatedProcess {
  waitingTime(): number;
  TurnAroundTime(): number;
  CompletionTime(): number;
  ResponseTime(): number;
  StartTime(num: number, num2: number): void;
}

export default class Process implements calculatedProcess {
  id: string;
  arrivalTime: number;
  burstTime: number;
  startTime: number = 0;
  waitTime: number = 0;
  completionTime: number = 0;
  turnAroundTime: number = 0;
  responseTime: number = 0;

  constructor(id: string, arr: number, burst: number) {
    this.id = id;
    this.arrivalTime = arr;
    this.burstTime = burst;
  }
  waitingTime(): number {
    if (this.arrivalTime == 0) {
      this.waitTime=this.arrivalTime;
      return this.waitTime;
    } else {
      this.waitTime = this.startTime - this.arrivalTime;
      return this.waitTime;
    }
  }
  TurnAroundTime(): number {
    if (this.arrivalTime == 0) {
      this.turnAroundTime=this.burstTime;
      return this.turnAroundTime;
    } else {
      this.turnAroundTime = this.burstTime + this.waitTime;
      return this.turnAroundTime;
    }
  }
  CompletionTime(): number {
    if (this.arrivalTime == 0) {
      this.completionTime=this.burstTime;
      return this.completionTime
    } else {
      this.completionTime = this.turnAroundTime + this.arrivalTime;
      return this.completionTime;
    }
  }
  ResponseTime(): number {
    if (this.arrivalTime == 0) {
      this.responseTime=this.arrivalTime;
      return this.responseTime;
    } else {
      this.responseTime = this.startTime - this.arrivalTime;
      return this.responseTime;
    }
  }
  StartTime(num1: number, num2: number) {
    let startTime1 = 0;
    if (this.arrivalTime == 0) {
      this.startTime = this.arrivalTime;
      startTime1 = this.startTime;
    //   console.log("dsdsdsdsd ", startTime1);
    } else {
      startTime1 = num1 + num2;
      this.startTime = startTime1;
    //   console.log("sadasdasd", startTime1);
    }
  }
}
