<!-- ex 3.4 -->
<?php
echo "<h2>Задача 3.2 PHP </h2>";
$text = "anyText";
for ($i = 1; $i <= 5; $i++) {
    $f_hd = fopen("data" . $i . ".txt", "w");
}
file_put_contents('data1.txt', $text);
rename('data2.txt', 'data2-1.txt');
unlink('data3.txt');
if (!file_exists('directory')) {
    mkdir('directory');
    rename('data4.txt', 'directory/data4.txt');
    echo 'Директория и файл создана';
} else {
    echo 'Директория и файл существует';
}

?>