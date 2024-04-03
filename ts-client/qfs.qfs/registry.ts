import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/qfs/qfs/params";
import { QueryParamsRequest } from "./types/qfs/qfs/query";
import { QueryParamsResponse } from "./types/qfs/qfs/query";
import { MsgUpdateParams } from "./types/qfs/qfs/tx";
import { MsgUpdateParamsResponse } from "./types/qfs/qfs/tx";
import { GenesisState } from "./types/qfs/qfs/genesis";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/qfs.qfs.Params", Params],
    ["/qfs.qfs.QueryParamsRequest", QueryParamsRequest],
    ["/qfs.qfs.QueryParamsResponse", QueryParamsResponse],
    ["/qfs.qfs.MsgUpdateParams", MsgUpdateParams],
    ["/qfs.qfs.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/qfs.qfs.GenesisState", GenesisState],
    
];

export { msgTypes }