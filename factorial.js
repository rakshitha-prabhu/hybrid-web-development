<head>
<body style = " font-size: 20px;"> </head>
<h1> factorial </h1>
Enter number: <input id = "num">
<br><br>
<button onclick = "fact()"> factorial </button>
<p id = "res"></p>
<script>
function fact(){
var i, num, f;
f = 1;
num = document.getElementById("num").value;
for(i = 1; i <= num; i++)  
{
f = f * i;
}
i = i - 1;  
document.getElementById("res").innerHTML = "the factorial of  " + i + " is " + f ;}
</script>
</body>
</html>
