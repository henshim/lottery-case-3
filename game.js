function music() {
    let nhac = new Audio()
}

function quaySo(){
    let numb=[1,2,3,3,3,3,4,1]
    for (let i=0;i<8;i++){
        for (let j=0;j<numb[i];j++){
            document.getElementById(`price${i}-${j}`).innerHTML=Math.floor(Math.random()*99999);
        }
    }
    x.setResult();
    let myArr=setInterval(myBingo, 2000);
     function myBingo(){
         y.getTrue(num)
         clearInterval(myArr);
     }
     document.getElementById('date').innerHTML=new Date()
}
class loto{
    constructor(date) {
        this.date=date;
        this.numb=[1,2,3,3,3,3,4,1];
        this.special=[];
        this.first = [];
        this.second = [];
        this.third = [];
        this.four = [];
        this.five = [];
        this.six = [];
        this.seven = [];
    }

    setResult(giai,number){
        let array=[];
        for (let i=0;i<number;i++){
            let ran=document.getElementById(`price${giai}-${i}`).innerHTML;
            array.push(ran);
        }
        switch (giai){
            case 0:
                this.first=array;
                break;
            case 1:
                this.second=array;
                break;
            case 2:
                this.third=array;
                break;
            case 3:
                this.four=array;
                break;
            case 4:
                this.five=array;
                break;
            case 5:
                this.six=array;
                break;
            case 6:
                this.seven=array;
                break;
            case 7:
                this.special=array;
                break;
        }
    }
    setAllResult(){
        for(let i=0;i<8;i++){
            this.setResult(i,this.numb[i]);
        }
    }
    takeAll(){
        let arr=[this.seven,this.six,this.five,this.four,this.third,this.second,this.first,this.special];
        return arr;
    }
}

class gameLoto{
    constructor(name) {
        this.name=name;
        this.loto=loto;
        this.lotery=[];
    }

    setLoto(mienbac){
        this.loto=mienbac;
        this.lotery=mienbac.takeAll()
    }
    getTrue(number){
        for (let i=0;i<this.lotery.length;i++){
            for (let j=0;j<this.lotery[i].length;j++){
                if (this.lotery[i].includes(number)){
                    alert('Chúc mừng bạn đã trúng giải !!! ' +i);
                    return ;
                }
            }
        }
        alert('Chúc bạn may mắn lần sau !!!');
    }
}

let x=new loto('31/12/2021')
let y=new gameLoto();

y.setLoto(x);
let num=document.getElementById('nhapso').value;