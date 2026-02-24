    
    'use strict';

var nested_Arr=[[1,3,5],7,9,11,
    {
    'userInfo':['Ayoub','23','Qu'],
    1: ['the num one'],
    'myArr': [['playerAge: ',17],['name','player1']],
    'nestedobj': {
        'fatherName':'hamad',
        'grandPa':'ghanem'
      }
    },

    ['another Array!']
];

var obj = {
    firstobj:{
        'lastName':'waleyi',
        'age':'23',
        'number':'0551625307',
        'likes':['banna','apple'],
         prnt(){
        console.log(this.age);
    }
    },
   'secondobj':{
        'lastName':'hamad',
        'age':'60',
        'number':'0503978860',
        'likes':['orange','pinapple'],
          prnt:function(){
        console.log(obj.secondobj);
    }
    },
    'outter':'fatherObj!',
    arr:[1,2,3],
   cnt () {
        let cnt=0;
        
       for(let i in obj.firstobj){
        cnt++;
       }
       return cnt;
    }
};

let person = {
    name:'david',
    age:26,
    city:'NYC',
    set(newName){
        this.name = newName;
    },
    getName(){return this.age} 
};
let realNum = [5,4,9.7,11,34.98,-14,-87,0];
let myarr = [5,4,3,2,1];

function mk(){
    class vege{
        constructor(name){
            this.name=name;
        }
        get vege(){return this.name}
        set vege(newVal){this.name=newVal}
        get vege2(){return "LOOLOL"}
    }

    return vege;
}
let v = mk();
let v2=new v('carrot');
console.log(v2.vege);
let temp = v2.vege2;
v2.vege='sss';
console.log(temp);

