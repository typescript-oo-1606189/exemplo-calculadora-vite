import { TipoOperacao } from "./calculadora";

export default function Operacoes() {
  return <select id="op">
    <option value={TipoOperacao.SOMAR}>{TipoOperacao.SOMAR}</option>
    <option value={TipoOperacao.SUBTRAIR}>{TipoOperacao.SUBTRAIR}</option>
    <option value={TipoOperacao.MULTIPLICAR}>{TipoOperacao.MULTIPLICAR}</option>
    <option value={TipoOperacao.DIVIDIR}>{TipoOperacao.DIVIDIR}</option>
  </select>
}