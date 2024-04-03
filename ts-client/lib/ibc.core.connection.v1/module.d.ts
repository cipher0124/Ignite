import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateParams } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionClientStateResponse } from "./types/ibc/core/connection/v1/query";
import { ClientPaths } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionRequest } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenConfirm } from "./types/ibc/core/connection/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionEnd } from "./types/ibc/core/connection/v1/connection";
import { Counterparty } from "./types/ibc/core/connection/v1/connection";
import { GenesisState } from "./types/ibc/core/connection/v1/genesis";
import { MsgConnectionOpenInit } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenTry } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionParamsResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenInitResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionResponse } from "./types/ibc/core/connection/v1/query";
import { Params } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionConsensusStateResponse } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenAck } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenAckResponse } from "./types/ibc/core/connection/v1/tx";
import { ConnectionPaths } from "./types/ibc/core/connection/v1/connection";
import { QueryClientConnectionsRequest } from "./types/ibc/core/connection/v1/query";
import { QueryClientConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionConsensusStateRequest } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionParamsRequest } from "./types/ibc/core/connection/v1/query";
import { Version } from "./types/ibc/core/connection/v1/connection";
import { IdentifiedConnection } from "./types/ibc/core/connection/v1/connection";
import { QueryConnectionsResponse } from "./types/ibc/core/connection/v1/query";
import { QueryConnectionClientStateRequest } from "./types/ibc/core/connection/v1/query";
import { MsgConnectionOpenTryResponse } from "./types/ibc/core/connection/v1/tx";
import { MsgConnectionOpenConfirmResponse } from "./types/ibc/core/connection/v1/tx";
import { QueryConnectionsRequest } from "./types/ibc/core/connection/v1/query";
export { MsgUpdateParams, QueryConnectionClientStateResponse, ClientPaths, QueryConnectionRequest, MsgConnectionOpenConfirm, MsgUpdateParamsResponse, ConnectionEnd, Counterparty, GenesisState, MsgConnectionOpenInit, MsgConnectionOpenTry, QueryConnectionParamsResponse, MsgConnectionOpenInitResponse, QueryConnectionResponse, Params, QueryConnectionConsensusStateResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, ConnectionPaths, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionConsensusStateRequest, QueryConnectionParamsRequest, Version, IdentifiedConnection, QueryConnectionsResponse, QueryConnectionClientStateRequest, MsgConnectionOpenTryResponse, MsgConnectionOpenConfirmResponse, QueryConnectionsRequest };
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClientPathsParams = {
    value: ClientPaths;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionRequestParams = {
    value: QueryConnectionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionEndParams = {
    value: ConnectionEnd;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionResponseParams = {
    value: QueryConnectionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendConnectionPathsParams = {
    value: ConnectionPaths;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVersionParams = {
    value: Version;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedConnectionParams = {
    value: IdentifiedConnection;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryConnectionClientStateResponseParams = {
    value: QueryConnectionClientStateResponse;
};
type clientPathsParams = {
    value: ClientPaths;
};
type queryConnectionRequestParams = {
    value: QueryConnectionRequest;
};
type msgConnectionOpenConfirmParams = {
    value: MsgConnectionOpenConfirm;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type connectionEndParams = {
    value: ConnectionEnd;
};
type counterpartyParams = {
    value: Counterparty;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgConnectionOpenInitParams = {
    value: MsgConnectionOpenInit;
};
type msgConnectionOpenTryParams = {
    value: MsgConnectionOpenTry;
};
type queryConnectionParamsResponseParams = {
    value: QueryConnectionParamsResponse;
};
type msgConnectionOpenInitResponseParams = {
    value: MsgConnectionOpenInitResponse;
};
type queryConnectionResponseParams = {
    value: QueryConnectionResponse;
};
type paramsParams = {
    value: Params;
};
type queryConnectionConsensusStateResponseParams = {
    value: QueryConnectionConsensusStateResponse;
};
type msgConnectionOpenAckParams = {
    value: MsgConnectionOpenAck;
};
type msgConnectionOpenAckResponseParams = {
    value: MsgConnectionOpenAckResponse;
};
type connectionPathsParams = {
    value: ConnectionPaths;
};
type queryClientConnectionsRequestParams = {
    value: QueryClientConnectionsRequest;
};
type queryClientConnectionsResponseParams = {
    value: QueryClientConnectionsResponse;
};
type queryConnectionConsensusStateRequestParams = {
    value: QueryConnectionConsensusStateRequest;
};
type queryConnectionParamsRequestParams = {
    value: QueryConnectionParamsRequest;
};
type versionParams = {
    value: Version;
};
type identifiedConnectionParams = {
    value: IdentifiedConnection;
};
type queryConnectionsResponseParams = {
    value: QueryConnectionsResponse;
};
type queryConnectionClientStateRequestParams = {
    value: QueryConnectionClientStateRequest;
};
type msgConnectionOpenTryResponseParams = {
    value: MsgConnectionOpenTryResponse;
};
type msgConnectionOpenConfirmResponseParams = {
    value: MsgConnectionOpenConfirmResponse;
};
type queryConnectionsRequestParams = {
    value: QueryConnectionsRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateResponse({ value, fee, memo }: sendQueryConnectionClientStateResponseParams): Promise<DeliverTxResponse>;
    sendClientPaths({ value, fee, memo }: sendClientPathsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionRequest({ value, fee, memo }: sendQueryConnectionRequestParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirm({ value, fee, memo }: sendMsgConnectionOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendConnectionEnd({ value, fee, memo }: sendConnectionEndParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInit({ value, fee, memo }: sendMsgConnectionOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTry({ value, fee, memo }: sendMsgConnectionOpenTryParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsResponse({ value, fee, memo }: sendQueryConnectionParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenInitResponse({ value, fee, memo }: sendMsgConnectionOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionResponse({ value, fee, memo }: sendQueryConnectionResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateResponse({ value, fee, memo }: sendQueryConnectionConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAck({ value, fee, memo }: sendMsgConnectionOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenAckResponse({ value, fee, memo }: sendMsgConnectionOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendConnectionPaths({ value, fee, memo }: sendConnectionPathsParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsRequest({ value, fee, memo }: sendQueryClientConnectionsRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientConnectionsResponse({ value, fee, memo }: sendQueryClientConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionConsensusStateRequest({ value, fee, memo }: sendQueryConnectionConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionParamsRequest({ value, fee, memo }: sendQueryConnectionParamsRequestParams): Promise<DeliverTxResponse>;
    sendVersion({ value, fee, memo }: sendVersionParams): Promise<DeliverTxResponse>;
    sendIdentifiedConnection({ value, fee, memo }: sendIdentifiedConnectionParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsResponse({ value, fee, memo }: sendQueryConnectionsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionClientStateRequest({ value, fee, memo }: sendQueryConnectionClientStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenTryResponse({ value, fee, memo }: sendMsgConnectionOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgConnectionOpenConfirmResponse({ value, fee, memo }: sendMsgConnectionOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionsRequest({ value, fee, memo }: sendQueryConnectionsRequestParams): Promise<DeliverTxResponse>;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryConnectionClientStateResponse({ value }: queryConnectionClientStateResponseParams): EncodeObject;
    clientPaths({ value }: clientPathsParams): EncodeObject;
    queryConnectionRequest({ value }: queryConnectionRequestParams): EncodeObject;
    msgConnectionOpenConfirm({ value }: msgConnectionOpenConfirmParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    connectionEnd({ value }: connectionEndParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgConnectionOpenInit({ value }: msgConnectionOpenInitParams): EncodeObject;
    msgConnectionOpenTry({ value }: msgConnectionOpenTryParams): EncodeObject;
    queryConnectionParamsResponse({ value }: queryConnectionParamsResponseParams): EncodeObject;
    msgConnectionOpenInitResponse({ value }: msgConnectionOpenInitResponseParams): EncodeObject;
    queryConnectionResponse({ value }: queryConnectionResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryConnectionConsensusStateResponse({ value }: queryConnectionConsensusStateResponseParams): EncodeObject;
    msgConnectionOpenAck({ value }: msgConnectionOpenAckParams): EncodeObject;
    msgConnectionOpenAckResponse({ value }: msgConnectionOpenAckResponseParams): EncodeObject;
    connectionPaths({ value }: connectionPathsParams): EncodeObject;
    queryClientConnectionsRequest({ value }: queryClientConnectionsRequestParams): EncodeObject;
    queryClientConnectionsResponse({ value }: queryClientConnectionsResponseParams): EncodeObject;
    queryConnectionConsensusStateRequest({ value }: queryConnectionConsensusStateRequestParams): EncodeObject;
    queryConnectionParamsRequest({ value }: queryConnectionParamsRequestParams): EncodeObject;
    version({ value }: versionParams): EncodeObject;
    identifiedConnection({ value }: identifiedConnectionParams): EncodeObject;
    queryConnectionsResponse({ value }: queryConnectionsResponseParams): EncodeObject;
    queryConnectionClientStateRequest({ value }: queryConnectionClientStateRequestParams): EncodeObject;
    msgConnectionOpenTryResponse({ value }: msgConnectionOpenTryResponseParams): EncodeObject;
    msgConnectionOpenConfirmResponse({ value }: msgConnectionOpenConfirmResponseParams): EncodeObject;
    queryConnectionsRequest({ value }: queryConnectionsRequestParams): EncodeObject;
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
        IbcCoreConnectionV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
