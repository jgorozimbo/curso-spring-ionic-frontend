import { RefDTO } from "../../models/ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO {
    cliente : RefDTO;
    enderecoDeEntrega : RefDTO;
    pagamento : PagamentoDTO;
    itens : ItemPedidoDTO[];
}