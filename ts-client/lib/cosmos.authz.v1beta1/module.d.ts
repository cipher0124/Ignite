import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
export { MsgGrantResponse, MsgExecResponse, MsgRevoke, MsgRevokeResponse, GrantAuthorization, MsgGrant, GrantQueueItem, QueryGrantsRequest, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsResponse, Grant, GenericAuthorization, QueryGrantsResponse, QueryGranteeGrantsRequest, EventGrant, EventRevoke, GenesisState, MsgExec };
type sendMsgGrantResponseParams = {
    value: MsgGrantResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeParams = {
    value: MsgRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRevokeResponseParams = {
    value: MsgRevokeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantAuthorizationParams = {
    value: GrantAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgGrantParams = {
    value: MsgGrant;
    fee?: StdFee;
    memo?: string;
};
type sendGrantQueueItemParams = {
    value: GrantQueueItem;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsRequestParams = {
    value: QueryGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGrantParams = {
    value: Grant;
    fee?: StdFee;
    memo?: string;
};
type sendGenericAuthorizationParams = {
    value: GenericAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGrantsResponseParams = {
    value: QueryGrantsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendEventGrantParams = {
    value: EventGrant;
    fee?: StdFee;
    memo?: string;
};
type sendEventRevokeParams = {
    value: EventRevoke;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type msgGrantResponseParams = {
    value: MsgGrantResponse;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type msgRevokeParams = {
    value: MsgRevoke;
};
type msgRevokeResponseParams = {
    value: MsgRevokeResponse;
};
type grantAuthorizationParams = {
    value: GrantAuthorization;
};
type msgGrantParams = {
    value: MsgGrant;
};
type grantQueueItemParams = {
    value: GrantQueueItem;
};
type queryGrantsRequestParams = {
    value: QueryGrantsRequest;
};
type queryGranterGrantsRequestParams = {
    value: QueryGranterGrantsRequest;
};
type queryGranterGrantsResponseParams = {
    value: QueryGranterGrantsResponse;
};
type queryGranteeGrantsResponseParams = {
    value: QueryGranteeGrantsResponse;
};
type grantParams = {
    value: Grant;
};
type genericAuthorizationParams = {
    value: GenericAuthorization;
};
type queryGrantsResponseParams = {
    value: QueryGrantsResponse;
};
type queryGranteeGrantsRequestParams = {
    value: QueryGranteeGrantsRequest;
};
type eventGrantParams = {
    value: EventGrant;
};
type eventRevokeParams = {
    value: EventRevoke;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgExecParams = {
    value: MsgExec;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgGrantResponse({ value, fee, memo }: sendMsgGrantResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendMsgRevoke({ value, fee, memo }: sendMsgRevokeParams): Promise<DeliverTxResponse>;
    sendMsgRevokeResponse({ value, fee, memo }: sendMsgRevokeResponseParams): Promise<DeliverTxResponse>;
    sendGrantAuthorization({ value, fee, memo }: sendGrantAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgGrant({ value, fee, memo }: sendMsgGrantParams): Promise<DeliverTxResponse>;
    sendGrantQueueItem({ value, fee, memo }: sendGrantQueueItemParams): Promise<DeliverTxResponse>;
    sendQueryGrantsRequest({ value, fee, memo }: sendQueryGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsRequest({ value, fee, memo }: sendQueryGranterGrantsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGranterGrantsResponse({ value, fee, memo }: sendQueryGranterGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsResponse({ value, fee, memo }: sendQueryGranteeGrantsResponseParams): Promise<DeliverTxResponse>;
    sendGrant({ value, fee, memo }: sendGrantParams): Promise<DeliverTxResponse>;
    sendGenericAuthorization({ value, fee, memo }: sendGenericAuthorizationParams): Promise<DeliverTxResponse>;
    sendQueryGrantsResponse({ value, fee, memo }: sendQueryGrantsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGranteeGrantsRequest({ value, fee, memo }: sendQueryGranteeGrantsRequestParams): Promise<DeliverTxResponse>;
    sendEventGrant({ value, fee, memo }: sendEventGrantParams): Promise<DeliverTxResponse>;
    sendEventRevoke({ value, fee, memo }: sendEventRevokeParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    msgGrantResponse({ value }: msgGrantResponseParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    msgRevoke({ value }: msgRevokeParams): EncodeObject;
    msgRevokeResponse({ value }: msgRevokeResponseParams): EncodeObject;
    grantAuthorization({ value }: grantAuthorizationParams): EncodeObject;
    msgGrant({ value }: msgGrantParams): EncodeObject;
    grantQueueItem({ value }: grantQueueItemParams): EncodeObject;
    queryGrantsRequest({ value }: queryGrantsRequestParams): EncodeObject;
    queryGranterGrantsRequest({ value }: queryGranterGrantsRequestParams): EncodeObject;
    queryGranterGrantsResponse({ value }: queryGranterGrantsResponseParams): EncodeObject;
    queryGranteeGrantsResponse({ value }: queryGranteeGrantsResponseParams): EncodeObject;
    grant({ value }: grantParams): EncodeObject;
    genericAuthorization({ value }: genericAuthorizationParams): EncodeObject;
    queryGrantsResponse({ value }: queryGrantsResponseParams): EncodeObject;
    queryGranteeGrantsRequest({ value }: queryGranteeGrantsRequestParams): EncodeObject;
    eventGrant({ value }: eventGrantParams): EncodeObject;
    eventRevoke({ value }: eventRevokeParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
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
        CosmosAuthzV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
