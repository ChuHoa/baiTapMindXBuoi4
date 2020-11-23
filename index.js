//mang là một dãy các phần tử được xếp cạnh nhau trên ngăn xếp. Nó chưa 1 dữ liệu nào đó có thể giống hoặc không giống nhau. 

//tương tự như một dãy nhà cạnh nhau mang nhiều đặc điểm để nhận dạng.

//điểm khác bọt chính là mảng giống như những cá nhân đứng cạnh nhau còn đối tượng thì khác nó như kiểu chỉ định vào
// 1 đối tượng nhất định rồi phân tích xem nó có những cái đặc điểm gì

// là vị trí của một phần tử trong mảng//xác định vị trí của một dữ liệu trong mảng

//property là đặc điểm của một đối tượng

//method theo như e hiểu thì nó giống như là mình tạo ra một đoạn code để giải quyết một việc gì đấy lặp đi lặp lại
//không giống như vòng lặp thì method chỉ lặp lại khi nó đc gọi tới mà thôi


//Bài 1
let colors=["red","green","blue","black","brown"]
console.log(colors[0]);
console.log(colors[2]);
colors[4]="ultraviolet";
console.log(colors[4]);
let fourthcolor=colors[3];
colors.push("pink");
colors.unshift("orange");
console.log(colors.length);
colors.pop();
console.log(colors.length);

for (let i = 0; i < colors.length; i++) {

    console.log(i+", "+colors[i]);
    
}
let lastcolor=colors[colors.length-1];
console.log(lastcolor)


//Bài 2

let myPenguin={

    name:"Aptenodytes",
    origin:"none",
    author:"other none"

};
console.log("Hi there, Im a penguin, my name's "+myPenguin.name);
myPenguin.canFly=false;
console.log(myPenguin.canFly);

myPenguin.chirp=function(){
    return "CHIRP CHIRP! Is this what penguins sound like?"
}
console.log(myPenguin.chirp())
myPenguin.sayHello=function(){
    return "Hi there, Im a penguin, my name's "+this.name;
}
console.log(myPenguin.sayHello())

myPenguin.name="Penguin McPenguinFace";
console.log(myPenguin.sayHello())

myPenguin.fly=function(){
    if (this.canFly==true) {
        return "I can fly"
    }else{
        return "I can't fly"}
}
console.log(myPenguin.fly());
myPenguin.canFly=true;
console.log(myPenguin.fly());

for (let i in myPenguin) {
    console.log(myPenguin[i]);
}

for (let [key] of Object.entries(myPenguin)) {
    console.log(key);
}
for (let [key,value] of Object.entries(myPenguin)) {
    console.log(value);
}



