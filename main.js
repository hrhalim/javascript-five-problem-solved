 /* 
    Problem 1: Let’s play a mind game 
    তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")  
    এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
*/

function mindGame(mindGameNumber){
    if(typeof mindGameNumber !== 'number' || mindGameNumber < 0 ){
        return 'Please Provide Number';
    } else {
        let multiplication = mindGameNumber * 3;
        let addition = multiplication + 10;
        let division = addition / 2;
        let totalMindGame = division - 5;  
        return totalMindGame;
    }
   
}

/*
   Problem 2: Finding even or odd 
তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে।   
এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:


*/

function evenOdd(evenOddNumber){
    if(typeof evenOddNumber !== 'string' ){
        return 'Please Provide String Value'; 
    } else {
        for(let i = 0; i < evenOddNumber.length; i++){ 
            if(evenOddNumber.length % 2 == 0){
                return 'even';
            } else {
                return 'odd';
            } 
        }
    } 
}

/*
   Problem 3: Is Less or Greater than seven 
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।    
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
*/

function isLGSeven(inputNumber) {
    if(typeof inputNumber !== 'number'){
        return 'Please Provide Valid Number';
    } else {
        let differenceNumber = inputNumber - 7;  
        if(differenceNumber < 7){
            return differenceNumber;
        } else {
            return inputNumber * 2;
        }
    } 

}

/*
   Problem 4: Finding Bad data 
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.  
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
*/

function findingBadData(getArrayNumber) { 
    if(!Array.isArray(getArrayNumber)){
        return 'Please Provide Valide Number';
    } else {
        let badDataCount = 0;
        for (let i = 0; i < getArrayNumber.length; i++) {
            let getDataIndex = getArrayNumber[i];
            if (getDataIndex < 0) { 
                badDataCount++; 
            } 
        }
        return badDataCount;
    }
   
}

/*
    Problem 5: Convert your gems into diamond 
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।  
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43 
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
*/

function gemsToDiamond(firstFriendGems, secoundFriendGems, thirdFriendGems){
    const firstFriendDiamond  = firstFriendGems * 21;
    const secoundFriendDiamond = secoundFriendGems * 32;
    const thirdFriendDiamond = thirdFriendGems * 43;
    const totalDiamond  = firstFriendDiamond + secoundFriendDiamond + thirdFriendDiamond;
    if(typeof firstFriendGems !== 'number' || typeof secoundFriendGems !== 'number' || typeof thirdFriendGems !== 'number'){
        return 'Please Provide Valid Number'; 
    } else { 
        if(totalDiamond >= 2000){
            return totalDiamond - 2000; 
        }else if(totalDiamond < 2000){
            return totalDiamond;
        } 
    }

}