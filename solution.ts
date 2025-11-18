const formatValue = (input: number | string | boolean) : number | string | boolean | undefined => {
  if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "string") {
    return input.toUpperCase();
  } else if(typeof input ==='boolean' ){
    return !input;
  }
};




const getLength = (input: string | any[]) : number| undefined  => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } 

};




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);






type Obj = {
  title: string;
  rating: number;
};

const filterByRating = (input: Obj[]) : Obj[] => {
  const filteredBooks = input.filter((single) => single.rating >= 4);
  return filteredBooks;
};







type UserObject={
    id:number;
    name:string;
    email: string;
    isActive: boolean;

}

const filterActiveUsers =(input : UserObject[]): UserObject[]=>{
     const activeUsers= input.filter((single)=>single.isActive === true)
     return activeUsers
}






interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}


const printBookDetails =(input : Book) =>{
  console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable? "Yes": "No"}`);

}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};





const getUniqueValues =(param1: string[]| number[], param2: string[]| number[] ) : string[]| number[]=>{

     let uniqueArray : number[]| string[] =[]

     const add=(value : number | string)=>{
        let isValueAvailable= false
        for(let i =0; i <uniqueArray.length ; i++){
            if(uniqueArray[i]=== value){
              isValueAvailable = true
              break
            }
        }
        if (!isValueAvailable){
            uniqueArray[uniqueArray.length]= value
        }
     }

     for (let i =0; i <param1.length ; i++){
        add(param1[i])
     }
     
     for( let i =0; i <param2.length ; i++){
        add(param2[i])
     }

     return uniqueArray
}








type ProductObj={
     name: string;
     price: number;
     quantity: number;
     discount?: number;
}

const calculateTotalPrice =(value : ProductObj[]) : number =>{

const totalPrice = value.reduce((total,current)=> {
    const productTotal= current.price * current.quantity
    const discountTotal= current.discount? productTotal * (1- current.discount/100): productTotal
    return total+ discountTotal
},0)

return totalPrice
}

