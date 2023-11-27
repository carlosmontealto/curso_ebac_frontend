function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

function Funcionario (nome, idade, cargo, salario){
    Pessoa.call(this, nome, idade);
    this.cargo= cargo;
    this.salario = salario;
};

function Cliente (nome, idade, endereco){
    Pessoa.call(this, nome, idade);
    this.endereco = endereco;
};

const funcionario1 = new Funcionario ('João', 45, 'Gerente', 8000);
const funcionario2 = new Funcionario ('Diego',22, 'Caixa', 2000);
const funcionario3 = new Funcionario ('Jessica',32, 'Vendedora', 3000);

const cliente1 = new Cliente ('Mario', 49, 'São Paulo - SP');
const cliente2 = new Cliente ('Amanda', 22, 'Maringá - PR');
const cliente3 = new Cliente ('Carlos', 25, 'Campo Mourão - PR');

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);