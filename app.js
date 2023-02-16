console.log("hello");


var hcount = 0
function SavedButton(){
    var w =  document.querySelector(".inputBox1").innerHTML;
    var s =  document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(w,s);
    console.log(localStorage.getItem(s));
    s++;
    hcount++;
    if(hcount%2==1){
        document.querySelector(".history").style.display = "block";
        var data = document.querySelector('.history');

        for (p in localStorage) {
            var ans = localStorage.getItem(p);
            if (ans != null) {
                // console.log(ans);
                var h3 = document.createElement("h3");
                h3.setAttribute('class', 'remove')

                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3);
                data.appendChild(h3);

            }
        }
    }else{
        document.querySelector(".history").style.display = "none";
        var rem = document.querySelectorAll('.remove');
        console.log(rem);
        for (var i = 0; i < rem.length; i++) {
            rem[i].remove();
        }
    }
}

function SearchButton(){
   var problem = document.getElementById('problem').value;
   var category = document.getElementById('category').value;

   let pro = fetch(`https://newton.now.sh/api/v2/${category}/${problem}`)
   console.log(pro)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    var input2 =  value.result;
    document.querySelector(".inputBox2").innerHTML = input2;
   })
   

   const Input1  = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   var s =  document.querySelector(".inputBox1").value;
   var w =  document.querySelector(".inputBox2").innerHTML;
   localStorage.setItem(s,w);
}


function delBtn(ele){
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
}