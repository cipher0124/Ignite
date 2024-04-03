import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgVoteWeighted } from "./types/cosmos/gov/v1beta1/tx";
import { MsgVoteWeightedResponse } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDepositResponse } from "./types/cosmos/gov/v1beta1/tx";
import { QueryVoteResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultResponse } from "./types/cosmos/gov/v1beta1/query";
import { MsgSubmitProposal } from "./types/cosmos/gov/v1beta1/tx";
import { MsgSubmitProposalResponse } from "./types/cosmos/gov/v1beta1/tx";
import { WeightedVoteOption } from "./types/cosmos/gov/v1beta1/gov";
import { GenesisState } from "./types/cosmos/gov/v1beta1/genesis";
import { QueryProposalsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositRequest } from "./types/cosmos/gov/v1beta1/query";
import { TallyParams } from "./types/cosmos/gov/v1beta1/gov";
import { QueryDepositsRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryTallyResultRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgVoteResponse } from "./types/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/cosmos/gov/v1beta1/tx";
import { DepositParams } from "./types/cosmos/gov/v1beta1/gov";
import { TextProposal } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalsResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryVotesResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/gov/v1beta1/query";
import { Deposit } from "./types/cosmos/gov/v1beta1/gov";
import { TallyResult } from "./types/cosmos/gov/v1beta1/gov";
import { Vote } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositsResponse } from "./types/cosmos/gov/v1beta1/query";
import { Proposal } from "./types/cosmos/gov/v1beta1/gov";
import { QueryProposalRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryVotesRequest } from "./types/cosmos/gov/v1beta1/query";
import { MsgVote } from "./types/cosmos/gov/v1beta1/tx";
import { QueryVoteRequest } from "./types/cosmos/gov/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/gov/v1beta1/query";
import { QueryDepositResponse } from "./types/cosmos/gov/v1beta1/query";
import { VotingParams } from "./types/cosmos/gov/v1beta1/gov";
export { MsgVoteWeighted, MsgVoteWeightedResponse, MsgDepositResponse, QueryVoteResponse, QueryTallyResultResponse, MsgSubmitProposal, MsgSubmitProposalResponse, WeightedVoteOption, GenesisState, QueryProposalsRequest, QueryDepositRequest, TallyParams, QueryDepositsRequest, QueryTallyResultRequest, MsgVoteResponse, MsgDeposit, DepositParams, TextProposal, QueryProposalsResponse, QueryVotesResponse, QueryParamsRequest, Deposit, TallyResult, Vote, QueryProposalResponse, QueryDepositsResponse, Proposal, QueryProposalRequest, QueryVotesRequest, MsgVote, QueryVoteRequest, QueryParamsResponse, QueryDepositResponse, VotingParams };
type sendMsgVoteWeightedParams = {
    value: MsgVoteWeighted;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositResponseParams = {
    value: MsgDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteResponseParams = {
    value: QueryVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendWeightedVoteOptionParams = {
    value: WeightedVoteOption;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsRequestParams = {
    value: QueryProposalsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositRequestParams = {
    value: QueryDepositRequest;
    fee?: StdFee;
    memo?: string;
};
type sendTallyParamsParams = {
    value: TallyParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsRequestParams = {
    value: QueryDepositsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositParams = {
    value: MsgDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParamsParams = {
    value: DepositParams;
    fee?: StdFee;
    memo?: string;
};
type sendTextProposalParams = {
    value: TextProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsResponseParams = {
    value: QueryProposalsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesResponseParams = {
    value: QueryVotesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendDepositParams = {
    value: Deposit;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositsResponseParams = {
    value: QueryDepositsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendProposalParams = {
    value: Proposal;
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
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteRequestParams = {
    value: QueryVoteRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDepositResponseParams = {
    value: QueryDepositResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVotingParamsParams = {
    value: VotingParams;
    fee?: StdFee;
    memo?: string;
};
type msgVoteWeightedParams = {
    value: MsgVoteWeighted;
};
type msgVoteWeightedResponseParams = {
    value: MsgVoteWeightedResponse;
};
type msgDepositResponseParams = {
    value: MsgDepositResponse;
};
type queryVoteResponseParams = {
    value: QueryVoteResponse;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type weightedVoteOptionParams = {
    value: WeightedVoteOption;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryProposalsRequestParams = {
    value: QueryProposalsRequest;
};
type queryDepositRequestParams = {
    value: QueryDepositRequest;
};
type tallyParamsParams = {
    value: TallyParams;
};
type queryDepositsRequestParams = {
    value: QueryDepositsRequest;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type msgDepositParams = {
    value: MsgDeposit;
};
type depositParamsParams = {
    value: DepositParams;
};
type textProposalParams = {
    value: TextProposal;
};
type queryProposalsResponseParams = {
    value: QueryProposalsResponse;
};
type queryVotesResponseParams = {
    value: QueryVotesResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type depositParams = {
    value: Deposit;
};
type tallyResultParams = {
    value: TallyResult;
};
type voteParams = {
    value: Vote;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryDepositsResponseParams = {
    value: QueryDepositsResponse;
};
type proposalParams = {
    value: Proposal;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVotesRequestParams = {
    value: QueryVotesRequest;
};
type msgVoteParams = {
    value: MsgVote;
};
type queryVoteRequestParams = {
    value: QueryVoteRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryDepositResponseParams = {
    value: QueryDepositResponse;
};
type votingParamsParams = {
    value: VotingParams;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse>;
    sendMsgVoteWeightedResponse({ value, fee, memo }: sendMsgVoteWeightedResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositResponse({ value, fee, memo }: sendMsgDepositResponseParams): Promise<DeliverTxResponse>;
    sendQueryVoteResponse({ value, fee, memo }: sendQueryVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendWeightedVoteOption({ value, fee, memo }: sendWeightedVoteOptionParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryProposalsRequest({ value, fee, memo }: sendQueryProposalsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDepositRequest({ value, fee, memo }: sendQueryDepositRequestParams): Promise<DeliverTxResponse>;
    sendTallyParams({ value, fee, memo }: sendTallyParamsParams): Promise<DeliverTxResponse>;
    sendQueryDepositsRequest({ value, fee, memo }: sendQueryDepositsRequestParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse>;
    sendDepositParams({ value, fee, memo }: sendDepositParamsParams): Promise<DeliverTxResponse>;
    sendTextProposal({ value, fee, memo }: sendTextProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalsResponse({ value, fee, memo }: sendQueryProposalsResponseParams): Promise<DeliverTxResponse>;
    sendQueryVotesResponse({ value, fee, memo }: sendQueryVotesResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendDeposit({ value, fee, memo }: sendDepositParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositsResponse({ value, fee, memo }: sendQueryDepositsResponseParams): Promise<DeliverTxResponse>;
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesRequest({ value, fee, memo }: sendQueryVotesRequestParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendQueryVoteRequest({ value, fee, memo }: sendQueryVoteRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDepositResponse({ value, fee, memo }: sendQueryDepositResponseParams): Promise<DeliverTxResponse>;
    sendVotingParams({ value, fee, memo }: sendVotingParamsParams): Promise<DeliverTxResponse>;
    msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject;
    msgVoteWeightedResponse({ value }: msgVoteWeightedResponseParams): EncodeObject;
    msgDepositResponse({ value }: msgDepositResponseParams): EncodeObject;
    queryVoteResponse({ value }: queryVoteResponseParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    weightedVoteOption({ value }: weightedVoteOptionParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryProposalsRequest({ value }: queryProposalsRequestParams): EncodeObject;
    queryDepositRequest({ value }: queryDepositRequestParams): EncodeObject;
    tallyParams({ value }: tallyParamsParams): EncodeObject;
    queryDepositsRequest({ value }: queryDepositsRequestParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    msgDeposit({ value }: msgDepositParams): EncodeObject;
    depositParams({ value }: depositParamsParams): EncodeObject;
    textProposal({ value }: textProposalParams): EncodeObject;
    queryProposalsResponse({ value }: queryProposalsResponseParams): EncodeObject;
    queryVotesResponse({ value }: queryVotesResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    deposit({ value }: depositParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryDepositsResponse({ value }: queryDepositsResponseParams): EncodeObject;
    proposal({ value }: proposalParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVotesRequest({ value }: queryVotesRequestParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    queryVoteRequest({ value }: queryVoteRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryDepositResponse({ value }: queryDepositResponseParams): EncodeObject;
    votingParams({ value }: votingParamsParams): EncodeObject;
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
        CosmosGovV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
