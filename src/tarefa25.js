let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Felipe", nota: 4 },
  { nome: "Isabela", nota: 10 },
  { nome: "Maria", nota: 6 },
];

console.log("Lista de Alunos")
console.log(alunos);

function aprovados(alunos) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota >= 6) {
          aprovados.push(alunos[i]);
      }
  }

  return aprovados;
}

let resultado = aprovados(alunos);
console.log("Lista de Aprovados")
console.log(resultado);
