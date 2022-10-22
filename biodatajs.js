<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>display biodata</title>
</head>
<body>
        <form>
            <h4>biodata</h4>INPUT THE FOLLOWING<br><br>
            <input type="text" placeholder='name' id="name"><br><br>
            <input type="text" placeholder='date of birth' id="dob"><br><br>
            <input type="text" placeholder='place of birth' id="pob"><br><br>
            <input type="number" placeholder='phone number' id="pno"><br><br>
            <input id='btn' type="submit" placeholder='Register' onclick="register(event)">
        </form>
        <p>Name: <span id="display_name"></span></p>
        <p>DOB: <span id="display_dob"></span></p>
        <p>Place of birth: <span id="display_pob"></span></p>
        <p>Phone number: <span id="display_pno"></span></p>
    <script>
    const register = function (event) {
    let btnName = document.querySelector("#name").value;
    let btnDOB = document.querySelector("#dob").value;
    let btnPOB = document.querySelector("#pob").value;
    let btnPhoneNumber= document.querySelector("#pno").value;
    display_name.innerHTML = btnName;
    display_dob.innerHTML = btnDOB;
    display_pob.innerHTML = btnPOB;
    display_pno.innerHTML = btnPhoneNumber;
    event.preventDefault();
    };
</script>
</body>
</html>
