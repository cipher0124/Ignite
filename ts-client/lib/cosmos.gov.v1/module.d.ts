import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgCancelProposal } from "./types/cosmos/gov/v1/tx";
import { QueryVoteResponse } from "./types/cosmos/gov/v1/query";
import { TallyParams } from "./types/cosmos/gov/v1/gov";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1/tx";
import { MsgCancelProposalResponse } from "./types/cosmos/gov/v1/tx";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1/query";
import { Params } from "./types/cosmos/gov/v1/gov";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1/tx";
import { QueryProposalRequest } from "./types/cosmos/gov/v1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1/query";
import { Vote } from "./types/cosmos/gov/v1/gov";
import { DepositParams } from "./types/cosmos/gov/v1/gov";
import { Proposal } from "./types/cosmos/gov/v1/gov";
import { VotingParams } from "./types/cosmos/gov/v1/gov";
import { QueryVotesResponse } from "./types/cosmos/gov/v1/query";
import { MsgDepositResponse } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/gov/v1/tx";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1/query";
import { QueryProposalResponse } from "./types/cosmos/gov/v1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1/query";
import { MsgExecLegacyContent } from "./types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1/tx";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1/query";
import { MsgVote } from "./types/cosmos/gov/v1/tx";
import { GenesisState } from "./types/cosmos/gov/v1/genesis";
import { QueryParamsResponse } from "./types/cosmos/gov/v1/query";
import { MsgExecLegacyContentResponse } from "./types/cosmos/gov/v1/tx";
import { TallyResult } from "./types/cosmos/gov/v1/gov";
import { QueryParamsRequest } from "./types/cosmos/gov/v1/query";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1/tx";
import { MsgVoteResponse } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionRequest } from "./types/cosmos/gov/v1/query";
import { QueryVoteRequest } from "./types/cosmos/gov/v1/query";
import { MsgDeposit } from "./types/cosmos/gov/v1/tx";
import { MsgUpdateParams } from "./types/cosmos/gov/v1/tx";
import { QueryConstitutionResponse } from "./types/cosmos/gov/v1/query";
import { Deposit } from "./types/cosmos/gov/v1/gov";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1/query";
import { WeightedVoteOption } from "./types/cosmos/gov/v1/gov";
export { MsgCancelProposal, QueryVoteResponse, TallyParams, MsgVoteWeightedResponse, MsgCancelProposalResponse, QueryDepositsRequest, Params, MsgSubmitProposal, QueryProposalRequest, QueryVotesRequest, QueryTallyResultRequest, Vote, DepositParams, Proposal, VotingParams, QueryVotesResponse, MsgDepositResponse, MsgUpdateParamsResponse, QueryProposalsRequest, QueryDepositResponse, QueryTallyResultResponse, QueryProposalResponse, QueryDepositRequest, MsgExecLegacyContent, MsgVoteWeighted, QueryDepositsResponse, MsgVote, GenesisState, QueryParamsResponse, MsgExecLegacyContentResponse, TallyResult, QueryParamsRequest, MsgSubmitProposalResponse, MsgVoteResponse, QueryConstitutionRequest, QueryVoteRequest, MsgDeposit, MsgUpdateParams, QueryConstitutionResponse, Deposit, QueryProposalsResponse, WeightedVoteOption };
type sendMsgCancelProposalParams = {
    value: MsgCancelProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesRequestParams = {
    value: QueryVotesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesResponseParams = {
    value: QueryVotesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type msgCancelProposalParams = {
    value: MsgCancelProposal;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type tallyParamsParams = {
    value: TallyParams;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type msgCancelProposalResponseParams = {
    value: MsgCancelProposalResponse;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type paramsParams = {
    value: Params;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type voteParams = {
    value: Vote;
};
type depositParamsParams = {
    value: DepositParams;
};
type proposalParams = {
    value: Proposal;
};
type votingParamsParams = {
    value: VotingParams;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type msgExecLegacyContentParams = {
    value: MsgExecLegacyContent;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type msgVoteParams = {
    value: MsgVote;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgExecLegacyContentResponseParams = {
    value: MsgExecLegacyContentResponse;
};
type tallyResultParams = {
    value: TallyResult;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryConstitutionRequestParams = {
    value: QueryConstitutionRequest;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryConstitutionResponseParams = {
    value: QueryConstitutionResponse;
};
type depositParams = {
    value: Deposit;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelProposalResponse({ value, fee, memo }: sendMsgCancelProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgExecLegacyContentResponse({ value, fee, memo }: sendMsgExecLegacyContentResponseParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionRequest({ value, fee, memo }: sendQueryConstitutionRequestParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryConstitutionResponse({ value, fee, memo }: sendQueryConstitutionResponseParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    msgCancelProposalResponse({ value }: msgCancelProposalResponseParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgExecLegacyContentResponse({ value }: msgExecLegacyContentResponseParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryConstitutionRequest({ value }: queryConstitutionRequestParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryConstitutionResponse({ value }: queryConstitutionResponseParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
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
        CosmosGovV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
