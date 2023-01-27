<!-- EX 3.1 -->
<?php echo "<h2>Задача 3.1 PHP </h2>";
function debug($data)
{
    echo '<pre>' . print_r($data, 1) . '</pre>';
}

$arr1 = array();
for ($i = 0; $i < 10; $i++)
    $arr1[] = RAND(1, 100); {
}
$max = max($arr1);
$min = min($arr1);
echo "<b style='color: red' > MAX - $max</b><br>";
echo "<b style='color: blue' > MIN - $min</b>";
echo '<p> Изначальный массив: </p>';
debug($arr1);
foreach ($arr1 as $i => &$value) {
    if ($value === $max) {
        $arr1[$i] = "<b style='color: blue' >$min</b>";
    } elseif ($value === $min) {
        $arr1[$i] = "<b style='color: red' >$max</b>";
    }
}
echo '<p> Обработанный массив: </p>';
debug($arr1);
?>