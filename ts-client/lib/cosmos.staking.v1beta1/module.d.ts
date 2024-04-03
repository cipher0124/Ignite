import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Commission } from "./types/cosmos/staking/v1beta1/staking";
import { ValAddresses } from "./types/cosmos/staking/v1beta1/staking";
import { QueryParamsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgBeginRedelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Description } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { StakeAuthorization_Validators } from "./types/cosmos/staking/v1beta1/authz";
import { RedelegationEntryResponse } from "./types/cosmos/staking/v1beta1/staking";
import { Pool } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { DelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { Validator } from "./types/cosmos/staking/v1beta1/staking";
import { ValidatorUpdates } from "./types/cosmos/staking/v1beta1/staking";
import { LastValidatorPower } from "./types/cosmos/staking/v1beta1/genesis";
import { QueryValidatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryRedelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { CommissionRates } from "./types/cosmos/staking/v1beta1/staking";
import { DVPairs } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplet } from "./types/cosmos/staking/v1beta1/staking";
import { QueryUnbondingDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { StakeAuthorization } from "./types/cosmos/staking/v1beta1/authz";
import { DVPair } from "./types/cosmos/staking/v1beta1/staking";
import { QueryUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { Params } from "./types/cosmos/staking/v1beta1/staking";
import { GenesisState } from "./types/cosmos/staking/v1beta1/genesis";
import { QueryHistoricalInfoRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { RedelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplets } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCancelUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Redelegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Delegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/staking/v1beta1/tx";
import { UnbondingDelegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryRedelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { HistoricalInfo } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgCreateValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { UnbondingDelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
export { Commission, ValAddresses, QueryParamsResponse, MsgBeginRedelegateResponse, Description, RedelegationResponse, StakeAuthorization_Validators, RedelegationEntryResponse, Pool, QueryValidatorsResponse, MsgBeginRedelegate, DelegationResponse, Validator, ValidatorUpdates, LastValidatorPower, QueryValidatorDelegationsResponse, QueryRedelegationsResponse, MsgDelegate, CommissionRates, DVPairs, DVVTriplet, QueryUnbondingDelegationRequest, QueryParamsRequest, MsgUndelegate, StakeAuthorization, DVPair, QueryUnbondingDelegationResponse, QueryValidatorDelegationsRequest, QueryDelegatorValidatorsResponse, Params, GenesisState, QueryHistoricalInfoRequest, QueryPoolRequest, MsgCancelUnbondingDelegation, RedelegationEntry, DVVTriplets, QueryDelegationResponse, QueryDelegatorValidatorsRequest, MsgCancelUnbondingDelegationResponse, Redelegation, QueryDelegatorDelegationsResponse, QueryDelegatorValidatorResponse, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegatorDelegationsRequest, QueryPoolResponse, MsgUpdateParamsResponse, Delegation, QueryValidatorRequest, QueryHistoricalInfoResponse, MsgUpdateParams, UnbondingDelegation, QueryValidatorsRequest, QueryValidatorUnbondingDelegationsRequest, QueryRedelegationsRequest, MsgCreateValidator, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorValidatorRequest, MsgEditValidator, MsgDelegateResponse, HistoricalInfo, QueryValidatorResponse, MsgCreateValidatorResponse, MsgEditValidatorResponse, MsgUndelegateResponse, UnbondingDelegationEntry };
type sendCommissionParams = {
    value: Commission;
    fee?: StdFee;
    memo?: string;
};
type sendValAddressesParams = {
    value: ValAddresses;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDescriptionParams = {
    value: Description;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationResponseParams = {
    value: RedelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorization_ValidatorsParams = {
    value: StakeAuthorization_Validators;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPoolParams = {
    value: Pool;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationResponseParams = {
    value: DelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorUpdatesParams = {
    value: ValidatorUpdates;
    fee?: StdFee;
    memo?: string;
};
type sendLastValidatorPowerParams = {
    value: LastValidatorPower;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateParams = {
    value: MsgDelegate;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionRatesParams = {
    value: CommissionRates;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairsParams = {
    value: DVPairs;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletParams = {
    value: DVVTriplet;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateParams = {
    value: MsgUndelegate;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorizationParams = {
    value: StakeAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairParams = {
    value: DVPair;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolRequestParams = {
    value: QueryPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryParams = {
    value: RedelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletsParams = {
    value: DVVTriplets;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationResponseParams = {
    value: QueryDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationParams = {
    value: Redelegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRequestParams = {
    value: QueryDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolResponseParams = {
    value: QueryPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationParams = {
    value: Delegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorRequestParams = {
    value: QueryValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationParams = {
    value: UnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorParams = {
    value: MsgCreateValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorParams = {
    value: MsgEditValidator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateResponseParams = {
    value: MsgDelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendHistoricalInfoParams = {
    value: HistoricalInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorResponseParams = {
    value: QueryValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type commissionParams = {
    value: Commission;
};
type valAddressesParams = {
    value: ValAddresses;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
};
type descriptionParams = {
    value: Description;
};
type redelegationResponseParams = {
    value: RedelegationResponse;
};
type stakeAuthorizationValidatorsParams = {
    value: StakeAuthorization_Validators;
};
type redelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
};
type poolParams = {
    value: Pool;
};
type queryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
};
type msgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
};
type delegationResponseParams = {
    value: DelegationResponse;
};
type validatorParams = {
    value: Validator;
};
type validatorUpdatesParams = {
    value: ValidatorUpdates;
};
type lastValidatorPowerParams = {
    value: LastValidatorPower;
};
type queryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
};
type queryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
};
type msgDelegateParams = {
    value: MsgDelegate;
};
type commissionRatesParams = {
    value: CommissionRates;
};
type dvpairsParams = {
    value: DVPairs;
};
type dvvtripletParams = {
    value: DVVTriplet;
};
type queryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUndelegateParams = {
    value: MsgUndelegate;
};
type stakeAuthorizationParams = {
    value: StakeAuthorization;
};
type dvpairParams = {
    value: DVPair;
};
type queryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
};
type queryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type paramsParams = {
    value: Params;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
};
type queryPoolRequestParams = {
    value: QueryPoolRequest;
};
type msgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
};
type redelegationEntryParams = {
    value: RedelegationEntry;
};
type dvvtripletsParams = {
    value: DVVTriplets;
};
type queryDelegationResponseParams = {
    value: QueryDelegationResponse;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type msgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
};
type redelegationParams = {
    value: Redelegation;
};
type queryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
};
type queryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
};
type queryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
};
type queryDelegationRequestParams = {
    value: QueryDelegationRequest;
};
type queryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
};
type queryPoolResponseParams = {
    value: QueryPoolResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type delegationParams = {
    value: Delegation;
};
type queryValidatorRequestParams = {
    value: QueryValidatorRequest;
};
type queryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type unbondingDelegationParams = {
    value: UnbondingDelegation;
};
type queryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
};
type queryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
};
type queryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
};
type msgCreateValidatorParams = {
    value: MsgCreateValidator;
};
type queryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
};
type queryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
};
type queryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
};
type msgEditValidatorParams = {
    value: MsgEditValidator;
};
type msgDelegateResponseParams = {
    value: MsgDelegateResponse;
};
type historicalInfoParams = {
    value: HistoricalInfo;
};
type queryValidatorResponseParams = {
    value: QueryValidatorResponse;
};
type msgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
};
type msgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
};
type msgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
};
type unbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse>;
    sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegateResponse({ value, fee, memo }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse>;
    sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse>;
    sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization_Validators({ value, fee, memo }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse>;
    sendRedelegationEntryResponse({ value, fee, memo }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse>;
    sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsResponse({ value, fee, memo }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse>;
    sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse>;
    sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsResponse({ value, fee, memo }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsResponse({ value, fee, memo }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse>;
    sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse>;
    sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse>;
    sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse>;
    sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationRequest({ value, fee, memo }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse>;
    sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationResponse({ value, fee, memo }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsRequest({ value, fee, memo }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoRequest({ value, fee, memo }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse>;
    sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse>;
    sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse>;
    sendQueryDelegationResponse({ value, fee, memo }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsResponse({ value, fee, memo }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorResponse({ value, fee, memo }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRequest({ value, fee, memo }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsRequest({ value, fee, memo }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse>;
    sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoResponse({ value, fee, memo }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsRequest({ value, fee, memo }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsRequest({ value, fee, memo }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorRequest({ value, fee, memo }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse>;
    sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse>;
    sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse>;
    sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse>;
    sendQueryValidatorResponse({ value, fee, memo }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidatorResponse({ value, fee, memo }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgEditValidatorResponse({ value, fee, memo }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegationEntry({ value, fee, memo }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse>;
    commission({ value }: commissionParams): EncodeObject;
    valAddresses({ value }: valAddressesParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject;
    description({ value }: descriptionParams): EncodeObject;
    redelegationResponse({ value }: redelegationResponseParams): EncodeObject;
    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject;
    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject;
    pool({ value }: poolParams): EncodeObject;
    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject;
    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject;
    delegationResponse({ value }: delegationResponseParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject;
    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject;
    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject;
    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject;
    msgDelegate({ value }: msgDelegateParams): EncodeObject;
    commissionRates({ value }: commissionRatesParams): EncodeObject;
    dvpairs({ value }: dvpairsParams): EncodeObject;
    dvvtriplet({ value }: dvvtripletParams): EncodeObject;
    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUndelegate({ value }: msgUndelegateParams): EncodeObject;
    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject;
    dvpair({ value }: dvpairParams): EncodeObject;
    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject;
    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject;
    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject;
    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject;
    redelegationEntry({ value }: redelegationEntryParams): EncodeObject;
    dvvtriplets({ value }: dvvtripletsParams): EncodeObject;
    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject;
    redelegation({ value }: redelegationParams): EncodeObject;
    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject;
    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject;
    queryValidatorUnbondingDelegationsResponse({ value }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject;
    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject;
    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject;
    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    delegation({ value }: delegationParams): EncodeObject;
    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject;
    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject;
    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject;
    queryValidatorUnbondingDelegationsRequest({ value }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject;
    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject;
    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject;
    queryDelegatorUnbondingDelegationsRequest({ value }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject;
    queryDelegatorUnbondingDelegationsResponse({ value }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject;
    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject;
    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject;
    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject;
    historicalInfo({ value }: historicalInfoParams): EncodeObject;
    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject;
    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject;
    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject;
    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject;
    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject;
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
        CosmosStakingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
