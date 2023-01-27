
    let inputcalc = document.querySelector('.calculation')
    let inputresult = document.querySelector('.result')
    let number = "01,11.1,,3..,,,12,111.111"
    let number2 = "0.4,3,1,0.212"
    inputcalc.addEventListener('input', () => {
        let culcNum = inputcalc.value = inputcalc.value.replace(/[^0-9\.\,]/g, '')
        inputcalc.value = inputcalc.value.replace((/[\.*]+/g), '.')
        inputcalc.value = inputcalc.value.replace((/[\,*]+/g), ',')
        inputcalc.value = inputcalc.value.replace((/[\,][\.]/g), '.')
        inputcalc.value = inputcalc.value.replace((/[\.][\,]/g), ',')
        let SplittedValue = inputcalc.value.split(',')

        let summa = 0
        for (let i = 0;i<SplittedValue.length; i++ ){
            summa += Number(SplittedValue[i])
            console.log(Math.floor(summa*100)/100);
        }
        inputresult.value = summa
        console.log(culcNum.match(/[\.][\.]+/g));
        // let value = number
        // let value1 = value.split(',')
        // let regexp = new RegExp("[^0-9]")
        
        // console.log(value.match(/\d*\.\d*/g));
        // console.log(value.match(/\d\,+/g));
        // console.log(value1);
        // inputresult.value = 
    })