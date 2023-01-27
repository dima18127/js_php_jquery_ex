
<!-- EX 3.3 -->
<?php echo "<h2>Задача 3.2 PHP </h2>";
class Func
{
    public $numbers;
    public function ShowEvenNumbers()
    {
        echo  "Четные числа массива Numbers: <br>";
        foreach ($this->numbers as $item) {
            if ($item % 2 === 0) {
                echo  $item . "<br>";
            }
        }
    }
}
$exampleFunc = new Func();
// создадим и заполним массив $arr2 случайными значениями.
(function () {
    for ($i = 0; $i < 10; $i++) {
        global $arr2;
        $arr2[] = Rand(11, 99);
    }
})();
$exampleFunc->numbers = $arr2;
debug($exampleFunc);
$exampleFunc->ShowEvenNumbers();
?>