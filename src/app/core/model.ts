export class Cesta {
  id: number;
  indFinalizado: string;
  dataHoraCadastro: Date;
  beneficios: [];
  dataPagamento: Date;
  valor: number;
  observacao: string;
  anexo: string;
  urlAnexo: string;
}

export class Beneficiario {
  type: string;
  codigo: string;
  nome: string;
  cpf: number;
  rg: number;
  empresa: string;
  cnpj: number;
  cidade: string;
  dataNascimento: number;
  ativo: string;
  email: string;
}

export class Sede {
  codigo: string;
  descricao: string;
  codigoProjetoAssento: string;
}

export class Cargo {
  codigoNivelCargo: string;
  descricao: string;
  ativo: string;
  valorBeneficio: number;
}
