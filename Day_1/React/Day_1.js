// // let arr1= ["Samsung","Apple","Vivo"]
// // let x=arr1.map((item)=>
// //     {
// //         return item < 5
// //     }
// // )
// // console.log(x)
// // let arr1= [1,2,3,4,5,6,7]
// // let x=arr1.filter((item)=>
// //     {
// //         return item < 5
// //     }
// // )
// // console.log(x)
// // let myStr = ["elephant","Reezan","Sakshyam","Paskal","Lhakpa"]
// // console.log(myStr.includes("a"))
// // let myStr = [
// //     {name : "Reezan" ,year:"3"},
// //     {name : "Sakshyam", year:"2"},
// //     {name:"Paskal", year:"3"}
// //     ,{name:"Lhakpa",year:"2"}
// // ]
// // const found = myStr.filter ((item)=> {
// //     return item.year.includes("3")
// // })
// // console.log(found)
// // let myObj = {a:"apple", b:"ball"}
// // const myFunction = (obj)=>
// //     {
// //         obj.c="cat"
// //         return obj
// //     }
// //     console.log(myFunction(myObj))
// // let myObj = [1,2,3]
// // const myFunction = (obj)=>
// //     {
// //         obj.push(4)
// //         return obj
// //     }
// //     console.log(myFunction(myObj))
// // const myArr=["Spiderman","Batman","Loki","Thor","Ironman"]
// // const printMiddleCharacter = (x)=>
// //     {
// //         return x[2]
// //     }
// //     console.log(printMiddleCharacter(myArr))
// // const Person={name:"Ram"}
// // const list = ["Compuer enginer","javaScript"]
// // const addval = (obj, arr)=>{
// //     obj.occupation = arr[0]
// //     return obj
// // }
// // // const x = addval(Person, list)
// // console.log(addval(Person, list))

// const sum=(a,b)=>{
//     console.log(a+b)
// }
// const myFunction = (paramfunc,a,b) =>{
//     paramfunc(a,b)
// }
// myFunction(sum,12,12)

setTimeout(function(){
    console.log("Hello after 3 sec")
}
,3000)
console.log(3)