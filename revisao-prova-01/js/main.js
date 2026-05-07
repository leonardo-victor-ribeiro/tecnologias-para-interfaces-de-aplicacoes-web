function loadTable(trabalhosSIN) {
  let table = `<table id="tabSIN" class="table table-striped">
                        <thead class="table-light">
                            <tr>
                                <th scope="col">Nro</th>
                                <th scope="col">Sessão</th>
                                <th scope="col">Área</th>
                                <th scope="col">Título</th>
                                <th scope="col">Aluno</th>
                                <th scope="col">Orientador</th>
                                <th scope="col">Campus</th>
                                <th scope="col">Toten</th>
                                <th scope="col">Dia</th>
                                <th scope="col">Início</th>
                                <th scope="col">Término</th>
                            </tr>
                        </thead>
                        <tbody>`;

  var linhas = "";
  for (trabalho of trabalhosSIN) {
    const [inicio, fim] = trabalho.horario.split("-").map((s) => s.trim());
    linhas += `<tr>
                <td>${trabalho.nro}</td>
                <td>${trabalho.sessao}</td>
                <td>${trabalho.area}</td>
                <td>${trabalho.titulo}</td>
                <td>${trabalho.aluno}</td>
                <td>${trabalho.orientador}</td>
                <td>${trabalho.campus}</td>
                <td>${trabalho.toten}</td>
                <td>${trabalho.dia}</td>
                <td>${inicio}</td>
                <td>${fim}</td>
            </tr>`;
  }

  table += linhas;
  table += ` </tbody>
            </table>`;

  document.getElementById("tabelaTrabalhos").innerHTML = table;
}

function loadFilter(trabalhosSIN) {
  let sessoes = new Set();
  let totens = new Set();
  let datas = new Set();

  trabalhosSIN.forEach((campo) => {
    if (!sessoes.has(campo.sessao)) {
      sessoes.add(campo.sessao);
    }
    if (!totens.has(campo.toten)) {
      totens.add(campo.toten);
    }
    if (!datas.has(campo.dia)) {
      datas.add(campo.dia);
    }
  });

  let sessao = document.getElementById("sessao");
  let toten = document.getElementById("toten");
  let data = document.getElementById("data");

  sessoes.forEach((s) => {
    let option = document.createElement("option");
    option.setAttribute("value", s);
    option.innerHTML = s;
    sessao.appendChild(option);
  });

  totens.forEach((t) => {
    let option = document.createElement("option");
    option.setAttribute("value", t);
    option.innerHTML = t;
    toten.appendChild(option);
  });

  datas.forEach((d) => {
    let option = document.createElement("option");
    option.setAttribute("value", d);
    option.innerHTML = d;
    data.appendChild(option);
  });
}
loadFilter(trabalhosSIN);
loadTable(trabalhosSIN);

let tb = new DataTable("#tabSIN");

function search() {
  let numero = document.getElementById("numero").value;
  let sessao = document.getElementById("sessao").value;
  let toten = document.getElementById("toten").value;
  let data = document.getElementById("data").value;
  let aluno = document.getElementById("estudante").value;
  let orientador = document.getElementById("orientador").value;

  let resultados = trabalhosSIN.filter((t) => {
    let filtroNro = !numero || t.nro === numero;
    let filtroSessao = !sessao || t.sessao === sessao;
    let filtroToten = !toten || t.toten === toten;
    let filtroData = !data || t.dia === data;
    let filtroAluno = !aluno || t.aluno === aluno;
    let filtroOrientador = !orientador || t.orientador === orientador;

    return (
      filtroNro &&
      filtroSessao &&
      filtroToten &&
      filtroData &&
      filtroAluno &&
      filtroOrientador
    );
  });
  return resultados;
}

let form = document.getElementById("tbForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let resultados = search();
  loadTable(resultados);
});

function listaEstudantes() {
  let estudantes = trabalhosSIN.map((t) => {
    return t.aluno;
  });
  return [...new Set(estudantes)];
}

const lista = listaEstudantes();

$(function () {
  $("#estudante").autocomplete({
    source: lista,
  });
});

function listaOrientadores() {
  let orientadores = trabalhosSIN.map((t) => {
    return t.orientador;
  });
  return [...new Set(orientadores)];
}

const listaOrientador = listaOrientadores();

$(function () {
  $("#orientador").autocomplete({
    source: listaOrientador,
  });
});
