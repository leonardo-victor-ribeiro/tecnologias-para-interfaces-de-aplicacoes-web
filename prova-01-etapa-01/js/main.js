let tbody = document.getElementById("divMissoes");

missoes.forEach((m) => {
  let tr = document.createElement("tr");
  let tdNome = document.createElement("td");
  tdNome.textContent = m.nome;
  let tdAno = document.createElement("td");
  tdAno.textContent = m.ano_lancamento;
  let tdObj = document.createElement("td");
  tdObj.textContent = m.objetivo;
  let tdStatus = document.createElement("td");
  tdStatus.textContent = m.status;
  let tdDestino = document.createElement("td");
  tdDestino.textContent = m.destino;
  let tdMissao = document.createElement("td");
  tdMissao.textContent = m.missao_tripulada;
  let tdPais = document.createElement("td");
  tdPais.textContent = m.pais_origem;

  tr.appendChild(tdNome);
  tr.appendChild(tdAno);
  tr.appendChild(tdObj);
  tr.appendChild(tdStatus);
  tr.appendChild(tdDestino);
  tr.appendChild(tdMissao);
  tr.appendChild(tdPais);

  tbody.appendChild(tr);
});

new DataTable("#tabMissoes" /*id da tabela */, {
  pageLength: 10,
  lengthMenu: [5, 10, 25],
  language: {
    search: "Buscar:",
    lengthMenu: "Mostrar _MENU_ registros",
    info: "Mostrando _START_ a _END_ de _TOTAL_ missões",
    infoEmpty: "Nenhuma missao para mostrar",
    paginate: {
      first: "Primeira",
      last: "Última",
      next: "Próxima",
      previous: "Anterior",
    },
    emptyTable: "Nenhuma missão encontrada",
  },
});
