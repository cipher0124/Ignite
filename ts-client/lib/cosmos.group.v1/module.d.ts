import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Proposal } from "./types/cosmos/group/v1/types";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { QueryGroupPoliciesByAdminResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupMembersResponse } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicyResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposalResponse } from "./types/cosmos/group/v1/tx";
import { EventCreateGroupPolicy } from "./types/cosmos/group/v1/events";
import { EventExec } from "./types/cosmos/group/v1/events";
import { QueryGroupPolicyInfoRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryGroupsRequest } from "./types/cosmos/group/v1/query";
import { MsgVoteResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupPoliciesByGroupRequest } from "./types/cosmos/group/v1/query";
import { GroupMember } from "./types/cosmos/group/v1/types";
import { Vote } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupWithPolicyResponse } from "./types/cosmos/group/v1/tx";
import { GenesisState } from "./types/cosmos/group/v1/genesis";
import { QueryGroupMembersResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalResponse } from "./types/cosmos/group/v1/query";
import { QueryTallyResultResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsResponse } from "./types/cosmos/group/v1/query";
import { PercentageDecisionPolicy } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { QueryGroupPolicyInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByProposalResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsByMemberResponse } from "./types/cosmos/group/v1/query";
import { GroupInfo } from "./types/cosmos/group/v1/types";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { QueryGroupsByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryVoteByProposalVoterResponse } from "./types/cosmos/group/v1/query";
import { GroupPolicyInfo } from "./types/cosmos/group/v1/types";
import { EventVote } from "./types/cosmos/group/v1/events";
import { QueryGroupMembersRequest } from "./types/cosmos/group/v1/query";
import { Member } from "./types/cosmos/group/v1/types";
import { EventProposalPruned } from "./types/cosmos/group/v1/events";
import { QueryVoteByProposalVoterRequest } from "./types/cosmos/group/v1/query";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupResponse } from "./types/cosmos/group/v1/tx";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { EventLeaveGroup } from "./types/cosmos/group/v1/events";
import { EventSubmitProposal } from "./types/cosmos/group/v1/events";
import { QueryGroupPoliciesByAdminRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterRequest } from "./types/cosmos/group/v1/query";
import { ThresholdDecisionPolicy } from "./types/cosmos/group/v1/types";
import { TallyResult } from "./types/cosmos/group/v1/types";
import { MsgUpdateGroupMetadataResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { MsgExecResponse } from "./types/cosmos/group/v1/tx";
import { EventWithdrawProposal } from "./types/cosmos/group/v1/events";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { EventCreateGroup } from "./types/cosmos/group/v1/events";
import { EventUpdateGroup } from "./types/cosmos/group/v1/events";
import { DecisionPolicyWindows } from "./types/cosmos/group/v1/types";
import { QueryGroupInfoRequest } from "./types/cosmos/group/v1/query";
import { QueryVotesByVoterResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupsByMemberRequest } from "./types/cosmos/group/v1/query";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroupResponse } from "./types/cosmos/group/v1/tx";
import { QueryGroupInfoResponse } from "./types/cosmos/group/v1/query";
import { QueryProposalsByGroupPolicyResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyDecisionPolicyResponse } from "./types/cosmos/group/v1/tx";
import { EventUpdateGroupPolicy } from "./types/cosmos/group/v1/events";
import { QueryProposalsByGroupPolicyRequest } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { QueryTallyResultRequest } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposalResponse } from "./types/cosmos/group/v1/tx";
import { MemberRequest } from "./types/cosmos/group/v1/types";
import { QueryGroupsByAdminResponse } from "./types/cosmos/group/v1/query";
import { QueryGroupPoliciesByGroupResponse } from "./types/cosmos/group/v1/query";
import { MsgUpdateGroupAdminResponse } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyMetadataResponse } from "./types/cosmos/group/v1/tx";
export { Proposal, MsgCreateGroup, QueryGroupPoliciesByAdminResponse, MsgUpdateGroupMembersResponse, MsgCreateGroupPolicyResponse, MsgUpdateGroupPolicyAdminResponse, MsgWithdrawProposalResponse, EventCreateGroupPolicy, EventExec, QueryGroupPolicyInfoRequest, QueryVotesByProposalRequest, QueryGroupsRequest, MsgVoteResponse, QueryGroupPoliciesByGroupRequest, GroupMember, Vote, MsgUpdateGroupMetadata, MsgCreateGroupWithPolicyResponse, GenesisState, QueryGroupMembersResponse, QueryProposalResponse, QueryTallyResultResponse, QueryGroupsResponse, PercentageDecisionPolicy, MsgUpdateGroupMembers, MsgVote, QueryGroupPolicyInfoResponse, QueryProposalRequest, QueryVotesByProposalResponse, QueryGroupsByMemberResponse, GroupInfo, MsgWithdrawProposal, QueryGroupsByAdminRequest, QueryVoteByProposalVoterResponse, GroupPolicyInfo, EventVote, QueryGroupMembersRequest, Member, EventProposalPruned, QueryVoteByProposalVoterRequest, MsgCreateGroupWithPolicy, MsgCreateGroupResponse, MsgExec, EventLeaveGroup, EventSubmitProposal, QueryGroupPoliciesByAdminRequest, QueryVotesByVoterRequest, ThresholdDecisionPolicy, TallyResult, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdmin, MsgExecResponse, EventWithdrawProposal, MsgUpdateGroupAdmin, MsgCreateGroupPolicy, EventCreateGroup, EventUpdateGroup, DecisionPolicyWindows, QueryGroupInfoRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, MsgSubmitProposal, MsgLeaveGroup, MsgLeaveGroupResponse, QueryGroupInfoResponse, QueryProposalsByGroupPolicyResponse, MsgUpdateGroupPolicyDecisionPolicyResponse, EventUpdateGroupPolicy, QueryProposalsByGroupPolicyRequest, MsgUpdateGroupPolicyDecisionPolicy, QueryTallyResultRequest, MsgUpdateGroupPolicyMetadata, MsgSubmitProposalResponse, MemberRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupResponse, MsgUpdateGroupAdminResponse, MsgUpdateGroupPolicyMetadataResponse };
type sendProposalParams = {
    value: Proposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupParams = {
    value: MsgCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendEventExecParams = {
    value: EventExec;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsRequestParams = {
    value: QueryGroupsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteResponseParams = {
    value: MsgVoteResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGroupMemberParams = {
    value: GroupMember;
    fee?: StdFee;
    memo?: string;
};
type sendVoteParams = {
    value: Vote;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalResponseParams = {
    value: QueryProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsResponseParams = {
    value: QueryGroupsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPercentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
    fee?: StdFee;
    memo?: string;
};
type sendMsgVoteParams = {
    value: MsgVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalRequestParams = {
    value: QueryProposalRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGroupInfoParams = {
    value: GroupInfo;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGroupPolicyInfoParams = {
    value: GroupPolicyInfo;
    fee?: StdFee;
    memo?: string;
};
type sendEventVoteParams = {
    value: EventVote;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMemberParams = {
    value: Member;
    fee?: StdFee;
    memo?: string;
};
type sendEventProposalPrunedParams = {
    value: EventProposalPruned;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecParams = {
    value: MsgExec;
    fee?: StdFee;
    memo?: string;
};
type sendEventLeaveGroupParams = {
    value: EventLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventSubmitProposalParams = {
    value: EventSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
    fee?: StdFee;
    memo?: string;
};
type sendThresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendTallyResultParams = {
    value: TallyResult;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendMsgExecResponseParams = {
    value: MsgExecResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventWithdrawProposalParams = {
    value: EventWithdrawProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendEventCreateGroupParams = {
    value: EventCreateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupParams = {
    value: EventUpdateGroup;
    fee?: StdFee;
    memo?: string;
};
type sendDecisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalParams = {
    value: MsgSubmitProposal;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupParams = {
    value: MsgLeaveGroup;
    fee?: StdFee;
    memo?: string;
};
type sendMsgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
    fee?: StdFee;
    memo?: string;
};
type sendQueryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMemberRequestParams = {
    value: MemberRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
    fee?: StdFee;
    memo?: string;
};
type proposalParams = {
    value: Proposal;
};
type msgCreateGroupParams = {
    value: MsgCreateGroup;
};
type queryGroupPoliciesByAdminResponseParams = {
    value: QueryGroupPoliciesByAdminResponse;
};
type msgUpdateGroupMembersResponseParams = {
    value: MsgUpdateGroupMembersResponse;
};
type msgCreateGroupPolicyResponseParams = {
    value: MsgCreateGroupPolicyResponse;
};
type msgUpdateGroupPolicyAdminResponseParams = {
    value: MsgUpdateGroupPolicyAdminResponse;
};
type msgWithdrawProposalResponseParams = {
    value: MsgWithdrawProposalResponse;
};
type eventCreateGroupPolicyParams = {
    value: EventCreateGroupPolicy;
};
type eventExecParams = {
    value: EventExec;
};
type queryGroupPolicyInfoRequestParams = {
    value: QueryGroupPolicyInfoRequest;
};
type queryVotesByProposalRequestParams = {
    value: QueryVotesByProposalRequest;
};
type queryGroupsRequestParams = {
    value: QueryGroupsRequest;
};
type msgVoteResponseParams = {
    value: MsgVoteResponse;
};
type queryGroupPoliciesByGroupRequestParams = {
    value: QueryGroupPoliciesByGroupRequest;
};
type groupMemberParams = {
    value: GroupMember;
};
type voteParams = {
    value: Vote;
};
type msgUpdateGroupMetadataParams = {
    value: MsgUpdateGroupMetadata;
};
type msgCreateGroupWithPolicyResponseParams = {
    value: MsgCreateGroupWithPolicyResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryGroupMembersResponseParams = {
    value: QueryGroupMembersResponse;
};
type queryProposalResponseParams = {
    value: QueryProposalResponse;
};
type queryTallyResultResponseParams = {
    value: QueryTallyResultResponse;
};
type queryGroupsResponseParams = {
    value: QueryGroupsResponse;
};
type percentageDecisionPolicyParams = {
    value: PercentageDecisionPolicy;
};
type msgUpdateGroupMembersParams = {
    value: MsgUpdateGroupMembers;
};
type msgVoteParams = {
    value: MsgVote;
};
type queryGroupPolicyInfoResponseParams = {
    value: QueryGroupPolicyInfoResponse;
};
type queryProposalRequestParams = {
    value: QueryProposalRequest;
};
type queryVotesByProposalResponseParams = {
    value: QueryVotesByProposalResponse;
};
type queryGroupsByMemberResponseParams = {
    value: QueryGroupsByMemberResponse;
};
type groupInfoParams = {
    value: GroupInfo;
};
type msgWithdrawProposalParams = {
    value: MsgWithdrawProposal;
};
type queryGroupsByAdminRequestParams = {
    value: QueryGroupsByAdminRequest;
};
type queryVoteByProposalVoterResponseParams = {
    value: QueryVoteByProposalVoterResponse;
};
type groupPolicyInfoParams = {
    value: GroupPolicyInfo;
};
type eventVoteParams = {
    value: EventVote;
};
type queryGroupMembersRequestParams = {
    value: QueryGroupMembersRequest;
};
type memberParams = {
    value: Member;
};
type eventProposalPrunedParams = {
    value: EventProposalPruned;
};
type queryVoteByProposalVoterRequestParams = {
    value: QueryVoteByProposalVoterRequest;
};
type msgCreateGroupWithPolicyParams = {
    value: MsgCreateGroupWithPolicy;
};
type msgCreateGroupResponseParams = {
    value: MsgCreateGroupResponse;
};
type msgExecParams = {
    value: MsgExec;
};
type eventLeaveGroupParams = {
    value: EventLeaveGroup;
};
type eventSubmitProposalParams = {
    value: EventSubmitProposal;
};
type queryGroupPoliciesByAdminRequestParams = {
    value: QueryGroupPoliciesByAdminRequest;
};
type queryVotesByVoterRequestParams = {
    value: QueryVotesByVoterRequest;
};
type thresholdDecisionPolicyParams = {
    value: ThresholdDecisionPolicy;
};
type tallyResultParams = {
    value: TallyResult;
};
type msgUpdateGroupMetadataResponseParams = {
    value: MsgUpdateGroupMetadataResponse;
};
type msgUpdateGroupPolicyAdminParams = {
    value: MsgUpdateGroupPolicyAdmin;
};
type msgExecResponseParams = {
    value: MsgExecResponse;
};
type eventWithdrawProposalParams = {
    value: EventWithdrawProposal;
};
type msgUpdateGroupAdminParams = {
    value: MsgUpdateGroupAdmin;
};
type msgCreateGroupPolicyParams = {
    value: MsgCreateGroupPolicy;
};
type eventCreateGroupParams = {
    value: EventCreateGroup;
};
type eventUpdateGroupParams = {
    value: EventUpdateGroup;
};
type decisionPolicyWindowsParams = {
    value: DecisionPolicyWindows;
};
type queryGroupInfoRequestParams = {
    value: QueryGroupInfoRequest;
};
type queryVotesByVoterResponseParams = {
    value: QueryVotesByVoterResponse;
};
type queryGroupsByMemberRequestParams = {
    value: QueryGroupsByMemberRequest;
};
type msgSubmitProposalParams = {
    value: MsgSubmitProposal;
};
type msgLeaveGroupParams = {
    value: MsgLeaveGroup;
};
type msgLeaveGroupResponseParams = {
    value: MsgLeaveGroupResponse;
};
type queryGroupInfoResponseParams = {
    value: QueryGroupInfoResponse;
};
type queryProposalsByGroupPolicyResponseParams = {
    value: QueryProposalsByGroupPolicyResponse;
};
type msgUpdateGroupPolicyDecisionPolicyResponseParams = {
    value: MsgUpdateGroupPolicyDecisionPolicyResponse;
};
type eventUpdateGroupPolicyParams = {
    value: EventUpdateGroupPolicy;
};
type queryProposalsByGroupPolicyRequestParams = {
    value: QueryProposalsByGroupPolicyRequest;
};
type msgUpdateGroupPolicyDecisionPolicyParams = {
    value: MsgUpdateGroupPolicyDecisionPolicy;
};
type queryTallyResultRequestParams = {
    value: QueryTallyResultRequest;
};
type msgUpdateGroupPolicyMetadataParams = {
    value: MsgUpdateGroupPolicyMetadata;
};
type msgSubmitProposalResponseParams = {
    value: MsgSubmitProposalResponse;
};
type memberRequestParams = {
    value: MemberRequest;
};
type queryGroupsByAdminResponseParams = {
    value: QueryGroupsByAdminResponse;
};
type queryGroupPoliciesByGroupResponseParams = {
    value: QueryGroupPoliciesByGroupResponse;
};
type msgUpdateGroupAdminResponseParams = {
    value: MsgUpdateGroupAdminResponse;
};
type msgUpdateGroupPolicyMetadataResponseParams = {
    value: MsgUpdateGroupPolicyMetadataResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendProposal({ value, fee, memo }: sendProposalParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroup({ value, fee, memo }: sendMsgCreateGroupParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminResponse({ value, fee, memo }: sendQueryGroupPoliciesByAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembersResponse({ value, fee, memo }: sendMsgUpdateGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicyResponse({ value, fee, memo }: sendMsgCreateGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdminResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposalResponse({ value, fee, memo }: sendMsgWithdrawProposalResponseParams): Promise<DeliverTxResponse>;
    sendEventCreateGroupPolicy({ value, fee, memo }: sendEventCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendEventExec({ value, fee, memo }: sendEventExecParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoRequest({ value, fee, memo }: sendQueryGroupPolicyInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalRequest({ value, fee, memo }: sendQueryVotesByProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsRequest({ value, fee, memo }: sendQueryGroupsRequestParams): Promise<DeliverTxResponse>;
    sendMsgVoteResponse({ value, fee, memo }: sendMsgVoteResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupRequest({ value, fee, memo }: sendQueryGroupPoliciesByGroupRequestParams): Promise<DeliverTxResponse>;
    sendGroupMember({ value, fee, memo }: sendGroupMemberParams): Promise<DeliverTxResponse>;
    sendVote({ value, fee, memo }: sendVoteParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadata({ value, fee, memo }: sendMsgUpdateGroupMetadataParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicyResponse({ value, fee, memo }: sendMsgCreateGroupWithPolicyResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersResponse({ value, fee, memo }: sendQueryGroupMembersResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalResponse({ value, fee, memo }: sendQueryProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultResponse({ value, fee, memo }: sendQueryTallyResultResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsResponse({ value, fee, memo }: sendQueryGroupsResponseParams): Promise<DeliverTxResponse>;
    sendPercentageDecisionPolicy({ value, fee, memo }: sendPercentageDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMembers({ value, fee, memo }: sendMsgUpdateGroupMembersParams): Promise<DeliverTxResponse>;
    sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupPolicyInfoResponse({ value, fee, memo }: sendQueryGroupPolicyInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalRequest({ value, fee, memo }: sendQueryProposalRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByProposalResponse({ value, fee, memo }: sendQueryVotesByProposalResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberResponse({ value, fee, memo }: sendQueryGroupsByMemberResponseParams): Promise<DeliverTxResponse>;
    sendGroupInfo({ value, fee, memo }: sendGroupInfoParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawProposal({ value, fee, memo }: sendMsgWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminRequest({ value, fee, memo }: sendQueryGroupsByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterResponse({ value, fee, memo }: sendQueryVoteByProposalVoterResponseParams): Promise<DeliverTxResponse>;
    sendGroupPolicyInfo({ value, fee, memo }: sendGroupPolicyInfoParams): Promise<DeliverTxResponse>;
    sendEventVote({ value, fee, memo }: sendEventVoteParams): Promise<DeliverTxResponse>;
    sendQueryGroupMembersRequest({ value, fee, memo }: sendQueryGroupMembersRequestParams): Promise<DeliverTxResponse>;
    sendMember({ value, fee, memo }: sendMemberParams): Promise<DeliverTxResponse>;
    sendEventProposalPruned({ value, fee, memo }: sendEventProposalPrunedParams): Promise<DeliverTxResponse>;
    sendQueryVoteByProposalVoterRequest({ value, fee, memo }: sendQueryVoteByProposalVoterRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupWithPolicy({ value, fee, memo }: sendMsgCreateGroupWithPolicyParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupResponse({ value, fee, memo }: sendMsgCreateGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgExec({ value, fee, memo }: sendMsgExecParams): Promise<DeliverTxResponse>;
    sendEventLeaveGroup({ value, fee, memo }: sendEventLeaveGroupParams): Promise<DeliverTxResponse>;
    sendEventSubmitProposal({ value, fee, memo }: sendEventSubmitProposalParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByAdminRequest({ value, fee, memo }: sendQueryGroupPoliciesByAdminRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterRequest({ value, fee, memo }: sendQueryVotesByVoterRequestParams): Promise<DeliverTxResponse>;
    sendThresholdDecisionPolicy({ value, fee, memo }: sendThresholdDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendTallyResult({ value, fee, memo }: sendTallyResultParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupMetadataResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: sendMsgUpdateGroupPolicyAdminParams): Promise<DeliverTxResponse>;
    sendMsgExecResponse({ value, fee, memo }: sendMsgExecResponseParams): Promise<DeliverTxResponse>;
    sendEventWithdrawProposal({ value, fee, memo }: sendEventWithdrawProposalParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdmin({ value, fee, memo }: sendMsgUpdateGroupAdminParams): Promise<DeliverTxResponse>;
    sendMsgCreateGroupPolicy({ value, fee, memo }: sendMsgCreateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendEventCreateGroup({ value, fee, memo }: sendEventCreateGroupParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroup({ value, fee, memo }: sendEventUpdateGroupParams): Promise<DeliverTxResponse>;
    sendDecisionPolicyWindows({ value, fee, memo }: sendDecisionPolicyWindowsParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoRequest({ value, fee, memo }: sendQueryGroupInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryVotesByVoterResponse({ value, fee, memo }: sendQueryVotesByVoterResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByMemberRequest({ value, fee, memo }: sendQueryGroupsByMemberRequestParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroup({ value, fee, memo }: sendMsgLeaveGroupParams): Promise<DeliverTxResponse>;
    sendMsgLeaveGroupResponse({ value, fee, memo }: sendMsgLeaveGroupResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupInfoResponse({ value, fee, memo }: sendQueryGroupInfoResponseParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyResponse({ value, fee, memo }: sendQueryProposalsByGroupPolicyResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicyResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyResponseParams): Promise<DeliverTxResponse>;
    sendEventUpdateGroupPolicy({ value, fee, memo }: sendEventUpdateGroupPolicyParams): Promise<DeliverTxResponse>;
    sendQueryProposalsByGroupPolicyRequest({ value, fee, memo }: sendQueryProposalsByGroupPolicyRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: sendMsgUpdateGroupPolicyDecisionPolicyParams): Promise<DeliverTxResponse>;
    sendQueryTallyResultRequest({ value, fee, memo }: sendQueryTallyResultRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataParams): Promise<DeliverTxResponse>;
    sendMsgSubmitProposalResponse({ value, fee, memo }: sendMsgSubmitProposalResponseParams): Promise<DeliverTxResponse>;
    sendMemberRequest({ value, fee, memo }: sendMemberRequestParams): Promise<DeliverTxResponse>;
    sendQueryGroupsByAdminResponse({ value, fee, memo }: sendQueryGroupsByAdminResponseParams): Promise<DeliverTxResponse>;
    sendQueryGroupPoliciesByGroupResponse({ value, fee, memo }: sendQueryGroupPoliciesByGroupResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupAdminResponse({ value, fee, memo }: sendMsgUpdateGroupAdminResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateGroupPolicyMetadataResponse({ value, fee, memo }: sendMsgUpdateGroupPolicyMetadataResponseParams): Promise<DeliverTxResponse>;
    proposal({ value }: proposalParams): EncodeObject;
    msgCreateGroup({ value }: msgCreateGroupParams): EncodeObject;
    queryGroupPoliciesByAdminResponse({ value }: queryGroupPoliciesByAdminResponseParams): EncodeObject;
    msgUpdateGroupMembersResponse({ value }: msgUpdateGroupMembersResponseParams): EncodeObject;
    msgCreateGroupPolicyResponse({ value }: msgCreateGroupPolicyResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdminResponse({ value }: msgUpdateGroupPolicyAdminResponseParams): EncodeObject;
    msgWithdrawProposalResponse({ value }: msgWithdrawProposalResponseParams): EncodeObject;
    eventCreateGroupPolicy({ value }: eventCreateGroupPolicyParams): EncodeObject;
    eventExec({ value }: eventExecParams): EncodeObject;
    queryGroupPolicyInfoRequest({ value }: queryGroupPolicyInfoRequestParams): EncodeObject;
    queryVotesByProposalRequest({ value }: queryVotesByProposalRequestParams): EncodeObject;
    queryGroupsRequest({ value }: queryGroupsRequestParams): EncodeObject;
    msgVoteResponse({ value }: msgVoteResponseParams): EncodeObject;
    queryGroupPoliciesByGroupRequest({ value }: queryGroupPoliciesByGroupRequestParams): EncodeObject;
    groupMember({ value }: groupMemberParams): EncodeObject;
    vote({ value }: voteParams): EncodeObject;
    msgUpdateGroupMetadata({ value }: msgUpdateGroupMetadataParams): EncodeObject;
    msgCreateGroupWithPolicyResponse({ value }: msgCreateGroupWithPolicyResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryGroupMembersResponse({ value }: queryGroupMembersResponseParams): EncodeObject;
    queryProposalResponse({ value }: queryProposalResponseParams): EncodeObject;
    queryTallyResultResponse({ value }: queryTallyResultResponseParams): EncodeObject;
    queryGroupsResponse({ value }: queryGroupsResponseParams): EncodeObject;
    percentageDecisionPolicy({ value }: percentageDecisionPolicyParams): EncodeObject;
    msgUpdateGroupMembers({ value }: msgUpdateGroupMembersParams): EncodeObject;
    msgVote({ value }: msgVoteParams): EncodeObject;
    queryGroupPolicyInfoResponse({ value }: queryGroupPolicyInfoResponseParams): EncodeObject;
    queryProposalRequest({ value }: queryProposalRequestParams): EncodeObject;
    queryVotesByProposalResponse({ value }: queryVotesByProposalResponseParams): EncodeObject;
    queryGroupsByMemberResponse({ value }: queryGroupsByMemberResponseParams): EncodeObject;
    groupInfo({ value }: groupInfoParams): EncodeObject;
    msgWithdrawProposal({ value }: msgWithdrawProposalParams): EncodeObject;
    queryGroupsByAdminRequest({ value }: queryGroupsByAdminRequestParams): EncodeObject;
    queryVoteByProposalVoterResponse({ value }: queryVoteByProposalVoterResponseParams): EncodeObject;
    groupPolicyInfo({ value }: groupPolicyInfoParams): EncodeObject;
    eventVote({ value }: eventVoteParams): EncodeObject;
    queryGroupMembersRequest({ value }: queryGroupMembersRequestParams): EncodeObject;
    member({ value }: memberParams): EncodeObject;
    eventProposalPruned({ value }: eventProposalPrunedParams): EncodeObject;
    queryVoteByProposalVoterRequest({ value }: queryVoteByProposalVoterRequestParams): EncodeObject;
    msgCreateGroupWithPolicy({ value }: msgCreateGroupWithPolicyParams): EncodeObject;
    msgCreateGroupResponse({ value }: msgCreateGroupResponseParams): EncodeObject;
    msgExec({ value }: msgExecParams): EncodeObject;
    eventLeaveGroup({ value }: eventLeaveGroupParams): EncodeObject;
    eventSubmitProposal({ value }: eventSubmitProposalParams): EncodeObject;
    queryGroupPoliciesByAdminRequest({ value }: queryGroupPoliciesByAdminRequestParams): EncodeObject;
    queryVotesByVoterRequest({ value }: queryVotesByVoterRequestParams): EncodeObject;
    thresholdDecisionPolicy({ value }: thresholdDecisionPolicyParams): EncodeObject;
    tallyResult({ value }: tallyResultParams): EncodeObject;
    msgUpdateGroupMetadataResponse({ value }: msgUpdateGroupMetadataResponseParams): EncodeObject;
    msgUpdateGroupPolicyAdmin({ value }: msgUpdateGroupPolicyAdminParams): EncodeObject;
    msgExecResponse({ value }: msgExecResponseParams): EncodeObject;
    eventWithdrawProposal({ value }: eventWithdrawProposalParams): EncodeObject;
    msgUpdateGroupAdmin({ value }: msgUpdateGroupAdminParams): EncodeObject;
    msgCreateGroupPolicy({ value }: msgCreateGroupPolicyParams): EncodeObject;
    eventCreateGroup({ value }: eventCreateGroupParams): EncodeObject;
    eventUpdateGroup({ value }: eventUpdateGroupParams): EncodeObject;
    decisionPolicyWindows({ value }: decisionPolicyWindowsParams): EncodeObject;
    queryGroupInfoRequest({ value }: queryGroupInfoRequestParams): EncodeObject;
    queryVotesByVoterResponse({ value }: queryVotesByVoterResponseParams): EncodeObject;
    queryGroupsByMemberRequest({ value }: queryGroupsByMemberRequestParams): EncodeObject;
    msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject;
    msgLeaveGroup({ value }: msgLeaveGroupParams): EncodeObject;
    msgLeaveGroupResponse({ value }: msgLeaveGroupResponseParams): EncodeObject;
    queryGroupInfoResponse({ value }: queryGroupInfoResponseParams): EncodeObject;
    queryProposalsByGroupPolicyResponse({ value }: queryProposalsByGroupPolicyResponseParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicyResponse({ value }: msgUpdateGroupPolicyDecisionPolicyResponseParams): EncodeObject;
    eventUpdateGroupPolicy({ value }: eventUpdateGroupPolicyParams): EncodeObject;
    queryProposalsByGroupPolicyRequest({ value }: queryProposalsByGroupPolicyRequestParams): EncodeObject;
    msgUpdateGroupPolicyDecisionPolicy({ value }: msgUpdateGroupPolicyDecisionPolicyParams): EncodeObject;
    queryTallyResultRequest({ value }: queryTallyResultRequestParams): EncodeObject;
    msgUpdateGroupPolicyMetadata({ value }: msgUpdateGroupPolicyMetadataParams): EncodeObject;
    msgSubmitProposalResponse({ value }: msgSubmitProposalResponseParams): EncodeObject;
    memberRequest({ value }: memberRequestParams): EncodeObject;
    queryGroupsByAdminResponse({ value }: queryGroupsByAdminResponseParams): EncodeObject;
    queryGroupPoliciesByGroupResponse({ value }: queryGroupPoliciesByGroupResponseParams): EncodeObject;
    msgUpdateGroupAdminResponse({ value }: msgUpdateGroupAdminResponseParams): EncodeObject;
    msgUpdateGroupPolicyMetadataResponse({ value }: msgUpdateGroupPolicyMetadataResponseParams): EncodeObject;
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
        CosmosGroupV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
