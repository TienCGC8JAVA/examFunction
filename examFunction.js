function  task1(a)
{
    var a = Number(prompt("Nhập vào 1 số bất kì"));
    document.getElementById("demo").innerHTML = "Bình phương của " + a + " là: " + Math.pow(a,2);
    return Math.pow(a, 2);
}

function task2(r)
{
    var r = Number(prompt("Nhập vào bán kính"));
    let perimeter = 2*Math.PI*r;
    let arae = Math.PI*Math.pow(r,2);
    document.getElementById("demo").innerHTML = " Chu vi hình tròn là: " + perimeter + "<br>" + "Diện tích hình tròn là: " + arae;
    return perimeter;
    return area;
}

function task3(factorial)
{
    let n = Number(prompt("Nhập vào 1 số nguyên"));
    var factorial = 1;
    for (let i = 2; i <= n; i++)
    {
        factorial *=i;
    }
    document.getElementById("demo").innerHTML = "Giai thừa của " + n + " là: " + factorial;
    return factorial;
}

function task4(num)
{
    let n = prompt("Nhập vào 1 kí tự bất kì");
    var num = n*1;
    if (num == n)
    {
       num = true;
    }
    else
    {
        num = false;
    }
    document.getElementById("demo").innerHTML = num;
    return num;
}

function task5()
{
    let a = parseInt(prompt("Nhập số nguyên thứ nhất"));
    let b = parseInt(prompt("Nhập số nguyên thứ hai"));
    let c = parseInt(prompt("Nhập số nguyên thứ ba"));
    if (a >= b)
    {
        if (a >= c)
        {
            document.getElementById("demo").innerHTML = "Số lớn nhất là: " + a;
        }
        else
        {
            document.getElementById("demo").innerHTML = "Số lớn nhất là: " + c;
        }
    }
    else
    {
        if (b >= c)
        {
            document.getElementById("demo").innerHTML = "Số lớn nhất là: " + b;
        }
        else
        {
            document.getElementById("demo").innerHTML = "Số lớn nhất là: " + c;
        }
    }
}

function task6()
{
    do {
        var n = prompt("Nhập 1 số");
        var num = n*1;
    } while (num != n)
    if (num > 0)
    {
        num = true;
    }
    else
    {
        num = false;
    }
    document.getElementById("demo").innerHTML = num;
}

function task7(a,b)
{
    var g = parseInt(prompt("Nhập vào số nguyên thứ nhất"));
    var h = parseInt(prompt("Nhập vào số nguyên thứ hai"));
    let t = g;
    g = h;
    h = t;
    document.getElementById("demo").innerHTML = "Sau khi hoán đổi số thứ nhất là: " + g + " số thứ hai là: " + h;
}

function task8()
{
    let arr = [];
    let n = parseInt(prompt("Nhập vào số phần tử trong mảng cần dùng"));
    for (let i = 0; i < n; i++)
    {
        arr.push(prompt("Nhập vào phần tử"));
    }
    document.getElementById("demo").innerHTML = " Thứ tự đảo ngược của mảng là: " + arr.reverse();
}

function task9()
{
    let arr = [];
    let a = prompt("Nhập vào 1 kí tự");
    arr = prompt("Nhập vào 1 mảng");
    let count = 0;
    for (let  element of arr)
    {
        if (a == element)
        {
            count++;
        }
        switch (count)
        {
            case  0:
                document.getElementById("demo").innerHTML = "-1";
                break;
            default:
                document.getElementById("demo").innerHTML = "Số lần xuất hiện của kí tự trong mảng là: " + count;
        }
    }
}