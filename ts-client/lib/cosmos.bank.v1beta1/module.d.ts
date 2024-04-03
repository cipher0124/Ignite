import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/bank/v1beta1/tx";
import { QuerySupplyOfResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { Balance } from "./types/cosmos/bank/v1beta1/genesis";
import { Metadata } from "./types/cosmos/bank/v1beta1/bank";
import { QueryTotalSupplyRequest } from "./types/cosmos/bank/v1beta1/query";
import { DenomOwner } from "./types/cosmos/bank/v1beta1/query";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSetSendEnabled } from "./types/cosmos/bank/v1beta1/tx";
import { Input } from "./types/cosmos/bank/v1beta1/bank";
import { QueryParamsResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgMultiSendResponse } from "./types/cosmos/bank/v1beta1/tx";
import { SendAuthorization } from "./types/cosmos/bank/v1beta1/authz";
import { QuerySupplyOfRequest } from "./types/cosmos/bank/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/bank/v1beta1/tx";
import { Params } from "./types/cosmos/bank/v1beta1/bank";
import { Output } from "./types/cosmos/bank/v1beta1/bank";
import { GenesisState } from "./types/cosmos/bank/v1beta1/genesis";
import { QueryDenomMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalanceByDenomResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersResponse } from "./types/cosmos/bank/v1beta1/query";
import { MsgSetSendEnabledResponse } from "./types/cosmos/bank/v1beta1/tx";
import { DenomUnit } from "./types/cosmos/bank/v1beta1/bank";
import { QueryBalanceResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataRequest } from "./types/cosmos/bank/v1beta1/query";
import { Supply } from "./types/cosmos/bank/v1beta1/bank";
import { QueryBalanceRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySendEnabledRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringRequest } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersByQueryRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomsMetadataResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryAllBalancesResponse } from "./types/cosmos/bank/v1beta1/query";
import { QuerySpendableBalancesRequest } from "./types/cosmos/bank/v1beta1/query";
import { SendEnabled } from "./types/cosmos/bank/v1beta1/bank";
import { QueryTotalSupplyResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomMetadataByQueryStringResponse } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersRequest } from "./types/cosmos/bank/v1beta1/query";
import { QueryDenomOwnersByQueryResponse } from "./types/cosmos/bank/v1beta1/query";
export { MsgSendResponse, MsgUpdateParams, QuerySupplyOfResponse, MsgMultiSend, Balance, Metadata, QueryTotalSupplyRequest, DenomOwner, MsgSend, MsgSetSendEnabled, Input, QueryParamsResponse, QuerySendEnabledResponse, MsgMultiSendResponse, SendAuthorization, QuerySupplyOfRequest, MsgUpdateParamsResponse, Params, Output, GenesisState, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryDenomOwnersResponse, MsgSetSendEnabledResponse, DenomUnit, QueryBalanceResponse, QueryDenomMetadataRequest, Supply, QueryBalanceRequest, QueryParamsRequest, QuerySendEnabledRequest, QueryDenomMetadataByQueryStringRequest, QuerySpendableBalancesResponse, QueryDenomOwnersByQueryRequest, QueryDenomsMetadataResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, SendEnabled, QueryTotalSupplyResponse, QueryDenomMetadataByQueryStringResponse, QueryDenomOwnersRequest, QueryDenomOwnersByQueryResponse };
type sendMsgSendResponseParams = {
    value: MsgSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendParams = {
    value: MsgMultiSend;
    fee?: StdFee;
    memo?: string;
};
type sendBalanceParams = {
    value: Balance;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataParams = {
    value: Metadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDenomOwnerParams = {
    value: DenomOwner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendParams = {
    value: MsgSend;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendInputParams = {
    value: Input;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSendAuthorizationParams = {
    value: SendAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendOutputParams = {
    value: Output;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDenomUnitParams = {
    value: DenomUnit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceResponseParams = {
    value: QueryBalanceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSupplyParams = {
    value: Supply;
    fee?: StdFee;
    memo?: string;
};
type sendQueryBalanceRequestParams = {
    value: QueryBalanceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSendEnabledParams = {
    value: SendEnabled;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type msgSendResponseParams = {
    value: MsgSendResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type querySupplyOfResponseParams = {
    value: QuerySupplyOfResponse;
};
type msgMultiSendParams = {
    value: MsgMultiSend;
};
type balanceParams = {
    value: Balance;
};
type metadataParams = {
    value: Metadata;
};
type queryTotalSupplyRequestParams = {
    value: QueryTotalSupplyRequest;
};
type denomOwnerParams = {
    value: DenomOwner;
};
type msgSendParams = {
    value: MsgSend;
};
type msgSetSendEnabledParams = {
    value: MsgSetSendEnabled;
};
type inputParams = {
    value: Input;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySendEnabledResponseParams = {
    value: QuerySendEnabledResponse;
};
type msgMultiSendResponseParams = {
    value: MsgMultiSendResponse;
};
type sendAuthorizationParams = {
    value: SendAuthorization;
};
type querySupplyOfRequestParams = {
    value: QuerySupplyOfRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type paramsParams = {
    value: Params;
};
type outputParams = {
    value: Output;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryDenomMetadataResponseParams = {
    value: QueryDenomMetadataResponse;
};
type queryDenomsMetadataRequestParams = {
    value: QueryDenomsMetadataRequest;
};
type querySpendableBalanceByDenomRequestParams = {
    value: QuerySpendableBalanceByDenomRequest;
};
type querySpendableBalanceByDenomResponseParams = {
    value: QuerySpendableBalanceByDenomResponse;
};
type queryDenomOwnersResponseParams = {
    value: QueryDenomOwnersResponse;
};
type msgSetSendEnabledResponseParams = {
    value: MsgSetSendEnabledResponse;
};
type denomUnitParams = {
    value: DenomUnit;
};
type queryBalanceResponseParams = {
    value: QueryBalanceResponse;
};
type queryDenomMetadataRequestParams = {
    value: QueryDenomMetadataRequest;
};
type supplyParams = {
    value: Supply;
};
type queryBalanceRequestParams = {
    value: QueryBalanceRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type querySendEnabledRequestParams = {
    value: QuerySendEnabledRequest;
};
type queryDenomMetadataByQueryStringRequestParams = {
    value: QueryDenomMetadataByQueryStringRequest;
};
type querySpendableBalancesResponseParams = {
    value: QuerySpendableBalancesResponse;
};
type queryDenomOwnersByQueryRequestParams = {
    value: QueryDenomOwnersByQueryRequest;
};
type queryDenomsMetadataResponseParams = {
    value: QueryDenomsMetadataResponse;
};
type queryAllBalancesRequestParams = {
    value: QueryAllBalancesRequest;
};
type queryAllBalancesResponseParams = {
    value: QueryAllBalancesResponse;
};
type querySpendableBalancesRequestParams = {
    value: QuerySpendableBalancesRequest;
};
type sendEnabledParams = {
    value: SendEnabled;
};
type queryTotalSupplyResponseParams = {
    value: QueryTotalSupplyResponse;
};
type queryDenomMetadataByQueryStringResponseParams = {
    value: QueryDenomMetadataByQueryStringResponse;
};
type queryDenomOwnersRequestParams = {
    value: QueryDenomOwnersRequest;
};
type queryDenomOwnersByQueryResponseParams = {
    value: QueryDenomOwnersByQueryResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgSendResponse({ value, fee, memo }: sendMsgSendResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfResponse({ value, fee, memo }: sendQuerySupplyOfResponseParams): Promise<DeliverTxResponse>;
    sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse>;
    sendBalance({ value, fee, memo }: sendBalanceParams): Promise<DeliverTxResponse>;
    sendMetadata({ value, fee, memo }: sendMetadataParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyRequest({ value, fee, memo }: sendQueryTotalSupplyRequestParams): Promise<DeliverTxResponse>;
    sendDenomOwner({ value, fee, memo }: sendDenomOwnerParams): Promise<DeliverTxResponse>;
    sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabled({ value, fee, memo }: sendMsgSetSendEnabledParams): Promise<DeliverTxResponse>;
    sendInput({ value, fee, memo }: sendInputParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledResponse({ value, fee, memo }: sendQuerySendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendMsgMultiSendResponse({ value, fee, memo }: sendMsgMultiSendResponseParams): Promise<DeliverTxResponse>;
    sendSendAuthorization({ value, fee, memo }: sendSendAuthorizationParams): Promise<DeliverTxResponse>;
    sendQuerySupplyOfRequest({ value, fee, memo }: sendQuerySupplyOfRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendOutput({ value, fee, memo }: sendOutputParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataResponse({ value, fee, memo }: sendQueryDenomMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataRequest({ value, fee, memo }: sendQueryDenomsMetadataRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomRequest({ value, fee, memo }: sendQuerySpendableBalanceByDenomRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalanceByDenomResponse({ value, fee, memo }: sendQuerySpendableBalanceByDenomResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersResponse({ value, fee, memo }: sendQueryDenomOwnersResponseParams): Promise<DeliverTxResponse>;
    sendMsgSetSendEnabledResponse({ value, fee, memo }: sendMsgSetSendEnabledResponseParams): Promise<DeliverTxResponse>;
    sendDenomUnit({ value, fee, memo }: sendDenomUnitParams): Promise<DeliverTxResponse>;
    sendQueryBalanceResponse({ value, fee, memo }: sendQueryBalanceResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataRequest({ value, fee, memo }: sendQueryDenomMetadataRequestParams): Promise<DeliverTxResponse>;
    sendSupply({ value, fee, memo }: sendSupplyParams): Promise<DeliverTxResponse>;
    sendQueryBalanceRequest({ value, fee, memo }: sendQueryBalanceRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySendEnabledRequest({ value, fee, memo }: sendQuerySendEnabledRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringRequest({ value, fee, memo }: sendQueryDenomMetadataByQueryStringRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesResponse({ value, fee, memo }: sendQuerySpendableBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryRequest({ value, fee, memo }: sendQueryDenomOwnersByQueryRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomsMetadataResponse({ value, fee, memo }: sendQueryDenomsMetadataResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesRequest({ value, fee, memo }: sendQueryAllBalancesRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllBalancesResponse({ value, fee, memo }: sendQueryAllBalancesResponseParams): Promise<DeliverTxResponse>;
    sendQuerySpendableBalancesRequest({ value, fee, memo }: sendQuerySpendableBalancesRequestParams): Promise<DeliverTxResponse>;
    sendSendEnabled({ value, fee, memo }: sendSendEnabledParams): Promise<DeliverTxResponse>;
    sendQueryTotalSupplyResponse({ value, fee, memo }: sendQueryTotalSupplyResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomMetadataByQueryStringResponse({ value, fee, memo }: sendQueryDenomMetadataByQueryStringResponseParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersRequest({ value, fee, memo }: sendQueryDenomOwnersRequestParams): Promise<DeliverTxResponse>;
    sendQueryDenomOwnersByQueryResponse({ value, fee, memo }: sendQueryDenomOwnersByQueryResponseParams): Promise<DeliverTxResponse>;
    msgSendResponse({ value }: msgSendResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    querySupplyOfResponse({ value }: querySupplyOfResponseParams): EncodeObject;
    msgMultiSend({ value }: msgMultiSendParams): EncodeObject;
    balance({ value }: balanceParams): EncodeObject;
    metadata({ value }: metadataParams): EncodeObject;
    queryTotalSupplyRequest({ value }: queryTotalSupplyRequestParams): EncodeObject;
    denomOwner({ value }: denomOwnerParams): EncodeObject;
    msgSend({ value }: msgSendParams): EncodeObject;
    msgSetSendEnabled({ value }: msgSetSendEnabledParams): EncodeObject;
    input({ value }: inputParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySendEnabledResponse({ value }: querySendEnabledResponseParams): EncodeObject;
    msgMultiSendResponse({ value }: msgMultiSendResponseParams): EncodeObject;
    sendAuthorization({ value }: sendAuthorizationParams): EncodeObject;
    querySupplyOfRequest({ value }: querySupplyOfRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    output({ value }: outputParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryDenomMetadataResponse({ value }: queryDenomMetadataResponseParams): EncodeObject;
    queryDenomsMetadataRequest({ value }: queryDenomsMetadataRequestParams): EncodeObject;
    querySpendableBalanceByDenomRequest({ value }: querySpendableBalanceByDenomRequestParams): EncodeObject;
    querySpendableBalanceByDenomResponse({ value }: querySpendableBalanceByDenomResponseParams): EncodeObject;
    queryDenomOwnersResponse({ value }: queryDenomOwnersResponseParams): EncodeObject;
    msgSetSendEnabledResponse({ value }: msgSetSendEnabledResponseParams): EncodeObject;
    denomUnit({ value }: denomUnitParams): EncodeObject;
    queryBalanceResponse({ value }: queryBalanceResponseParams): EncodeObject;
    queryDenomMetadataRequest({ value }: queryDenomMetadataRequestParams): EncodeObject;
    supply({ value }: supplyParams): EncodeObject;
    queryBalanceRequest({ value }: queryBalanceRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    querySendEnabledRequest({ value }: querySendEnabledRequestParams): EncodeObject;
    queryDenomMetadataByQueryStringRequest({ value }: queryDenomMetadataByQueryStringRequestParams): EncodeObject;
    querySpendableBalancesResponse({ value }: querySpendableBalancesResponseParams): EncodeObject;
    queryDenomOwnersByQueryRequest({ value }: queryDenomOwnersByQueryRequestParams): EncodeObject;
    queryDenomsMetadataResponse({ value }: queryDenomsMetadataResponseParams): EncodeObject;
    queryAllBalancesRequest({ value }: queryAllBalancesRequestParams): EncodeObject;
    queryAllBalancesResponse({ value }: queryAllBalancesResponseParams): EncodeObject;
    querySpendableBalancesRequest({ value }: querySpendableBalancesRequestParams): EncodeObject;
    sendEnabled({ value }: sendEnabledParams): EncodeObject;
    queryTotalSupplyResponse({ value }: queryTotalSupplyResponseParams): EncodeObject;
    queryDenomMetadataByQueryStringResponse({ value }: queryDenomMetadataByQueryStringResponseParams): EncodeObject;
    queryDenomOwnersRequest({ value }: queryDenomOwnersRequestParams): EncodeObject;
    queryDenomOwnersByQueryResponse({ value }: queryDenomOwnersByQueryResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosBankV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
