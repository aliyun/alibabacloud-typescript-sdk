// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue extends $tea.Model {
  baggageAmount?: number;
  baggageWeight?: number;
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  carryOnAmount?: number;
  carryOnWeight?: number;
  carryOnWeightUnit?: string;
  isAllCarryOnWeight?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      carryOnAmount: 'carry_on_amount',
      carryOnWeight: 'carry_on_weight',
      carryOnWeightUnit: 'carry_on_weight_unit',
      isAllCarryOnWeight: 'is_all_carry_on_weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      carryOnAmount: 'number',
      carryOnWeight: 'number',
      carryOnWeightUnit: 'string',
      isAllCarryOnWeight: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue extends $tea.Model {
  refundRuleAllUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  refundRulePartUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  changeRuleInUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  changeRuleOutUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList[];
  static names(): { [key: string]: string } {
    return {
      refundRuleAllUnusedList: 'refund_rule_all_unused_list',
      refundRulePartUnusedList: 'refund_rule_part_unused_list',
      changeRuleInUnusedList: 'change_rule_in_unused_list',
      changeRuleOutUnusedList: 'change_rule_out_unused_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataBaggageAllowanceMapValue extends $tea.Model {
  baggageAmount?: number;
  baggageWeight?: number;
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  carryOnAmount?: number;
  carryOnWeight?: number;
  carryOnWeightUnit?: string;
  isAllCarryOnWeight?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      carryOnAmount: 'carry_on_amount',
      carryOnWeight: 'carry_on_weight',
      carryOnWeightUnit: 'carry_on_weight_unit',
      isAllCarryOnWeight: 'is_all_carry_on_weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      carryOnAmount: 'number',
      carryOnWeight: 'number',
      carryOnWeightUnit: 'string',
      isAllCarryOnWeight: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRefundChangeRuleMapValue extends $tea.Model {
  refundRuleAllUnusedList?: DataRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  refundRulePartUnusedList?: DataRefundChangeRuleMapValueRefundRulePartUnusedList[];
  changeRuleInUnusedList?: DataRefundChangeRuleMapValueChangeRuleInUnusedList[];
  changeRuleOutUnusedList?: DataRefundChangeRuleMapValueChangeRuleOutUnusedList[];
  static names(): { [key: string]: string } {
    return {
      refundRuleAllUnusedList: 'refund_rule_all_unused_list',
      refundRulePartUnusedList: 'refund_rule_part_unused_list',
      changeRuleInUnusedList: 'change_rule_in_unused_list',
      changeRuleOutUnusedList: 'change_rule_out_unused_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueChangeRuleOutUnusedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue extends $tea.Model {
  baggageAmount?: number;
  baggageWeight?: number;
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  carryOnAmount?: number;
  carryOnWeight?: number;
  carryOnWeightUnit?: string;
  isAllCarryOnWeight?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      carryOnAmount: 'carry_on_amount',
      carryOnWeight: 'carry_on_weight',
      carryOnWeightUnit: 'carry_on_weight_unit',
      isAllCarryOnWeight: 'is_all_carry_on_weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      carryOnAmount: 'number',
      carryOnWeight: 'number',
      carryOnWeightUnit: 'string',
      isAllCarryOnWeight: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue extends $tea.Model {
  refundRuleAllUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  refundRulePartUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  changeRuleInUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  changeRuleOutUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList[];
  static names(): { [key: string]: string } {
    return {
      refundRuleAllUnusedList: 'refund_rule_all_unused_list',
      refundRulePartUnusedList: 'refund_rule_part_unused_list',
      changeRuleInUnusedList: 'change_rule_in_unused_list',
      changeRuleOutUnusedList: 'change_rule_out_unused_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListRequest extends $tea.Model {
  dayNum?: number;
  pageIndex?: number;
  pageSize?: number;
  utcBeginTime?: number;
  static names(): { [key: string]: string } {
    return {
      dayNum: 'day_num',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      utcBeginTime: 'utc_begin_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayNum: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      utcBeginTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponseBody extends $tea.Model {
  requestId?: string;
  data?: AccountFlowListResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AccountFlowListResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AccountFlowListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AccountFlowListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestRequest extends $tea.Model {
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBody extends $tea.Model {
  requestId?: string;
  data?: AncillarySuggestResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AncillarySuggestResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AncillarySuggestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AncillarySuggestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequest extends $tea.Model {
  contact?: BookRequestContact;
  outOrderNum?: string;
  passengerAncillaryPurchaseMapList?: BookRequestPassengerAncillaryPurchaseMapList[];
  passengerList?: BookRequestPassengerList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      outOrderNum: 'out_order_num',
      passengerAncillaryPurchaseMapList: 'passenger_ancillary_purchase_map_list',
      passengerList: 'passenger_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: BookRequestContact,
      outOrderNum: 'string',
      passengerAncillaryPurchaseMapList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapList },
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookShrinkRequest extends $tea.Model {
  contactShrink?: string;
  outOrderNum?: string;
  passengerAncillaryPurchaseMapListShrink?: string;
  passengerListShrink?: string;
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactShrink: 'contact',
      outOrderNum: 'out_order_num',
      passengerAncillaryPurchaseMapListShrink: 'passenger_ancillary_purchase_map_list',
      passengerListShrink: 'passenger_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactShrink: 'string',
      outOrderNum: 'string',
      passengerAncillaryPurchaseMapListShrink: 'string',
      passengerListShrink: 'string',
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBody extends $tea.Model {
  requestId?: string;
  data?: BookResponseBodyData;
  errorCode?: string;
  errorData?: BookResponseBodyErrorData;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BookResponseBodyData,
      errorCode: 'string',
      errorData: BookResponseBodyErrorData,
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BookResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRequest extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResponseBody extends $tea.Model {
  requestId?: string;
  data?: CancelResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CancelResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequest extends $tea.Model {
  changePassengerList?: ChangeApplyRequestChangePassengerList[];
  changedJourneys?: ChangeApplyRequestChangedJourneys[];
  contact?: ChangeApplyRequestContact;
  orderNum?: number;
  remark?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      changePassengerList: 'change_passenger_list',
      changedJourneys: 'changed_journeys',
      contact: 'contact',
      orderNum: 'order_num',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePassengerList: { 'type': 'array', 'itemType': ChangeApplyRequestChangePassengerList },
      changedJourneys: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneys },
      contact: ChangeApplyRequestContact,
      orderNum: 'number',
      remark: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyShrinkRequest extends $tea.Model {
  changePassengerListShrink?: string;
  changedJourneysShrink?: string;
  contactShrink?: string;
  orderNum?: number;
  remark?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      changePassengerListShrink: 'change_passenger_list',
      changedJourneysShrink: 'changed_journeys',
      contactShrink: 'contact',
      orderNum: 'order_num',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePassengerListShrink: 'string',
      changedJourneysShrink: 'string',
      contactShrink: 'string',
      orderNum: 'number',
      remark: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeApplyResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeApplyResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeApplyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCancelHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCancelRequest extends $tea.Model {
  changeOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCancelResponseBody extends $tea.Model {
  requestId?: string;
  data?: any;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'any',
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCancelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeCancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmRequest extends $tea.Model {
  changeOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeConfirmResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeConfirmResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeConfirmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeConfirmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailRequest extends $tea.Model {
  changeOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeDetailResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeDetailResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerRequest extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  utcCreateBegin?: number;
  utcCreateEnd?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'page_index',
      pageSize: 'page_size',
      utcCreateBegin: 'utc_create_begin',
      utcCreateEnd: 'utc_create_end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      utcCreateBegin: 'number',
      utcCreateEnd: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeDetailListOfBuyerResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeDetailListOfBuyerResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeDetailListOfBuyerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeDetailListOfBuyerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumRequest extends $tea.Model {
  orderNum?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      pageIndex: 'page_index',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBody extends $tea.Model {
  requestId?: string;
  data?: ChangeDetailListOfOrderNumResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeDetailListOfOrderNumResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeDetailListOfOrderNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeDetailListOfOrderNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequest extends $tea.Model {
  adults?: number;
  cabinClass?: string;
  children?: number;
  infants?: number;
  journeyParamList?: EnrichRequestJourneyParamList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      journeyParamList: 'journey_param_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      journeyParamList: { 'type': 'array', 'itemType': EnrichRequestJourneyParamList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichShrinkRequest extends $tea.Model {
  adults?: number;
  cabinClass?: string;
  children?: number;
  infants?: number;
  journeyParamListShrink?: string;
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      journeyParamListShrink: 'journey_param_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      journeyParamListShrink: 'string',
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBody extends $tea.Model {
  requestId?: string;
  data?: EnrichResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: EnrichResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnrichResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnrichResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUploadHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUploadRequest extends $tea.Model {
  fileContent?: string;
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'file_content',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUploadResponseBody extends $tea.Model {
  requestId?: string;
  data?: FileUploadResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: FileUploadResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FileUploadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FileUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderRequest extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponseBody extends $tea.Model {
  requestId?: string;
  data?: FlightChangeOfOrderResponseBodyData[];
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': FlightChangeOfOrderResponseBodyData },
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlightChangeOfOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FlightChangeOfOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  appKey?: string;
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'app_key',
      appSecret: 'app_secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetTokenResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetTokenResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectRequest extends $tea.Model {
  flightSegmentParamList?: LuggageDirectRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': LuggageDirectRequestFlightSegmentParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectShrinkRequest extends $tea.Model {
  flightSegmentParamListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamListShrink: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectResponseBody extends $tea.Model {
  requestId?: string;
  data?: LuggageDirectResponseBodyData[];
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': LuggageDirectResponseBodyData },
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LuggageDirectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LuggageDirectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailRequest extends $tea.Model {
  orderNum?: number;
  outOrderNum?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      outOrderNum: 'out_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      outOrderNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: OrderDetailResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OrderDetailResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListRequest extends $tea.Model {
  bookTimeEnd?: number;
  bookTimeStart?: number;
  pageIndex?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bookTimeEnd: 'book_time_end',
      bookTimeStart: 'book_time_start',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTimeEnd: 'number',
      bookTimeStart: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OrderListResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OrderListResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingRequest extends $tea.Model {
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBody extends $tea.Model {
  requestId?: string;
  data?: PricingResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: PricingResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PricingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PricingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequest extends $tea.Model {
  orderNum?: number;
  refundJourneys?: RefundApplyRequestRefundJourneys[];
  refundPassengerList?: RefundApplyRequestRefundPassengerList[];
  refundType?: RefundApplyRequestRefundType;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundJourneys: 'refund_journeys',
      refundPassengerList: 'refund_passenger_list',
      refundType: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundJourneys: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneys },
      refundPassengerList: { 'type': 'array', 'itemType': RefundApplyRequestRefundPassengerList },
      refundType: RefundApplyRequestRefundType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyShrinkRequest extends $tea.Model {
  orderNum?: number;
  refundJourneysShrink?: string;
  refundPassengerListShrink?: string;
  refundTypeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundJourneysShrink: 'refund_journeys',
      refundPassengerListShrink: 'refund_passenger_list',
      refundTypeShrink: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundJourneysShrink: 'string',
      refundPassengerListShrink: 'string',
      refundTypeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBody extends $tea.Model {
  requestId?: string;
  data?: RefundApplyResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RefundApplyResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundApplyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailRequest extends $tea.Model {
  refundOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      refundOrderNum: 'refund_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundOrderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: RefundDetailResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RefundDetailResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListRequest extends $tea.Model {
  orderNum?: number;
  pageIndex?: number;
  pageSize?: number;
  refundCreateBeginTime?: number;
  refundCreateEndTime?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      refundCreateBeginTime: 'refund_create_begin_time',
      refundCreateEndTime: 'refund_create_end_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      refundCreateBeginTime: 'number',
      refundCreateEndTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBody extends $tea.Model {
  requestId?: string;
  data?: RefundDetailListResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: RefundDetailListResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefundDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRequest extends $tea.Model {
  adults?: number;
  airLegs?: SearchRequestAirLegs[];
  cabinClass?: string;
  children?: number;
  infants?: number;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegs: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegs: { 'type': 'array', 'itemType': SearchRequestAirLegs },
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShrinkRequest extends $tea.Model {
  adults?: number;
  airLegsShrink?: string;
  cabinClass?: string;
  children?: number;
  infants?: number;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegsShrink: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegsShrink: 'string',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBody extends $tea.Model {
  requestId?: string;
  data?: SearchResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SearchResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingRequest extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingResponseBody extends $tea.Model {
  requestId?: string;
  data?: TicketingResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TicketingResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TicketingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingCheckHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingCheckRequest extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingCheckResponseBody extends $tea.Model {
  requestId?: string;
  data?: TicketingCheckResponseBodyData;
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: TicketingCheckResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TicketingCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TicketingCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAirticketAccessToken?: string;
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'x-acs-airticket-access-token',
      xAcsAirticketLanguage: 'x-acs-airticket-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaRequest extends $tea.Model {
  flightSegmentParamList?: TransitVisaRequestFlightSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamList: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamList: { 'type': 'array', 'itemType': TransitVisaRequestFlightSegmentParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaShrinkRequest extends $tea.Model {
  flightSegmentParamListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      flightSegmentParamListShrink: 'flight_segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightSegmentParamListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaResponseBody extends $tea.Model {
  requestId?: string;
  data?: TransitVisaResponseBodyData[];
  errorCode?: string;
  errorData?: any;
  errorMsg?: string;
  status?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': TransitVisaResponseBodyData },
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransitVisaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransitVisaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRefundChangeRuleMapValueRefundRuleAllUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRefundChangeRuleMapValueRefundRulePartUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRefundChangeRuleMapValueChangeRuleInUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataRefundChangeRuleMapValueChangeRuleOutUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canRefund?: boolean;
  refundFee?: number;
  canReturnAllTax?: boolean;
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList extends $tea.Model {
  type?: number;
  timeUnit?: string;
  ruleStartTime?: number;
  ruleEndTime?: number;
  canChange?: boolean;
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponseBodyDataList extends $tea.Model {
  afterAvailableAmount?: number;
  beforeAvailableAmount?: number;
  changeOrderNum?: number;
  flowId?: number;
  gmtCreate?: number;
  gmtModified?: number;
  opAmount?: number;
  opType?: number;
  orderNum?: number;
  orderType?: number;
  outOrderNum?: string;
  refundOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      afterAvailableAmount: 'after_available_amount',
      beforeAvailableAmount: 'before_available_amount',
      changeOrderNum: 'change_order_num',
      flowId: 'flow_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      opAmount: 'op_amount',
      opType: 'op_type',
      orderNum: 'order_num',
      orderType: 'order_type',
      outOrderNum: 'out_order_num',
      refundOrderNum: 'refund_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAvailableAmount: 'number',
      beforeAvailableAmount: 'number',
      changeOrderNum: 'number',
      flowId: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      opAmount: 'number',
      opType: 'number',
      orderNum: 'number',
      orderType: 'number',
      outOrderNum: 'string',
      refundOrderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponseBodyDataPagination extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccountFlowListResponseBodyData extends $tea.Model {
  list?: AccountFlowListResponseBodyDataList[];
  pagination?: AccountFlowListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AccountFlowListResponseBodyDataList },
      pagination: AccountFlowListResponseBodyDataPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary extends $tea.Model {
  baggageAmount?: number;
  baggageWeight?: number;
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary extends $tea.Model {
  ancillaryId?: string;
  ancillaryType?: number;
  baggageAncillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
      baggageAncillary: 'baggage_ancillary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
      baggageAncillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyDataSegAncillaryMapList extends $tea.Model {
  ancillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyData extends $tea.Model {
  segAncillaryMapList?: AncillarySuggestResponseBodyDataSegAncillaryMapList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      segAncillaryMapList: 'seg_ancillary_map_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segAncillaryMapList: { 'type': 'array', 'itemType': AncillarySuggestResponseBodyDataSegAncillaryMapList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestContact extends $tea.Model {
  email?: string;
  firstName?: string;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      firstName: 'first_name',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem extends $tea.Model {
  ancillaryId?: string;
  ancillaryType?: number;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListPassengerList extends $tea.Model {
  birthday?: string;
  credential?: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapList extends $tea.Model {
  bookAncillaryReqItem?: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem;
  passengerList?: BookRequestPassengerAncillaryPurchaseMapListPassengerList[];
  static names(): { [key: string]: string } {
    return {
      bookAncillaryReqItem: 'book_ancillary_req_item',
      passengerList: 'passenger_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookAncillaryReqItem: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem,
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapListPassengerList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerListCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerList extends $tea.Model {
  birthday?: string;
  credential?: BookRequestPassengerListCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: BookRequestPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyDataOrderList extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyData extends $tea.Model {
  orderList?: BookResponseBodyDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyDataOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorDataOrderList extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponseBodyErrorData extends $tea.Model {
  orderList?: BookResponseBodyErrorDataOrderList[];
  static names(): { [key: string]: string } {
    return {
      orderList: 'order_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderList: { 'type': 'array', 'itemType': BookResponseBodyErrorDataOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResponseBodyData extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestChangePassengerList extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestChangedJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arriveTerminal?: string;
  arriveTime?: number;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureDate?: string;
  departureTerminal?: string;
  departureTime?: number;
  marketingFlightNo?: string;
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arriveTerminal: 'arrive_terminal',
      arriveTime: 'arrive_time',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      marketingFlightNo: 'marketing_flight_no',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arriveTerminal: 'string',
      arriveTime: 'number',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      marketingFlightNo: 'string',
      operatingFlightNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestChangedJourneys extends $tea.Model {
  segmentList?: ChangeApplyRequestChangedJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneysSegmentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestContact extends $tea.Model {
  email?: string;
  mobileCountryCode?: string;
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBodyDataChangeOrdersPassengers extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBodyDataChangeOrders extends $tea.Model {
  changeOrderNum?: number;
  changeOrderStatus?: number;
  failReason?: string;
  passengers?: ChangeApplyResponseBodyDataChangeOrdersPassengers[];
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
      changeOrderStatus: 'change_order_status',
      failReason: 'fail_reason',
      passengers: 'passengers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
      changeOrderStatus: 'number',
      failReason: 'string',
      passengers: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrdersPassengers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyResponseBodyData extends $tea.Model {
  changeOrders?: ChangeApplyResponseBodyDataChangeOrders[];
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrders: 'change_orders',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrders: { 'type': 'array', 'itemType': ChangeApplyResponseBodyDataChangeOrders },
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmResponseBodyData extends $tea.Model {
  payAmount?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      payAmount: 'pay_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payAmount: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee extends $tea.Model {
  serviceFee?: number;
  taxFee?: number;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      serviceFee: 'service_fee',
      taxFee: 'tax_fee',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceFee: 'number',
      taxFee: 'number',
      upgradeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangeFeeDetailsPassenger extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangeFeeDetails extends $tea.Model {
  changeFee?: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee;
  passenger?: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee,
      passenger: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangePassengers extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangedJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataChangedJourneys extends $tea.Model {
  segmentList?: ChangeDetailResponseBodyDataChangedJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangedJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataContact extends $tea.Model {
  email?: string;
  mobileCountryCode?: string;
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataLastJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataLastJourneys extends $tea.Model {
  segmentList?: ChangeDetailResponseBodyDataLastJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataLastJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataOriginalJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyDataOriginalJourneys extends $tea.Model {
  segmentList?: ChangeDetailResponseBodyDataOriginalJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataOriginalJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailResponseBodyData extends $tea.Model {
  changeFeeDetails?: ChangeDetailResponseBodyDataChangeFeeDetails[];
  changeOrderNum?: number;
  changePassengers?: ChangeDetailResponseBodyDataChangePassengers[];
  changeReasonType?: number;
  changedJourneys?: ChangeDetailResponseBodyDataChangedJourneys[];
  closeReason?: string;
  closeUtcTime?: number;
  contact?: ChangeDetailResponseBodyDataContact;
  createUtcTime?: number;
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailResponseBodyDataLastJourneys[];
  orderNum?: number;
  orderStatus?: number;
  originalJourneys?: ChangeDetailResponseBodyDataOriginalJourneys[];
  payStatus?: number;
  paySuccessUtcTime?: number;
  totalAmount?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeFeeDetails: 'change_fee_details',
      changeOrderNum: 'change_order_num',
      changePassengers: 'change_passengers',
      changeReasonType: 'change_reason_type',
      changedJourneys: 'changed_journeys',
      closeReason: 'close_reason',
      closeUtcTime: 'close_utc_time',
      contact: 'contact',
      createUtcTime: 'create_utc_time',
      lastConfirmUtcTime: 'last_confirm_utc_time',
      lastJourneys: 'last_journeys',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      originalJourneys: 'original_journeys',
      payStatus: 'pay_status',
      paySuccessUtcTime: 'pay_success_utc_time',
      totalAmount: 'total_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFeeDetails: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangeFeeDetails },
      changeOrderNum: 'number',
      changePassengers: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangePassengers },
      changeReasonType: 'number',
      changedJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangedJourneys },
      closeReason: 'string',
      closeUtcTime: 'number',
      contact: ChangeDetailResponseBodyDataContact,
      createUtcTime: 'number',
      lastConfirmUtcTime: 'number',
      lastJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataLastJourneys },
      orderNum: 'number',
      orderStatus: 'number',
      originalJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataOriginalJourneys },
      payStatus: 'number',
      paySuccessUtcTime: 'number',
      totalAmount: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerResponseBodyDataList extends $tea.Model {
  changeOrderNum?: number;
  orderNum?: number;
  orderStatus?: number;
  payStatus?: number;
  transactionNo?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      payStatus: 'pay_status',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
      orderNum: 'number',
      orderStatus: 'number',
      payStatus: 'number',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerResponseBodyDataPagination extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfBuyerResponseBodyData extends $tea.Model {
  list?: ChangeDetailListOfBuyerResponseBodyDataList[];
  pagination?: ChangeDetailListOfBuyerResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ChangeDetailListOfBuyerResponseBodyDataList },
      pagination: ChangeDetailListOfBuyerResponseBodyDataPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee extends $tea.Model {
  serviceFee?: number;
  taxFee?: number;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      serviceFee: 'service_fee',
      taxFee: 'tax_fee',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceFee: 'number',
      taxFee: 'number',
      upgradeFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails extends $tea.Model {
  changeFee?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee;
  passenger?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee,
      passenger: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys extends $tea.Model {
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListContact extends $tea.Model {
  email?: string;
  mobileCountryCode?: string;
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys extends $tea.Model {
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys extends $tea.Model {
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataList extends $tea.Model {
  changeFeeDetails?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails[];
  changeOrderNum?: number;
  changePassengers?: ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers[];
  changeReasonType?: number;
  changedJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys[];
  closeReason?: string;
  closeUtcTime?: number;
  contact?: ChangeDetailListOfOrderNumResponseBodyDataListContact;
  createUtcTime?: number;
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys[];
  orderNum?: number;
  orderStatus?: number;
  originalJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys[];
  payStatus?: number;
  paySuccessUtcTime?: number;
  totalAmount?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeFeeDetails: 'change_fee_details',
      changeOrderNum: 'change_order_num',
      changePassengers: 'change_passengers',
      changeReasonType: 'change_reason_type',
      changedJourneys: 'changed_journeys',
      closeReason: 'close_reason',
      closeUtcTime: 'close_utc_time',
      contact: 'contact',
      createUtcTime: 'create_utc_time',
      lastConfirmUtcTime: 'last_confirm_utc_time',
      lastJourneys: 'last_journeys',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      originalJourneys: 'original_journeys',
      payStatus: 'pay_status',
      paySuccessUtcTime: 'pay_success_utc_time',
      totalAmount: 'total_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFeeDetails: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails },
      changeOrderNum: 'number',
      changePassengers: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers },
      changeReasonType: 'number',
      changedJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys },
      closeReason: 'string',
      closeUtcTime: 'number',
      contact: ChangeDetailListOfOrderNumResponseBodyDataListContact,
      createUtcTime: 'number',
      lastConfirmUtcTime: 'number',
      lastJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys },
      orderNum: 'number',
      orderStatus: 'number',
      originalJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys },
      payStatus: 'number',
      paySuccessUtcTime: 'number',
      totalAmount: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataPagination extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyData extends $tea.Model {
  list?: ChangeDetailListOfOrderNumResponseBodyDataList[];
  pagination?: ChangeDetailListOfOrderNumResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataList },
      pagination: ChangeDetailListOfOrderNumResponseBodyDataPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequestJourneyParamListSegmentParamList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  cabin?: string;
  childCabin?: string;
  departureAirport?: string;
  departureCity?: string;
  departureTime?: string;
  marketingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      cabin: 'cabin',
      childCabin: 'child_cabin',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTime: 'departure_time',
      marketingFlightNo: 'marketing_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      cabin: 'string',
      childCabin: 'string',
      departureAirport: 'string',
      departureCity: 'string',
      departureTime: 'string',
      marketingFlightNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequestJourneyParamList extends $tea.Model {
  arrivalCity?: string;
  departureCity?: string;
  departureDate?: string;
  segmentParamList?: EnrichRequestJourneyParamListSegmentParamList[];
  static names(): { [key: string]: string } {
    return {
      arrivalCity: 'arrival_city',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      segmentParamList: 'segment_param_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalCity: 'string',
      departureCity: 'string',
      departureDate: 'string',
      segmentParamList: { 'type': 'array', 'itemType': EnrichRequestJourneyParamListSegmentParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionListJourneyListSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionListJourneyList extends $tea.Model {
  segmentList?: EnrichResponseBodyDataSolutionListJourneyListSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListJourneyListSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $tea.Model {
  luggageDirectInfoType?: number;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionListSegmentBaggageMappingList extends $tea.Model {
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerBaggageAllowanceMapping: 'passenger_baggage_allowance_mapping',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerBaggageAllowanceMapping: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList extends $tea.Model {
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleMap: 'refund_change_rule_map',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionList extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  journeyList?: EnrichResponseBodyDataSolutionListJourneyList[];
  productTypeDescription?: string;
  refundTicketCouponDescription?: string;
  segmentBaggageCheckInInfoList?: EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  segmentBaggageMappingList?: EnrichResponseBodyDataSolutionListSegmentBaggageMappingList[];
  segmentRefundChangeRuleMappingList?: EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyData extends $tea.Model {
  solutionList?: EnrichResponseBodyDataSolutionList[];
  static names(): { [key: string]: string } {
    return {
      solutionList: 'solution_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUploadResponseBodyData extends $tea.Model {
  uploadedFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      uploadedFileUrl: 'uploaded_file_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uploadedFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponseBodyDataFlightChangeDetail extends $tea.Model {
  changeReason?: string;
  changeTime?: string;
  changeType?: number;
  newArrivalAirport?: string;
  newArrivalTime?: string;
  newDepartureAirport?: string;
  newDepartureTime?: string;
  newFlightNo?: string;
  oldArrivalAirport?: string;
  oldArrivalTime?: string;
  oldDepartureAirport?: string;
  oldDepartureTime?: string;
  oldFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeReason: 'change_reason',
      changeTime: 'change_time',
      changeType: 'change_type',
      newArrivalAirport: 'new_arrival_airport',
      newArrivalTime: 'new_arrival_time',
      newDepartureAirport: 'new_departure_airport',
      newDepartureTime: 'new_departure_time',
      newFlightNo: 'new_flight_no',
      oldArrivalAirport: 'old_arrival_airport',
      oldArrivalTime: 'old_arrival_time',
      oldDepartureAirport: 'old_departure_airport',
      oldDepartureTime: 'old_departure_time',
      oldFlightNo: 'old_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeReason: 'string',
      changeTime: 'string',
      changeType: 'number',
      newArrivalAirport: 'string',
      newArrivalTime: 'string',
      newDepartureAirport: 'string',
      newDepartureTime: 'string',
      newFlightNo: 'string',
      oldArrivalAirport: 'string',
      oldArrivalTime: 'string',
      oldDepartureAirport: 'string',
      oldDepartureTime: 'string',
      oldFlightNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightChangeOfOrderResponseBodyData extends $tea.Model {
  flightChangeDetail?: FlightChangeOfOrderResponseBodyDataFlightChangeDetail;
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      flightChangeDetail: 'flight_change_detail',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeDetail: FlightChangeOfOrderResponseBodyDataFlightChangeDetail,
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyData extends $tea.Model {
  expireTime?: number;
  generateTime?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expire_time',
      generateTime: 'generate_time',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      generateTime: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectRequestFlightSegmentParamList extends $tea.Model {
  arrivalAirport?: string;
  arrivalTerminal?: string;
  arrivalTime?: number;
  codeShare?: boolean;
  departureAirport?: string;
  departureTerminal?: string;
  departureTime?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  operatingAirline?: string;
  stopCityList?: string;
  ticketingAirline?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      operatingAirline: 'operating_airline',
      stopCityList: 'stop_city_list',
      ticketingAirline: 'ticketing_airline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'number',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      operatingAirline: 'string',
      stopCityList: 'string',
      ticketingAirline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LuggageDirectResponseBodyData extends $tea.Model {
  cityCode?: string;
  directType?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      directType: 'direct_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      directType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary extends $tea.Model {
  baggageAmount?: number;
  baggageWeight?: number;
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      price: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillary extends $tea.Model {
  ancillaryId?: string;
  ancillaryType?: number;
  baggageAncillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
      baggageAncillary: 'baggage_ancillary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
      baggageAncillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListPassenger extends $tea.Model {
  birthday?: string;
  credential?: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailList extends $tea.Model {
  ancillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary;
  passenger?: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      passenger: 'passenger',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary,
      passenger: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListFlightPrice extends $tea.Model {
  sellPrice?: number;
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      tax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation extends $tea.Model {
  cabin?: string;
  cabinClass?: string;
  cabinClassName?: string;
  cabinQuantity?: string;
  segmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinQuantity: 'cabin_quantity',
      segmentId: 'segment_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinQuantity: 'string',
      segmentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListPassenger extends $tea.Model {
  birthday?: string;
  credential?: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailList extends $tea.Model {
  bPnrList?: string[];
  cPnrList?: string[];
  flightPrice?: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice;
  flightSegmentCabinRelation?: OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation[];
  passenger?: OrderDetailResponseBodyDataFlightItemDetailListPassenger;
  ticketAirLine?: string;
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      bPnrList: 'b_pnr_list',
      cPnrList: 'c_pnr_list',
      flightPrice: 'flight_price',
      flightSegmentCabinRelation: 'flight_segment_cabin_relation',
      passenger: 'passenger',
      ticketAirLine: 'ticket_air_line',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bPnrList: { 'type': 'array', 'itemType': 'string' },
      cPnrList: { 'type': 'array', 'itemType': 'string' },
      flightPrice: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice,
      flightSegmentCabinRelation: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation },
      passenger: OrderDetailResponseBodyDataFlightItemDetailListPassenger,
      ticketAirLine: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataPassengerListCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataPassengerList extends $tea.Model {
  birthday?: string;
  credential?: OrderDetailResponseBodyDataPassengerListCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionJourneyListSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionJourneyList extends $tea.Model {
  segmentList?: OrderDetailResponseBodyDataSolutionJourneyListSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionJourneyListSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList extends $tea.Model {
  luggageDirectInfoType?: number;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList extends $tea.Model {
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerBaggageAllowanceMapping: 'passenger_baggage_allowance_mapping',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerBaggageAllowanceMapping: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList extends $tea.Model {
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleMap: 'refund_change_rule_map',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolution extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  journeyList?: OrderDetailResponseBodyDataSolutionJourneyList[];
  productTypeDescription?: string;
  refundTicketCouponDescription?: string;
  segmentBaggageCheckInInfoList?: OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  segmentBaggageMappingList?: OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList[];
  segmentRefundChangeRuleMappingList?: OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyData extends $tea.Model {
  ancillaryItemDetailList?: OrderDetailResponseBodyDataAncillaryItemDetailList[];
  baggageAllowanceMap?: { [key: string]: DataBaggageAllowanceMapValue };
  bookTime?: number;
  flightItemDetailList?: OrderDetailResponseBodyDataFlightItemDetailList[];
  orderNum?: number;
  orderStatus?: number;
  outOrderNum?: string;
  passengerList?: OrderDetailResponseBodyDataPassengerList[];
  payStatus?: number;
  payTime?: number;
  promotionPrice?: number;
  realPayPrice?: number;
  refundChangeRuleMap?: { [key: string]: DataRefundChangeRuleMapValue };
  sessionNick?: string;
  solution?: OrderDetailResponseBodyDataSolution;
  succeedTime?: number;
  totalPrice?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ancillaryItemDetailList: 'ancillary_item_detail_list',
      baggageAllowanceMap: 'baggage_allowance_map',
      bookTime: 'book_time',
      flightItemDetailList: 'flight_item_detail_list',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      refundChangeRuleMap: 'refund_change_rule_map',
      sessionNick: 'session_nick',
      solution: 'solution',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataAncillaryItemDetailList },
      baggageAllowanceMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataBaggageAllowanceMapValue },
      bookTime: 'number',
      flightItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailList },
      orderNum: 'number',
      orderStatus: 'number',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataPassengerList },
      payStatus: 'number',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataRefundChangeRuleMapValue },
      sessionNick: 'string',
      solution: OrderDetailResponseBodyDataSolution,
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataListPassengerListCredential extends $tea.Model {
  certIssuePlace?: string;
  credentialNum?: string;
  credentialType?: number;
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataListPassengerList extends $tea.Model {
  birthday?: string;
  credential?: OrderListResponseBodyDataListPassengerListCredential;
  firstName?: string;
  gender?: number;
  lastName?: string;
  mobileCountryCode?: string;
  mobilePhoneNumber?: string;
  nationality?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderListResponseBodyDataListPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataList extends $tea.Model {
  bookTime?: number;
  orderNum?: number;
  orderStatus?: string;
  outOrderNum?: string;
  passengerList?: OrderListResponseBodyDataListPassengerList[];
  payStatus?: string;
  payTime?: number;
  promotionPrice?: number;
  realPayPrice?: number;
  sessionNick?: string;
  succeedTime?: number;
  totalPrice?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      bookTime: 'book_time',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      sessionNick: 'session_nick',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTime: 'number',
      orderNum: 'number',
      orderStatus: 'string',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderListResponseBodyDataListPassengerList },
      payStatus: 'string',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      sessionNick: 'string',
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyDataPagination extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderListResponseBodyData extends $tea.Model {
  list?: OrderListResponseBodyDataList[];
  pagination?: OrderListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': OrderListResponseBodyDataList },
      pagination: OrderListResponseBodyDataPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataChangedPriceInfo extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataOriginalPriceInfo extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionJourneyListSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionJourneyList extends $tea.Model {
  segmentList?: PricingResponseBodyDataSolutionJourneyListSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionJourneyListSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList extends $tea.Model {
  luggageDirectInfoType?: number;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionSegmentBaggageMappingList extends $tea.Model {
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerBaggageAllowanceMapping: 'passenger_baggage_allowance_mapping',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerBaggageAllowanceMapping: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList extends $tea.Model {
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleMap: 'refund_change_rule_map',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolution extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  journeyList?: PricingResponseBodyDataSolutionJourneyList[];
  productTypeDescription?: string;
  refundTicketCouponDescription?: string;
  segmentBaggageCheckInInfoList?: PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  segmentBaggageMappingList?: PricingResponseBodyDataSolutionSegmentBaggageMappingList[];
  segmentRefundChangeRuleMappingList?: PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyData extends $tea.Model {
  changedPriceInfo?: PricingResponseBodyDataChangedPriceInfo;
  isChanged?: boolean;
  originalPriceInfo?: PricingResponseBodyDataOriginalPriceInfo;
  remainSeats?: string;
  solution?: PricingResponseBodyDataSolution;
  static names(): { [key: string]: string } {
    return {
      changedPriceInfo: 'changed_price_info',
      isChanged: 'is_changed',
      originalPriceInfo: 'original_price_info',
      remainSeats: 'remain_seats',
      solution: 'solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedPriceInfo: PricingResponseBodyDataChangedPriceInfo,
      isChanged: 'boolean',
      originalPriceInfo: PricingResponseBodyDataOriginalPriceInfo,
      remainSeats: 'string',
      solution: PricingResponseBodyDataSolution,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  departureAirport?: string;
  departureCity?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      departureAirport: 'string',
      departureCity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundJourneys extends $tea.Model {
  segmentList?: RefundApplyRequestRefundJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneysSegmentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundPassengerList extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyRequestRefundType extends $tea.Model {
  file?: string[];
  refundTypeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      file: 'file',
      refundTypeId: 'refund_type_id',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: { 'type': 'array', 'itemType': 'string' },
      refundTypeId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBodyDataRefundResultsRefundPassengers extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBodyDataRefundResults extends $tea.Model {
  failReason?: string;
  refundOrderNum?: number;
  refundPassengers?: RefundApplyResponseBodyDataRefundResultsRefundPassengers[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      failReason: 'fail_reason',
      refundOrderNum: 'refund_order_num',
      refundPassengers: 'refund_passengers',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      refundOrderNum: 'number',
      refundPassengers: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResultsRefundPassengers },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBodyData extends $tea.Model {
  orderNum?: number;
  refundResults?: RefundApplyResponseBodyDataRefundResults[];
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundResults: 'refund_results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundResults: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails extends $tea.Model {
  changeOrderRefundFee?: number;
  originalOrderRefundFee?: number;
  passenger?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeOrderRefundFee: 'change_order_refund_fee',
      originalOrderRefundFee: 'original_order_refund_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderRefundFee: 'number',
      originalOrderRefundFee: 'number',
      passenger: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataMultiRefundDetails extends $tea.Model {
  multiRefundOrderNum?: number;
  multiRefundTransactionNo?: string;
  passengerMultiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails[];
  static names(): { [key: string]: string } {
    return {
      multiRefundOrderNum: 'multi_refund_order_num',
      multiRefundTransactionNo: 'multi_refund_transaction_no',
      passengerMultiRefundDetails: 'passenger_multi_refund_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRefundOrderNum: 'number',
      multiRefundTransactionNo: 'string',
      passengerMultiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetailsPassenger extends $tea.Model {
  document?: string;
  firstName?: string;
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee extends $tea.Model {
  alreadyUsedTotalFee?: number;
  modifyRefundToBuyerMoney?: number;
  nonRefundableChangeServiceFee?: number;
  nonRefundableChangeUpgradeFee?: number;
  nonRefundableTaxFee?: number;
  nonRefundableTicketFee?: number;
  refundToBuyerMoney?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyUsedTotalFee: 'already_used_total_fee',
      modifyRefundToBuyerMoney: 'modify_refund_to_buyer_money',
      nonRefundableChangeServiceFee: 'non_refundable_change_service_fee',
      nonRefundableChangeUpgradeFee: 'non_refundable_change_upgrade_fee',
      nonRefundableTaxFee: 'non_refundable_tax_fee',
      nonRefundableTicketFee: 'non_refundable_ticket_fee',
      refundToBuyerMoney: 'refund_to_buyer_money',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUsedTotalFee: 'number',
      modifyRefundToBuyerMoney: 'number',
      nonRefundableChangeServiceFee: 'number',
      nonRefundableChangeUpgradeFee: 'number',
      nonRefundableTaxFee: 'number',
      nonRefundableTicketFee: 'number',
      refundToBuyerMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataPassengerRefundDetails extends $tea.Model {
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  refundFee?: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee;
  static names(): { [key: string]: string } {
    return {
      passenger: 'passenger',
      refundFee: 'refund_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passenger: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger,
      refundFee: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataRefundJourneysSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyDataRefundJourneys extends $tea.Model {
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneysSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailResponseBodyData extends $tea.Model {
  containMultiRefund?: boolean;
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  orderNum?: number;
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  paySuccessUtcTime?: number;
  refundAttachmentUrls?: string[];
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  refundOrderNum?: number;
  refundReason?: string;
  refundType?: number;
  refuseReason?: string;
  status?: number;
  transactionNo?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      containMultiRefund: 'contain_multi_refund',
      multiRefundDetails: 'multi_refund_details',
      orderNum: 'order_num',
      passengerRefundDetails: 'passenger_refund_details',
      paySuccessUtcTime: 'pay_success_utc_time',
      refundAttachmentUrls: 'refund_attachment_urls',
      refundJourneys: 'refund_journeys',
      refundOrderNum: 'refund_order_num',
      refundReason: 'refund_reason',
      refundType: 'refund_type',
      refuseReason: 'refuse_reason',
      status: 'status',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containMultiRefund: 'boolean',
      multiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetails },
      orderNum: 'number',
      passengerRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataPassengerRefundDetails },
      paySuccessUtcTime: 'number',
      refundAttachmentUrls: { 'type': 'array', 'itemType': 'string' },
      refundJourneys: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneys },
      refundOrderNum: 'number',
      refundReason: 'string',
      refundType: 'number',
      refuseReason: 'string',
      status: 'number',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBodyDataList extends $tea.Model {
  isMultiRefund?: boolean;
  orderNum?: number;
  refundOrderNum?: number;
  refundOrderStatus?: number;
  relatedRefundOrderNum?: string;
  transactionNo?: string;
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      isMultiRefund: 'is_multi_refund',
      orderNum: 'order_num',
      refundOrderNum: 'refund_order_num',
      refundOrderStatus: 'refund_order_status',
      relatedRefundOrderNum: 'related_refund_order_num',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMultiRefund: 'boolean',
      orderNum: 'number',
      refundOrderNum: 'number',
      refundOrderStatus: 'number',
      relatedRefundOrderNum: 'string',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBodyDataPagination extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundDetailListResponseBodyData extends $tea.Model {
  list?: RefundDetailListResponseBodyDataList[];
  pagination?: RefundDetailListResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': RefundDetailListResponseBodyDataList },
      pagination: RefundDetailListResponseBodyDataPagination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRequestAirLegs extends $tea.Model {
  arrivalAirportList?: string[];
  arrivalCity?: string;
  departureAirportList?: string[];
  departureCity?: string;
  departureDate?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirportList: 'arrival_airport_list',
      arrivalCity: 'arrival_city',
      departureAirportList: 'departure_airport_list',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirportList: { 'type': 'array', 'itemType': 'string' },
      arrivalCity: 'string',
      departureAirportList: { 'type': 'array', 'itemType': 'string' },
      departureCity: 'string',
      departureDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListJourneyListSegmentList extends $tea.Model {
  arrivalAirport?: string;
  arrivalCity?: string;
  arrivalTerminal?: string;
  arrivalTime?: string;
  availability?: string;
  cabin?: string;
  cabinClass?: string;
  codeShare?: boolean;
  departureAirport?: string;
  departureCity?: string;
  departureTerminal?: string;
  departureTime?: string;
  equipType?: string;
  flightDuration?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  marketingFlightNoInt?: number;
  operatingAirline?: string;
  operatingFlightNo?: string;
  segmentId?: string;
  stopCityList?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListJourneyList extends $tea.Model {
  segmentList?: SearchResponseBodyDataSolutionListJourneyListSegmentList[];
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListJourneyListSegmentList },
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $tea.Model {
  luggageDirectInfoType?: number;
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentBaggageMappingList extends $tea.Model {
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerBaggageAllowanceMapping: 'passenger_baggage_allowance_mapping',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerBaggageAllowanceMapping: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList extends $tea.Model {
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleMap: 'refund_change_rule_map',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionList extends $tea.Model {
  adultPrice?: number;
  adultTax?: number;
  childPrice?: number;
  childTax?: number;
  infantPrice?: number;
  infantTax?: number;
  journeyList?: SearchResponseBodyDataSolutionListJourneyList[];
  productTypeDescription?: string;
  refundTicketCouponDescription?: string;
  segmentBaggageCheckInInfoList?: SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  segmentBaggageMappingList?: SearchResponseBodyDataSolutionListSegmentBaggageMappingList[];
  segmentRefundChangeRuleMappingList?: SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyData extends $tea.Model {
  solutionList?: SearchResponseBodyDataSolutionList[];
  static names(): { [key: string]: string } {
    return {
      solutionList: 'solution_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingResponseBodyData extends $tea.Model {
  orderNum?: number;
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      transactionNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketingCheckResponseBodyData extends $tea.Model {
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaRequestFlightSegmentParamList extends $tea.Model {
  arrivalAirport?: string;
  arrivalTerminal?: string;
  arrivalTime?: number;
  codeShare?: boolean;
  departureAirport?: string;
  departureTerminal?: string;
  departureTime?: number;
  marketingAirline?: string;
  marketingFlightNo?: string;
  operatingAirline?: string;
  stopCityList?: string;
  ticketingAirline?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      operatingAirline: 'operating_airline',
      stopCityList: 'stop_city_list',
      ticketingAirline: 'ticketing_airline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'number',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      operatingAirline: 'string',
      stopCityList: 'string',
      ticketingAirline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitVisaResponseBodyData extends $tea.Model {
  cityCode?: string;
  visaType?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      visaType: 'visa_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      visaType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("airticketopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async accountFlowListWithOptions(request: AccountFlowListRequest, headers: AccountFlowListHeaders, runtime: $Util.RuntimeOptions): Promise<AccountFlowListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dayNum)) {
      query["day_num"] = request.dayNum;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.utcBeginTime)) {
      query["utc_begin_time"] = request.utcBeginTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AccountFlowList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/account/flow-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AccountFlowListResponse>(await this.callApi(params, req, runtime), new AccountFlowListResponse({}));
  }

  async accountFlowList(request: AccountFlowListRequest): Promise<AccountFlowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AccountFlowListHeaders({ });
    return await this.accountFlowListWithOptions(request, headers, runtime);
  }

  async ancillarySuggestWithOptions(request: AncillarySuggestRequest, headers: AncillarySuggestHeaders, runtime: $Util.RuntimeOptions): Promise<AncillarySuggestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AncillarySuggest",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/ancillary/action-suggest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AncillarySuggestResponse>(await this.callApi(params, req, runtime), new AncillarySuggestResponse({}));
  }

  async ancillarySuggest(request: AncillarySuggestRequest): Promise<AncillarySuggestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AncillarySuggestHeaders({ });
    return await this.ancillarySuggestWithOptions(request, headers, runtime);
  }

  async bookWithOptions(tmpReq: BookRequest, headers: BookHeaders, runtime: $Util.RuntimeOptions): Promise<BookResponse> {
    Util.validateModel(tmpReq);
    let request = new BookShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "contact", "json");
    }

    if (!Util.isUnset(tmpReq.passengerAncillaryPurchaseMapList)) {
      request.passengerAncillaryPurchaseMapListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerAncillaryPurchaseMapList, "passenger_ancillary_purchase_map_list", "json");
    }

    if (!Util.isUnset(tmpReq.passengerList)) {
      request.passengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerList, "passenger_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactShrink)) {
      body["contact"] = request.contactShrink;
    }

    if (!Util.isUnset(request.outOrderNum)) {
      body["out_order_num"] = request.outOrderNum;
    }

    if (!Util.isUnset(request.passengerAncillaryPurchaseMapListShrink)) {
      body["passenger_ancillary_purchase_map_list"] = request.passengerAncillaryPurchaseMapListShrink;
    }

    if (!Util.isUnset(request.passengerListShrink)) {
      body["passenger_list"] = request.passengerListShrink;
    }

    if (!Util.isUnset(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Book",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-book`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BookResponse>(await this.callApi(params, req, runtime), new BookResponse({}));
  }

  async book(request: BookRequest): Promise<BookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BookHeaders({ });
    return await this.bookWithOptions(request, headers, runtime);
  }

  async cancelWithOptions(request: CancelRequest, headers: CancelHeaders, runtime: $Util.RuntimeOptions): Promise<CancelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Cancel",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelResponse>(await this.callApi(params, req, runtime), new CancelResponse({}));
  }

  async cancel(request: CancelRequest): Promise<CancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelHeaders({ });
    return await this.cancelWithOptions(request, headers, runtime);
  }

  async changeApplyWithOptions(tmpReq: ChangeApplyRequest, headers: ChangeApplyHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeApplyResponse> {
    Util.validateModel(tmpReq);
    let request = new ChangeApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.changePassengerList)) {
      request.changePassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changePassengerList, "change_passenger_list", "json");
    }

    if (!Util.isUnset(tmpReq.changedJourneys)) {
      request.changedJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changedJourneys, "changed_journeys", "json");
    }

    if (!Util.isUnset(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "contact", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changePassengerListShrink)) {
      body["change_passenger_list"] = request.changePassengerListShrink;
    }

    if (!Util.isUnset(request.changedJourneysShrink)) {
      body["changed_journeys"] = request.changedJourneysShrink;
    }

    if (!Util.isUnset(request.contactShrink)) {
      body["contact"] = request.contactShrink;
    }

    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeApply",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeApplyResponse>(await this.callApi(params, req, runtime), new ChangeApplyResponse({}));
  }

  async changeApply(request: ChangeApplyRequest): Promise<ChangeApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeApplyHeaders({ });
    return await this.changeApplyWithOptions(request, headers, runtime);
  }

  async changeCancelWithOptions(request: ChangeCancelRequest, headers: ChangeCancelHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeCancelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderNum)) {
      body["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeCancel",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeCancelResponse>(await this.callApi(params, req, runtime), new ChangeCancelResponse({}));
  }

  async changeCancel(request: ChangeCancelRequest): Promise<ChangeCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeCancelHeaders({ });
    return await this.changeCancelWithOptions(request, headers, runtime);
  }

  async changeConfirmWithOptions(request: ChangeConfirmRequest, headers: ChangeConfirmHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeConfirmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderNum)) {
      body["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeConfirm",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeConfirmResponse>(await this.callApi(params, req, runtime), new ChangeConfirmResponse({}));
  }

  async changeConfirm(request: ChangeConfirmRequest): Promise<ChangeConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeConfirmHeaders({ });
    return await this.changeConfirmWithOptions(request, headers, runtime);
  }

  async changeDetailWithOptions(request: ChangeDetailRequest, headers: ChangeDetailHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.changeOrderNum)) {
      query["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeDetailResponse>(await this.callApi(params, req, runtime), new ChangeDetailResponse({}));
  }

  async changeDetail(request: ChangeDetailRequest): Promise<ChangeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailHeaders({ });
    return await this.changeDetailWithOptions(request, headers, runtime);
  }

  async changeDetailListOfBuyerWithOptions(request: ChangeDetailListOfBuyerRequest, headers: ChangeDetailListOfBuyerHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeDetailListOfBuyerResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.utcCreateBegin)) {
      query["utc_create_begin"] = request.utcCreateBegin;
    }

    if (!Util.isUnset(request.utcCreateEnd)) {
      query["utc_create_end"] = request.utcCreateEnd;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDetailListOfBuyer",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/buyer/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeDetailListOfBuyerResponse>(await this.callApi(params, req, runtime), new ChangeDetailListOfBuyerResponse({}));
  }

  async changeDetailListOfBuyer(request: ChangeDetailListOfBuyerRequest): Promise<ChangeDetailListOfBuyerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailListOfBuyerHeaders({ });
    return await this.changeDetailListOfBuyerWithOptions(request, headers, runtime);
  }

  async changeDetailListOfOrderNumWithOptions(request: ChangeDetailListOfOrderNumRequest, headers: ChangeDetailListOfOrderNumHeaders, runtime: $Util.RuntimeOptions): Promise<ChangeDetailListOfOrderNumResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDetailListOfOrderNum",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/order-num/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeDetailListOfOrderNumResponse>(await this.callApi(params, req, runtime), new ChangeDetailListOfOrderNumResponse({}));
  }

  async changeDetailListOfOrderNum(request: ChangeDetailListOfOrderNumRequest): Promise<ChangeDetailListOfOrderNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailListOfOrderNumHeaders({ });
    return await this.changeDetailListOfOrderNumWithOptions(request, headers, runtime);
  }

  async enrichWithOptions(tmpReq: EnrichRequest, headers: EnrichHeaders, runtime: $Util.RuntimeOptions): Promise<EnrichResponse> {
    Util.validateModel(tmpReq);
    let request = new EnrichShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.journeyParamList)) {
      request.journeyParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.journeyParamList, "journey_param_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.adults)) {
      body["adults"] = request.adults;
    }

    if (!Util.isUnset(request.cabinClass)) {
      body["cabin_class"] = request.cabinClass;
    }

    if (!Util.isUnset(request.children)) {
      body["children"] = request.children;
    }

    if (!Util.isUnset(request.infants)) {
      body["infants"] = request.infants;
    }

    if (!Util.isUnset(request.journeyParamListShrink)) {
      body["journey_param_list"] = request.journeyParamListShrink;
    }

    if (!Util.isUnset(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Enrich",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-enrich`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnrichResponse>(await this.callApi(params, req, runtime), new EnrichResponse({}));
  }

  async enrich(request: EnrichRequest): Promise<EnrichResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EnrichHeaders({ });
    return await this.enrichWithOptions(request, headers, runtime);
  }

  async fileUploadWithOptions(request: FileUploadRequest, headers: FileUploadHeaders, runtime: $Util.RuntimeOptions): Promise<FileUploadResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileContent)) {
      body["file_content"] = request.fileContent;
    }

    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FileUpload",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/attachment/action-upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FileUploadResponse>(await this.callApi(params, req, runtime), new FileUploadResponse({}));
  }

  async fileUpload(request: FileUploadRequest): Promise<FileUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FileUploadHeaders({ });
    return await this.fileUploadWithOptions(request, headers, runtime);
  }

  async flightChangeOfOrderWithOptions(request: FlightChangeOfOrderRequest, headers: FlightChangeOfOrderHeaders, runtime: $Util.RuntimeOptions): Promise<FlightChangeOfOrderResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlightChangeOfOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flightchange/of-order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FlightChangeOfOrderResponse>(await this.callApi(params, req, runtime), new FlightChangeOfOrderResponse({}));
  }

  async flightChangeOfOrder(request: FlightChangeOfOrderRequest): Promise<FlightChangeOfOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightChangeOfOrderHeaders({ });
    return await this.flightChangeOfOrderWithOptions(request, headers, runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      query["app_key"] = request.appKey;
    }

    if (!Util.isUnset(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  async luggageDirectWithOptions(tmpReq: LuggageDirectRequest, headers: LuggageDirectHeaders, runtime: $Util.RuntimeOptions): Promise<LuggageDirectResponse> {
    Util.validateModel(tmpReq);
    let request = new LuggageDirectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flightSegmentParamListShrink)) {
      body["flight_segment_param_list"] = request.flightSegmentParamListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LuggageDirect",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/luggage-direct`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LuggageDirectResponse>(await this.callApi(params, req, runtime), new LuggageDirectResponse({}));
  }

  async luggageDirect(request: LuggageDirectRequest): Promise<LuggageDirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LuggageDirectHeaders({ });
    return await this.luggageDirectWithOptions(request, headers, runtime);
  }

  async orderDetailWithOptions(request: OrderDetailRequest, headers: OrderDetailHeaders, runtime: $Util.RuntimeOptions): Promise<OrderDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!Util.isUnset(request.outOrderNum)) {
      query["out_order_num"] = request.outOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OrderDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/order-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OrderDetailResponse>(await this.callApi(params, req, runtime), new OrderDetailResponse({}));
  }

  async orderDetail(request: OrderDetailRequest): Promise<OrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OrderDetailHeaders({ });
    return await this.orderDetailWithOptions(request, headers, runtime);
  }

  async orderListWithOptions(request: OrderListRequest, headers: OrderListHeaders, runtime: $Util.RuntimeOptions): Promise<OrderListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bookTimeEnd)) {
      query["book_time_end"] = request.bookTimeEnd;
    }

    if (!Util.isUnset(request.bookTimeStart)) {
      query["book_time_start"] = request.bookTimeStart;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OrderList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OrderListResponse>(await this.callApi(params, req, runtime), new OrderListResponse({}));
  }

  async orderList(request: OrderListRequest): Promise<OrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OrderListHeaders({ });
    return await this.orderListWithOptions(request, headers, runtime);
  }

  async pricingWithOptions(request: PricingRequest, headers: PricingHeaders, runtime: $Util.RuntimeOptions): Promise<PricingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Pricing",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-pricing`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PricingResponse>(await this.callApi(params, req, runtime), new PricingResponse({}));
  }

  async pricing(request: PricingRequest): Promise<PricingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PricingHeaders({ });
    return await this.pricingWithOptions(request, headers, runtime);
  }

  async refundApplyWithOptions(tmpReq: RefundApplyRequest, headers: RefundApplyHeaders, runtime: $Util.RuntimeOptions): Promise<RefundApplyResponse> {
    Util.validateModel(tmpReq);
    let request = new RefundApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.refundJourneys)) {
      request.refundJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundJourneys, "refund_journeys", "json");
    }

    if (!Util.isUnset(tmpReq.refundPassengerList)) {
      request.refundPassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundPassengerList, "refund_passenger_list", "json");
    }

    if (!Util.isUnset(tmpReq.refundType)) {
      request.refundTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundType, "refund_type", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    if (!Util.isUnset(request.refundJourneysShrink)) {
      body["refund_journeys"] = request.refundJourneysShrink;
    }

    if (!Util.isUnset(request.refundPassengerListShrink)) {
      body["refund_passenger_list"] = request.refundPassengerListShrink;
    }

    if (!Util.isUnset(request.refundTypeShrink)) {
      body["refund_type"] = request.refundTypeShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefundApply",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/action-apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundApplyResponse>(await this.callApi(params, req, runtime), new RefundApplyResponse({}));
  }

  async refundApply(request: RefundApplyRequest): Promise<RefundApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundApplyHeaders({ });
    return await this.refundApplyWithOptions(request, headers, runtime);
  }

  async refundDetailWithOptions(request: RefundDetailRequest, headers: RefundDetailHeaders, runtime: $Util.RuntimeOptions): Promise<RefundDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.refundOrderNum)) {
      query["refund_order_num"] = request.refundOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefundDetailResponse>(await this.callApi(params, req, runtime), new RefundDetailResponse({}));
  }

  async refundDetail(request: RefundDetailRequest): Promise<RefundDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundDetailHeaders({ });
    return await this.refundDetailWithOptions(request, headers, runtime);
  }

  async refundDetailListWithOptions(request: RefundDetailListRequest, headers: RefundDetailListHeaders, runtime: $Util.RuntimeOptions): Promise<RefundDetailListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.refundCreateBeginTime)) {
      query["refund_create_begin_time"] = request.refundCreateBeginTime;
    }

    if (!Util.isUnset(request.refundCreateEndTime)) {
      query["refund_create_end_time"] = request.refundCreateEndTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundDetailList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefundDetailListResponse>(await this.callApi(params, req, runtime), new RefundDetailListResponse({}));
  }

  async refundDetailList(request: RefundDetailListRequest): Promise<RefundDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundDetailListHeaders({ });
    return await this.refundDetailListWithOptions(request, headers, runtime);
  }

  async searchWithOptions(tmpReq: SearchRequest, headers: SearchHeaders, runtime: $Util.RuntimeOptions): Promise<SearchResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.airLegs)) {
      request.airLegsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.airLegs, "air_legs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.adults)) {
      body["adults"] = request.adults;
    }

    if (!Util.isUnset(request.airLegsShrink)) {
      body["air_legs"] = request.airLegsShrink;
    }

    if (!Util.isUnset(request.cabinClass)) {
      body["cabin_class"] = request.cabinClass;
    }

    if (!Util.isUnset(request.children)) {
      body["children"] = request.children;
    }

    if (!Util.isUnset(request.infants)) {
      body["infants"] = request.infants;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Search",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchResponse>(await this.callApi(params, req, runtime), new SearchResponse({}));
  }

  async search(request: SearchRequest): Promise<SearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchHeaders({ });
    return await this.searchWithOptions(request, headers, runtime);
  }

  async ticketingWithOptions(request: TicketingRequest, headers: TicketingHeaders, runtime: $Util.RuntimeOptions): Promise<TicketingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Ticketing",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-ticketing`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TicketingResponse>(await this.callApi(params, req, runtime), new TicketingResponse({}));
  }

  async ticketing(request: TicketingRequest): Promise<TicketingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketingHeaders({ });
    return await this.ticketingWithOptions(request, headers, runtime);
  }

  async ticketingCheckWithOptions(request: TicketingCheckRequest, headers: TicketingCheckHeaders, runtime: $Util.RuntimeOptions): Promise<TicketingCheckResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TicketingCheck",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-ticketing-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TicketingCheckResponse>(await this.callApi(params, req, runtime), new TicketingCheckResponse({}));
  }

  async ticketingCheck(request: TicketingCheckRequest): Promise<TicketingCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketingCheckHeaders({ });
    return await this.ticketingCheckWithOptions(request, headers, runtime);
  }

  async transitVisaWithOptions(tmpReq: TransitVisaRequest, headers: TransitVisaHeaders, runtime: $Util.RuntimeOptions): Promise<TransitVisaResponse> {
    Util.validateModel(tmpReq);
    let request = new TransitVisaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flightSegmentParamListShrink)) {
      body["flight_segment_param_list"] = request.flightSegmentParamListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransitVisa",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/transit-visa`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransitVisaResponse>(await this.callApi(params, req, runtime), new TransitVisaResponse({}));
  }

  async transitVisa(request: TransitVisaRequest): Promise<TransitVisaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TransitVisaHeaders({ });
    return await this.transitVisaWithOptions(request, headers, runtime);
  }

}
