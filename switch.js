<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>number divisibility</title>
</head>
<body>
    <h1>display if number is divisible or not </h1>
    Enter Number:
    <input type="text" id="n2"></input><br><br>
    Enter Divisor:
    <input type="text" id="n3"></input><br><br>
    <button type="button" onclick="divisibility()">submit</button>
    <script>
function divisibility()
            {
                a=parseInt(document.getElementById("n2").value);
                b=parseInt(document.getElementById("n3").value);
                i=a%b;
                switch(i){
                    case 0: document.write("divisible");
                    break;
                    case 1:document.write("not valid");
                    break;
                    default:document.write("not valid");
                }
            }
    </script>
</body>
</html>
