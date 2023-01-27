<!-- EX 3.2 -->
<?php echo "<h2>Задача 3.2 PHP </h2>";
class Worker
{
    public $name;
    public $age;
    public $salary;

    public function getage()
    {
        return $this->age;
    }
    public function getsalary()
    {
        return $this->salary;
    }
}


$Dima = new Worker();
$Dima->name = "Иван";
$Dima->age = 25;
$Dima->salary = 1000;
debug($Dima);
$Vasya = new Worker();
$Vasya->name = "Вася";
$Vasya->age = 26;
$Vasya->salary = 2000;
debug($Vasya);

echo "Сумма зарплат: " . $Dima->getsalary() + $Vasya->getsalary() . "<br>";
echo "Сумма возрастов: " . $Dima->getage() + $Vasya->getage();

?>