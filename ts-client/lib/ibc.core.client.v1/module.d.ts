import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgUpdateClientResponse } from "./types/ibc/core/client/v1/tx";
import { IdentifiedGenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { QueryClientStatusResponse } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateRequest } from "./types/ibc/core/client/v1/query";
import { MsgSubmitMisbehaviourResponse } from "./types/ibc/core/client/v1/tx";
import { GenesisMetadata } from "./types/ibc/core/client/v1/genesis";
import { IdentifiedClientState } from "./types/ibc/core/client/v1/client";
import { MsgCreateClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateClient } from "./types/ibc/core/client/v1/tx";
import { MsgSubmitMisbehaviour } from "./types/ibc/core/client/v1/tx";
import { QueryClientStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsResponse } from "./types/ibc/core/client/v1/query";
import { MsgRecoverClient } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgrade } from "./types/ibc/core/client/v1/tx";
import { QueryConsensusStatesRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsRequest } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateHeightsResponse } from "./types/ibc/core/client/v1/query";
import { Height } from "./types/ibc/core/client/v1/client";
import { UpgradeProposal } from "./types/ibc/core/client/v1/client";
import { MsgCreateClient } from "./types/ibc/core/client/v1/tx";
import { MsgIBCSoftwareUpgradeResponse } from "./types/ibc/core/client/v1/tx";
import { QueryClientStateRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/ibc/core/client/v1/query";
import { GenesisState } from "./types/ibc/core/client/v1/genesis";
import { Params } from "./types/ibc/core/client/v1/client";
import { ClientUpdateProposal } from "./types/ibc/core/client/v1/client";
import { MsgUpgradeClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgRecoverClientResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/client/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/client/v1/tx";
import { QueryConsensusStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatusRequest } from "./types/ibc/core/client/v1/query";
import { QueryClientParamsRequest } from "./types/ibc/core/client/v1/query";
import { QueryUpgradedClientStateResponse } from "./types/ibc/core/client/v1/query";
import { ClientConsensusStates } from "./types/ibc/core/client/v1/client";
import { ConsensusStateWithHeight } from "./types/ibc/core/client/v1/client";
import { MsgUpgradeClient } from "./types/ibc/core/client/v1/tx";
import { QueryClientStateResponse } from "./types/ibc/core/client/v1/query";
import { QueryClientStatesResponse } from "./types/ibc/core/client/v1/query";
import { QueryConsensusStateResponse } from "./types/ibc/core/client/v1/query";
export { QueryConsensusStateRequest, MsgUpdateClientResponse, IdentifiedGenesisMetadata, QueryClientStatusResponse, QueryUpgradedClientStateRequest, QueryUpgradedConsensusStateRequest, MsgSubmitMisbehaviourResponse, GenesisMetadata, IdentifiedClientState, MsgCreateClientResponse, MsgUpdateClient, MsgSubmitMisbehaviour, QueryClientStatesRequest, QueryClientParamsResponse, MsgRecoverClient, MsgIBCSoftwareUpgrade, QueryConsensusStatesRequest, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, Height, UpgradeProposal, MsgCreateClient, MsgIBCSoftwareUpgradeResponse, QueryClientStateRequest, QueryUpgradedConsensusStateResponse, GenesisState, Params, ClientUpdateProposal, MsgUpgradeClientResponse, MsgRecoverClientResponse, MsgUpdateParamsResponse, MsgUpdateParams, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientParamsRequest, QueryUpgradedClientStateResponse, ClientConsensusStates, ConsensusStateWithHeight, MsgUpgradeClient, QueryClientStateResponse, QueryClientStatesResponse, QueryConsensusStateResponse };
type sendQueryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisMetadataParams = {
    value: GenesisMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedClientStateParams = {
    value: IdentifiedClientState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateClientParams = {
    value: MsgUpdateClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientParams = {
    value: MsgRecoverClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendHeightParams = {
    value: Height;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeProposalParams = {
    value: UpgradeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateClientParams = {
    value: MsgCreateClient;
    fee?: StdFee;
    memo?: string;
};
type sendMsgIBCSoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateRequestParams = {
    value: QueryClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendClientUpdateProposalParams = {
    value: ClientUpdateProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendClientConsensusStatesParams = {
    value: ClientConsensusStates;
    fee?: StdFee;
    memo?: string;
};
type sendConsensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpgradeClientParams = {
    value: MsgUpgradeClient;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStateResponseParams = {
    value: QueryClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type queryConsensusStateRequestParams = {
    value: QueryConsensusStateRequest;
};
type msgUpdateClientResponseParams = {
    value: MsgUpdateClientResponse;
};
type identifiedGenesisMetadataParams = {
    value: IdentifiedGenesisMetadata;
};
type queryClientStatusResponseParams = {
    value: QueryClientStatusResponse;
};
type queryUpgradedClientStateRequestParams = {
    value: QueryUpgradedClientStateRequest;
};
type queryUpgradedConsensusStateRequestParams = {
    value: QueryUpgradedConsensusStateRequest;
};
type msgSubmitMisbehaviourResponseParams = {
    value: MsgSubmitMisbehaviourResponse;
};
type genesisMetadataParams = {
    value: GenesisMetadata;
};
type identifiedClientStateParams = {
    value: IdentifiedClientState;
};
type msgCreateClientResponseParams = {
    value: MsgCreateClientResponse;
};
type msgUpdateClientParams = {
    value: MsgUpdateClient;
};
type msgSubmitMisbehaviourParams = {
    value: MsgSubmitMisbehaviour;
};
type queryClientStatesRequestParams = {
    value: QueryClientStatesRequest;
};
type queryClientParamsResponseParams = {
    value: QueryClientParamsResponse;
};
type msgRecoverClientParams = {
    value: MsgRecoverClient;
};
type msgIbcsoftwareUpgradeParams = {
    value: MsgIBCSoftwareUpgrade;
};
type queryConsensusStatesRequestParams = {
    value: QueryConsensusStatesRequest;
};
type queryConsensusStateHeightsRequestParams = {
    value: QueryConsensusStateHeightsRequest;
};
type queryConsensusStateHeightsResponseParams = {
    value: QueryConsensusStateHeightsResponse;
};
type heightParams = {
    value: Height;
};
type upgradeProposalParams = {
    value: UpgradeProposal;
};
type msgCreateClientParams = {
    value: MsgCreateClient;
};
type msgIbcsoftwareUpgradeResponseParams = {
    value: MsgIBCSoftwareUpgradeResponse;
};
type queryClientStateRequestParams = {
    value: QueryClientStateRequest;
};
type queryUpgradedConsensusStateResponseParams = {
    value: QueryUpgradedConsensusStateResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type clientUpdateProposalParams = {
    value: ClientUpdateProposal;
};
type msgUpgradeClientResponseParams = {
    value: MsgUpgradeClientResponse;
};
type msgRecoverClientResponseParams = {
    value: MsgRecoverClientResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryConsensusStatesResponseParams = {
    value: QueryConsensusStatesResponse;
};
type queryClientStatusRequestParams = {
    value: QueryClientStatusRequest;
};
type queryClientParamsRequestParams = {
    value: QueryClientParamsRequest;
};
type queryUpgradedClientStateResponseParams = {
    value: QueryUpgradedClientStateResponse;
};
type clientConsensusStatesParams = {
    value: ClientConsensusStates;
};
type consensusStateWithHeightParams = {
    value: ConsensusStateWithHeight;
};
type msgUpgradeClientParams = {
    value: MsgUpgradeClient;
};
type queryClientStateResponseParams = {
    value: QueryClientStateResponse;
};
type queryClientStatesResponseParams = {
    value: QueryClientStatesResponse;
};
type queryConsensusStateResponseParams = {
    value: QueryConsensusStateResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryConsensusStateRequest({ value, fee, memo }: sendQueryConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClientResponse({ value, fee, memo }: sendMsgUpdateClientResponseParams): Promise<DeliverTxResponse>;
    sendIdentifiedGenesisMetadata({ value, fee, memo }: sendIdentifiedGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusResponse({ value, fee, memo }: sendQueryClientStatusResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateRequest({ value, fee, memo }: sendQueryUpgradedClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: sendQueryUpgradedConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviourResponse({ value, fee, memo }: sendMsgSubmitMisbehaviourResponseParams): Promise<DeliverTxResponse>;
    sendGenesisMetadata({ value, fee, memo }: sendGenesisMetadataParams): Promise<DeliverTxResponse>;
    sendIdentifiedClientState({ value, fee, memo }: sendIdentifiedClientStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateClientResponse({ value, fee, memo }: sendMsgCreateClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateClient({ value, fee, memo }: sendMsgUpdateClientParams): Promise<DeliverTxResponse>;
    sendMsgSubmitMisbehaviour({ value, fee, memo }: sendMsgSubmitMisbehaviourParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesRequest({ value, fee, memo }: sendQueryClientStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsResponse({ value, fee, memo }: sendQueryClientParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClient({ value, fee, memo }: sendMsgRecoverClientParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgrade({ value, fee, memo }: sendMsgIBCSoftwareUpgradeParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesRequest({ value, fee, memo }: sendQueryConsensusStatesRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsRequest({ value, fee, memo }: sendQueryConsensusStateHeightsRequestParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateHeightsResponse({ value, fee, memo }: sendQueryConsensusStateHeightsResponseParams): Promise<DeliverTxResponse>;
    sendHeight({ value, fee, memo }: sendHeightParams): Promise<DeliverTxResponse>;
    sendUpgradeProposal({ value, fee, memo }: sendUpgradeProposalParams): Promise<DeliverTxResponse>;
    sendMsgCreateClient({ value, fee, memo }: sendMsgCreateClientParams): Promise<DeliverTxResponse>;
    sendMsgIBCSoftwareUpgradeResponse({ value, fee, memo }: sendMsgIBCSoftwareUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStateRequest({ value, fee, memo }: sendQueryClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: sendQueryUpgradedConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendClientUpdateProposal({ value, fee, memo }: sendClientUpdateProposalParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClientResponse({ value, fee, memo }: sendMsgUpgradeClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecoverClientResponse({ value, fee, memo }: sendMsgRecoverClientResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStatesResponse({ value, fee, memo }: sendQueryConsensusStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatusRequest({ value, fee, memo }: sendQueryClientStatusRequestParams): Promise<DeliverTxResponse>;
    sendQueryClientParamsRequest({ value, fee, memo }: sendQueryClientParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradedClientStateResponse({ value, fee, memo }: sendQueryUpgradedClientStateResponseParams): Promise<DeliverTxResponse>;
    sendClientConsensusStates({ value, fee, memo }: sendClientConsensusStatesParams): Promise<DeliverTxResponse>;
    sendConsensusStateWithHeight({ value, fee, memo }: sendConsensusStateWithHeightParams): Promise<DeliverTxResponse>;
    sendMsgUpgradeClient({ value, fee, memo }: sendMsgUpgradeClientParams): Promise<DeliverTxResponse>;
    sendQueryClientStateResponse({ value, fee, memo }: sendQueryClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryClientStatesResponse({ value, fee, memo }: sendQueryClientStatesResponseParams): Promise<DeliverTxResponse>;
    sendQueryConsensusStateResponse({ value, fee, memo }: sendQueryConsensusStateResponseParams): Promise<DeliverTxResponse>;
    queryConsensusStateRequest({ value }: queryConsensusStateRequestParams): EncodeObject;
    msgUpdateClientResponse({ value }: msgUpdateClientResponseParams): EncodeObject;
    identifiedGenesisMetadata({ value }: identifiedGenesisMetadataParams): EncodeObject;
    queryClientStatusResponse({ value }: queryClientStatusResponseParams): EncodeObject;
    queryUpgradedClientStateRequest({ value }: queryUpgradedClientStateRequestParams): EncodeObject;
    queryUpgradedConsensusStateRequest({ value }: queryUpgradedConsensusStateRequestParams): EncodeObject;
    msgSubmitMisbehaviourResponse({ value }: msgSubmitMisbehaviourResponseParams): EncodeObject;
    genesisMetadata({ value }: genesisMetadataParams): EncodeObject;
    identifiedClientState({ value }: identifiedClientStateParams): EncodeObject;
    msgCreateClientResponse({ value }: msgCreateClientResponseParams): EncodeObject;
    msgUpdateClient({ value }: msgUpdateClientParams): EncodeObject;
    msgSubmitMisbehaviour({ value }: msgSubmitMisbehaviourParams): EncodeObject;
    queryClientStatesRequest({ value }: queryClientStatesRequestParams): EncodeObject;
    queryClientParamsResponse({ value }: queryClientParamsResponseParams): EncodeObject;
    msgRecoverClient({ value }: msgRecoverClientParams): EncodeObject;
    msgIbcsoftwareUpgrade({ value }: msgIbcsoftwareUpgradeParams): EncodeObject;
    queryConsensusStatesRequest({ value }: queryConsensusStatesRequestParams): EncodeObject;
    queryConsensusStateHeightsRequest({ value }: queryConsensusStateHeightsRequestParams): EncodeObject;
    queryConsensusStateHeightsResponse({ value }: queryConsensusStateHeightsResponseParams): EncodeObject;
    height({ value }: heightParams): EncodeObject;
    upgradeProposal({ value }: upgradeProposalParams): EncodeObject;
    msgCreateClient({ value }: msgCreateClientParams): EncodeObject;
    msgIbcsoftwareUpgradeResponse({ value }: msgIbcsoftwareUpgradeResponseParams): EncodeObject;
    queryClientStateRequest({ value }: queryClientStateRequestParams): EncodeObject;
    queryUpgradedConsensusStateResponse({ value }: queryUpgradedConsensusStateResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    clientUpdateProposal({ value }: clientUpdateProposalParams): EncodeObject;
    msgUpgradeClientResponse({ value }: msgUpgradeClientResponseParams): EncodeObject;
    msgRecoverClientResponse({ value }: msgRecoverClientResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryConsensusStatesResponse({ value }: queryConsensusStatesResponseParams): EncodeObject;
    queryClientStatusRequest({ value }: queryClientStatusRequestParams): EncodeObject;
    queryClientParamsRequest({ value }: queryClientParamsRequestParams): EncodeObject;
    queryUpgradedClientStateResponse({ value }: queryUpgradedClientStateResponseParams): EncodeObject;
    clientConsensusStates({ value }: clientConsensusStatesParams): EncodeObject;
    consensusStateWithHeight({ value }: consensusStateWithHeightParams): EncodeObject;
    msgUpgradeClient({ value }: msgUpgradeClientParams): EncodeObject;
    queryClientStateResponse({ value }: queryClientStateResponseParams): EncodeObject;
    queryClientStatesResponse({ value }: queryClientStatesResponseParams): EncodeObject;
    queryConsensusStateResponse({ value }: queryConsensusStateResponseParams): EncodeObject;
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
        IbcCoreClientV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
