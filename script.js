//console.log("zadacha 1");

function types()
{
  var ex_num = 20;
  console.log('num ',ex_num);
  var ex_string = "Katia"
  console.log('string ',ex_string);
  var ex_bool = true;
  console.log('bool ',ex_bool);
  var ex_null = null;
  console.log('null ',ex_null);
}

function z1()
{
  console.log('приведение типов данных');
  console.log('num 2 + num 2',2+2);  // тип number
  console.log('str 2 +str 2','2'+'2'); // тип string
  console.log('str 2 +other_str','2'+'key'); // тип string
  console.log("bool true+true", true+true); // Логический тип в число
  console.log("str+null",'str'+null); // Число преобразовывается в строковый тип
  console.log("bool false+null",false+null); // Логический тип в число
  console.log('num 20 +bool true',20+true); // Логический тип в тип number
  console.log('num 20 +null',20+null); // null в тип number

}


function z2()
{
  console.log("zadacha 2");
  var a = prompt("1 storona");
  var b = prompt("2 storona");

  var perimtr = 2*(parseFloat(a)+parseFloat(b));
  var s  = parseFloat(a)*parseFloat(b);
  console.log("Пириметр",perimtr);
  console.log("Площадь",s);
  console.log("Отношение пириметра к площади",perimtr/s);

}

function z3()
{
  var cel = prompt("input celsium")
  var faren = Number(cel)*1.8+32;
  console.log(`${cel},\u00B0C соответствует,${faren},\u00B0F`);
  
  faren = prompt("input far")
  cel= (Number(faren)-32)/1.8;
  console.log(`${faren},\u00B0F соответствует,${cel},\u00B0C`);
}

function z4()
{
  var year = prompt("input year")
     
  year = parseFloat(year);
  if(((year%4)>0))
    {
      alert(false);
    }
    else if ((year%100)>0)
    {
      alert(true);
    }
    else
    {
      alert(true);
    }
    
}


function z5()
{
  var a = prompt("1 num");
  var b = prompt("2 num");
  a = parseFloat(a);
  b = parseFloat(b)
   if((a+b)==10)
   {
      console.log(true);
   }
   else if((a == 10) || (b == 10) )
   {
      console.log(true);
   }
   else
   {
      console.log(false);
   }

}