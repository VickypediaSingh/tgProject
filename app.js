// import * as sell from "./sell.js "
// import ps from "./cx.js"

// import { hello } from "./sell.js"

// sell.hello()
//  console.log(sell.data+10) 
//  console.log(ps.name)

// class Cx{
//     constructor(n){
//         this.name=n
//     }
//     age=28
//     buy=()=>console.log(this.name)
// }

// class GuestCx extends Cx{
//     hello=()=>console.log("hello...")
// }

// let cx1 = new Cx("bikram");
// let cx2 = new GuestCx("jeet")
 
// console.log(cx1)
// cx1.buy()

// console.log(cx2)
// cx2.buy() 

// let list=[1,2,3,4,5];
// let newlist=[6,7,8,9,...list,]
// console.log(newlist)
 

// let cx={
//     myname:"bikram",
//     age:28,
//     // buy()=>console.log(this.name)
// }

// let cxpro={
//     ...cx,
//     city:"bengaluru"
//     // hello()=>console.log("hello...")
// }

// console.log(cxpro)


// function hello(){
//     for(let i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// } 

// hello(10,20,30,40,50)


// function hello(...all){
//     console.log(all)
// } 

// hello(10,20,30,40,50)


// let list=[1,2,3,4,5];
// let [num1,num2,,num4,num5]=list
// // let newlist=[6,7,8,9,...list,]
// console.log(num4)



// let person={
//     myname:"bikram",
//     age:25
// }

// let {myname,age}=person
// // console.log(person.age)
// console.log(age)


// let num1=100
// let num2=num1
// num2=50
// console.log(num1,num2)

// let person1={
//     naam:"bikram",
//     umar:25
// }

// let person2= {
//     ...person1
// }

// person2.naam="jeet"

// console.log(person1)
// console.log(person2)

let arr1=[1,2,3,4,5,6,7]
// let arr2=arr1.filter(x => x*2)
let arr2=arr1.filter(x => x%2==0)

console.log(arr2)