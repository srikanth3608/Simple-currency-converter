v
let select = document.querySelectorAll('.currency');
let input = document.getElementById('input');
let err = document.getElementById('errMsg');

// console.log(select);
fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayDown(res))
function displayDown(res){
    let curr = Object.entries(res);
    // console.log(curr);
    for(let i=0;i<curr.length;i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
        // console.log(curr[i][0]);
    }
}

let btn= document.getElementById('btn');
btn.addEventListener('click',() => {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputVal = input.value;
    if(curr1 === curr2){
        err.innerHTML = "You have Entered same country";
        err.style.color = 'red';
        err.style.fontWeight = 'bold';
    }
    else{
        convert(curr1,curr2,inputVal)
    }
});

// convert(from, to, amount)
function convert(curr1,curr2,inputVal) {
    const host = 'api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then((res) => res.json())
    .then((data) => {
        let output = Object.values(data.rates)[0]
        err.innerHTML = `The converted value is : ${output }`;
        err.style.color = 'white';
        console.log(output);
        document.getElementById('result').value = output;
    });
}
  

