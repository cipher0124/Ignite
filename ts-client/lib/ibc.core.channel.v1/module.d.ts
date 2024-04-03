import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
export { Acknowledgement, MsgChannelCloseConfirm, MsgTimeoutOnClose, QueryChannelConsensusStateResponse, QueryPacketAcknowledgementsRequest, Channel, QueryPacketAcknowledgementResponse, MsgChannelOpenConfirmResponse, MsgTimeout, MsgChannelOpenAckResponse, GenesisState, PacketSequence, MsgChannelOpenAck, MsgChannelOpenConfirm, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryPacketCommitmentsRequest, QueryPacketAcknowledgementRequest, MsgChannelOpenInitResponse, MsgAcknowledgement, QueryChannelClientStateResponse, IdentifiedChannel, QueryPacketCommitmentsResponse, QueryUnreceivedPacketsResponse, MsgAcknowledgementResponse, QueryNextSequenceReceiveResponse, Counterparty, QueryPacketCommitmentRequest, QueryUnreceivedAcksResponse, MsgChannelOpenInit, MsgChannelOpenTryResponse, MsgRecvPacket, MsgRecvPacketResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, Timeout, PacketId, QueryChannelRequest, QueryChannelsRequest, QueryNextSequenceReceiveRequest, QueryNextSequenceSendRequest, QueryConnectionChannelsResponse, QueryChannelConsensusStateRequest, QueryUnreceivedAcksRequest, MsgChannelCloseInitResponse, MsgChannelOpenTry, QueryChannelResponse, QueryPacketCommitmentResponse, QueryUnreceivedPacketsRequest, MsgChannelCloseConfirmResponse, MsgTimeoutResponse, MsgTimeoutOnCloseResponse, MsgChannelCloseInit, PacketState, Packet, QueryChannelClientStateRequest, QueryPacketAcknowledgementsResponse, QueryNextSequenceSendResponse };
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutParams = {
    value: MsgTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type channelParams = {
    value: Channel;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type timeoutParams = {
    value: Timeout;
};
type packetIdParams = {
    value: PacketId;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type packetStateParams = {
    value: PacketState;
};
type packetParams = {
    value: Packet;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    timeout({ value }: timeoutParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
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
        IbcCoreChannelV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
