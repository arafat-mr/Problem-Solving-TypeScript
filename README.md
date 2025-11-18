1. What are some differences between interfaces and types in TypeScript?

=> ইন্টারফেস ইউনিয়ন বা ইন্টারসেকশন তৈরি করতে পারে না; এটি শুধুমাত্র এক্সটেন্ড করার জন্য ব্যবহৃত হয়। অন্যদিকে, টাইপ ইউনিয়ন এবং ইন্টারসেকশনসহ জটিল টাইপ সংমিশ্রণ তৈরি করতে সক্ষম। একটি ইন্টারফেস পুনরায় ডিক্লেয়ার করলে তা সম্প্রসারিত হয়, যেখানে টাইপ পুনরায় ডিক্লেয়ার করার চেষ্টা করলে এরর তৈরি হয়। সাধারণভাবে ইন্টারফেস অবজেক্ট স্ট্রাকচার মডেলিংয়ের জন্য ব্যবহৃত হয় ; আর টাইপ জটিল লজিক ও কাস্টম টাইপ সংজ্ঞায়নের জন্য বেশি উপযোগী।

2. What is the use of the keyof keyword in TypeScript? Provide an example.


=>keyof একটি অবজেক্ট টাইপের সব প্রপার্টি নাম বের করে এবং তা একটি ইউনিয়ন টাইপ হিসেবে প্রদান করে।এটি অবজেক্টের প্রপার্টি নিরাপদভাবে ব্যবহার করতে সাহায্য করে এবং টাইপ সেফটি নিশ্চিত করে। keyof ব্যবহার করলে অবৈধ প্রপার্টি অ্যাক্সেসের সময় কম্পাইল টাইমে এরর দেখায়।এটি জেনেরিক ফাংশন বা রিইউজেবল কোডে খুব কার্যকর এবং টাইপ-সেফ ডেভেলপমেন্ট সহজ করে।



type Employee = {
id: number;
name: string;
department: string;
};

keyof makes a union of keys: "id" | "name" | "department"

type EmployeeKeys = keyof Employee;

function getProperty(obj: Employee, key: EmployeeKeys) {
return obj[key];
}

const person: Employee = { id: 1, name: "Arafat", department: "HR" };

console.log(getProperty(person, "name"));  output -- "Arafat"
console.log(getProperty(person, "department")); output -- "HR"
console.log(getProperty(person, "salary")); output -- Error: "salary" is not a key of Employee
