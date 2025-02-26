// pages/dart-programming.js
import Link from "next/link";
import Image from "next/image";
import BlogHeader from "@/components/BlogHeader";

export default function DartProgramming() {
  return (
    <article className="wrapper">
      <BlogHeader title="Dart Básico" />
      <div className="page-body mt-10">
        <p>
          Dart es un lenguaje de programación <strong>open source,</strong>{" "}
          orientado a objetos con un estilo parecido al de <strong>C</strong> a
          nivel de sintaxis, desarrollado por <strong>Google en 2011.</strong>{" "}
          El propósito de la programación con Dart es crear interfaces de
          usuario para la web y aplicaciones móviles. <strong>Es</strong>{" "}
          <strong>fuertemente tipado</strong> y es un{" "}
          <strong>lenguaje compilado</strong> por lo que no puedes ejecutar
          código Dart directamente, en su lugar el compilador lo analiza y lo
          transfiere a código máquina.
        </p>
        <p>El siguiente ejemplo muestra un pequeño snippet de código en Dart</p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`void main() {  
  for (int i = 0; i < 5; i++) {  
    print('hello {i + 1}');  
  }  
}  `}
          </code>
        </pre>
        <h2 className="font-bold text-xl mt-4">Tipos de datos</h2>
        <table className="simple-table w-full mt-4">
          <thead className="simple-table-header">
            <tr>
              <th className="simple-table-header-color simple-table-header">
                Tipo de dato
              </th>
              <th className="simple-table-header-color simple-table-header">
                Ejemplo
              </th>
              <th className="simple-table-header-color simple-table-header">
                Descripción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>String</td>
              <td>String myName = “Victor Requena”;</td>
              <td>
                Una variable que contiene un texto, puedes usar comillas simples
                o dobles, solo asegurate de ser consistente.
              </td>
            </tr>
            <tr>
              <td>num, int, double</td>
              <td>
                int age = 25;
                <br />
                double price = 125.50;
                <br />
              </td>
              <td>
                El tipo de dato num espera un número, Dart tiene dos tipos de
                números:
                <br />
                Integer (Es un número sin decimales)
                <br />
                Double (Es un número con decimales).
                <br />
              </td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>
                bool varn_name = true;
                <br />
                OR
                <br />
                bool var_name = false
                <br />
              </td>
              <td>
                Utiliza la palabra clave bool para representar el valor Booleano
                verdadero o falso.
              </td>
            </tr>
            <tr>
              <td>Object</td>
              <td>Person = Person()</td>
              <td>
                Generalmente, todo en Dart es un objeto (Ej., int, String) Pero
                un objeto también puede ser mas complejo.
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-bold text-xl mt-4">Variables y funciones</h2>
        <p>
          Una variable es un espacio en la memoria de la computadora que se
          utiliza para guardar datos. Las variables nos permiten a los
          programadores referirnos a un valor con un nombre{" "}
          <strong>representativo</strong> en vez de tener que recordar este
          valor.
        </p>
        <p>
          Dart utiliza los <strong>Identifiers</strong> para definir variables,
          funciones, métodos y clases.
        </p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">{`var myAge = 50`}</code>
        </pre>
        <p>
          En este caso <strong>myAge</strong> es una variable que almacena un
          entero (50) y <em>“var”</em> es el <strong>identifier</strong> que se
          utiliza para definir la variable. También pudimos haber usado{" "}
          <strong>Int.</strong> Sin embargo Dart tiene inferencia de datos, lo
          que significa que puede inferir el tipo de dato de una variable según
          su valor, por lo tanto, si creas una variable con el{" "}
          <strong>identifier</strong> <em>“var”</em>, Dart puede inferir que esa
          variable es de tipo entero (Int).
        </p>
        <p>
          Ademas de las variables, las <strong>funciones</strong> son una
          característica fundamental de cualquier lenguaje de programación. Las
          funciones son unidades modulares de código diseñadas para realizar
          tareas especificas. Encapsulan un conjunto de instrucciones, lo que
          permite la reutilización y la organización el código.
        </p>
        <p>
          La declaración de función contiene el nombre de la función, el tipo de
          retorno y los parámetros.
        </p>
        <p>
          El siguiente ejemplo explica la función utilizada en la programación
          Dart.
        </p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`//Function declaration  
num addNumbers(num a, num b) {  
    // Aquí utilizamos num como tipo porque debe funcionar tanto para int como para double 
    return a + b;  
}  
var price1 = 29.99;  
var price2 = 20.81;  
var total = addNumbers(price1, price2);
var num1 = 10;  
var num2 = 45;  
var total2 = addNumbers(num1, num2);  `}
          </code>
        </pre>
        <h2 className="font-bold text-xl mt-4">Operadores</h2>
        <p>
          Dart soporta todos los operadores que pueden soportar otros lenguajes
          como C, Kotlin, y JavaScript, dejare la lista de nombres de operadores
          aquí abajo de todas maneras.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Aritméticos</li>
          <li>Igualdad</li>
          <li>Incremento y decremento</li>
          <li>Lógicos</li>
          <li>Comparación</li>
        </ul>
        <h2 className="font-bold text-xl mt-4">Toma de decisiones y bucles</h2>
        <p>
          La toma de decisiones es una función que permite evaluar una condición
          antes de ejecutar las instrucciones. Dart admite los siguientes tipos
          de instrucciones de toma de decisiones:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>If</li>
          <li>If-else</li>
          <li>Switch</li>
        </ul>
        <div className="flex mt-4">
          <div className="w-1/2">
            <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
              <code className="language-Dart">
                {`void main() {   
   var num = 12;   
   if (num % 2 == 0) {   
      print("Number is Even.");   
   } else {   
      print("Number is Odd.");   
   }   
} `}
              </code>
            </pre>
          </div>
          <div className="w-1/2">
            {/* <Image
              src="https://images.javatpoint.com/tutorial/flutter/images/flutter-dart-programming.png"
              alt="flutter-dart-programming"
              width={500}
              height={500}
            /> */}
          </div>
        </div>
        <p>
          Los <strong>bucles</strong> se utilizan para ejecutar un bloque de
          código repetidamente hasta que se cumpla una condición especificada.
          El lenguaje Dart admite los siguientes tipos de instrucciones de
          bucle:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>for</li>
          <li>for..in</li>
          <li>while</li>
          <li>do..while</li>
        </ul>
        <div className="flex mt-4">
          <div className="w-1/2">
            <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
              <code className="language-Dart">
                {`void main() {   
   var name = ["Peter", "Rinky Ponting", "Abhishek"];   
     
   for (var prop in name) {   
      print(prop);   
   }   
}  `}
              </code>
            </pre>
          </div>
          <div className="w-1/2">
            {/* <Image
              src="https://images.javatpoint.com/tutorial/flutter/images/flutter-dart-programming2.png"
              alt="flutter-dart-programming2"
              width={500}
              height={500}
            /> */}
          </div>
        </div>
        <h2 className="font-bold text-xl mt-4">Comentarios</h2>
        <p>
          Los comentarios son líneas de código no ejecutables. Son uno de los
          aspectos principales de todos los lenguajes de programación. Su
          finalidad es proporcionar información sobre el proyecto, la variable o
          una operación.
        </p>
        <p>Estos son los tipos de comentarios en Dart:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Comentarios de formato:</strong> Son comentarios de una sola
            línea (//)
          </li>
          <li>
            <strong>Comentarios en bloque:</strong> Son comentarios de multiples
            líneas (/*…*/)
          </li>
          <li>
            <strong>Comentarios de documentación:</strong> Es un comentario de
            documento que se utiliza para members y types (///)
          </li>
        </ul>
        <h2 className="font-bold text-xl mt-4">Continue y Break</h2>
        <p>
          En Dart, las palabras clave continue y break controlan el flujo de
          bucles y otras estructuras. continue salta inmediatamente a la
          siguiente iteración del bucle, omitiendo el código restante en la
          iteración actual.
        </p>
        <p>Podemos entenderlo con el siguiente ejemplo:</p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`void main() {   
  for(int i=1;i<=10;i++){    
    if(i==5){    
      print("Hello");  
      continue; //it will skip the rest statement        
    }    
    print(i);    
  }   
}  `}
          </code>
        </pre>
        <p>
          La sentencia break permite finalizar o detener el flujo actual de un
          programa y continuar la ejecución después del cuerpo del bucle.
        </p>
        <p>El siguiente ejemplo ofrece una explicación detallada:</p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`void main() {   
  for(int i=1;i<=10;i++){    
    if(i==5){    
      print("Hello");  
      break;//it will terminate the rest statement        
    }    
    print(i);    
  }   
}  `}
          </code>
        </pre>
        <h2 className="font-bold text-xl mt-4">
          Palabras claves Final y Const
        </h2>
        <p>
          En Dart las palabras clave <em>final</em> y <em>const</em> se utilizan
          para declarar variables que no se pueden modificar después de su
          inicialización. Aunque ambas impiden la reasignación, existen
          diferencias clave entre ellas:
        </p>
        <p>
          <strong>final</strong>
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Inicialización en tiempo de ejecución:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Las variables final se inicializan cuando se accede a ellas por
                primera vez durante la ejecución del programa (tiempo de
                ejecución). Esto significa que su valor puede depender de
                cálculos u otras variables que no se conocen hasta que se
                ejecuta el código.
              </li>
            </ul>
          </li>
          <li>
            Uso:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Se utiliza cuando el valor de una variable no se conoce en
                tiempo de compilación, pero no se debe cambiar una vez que se le
                asigna un valor.
              </li>
              <li>
                Las variables de instancia pueden ser final, pero no const
              </li>
            </ul>
          </li>
          <li>
            Inmutabilidad superficial:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Un objeto final no puede ser reasignado, pero sus propiedades
                internas puede ser modificadas.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>const</strong>
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Inicialización en tiempo de compilación:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Las variables const se inicializan en tiempo de compilación.
                Esto significa que su valor debe conocerse antes de que se
                ejecute el programa.
              </li>
              <li>
                Los valors const deben ser literales o expresiones constantes.
              </li>
            </ul>
          </li>
          <li>
            Uso:
            <ul className="list-disc ml-6 mt-2">
              <li>
                Se utiliza para constantes que se conocen en tiempo de
                compilación, como valores numéricos, cadenas o listas.
              </li>
              <li>Las variables const son implicitamente final</li>
            </ul>
          </li>
          <li>
            Inmutabilidad profunda:
            <ul className="list-disc ml-6 mt-2">
              <li>Un objeto const y sus propiedades internas son inmutables</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Ejemplo:</strong>
        </p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`void main() {   
  final a = 100;  
  const pi = 3.14;  
  print(a);  
  print(pi);  
}  `}
          </code>
        </pre>
        <h2 className="font-bold text-xl mt-4">
          Programación Orientada a Objetos
        </h2>
        <p>
          Dart es un lenguaje de programación orientado a objetos, lo que
          significa que cada valor en Dart es un objeto. Un número también es un
          objeto en el lenguaje Dart.
        </p>
        <p>
          <strong>Objeto:</strong> Un objeto es una entidad que tiene estado y
          comportamiento. Puede ser físico o lógico. En Dart, cada valor es un
          objeto, incluso los valores primitivos como texto y número. Dart
          también le permite crear su propio objeto personalizado para expresar
          relaciones más complejas entre datos.
        </p>
        <p>
          <strong>Clase:</strong> Una clase es una colección de objetos. Esto
          significa que los objetos se crean con la ayuda de clases, ya que cada
          objeto necesita un modelo a partir del cual se puede crear un objeto
          individual. Una definición de clase incluye lo siguiente:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Fields</li>
          <li>Methods</li>
          <li>Constructor</li>
          <li>Getters and setters</li>
        </ul>
        <p>
          <strong>Ejemplo:</strong>
        </p>
        <pre className="code language-Dart rounded-md bg-[#f8f8f8] p-4">
          <code className="language-Dart">
            {`class Mobile {  
  // Property Declaration  
  String color, brandName, modelName;  
    
  // Method Creation  
  String calling() {  
    return "Mobile can do call to everyone.";  
  }  
  String musicPlay() {  
    return "Mobile can play all types of Music.";  
  }  
  String clickPicture() {  
    return "Mobile can take pictures.";  
  }  
}  
  
void main() {  
  // Object Creation  
  var myMob = new Mobile();   
    
  // Accessing Class's Property  
  myMob.color = "Black";   
  myMob.brandName = "Apple Inc.";  
  myMob.modelName = "iPhone 11 Pro";  
    
  //Display Output  
  print(myMob.color);  
  print(myMob.modelName);  
  print(myMob.brandName);  
  print(myMob.calling());  
  print(myMob.musicPlay());  
  print(myMob.clickPicture());  
}`}
          </code>
        </pre>
        <p>
          En el ejemplo anterior, definimos una clase Mobile, que tiene tres
          variables de tipo string y tres funciones o métodos. Luego, creamos
          una función principal que Dart ejecutará primero cuando se inicie la
          aplicación. Dentro de la función principal, creamos un objeto para
          acceder a las propiedades de la clase. Finalmente, imprimimos la
          salida.
        </p>
      </div>
    </article>
  );
}
