var calcular = function () {
  let promedio = document.getElementById("promedio").value;
  let aprobadas = document.getElementById("aprobadas").value;
  let inscritas = document.getElementById("inscritas").value;
  let creditosAlumno = document.getElementById("creditosAlumno").value;
  let creditosIngreso = document.getElementById("creditosIngreso").value;
  promedio = parseFloat(promedio);
  aprobadas = parseInt(aprobadas);
  inscritas = parseInt(inscritas);
  creditosAlumno = parseInt(creditosAlumno);
  creditosIngreso = parseInt(creditosIngreso);
  let escolaridad = (aprobadas / inscritas) * 10;
  let velocidad = (creditosAlumno / creditosIngreso) * 10;
  let valorFinal = promedio * escolaridad * velocidad;

  document.getElementById("resultado").innerHTML = valorFinal;
};

/*
  var calcular = function () {
    let promedio = document.getElementById("promedio").value;
    total = parseInt(promedio) + 10;
    document.getElementById("resultado").innerHTML = total;
  };*/
