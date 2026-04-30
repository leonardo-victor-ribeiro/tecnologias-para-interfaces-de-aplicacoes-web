fetch('../alunos.json')
    .then(response => response.json())
    .then(data => {
        let totalAlunos = data.length;
        let h2 = document.getElementById('msg');
        h2.textContent = `${totalAlunos} alunos na turma`;
        let lista = document.getElementById('lista');
        data.forEach(aluno => {
            let tr = document.createElement('tr');
            let tdEmail = document.createElement('td');
            tdEmail.textContent = aluno.email;
            let tdNome = document.createElement('td');
            tdNome.textContent = aluno.nome;
            tr.append(tdNome);
            tr.append(tdEmail);
            lista.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar arquivo JSON', error));



