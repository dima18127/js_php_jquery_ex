<?php error_reporting(-1); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Тестовое</title>
</head>

<body>
    <div class="container">
        <div class="button">Выберите цвет</div>
        <input class="calculation" type="text" placeholder="введите цифры">
        <input class="result" type="text" placeholder="результат">
        <h3>«Привет мир»</h3>
        <h3>«Привет мир»</h3>
        <h3>«Привет мир»</h3>
        <ul> OLD UL</ul>
        <!-- PHP 3.1-->
        <?php
        include('./ex_php/ex3_1.php');
        include('./ex_php/ex3_2.php');
        include('./ex_php/ex3_3.php');
        include('./ex_php/ex3_4.php');
        ?>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script type="module" src="javascript.js"></script>
    <script src="jquery.js"></script>
</body>

</html>