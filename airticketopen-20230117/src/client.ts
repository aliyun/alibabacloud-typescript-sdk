// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue extends $tea.Model {
  /**
   * @remarks
   * checked baggage quantity
   * 
   * @example
   * 22
   */
  baggageAmount?: number;
  /**
   * @remarks
   * checked baggage weight
   * 
   * @example
   * 2
   */
  baggageWeight?: number;
  /**
   * @remarks
   * checked baggage weight unit
   * 
   * @example
   * kg
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * carry-on baggage quantity
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * carry-on baggage weight
   * 
   * @example
   * 2
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * carry-on baggage weight unit
   * 
   * @example
   * kg
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * refund rule for fully-unused tickets
   */
  refundRuleAllUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * refund rule for partially-used tickets
   */
  refundRulePartUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * change rule for inbound segment unused tickets
   */
  changeRuleInUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * change rule for outbound segment unused tickets
   */
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
  /**
   * @remarks
   * checked baggage quantity
   * 
   * @example
   * 1
   */
  baggageAmount?: number;
  /**
   * @remarks
   * checked baggage weight
   * 
   * @example
   * 10
   */
  baggageWeight?: number;
  /**
   * @remarks
   * checked baggage weight unit
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * carry-on baggage quantity
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * carry-on baggage weight
   * 
   * @example
   * 5
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * carry-on baggage weight unit
   * 
   * @example
   * KG
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * refund rule for fully-unused tickets
   */
  refundRuleAllUnusedList?: DataRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * refund rule for partially-used tickets
   */
  refundRulePartUnusedList?: DataRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * change rule for inbound segment unused tickets
   */
  changeRuleInUnusedList?: DataRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * change rule for outbound-flight-unused tickets
   */
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
  /**
   * @remarks
   * checked baggage quantity
   * 
   * @example
   * 1
   */
  baggageAmount?: number;
  /**
   * @remarks
   * checked baggage weight
   * 
   * @example
   * 10
   */
  baggageWeight?: number;
  /**
   * @remarks
   * checked baggage weight unit
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * carry-on baggage quantity
   * 
   * @example
   * 1
   */
  carryOnAmount?: number;
  /**
   * @remarks
   * carry-on baggage weight
   * 
   * @example
   * 5
   */
  carryOnWeight?: number;
  /**
   * @remarks
   * carry-on baggage weight unit
   * 
   * @example
   * KG
   */
  carryOnWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * refund rule for fully-unused tickets
   */
  refundRuleAllUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * refund rule for partially-used tickets
   */
  refundRulePartUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * change rule for inbound segment unused tickets
   */
  changeRuleInUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * change rule for outbound-flight-unused tickets
   */
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dayNum?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1677427200000
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: AccountFlowListResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AccountFlowListResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * Language Code(refer to ISO_639)
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * solution_id returned by enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Properly processed return data
   */
  data?: AncillarySuggestResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Data carried in error handling
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http request successful, status value is always 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AncillarySuggestResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * contact information
   * 
   * This parameter is required.
   */
  contact?: BookRequestContact;
  /**
   * @remarks
   * external order number(buyer customization)
   * 
   * This parameter is required.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * passenger-ancillary purchase relationship
   */
  passengerAncillaryPurchaseMapList?: BookRequestPassengerAncillaryPurchaseMapList[];
  /**
   * @remarks
   * passenger list
   * 
   * This parameter is required.
   */
  passengerList?: BookRequestPassengerList[];
  /**
   * @remarks
   * solution_id returned by Enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * contact information
   * 
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * external order number(buyer customization)
   * 
   * This parameter is required.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * passenger-ancillary purchase relationship
   */
  passengerAncillaryPurchaseMapListShrink?: string;
  /**
   * @remarks
   * passenger list
   * 
   * This parameter is required.
   */
  passengerListShrink?: string;
  /**
   * @remarks
   * solution_id returned by Enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: BookResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: BookResponseBodyErrorData;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BookResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to buyer account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: CancelResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  changePassengerList?: ChangeApplyRequestChangePassengerList[];
  /**
   * @remarks
   * This parameter is required.
   */
  changedJourneys?: ChangeApplyRequestChangedJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  contact?: ChangeApplyRequestContact;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  changePassengerListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changedJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeApplyResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeApplyResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * null
   */
  data?: any;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeCancelResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeConfirmResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeConfirmResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeDetailResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeDetailResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1677415276000
   */
  utcCreateBegin?: number;
  /**
   * @example
   * 1677415279000
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeDetailListOfBuyerResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeDetailListOfBuyerResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***700
   */
  orderNum?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: ChangeDetailListOfOrderNumResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeDetailListOfOrderNumResponseBody;
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

export class CollectFlightLowestPriceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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

export class CollectFlightLowestPriceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  lowestPriceFlightInfoList?: CollectFlightLowestPriceRequestLowestPriceFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      lowestPriceFlightInfoList: 'lowest_price_flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowestPriceFlightInfoList: { 'type': 'array', 'itemType': CollectFlightLowestPriceRequestLowestPriceFlightInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectFlightLowestPriceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  lowestPriceFlightInfoListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      lowestPriceFlightInfoListShrink: 'lowest_price_flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowestPriceFlightInfoListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CollectFlightLowestPriceResponseBody extends $tea.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * null
   */
  data?: { [key: string]: any };
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class CollectFlightLowestPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CollectFlightLowestPriceResponseBody;
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
      body: CollectFlightLowestPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * adult passenger amount 1-9
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * cabin class
   * 1. **ALL_CABIN** : all cabin class
   * 2. **Y** : economy class
   * 3. **FC** : first class and business class
   * 4. **S** : premium economy class
   * 5. **YS** : economy class and premium economy class
   * 6. **YSC** : economy class, premium economy class and business class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * child passenger amount 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * infant passenger amount 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * journey list
   */
  journeyParamList?: EnrichRequestJourneyParamList[];
  /**
   * @remarks
   * solution_id returned by Search
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * adult passenger amount 1-9
   * 
   * @example
   * 1
   */
  adults?: number;
  /**
   * @remarks
   * cabin class
   * 1. **ALL_CABIN** : all cabin class
   * 2. **Y** : economy class
   * 3. **FC** : first class and business class
   * 4. **S** : premium economy class
   * 5. **YS** : economy class and premium economy class
   * 6. **YSC** : economy class, premium economy class and business class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * child passenger amount 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * infant passenger amount 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * journey list
   */
  journeyParamListShrink?: string;
  /**
   * @remarks
   * solution_id returned by Search
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: EnrichResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnrichResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0r2LSuIsHlxEoGZcnGe34U1njBOR83Q4HNSvMDGrDPK5J71VjcGdRIWz2x3+tFxvQaduwHB46Z9K
   * dbIoDN8xPQ5PWlky8rKOPmAqSZfIRyPmAwvPvTJFwr8bRgHPPaq2VO8kHJ6jFIpJJ5I7Zqd1BjGS
   * SR/kULQZHsDDd2zgA9RRTsEQF2OSxFFFx2P/2Q==
   */
  fileContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: FileUploadResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileUploadResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: FlightChangeOfOrderResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FlightChangeOfOrderResponseBody;
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
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * fu1bltcu3400iurywuri
   */
  appKey?: string;
  /**
   * @remarks
   * appSecret
   * 
   * This parameter is required.
   * 
   * @example
   * ZzQ3MW1mb3E1ODAwI2ldUjYlWUdJn5YI
   */
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
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Correctly processed return data
   */
  data?: GetTokenResponseBodyData;
  /**
   * @remarks
   * Business error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Data carried during error handling
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * When the HTTP request is successful, the status value is 200.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Whether it is correct
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: LuggageDirectResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LuggageDirectResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: OrderDetailResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OrderDetailResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * latest booking time (timestamp)
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-02 11:20:00
   */
  bookTimeEnd?: number;
  /**
   * @remarks
   * earliest book time(timestamp)
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-01 11:20:00
   */
  bookTimeStart?: number;
  /**
   * @remarks
   * pagination query parameters, from which page to start querying
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * pagination query parameters, how many orders to return
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * which order status will be query
   * 
   * 1: order reservation in process
   * 
   * 2: order reservation successful
   * 
   * 3: order paid
   * 
   * 4: order successful
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: OrderListResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OrderListResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * solution_id returned by Enrich
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: PricingResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PricingResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * journeys for which a refund is being requested
   * 
   * This parameter is required.
   */
  refundJourneys?: RefundApplyRequestRefundJourneys[];
  /**
   * @remarks
   * passengers that applying for a refund
   * 
   * This parameter is required.
   */
  refundPassengerList?: RefundApplyRequestRefundPassengerList[];
  /**
   * @remarks
   * refund type and attachments
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * journeys for which a refund is being requested
   * 
   * This parameter is required.
   */
  refundJourneysShrink?: string;
  /**
   * @remarks
   * passengers that applying for a refund
   * 
   * This parameter is required.
   */
  refundPassengerListShrink?: string;
  /**
   * @remarks
   * refund type and attachments
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: RefundApplyResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundApplyResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * refund order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617732
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: RefundDetailResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundDetailResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number returned by Book
   * 
   * @example
   * 49884*****950
   */
  orderNum?: number;
  /**
   * @remarks
   * pagination query parameters, from which page to start querying
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * pagination query parameters, how many orders to return
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * the earliest time(timestamp) of refund order creation
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229002000
   */
  refundCreateBeginTime?: number;
  /**
   * @remarks
   * the latest time(timestamp) of refund order creation
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229005000
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: RefundDetailListResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefundDetailListResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * adult passenger amount 1-9
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * itinerary list
   * 
   * This parameter is required.
   */
  airLegs?: SearchRequestAirLegs[];
  /**
   * @remarks
   * cabin class
   * 1. **ALL_CABIN** : all cabin class
   * 2. **Y** : economy class
   * 3. **FC** : first class and business class
   * 4. **S** : premium economy class
   * 5. **YS** : economy class and premium economy class
   * 6. **YSC** : economy class, premium economy class and business class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * child passenger amount 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * infant passenger amount 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * search controls
   */
  searchControlOptions?: SearchRequestSearchControlOptions;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegs: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      searchControlOptions: 'search_control_options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegs: { 'type': 'array', 'itemType': SearchRequestAirLegs },
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      searchControlOptions: SearchRequestSearchControlOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * adult passenger amount 1-9
   * 
   * @example
   * 2
   */
  adults?: number;
  /**
   * @remarks
   * itinerary list
   * 
   * This parameter is required.
   */
  airLegsShrink?: string;
  /**
   * @remarks
   * cabin class
   * 1. **ALL_CABIN** : all cabin class
   * 2. **Y** : economy class
   * 3. **FC** : first class and business class
   * 4. **S** : premium economy class
   * 5. **YS** : economy class and premium economy class
   * 6. **YSC** : economy class, premium economy class and business class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * child passenger amount 0-9
   * 
   * @example
   * 1
   */
  children?: number;
  /**
   * @remarks
   * infant passenger amount 0-9
   * 
   * @example
   * 1
   */
  infants?: number;
  /**
   * @remarks
   * search controls
   */
  searchControlOptionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      adults: 'adults',
      airLegsShrink: 'air_legs',
      cabinClass: 'cabin_class',
      children: 'children',
      infants: 'infants',
      searchControlOptionsShrink: 'search_control_options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adults: 'number',
      airLegsShrink: 'string',
      cabinClass: 'string',
      children: 'number',
      infants: 'number',
      searchControlOptionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBody extends $tea.Model {
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 2236993B-7BE7-5F92-B179-21FF08570165
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: SearchResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * {}
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * ""
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: TicketingResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TicketingResponseBody;
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
  /**
   * @remarks
   * access token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @remarks
   * language Code(refer to ISO_639), defaults to the buyer\\"s account configuration
   * 
   * @example
   * en_US
   */
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
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: TicketingCheckResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TicketingCheckResponseBody;
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
  /**
   * @remarks
   * access_token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiJCQldMaWIzN0VxbC0xMjhhR2N5elJ3IiwiaWF0IjoxNjc3MDY2NTAxLCJleHAiOjE2NzcwNzM3MDEsIm5iZiI6MTY3NzA2NjQ0MX0.AF0DxsZK4Edyg0C6ObRQFUo36R1VYrb5IYmak25TmL1OfR5RkIUc3PpqFuQKNLKXf5fOtVQaKjaexzwodVeWZQDKEG_RPt_Ybb99EnEm6vPKs6e3pWFbKiBq71WleLHhVrdFb4YPowRKjc7bG0jyGUxiQ2iXy0RWDj9tIjfI-KEdzNp5oVnX7j4p3H12DwQrRPmd1nz3BciAQNINvDpzqusuIUw8JXyLFCz838Y0NhwB1_bYZyctxRLSzrGZuI5rrWtItgupqMsOlJ3RNy1QrIbQ2g6nPmzl-atOqcQ4Nw0HeDLR8dhM1OsIcFLbKXBUtwXofflhzAQrkDxhwYiXii
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
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
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  data?: TransitVisaResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransitVisaResponseBody;
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * 30
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
   * 
   * @example
   * 100
   */
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
  /**
   * @example
   * 1000
   */
  afterAvailableAmount?: number;
  /**
   * @example
   * 1950.5
   */
  beforeAvailableAmount?: number;
  /**
   * @example
   * 49880***971
   */
  changeOrderNum?: number;
  /**
   * @example
   * 1627239841225842666
   */
  flowId?: number;
  /**
   * @example
   * 1676799185000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1676966530000
   */
  gmtModified?: number;
  /**
   * @example
   * 950.5
   */
  opAmount?: number;
  /**
   * @example
   * 2
   */
  opType?: number;
  /**
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @example
   * 4988430***971
   */
  outOrderNum?: string;
  /**
   * @example
   * 48430***971
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @remarks
   * baggage quantity, values such as: 3, 2, 1, 0, -2.     -2 indicates weight-based
   * 
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @remarks
   * Baggage weight, 0-50. When isAllWeight=true, it represents the total weight of all baggages.
   * 
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @remarks
   * Unit of baggage weight
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * Total price
   * 
   * @example
   * 10.0
   */
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
  /**
   * @remarks
   * Ancillary product ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU
   */
  ancillaryId?: string;
  /**
   * @remarks
   * Ancillary product type. currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  /**
   * @remarks
   * Baggage details
   */
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
  /**
   * @remarks
   * Ancillary product
   */
  ancillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary;
  /**
   * @remarks
   * Segment ID list, these segments share the same ancillary
   */
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
  /**
   * @remarks
   * ancillary detail list
   */
  segAncillaryMapList?: AncillarySuggestResponseBodyDataSegAncillaryMapList[];
  /**
   * @remarks
   * solution_id, equals to solution_id in request
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * email address
   * 
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
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
  /**
   * @remarks
   * ancillary product ID, returned by AncillarySuggest.
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * type of ancillary product, only support "4"(4 means paid baggage) currently.
   * 
   * @example
   * 4
   */
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
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5673
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290102
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020320
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: male; 1: female
   * 
   * @example
   * 1
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * country code for mobile phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 182******92
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: Infant
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * ancillary information
   */
  bookAncillaryReqItem?: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem;
  /**
   * @remarks
   * passenger list for unified ancillary purchases
   */
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
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20200320
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: BookRequestPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 183******95
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
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
  /**
   * @remarks
   * order information list
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
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
  /**
   * @remarks
   * order information list. When the same input parameters are used to repeat a Book, if the booking has already been successful, the order number will be returned.
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arriveTerminal?: string;
  /**
   * @example
   * 1677232999000
   */
  arriveTime?: number;
  arriveTimeStr?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20230320
   */
  departureDate?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 1677232998000
   */
  departureTime?: number;
  departureTimeStr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arriveTerminal: 'arrive_terminal',
      arriveTime: 'arrive_time',
      arriveTimeStr: 'arrive_time_str',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      departureTimeStr: 'departure_time_str',
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
      arriveTimeStr: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      departureTimeStr: 'string',
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
  /**
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 183*****92
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * 49884*****950
   */
  changeOrderNum?: number;
  /**
   * @example
   * 0
   */
  changeOrderStatus?: number;
  /**
   * @example
   * desc reason
   */
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
  /**
   * @example
   * 4988430***950
   */
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
  /**
   * @example
   * 30
   */
  payAmount?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @example
   * 50
   */
  serviceFee?: number;
  /**
   * @example
   * 20
   */
  taxFee?: number;
  /**
   * @example
   * 30
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 183*****92
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  changePassengers?: ChangeDetailResponseBodyDataChangePassengers[];
  /**
   * @example
   * 1
   */
  changeReasonType?: number;
  changedJourneys?: ChangeDetailResponseBodyDataChangedJourneys[];
  /**
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  contact?: ChangeDetailResponseBodyDataContact;
  /**
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailResponseBodyDataLastJourneys[];
  /**
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  originalJourneys?: ChangeDetailResponseBodyDataOriginalJourneys[];
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @example
   * 300
   */
  totalAmount?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  /**
   * @example
   * 4988430***971
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  /**
   * @example
   * 1677415274000
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 50
   */
  serviceFee?: number;
  /**
   * @example
   * 20
   */
  taxFee?: number;
  /**
   * @example
   * 30
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @example
   * ZHANG
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 183*****92
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 0
   */
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
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  changePassengers?: ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers[];
  /**
   * @example
   * 1
   */
  changeReasonType?: number;
  changedJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys[];
  /**
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  contact?: ChangeDetailListOfOrderNumResponseBodyDataListContact;
  /**
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys[];
  /**
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  originalJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys[];
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @example
   * 300
   */
  totalAmount?: number;
  /**
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
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

export class CollectFlightLowestPriceRequestLowestPriceFlightInfoList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-11
   */
  departureDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CA123,CA456
   */
  departureFlightNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100.0
   */
  marketTotalPrice?: number;
  /**
   * @example
   * 123456789dacd
   */
  requestId?: string;
  /**
   * @example
   * 2024-11-11
   */
  returnDate?: string;
  /**
   * @example
   * CA123,CA456
   */
  returnFlightNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100.1
   */
  suezTotalPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalCity: 'arrival_city',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureFlightNumber: 'departure_flight_number',
      marketTotalPrice: 'market_total_price',
      requestId: 'request_id',
      returnDate: 'return_date',
      returnFlightNumber: 'return_flight_number',
      solutionId: 'solution_id',
      suezTotalPrice: 'suez_total_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalCity: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureFlightNumber: 'string',
      marketTotalPrice: 'number',
      requestId: 'string',
      returnDate: 'string',
      returnFlightNumber: 'string',
      solutionId: 'string',
      suezTotalPrice: 'number',
      tripType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichRequestJourneyParamListSegmentParamList extends $tea.Model {
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * child RBD
   * 
   * @example
   * E
   */
  childCabin?: string;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * marketing flight no. (eg: KA5809)
   * 
   * This parameter is required.
   * 
   * @example
   * HO1295
   */
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
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure date (eg: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
  departureDate?: string;
  /**
   * @remarks
   * segement param list
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * available seats (for reference only)
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing airline integer flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating airline flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stop city list. 
   * when stop_quantity > 1 , use “,” for seperation
   * 
   * @example
   * MFM,PVG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stops
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * segment Info
   */
  segmentList?: EnrichResponseBodyDataSolutionListJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * through check-in baggage policy type
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 4. baggage through check-in at stop city ( applies for stop flight )
   * 3. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage through check-in policy
   */
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
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * segment id list. 
   * all the listed segment ids share the same baggage rule
   */
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
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy detail
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same change and refund policy
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 500
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 100
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 100
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 100
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 500
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 100
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: EnrichResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * ""
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund airline coupon description
   * 
   * @example
   * ""
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage  policy
   */
  segmentBaggageCheckInInfoList?: EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule
   */
  segmentBaggageMappingList?: EnrichResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * solution ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * solution list
   */
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
  /**
   * @example
   * https://fliggy-flight-jinghang-bucket.oss-cn-zhangjiakou.aliyuncs.com/suez/flight_suez_9a634376****47.jpeg
   */
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
  /**
   * @example
   * 天气
   */
  changeReason?: string;
  /**
   * @example
   * 2023-02-01 10:01:00
   */
  changeTime?: string;
  /**
   * @example
   * 1
   */
  changeType?: number;
  /**
   * @example
   * MFM
   */
  newArrivalAirport?: string;
  /**
   * @example
   * 2023-02-01 15:01:00
   */
  newArrivalTime?: string;
  /**
   * @example
   * PVG
   */
  newDepartureAirport?: string;
  /**
   * @example
   * 2023-02-01 13:01:00
   */
  newDepartureTime?: string;
  /**
   * @example
   * HO1295
   */
  newFlightNo?: string;
  /**
   * @example
   * MFM
   */
  oldArrivalAirport?: string;
  /**
   * @example
   * 023-02-01 14:01:00
   */
  oldArrivalTime?: string;
  /**
   * @example
   * PVG
   */
  oldDepartureAirport?: string;
  /**
   * @example
   * 2023-02-01 12:01:00
   */
  oldDepartureTime?: string;
  /**
   * @example
   * HO1295
   */
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
  /**
   * @example
   * 4966***617111
   */
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
  /**
   * @remarks
   * Remaining valid time of the token in seconds
   * 
   * @example
   * 7200
   */
  expireTime?: number;
  /**
   * @remarks
   * Timestamp of token generation in seconds
   * 
   * @example
   * 1677055176
   */
  generateTime?: number;
  /**
   * @remarks
   * token
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6InN1ZXpfa2V5aWQifQ.eyJqdGkiOiIyUlRjY0Ezc1puSndpYU11R1ctTkVRIiwiaWF0IjoxNjc3MTU1Njg3LCJleHAiOjE2NzcxNjI4ODcsIm5iZiI6MTY3NzE1NTYyN30.bd8qBedJ7R24NC8VpMtM4Ni5OR-Cc0utPiKSx8fjoj9taalt7zXBF8uIVTETw1N-Fx9reLflwVXrbDHky7ZKqlE5o_B5Bkx-crQKlJL-NzasEmNnuJNb5kmmbCy3mvIrQfo5Q5Y0ZaQ110pXK4qd1shRbklvuQXn8lPueJtNqo8VdIOAPGG_rPwOw2P767I0fyFHcome8FR4ST1UrwxeApNKMB_BkpCsUZLgpm9h9trhKbB-3qtk6UK1GKmfw6qlWpL3PQN7FAObNruS0r0CGh3Muc9PaGsuu8Xu5on21h9WmI7L0-jatZkS55p4PEerU56XpkwJfa35_hltKNTauu
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SIN
   */
  arrivalAirport?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  arrivalTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  codeShare?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  departureAirport?: string;
  /**
   * @example
   * T1
   */
  departureTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  departureTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ
   */
  marketingAirline?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ616
   */
  marketingFlightNo?: string;
  /**
   * @example
   * CZ
   */
  operatingAirline?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * CZ
   */
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
  /**
   * @example
   * BJS
   */
  cityCode?: string;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  /**
   * @example
   * 10.0
   */
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
  /**
   * @remarks
   * ancillay_id
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * ancillary product type currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
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
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: male; 1: female
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * country code for mobile phone number
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * the ancillary buyer booked
   */
  ancillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary;
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger;
  /**
   * @remarks
   * segment ID list, these segments share the same ancillary
   */
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
  /**
   * @remarks
   * selling price
   * 
   * @example
   * 300
   */
  sellPrice?: number;
  /**
   * @remarks
   * tax
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin class description
   * 
   * @example
   * economy class
   */
  cabinClassName?: string;
  /**
   * @remarks
   * availability
   * 
   * @example
   * A
   */
  cabinQuantity?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(yyMMddHHmm)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
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
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * b PNR(airline booking code) list
   */
  bPnrList?: string[];
  /**
   * @remarks
   * c PNR(airline booking code) list
   */
  cPnrList?: string[];
  /**
   * @remarks
   * flight price information for current passenger
   */
  flightPrice?: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice;
  /**
   * @remarks
   * RBD information in flight segment dimension
   */
  flightSegmentCabinRelation?: OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation[];
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataFlightItemDetailListPassenger;
  /**
   * @remarks
   * ticketing airline
   * 
   * @example
   * HO
   */
  ticketAirLine?: string;
  /**
   * @remarks
   * ticket number list
   */
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
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * availability
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating airline flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stop city list when stop_quantity > 1 , use “,” for seperation
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stops
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * segment list
   */
  segmentList?: OrderDetailResponseBodyDataSolutionJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * through check-in baggage policy type
   * 
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 3. baggage through check-in at stop city ( applies for stop flight )
   * 4. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage through check-in policy
   */
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
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage rule
   */
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
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same change and refund policy
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: OrderDetailResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * description
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund coupon description
   * 
   * @example
   * description
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule list
   */
  segmentBaggageMappingList?: OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * solution_id
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TUxxx
   */
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
  /**
   * @remarks
   * ancillary product fulfillment details
   */
  ancillaryItemDetailList?: OrderDetailResponseBodyDataAncillaryItemDetailList[];
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  baggageAllowanceMap?: { [key: string]: DataBaggageAllowanceMapValue };
  /**
   * @remarks
   * book time(timestamp)
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * flight product fulfillment details
   */
  flightItemDetailList?: OrderDetailResponseBodyDataFlightItemDetailList[];
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * order status 
   * 
   * 1: order creation in process; 
   * 
   * 2: order creation successful; 
   * 
   * 3: order paid; 
   * 
   * 4: order successful; 
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: number;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * the information about all passenger of current order
   */
  passengerList?: OrderDetailResponseBodyDataPassengerList[];
  /**
   * @remarks
   * payment status 
   * 
   * 1: payment in process; 
   * 
   * 2: deduction successful; 
   * 
   * 3: paid to the seller; 
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * pay time(timestamp)
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * discount amount
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * actual payment amount
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataRefundChangeRuleMapValue };
  /**
   * @remarks
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * the solution buyer booked
   */
  solution?: OrderDetailResponseBodyDataSolution;
  /**
   * @remarks
   * order success time(timestamp)
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * total price of current order
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @remarks
   * issuing place (two-letter code)
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * credential number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * credential type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * credential expiration date
   * 
   * @example
   * 20290101
   */
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
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * credential
   */
  credential?: OrderListResponseBodyDataListPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * book time(timestamp)
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * order status
   * 
   * 1: order reservation in process
   * 
   * 2: order reservation successful
   * 
   * 3: order paid
   * 
   * 4: order successful
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: string;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * the information about all passenger of current order
   */
  passengerList?: OrderListResponseBodyDataListPassengerList[];
  /**
   * @remarks
   * payment status
   * 
   * 1: payment in process
   * 
   * 2: deduction successful
   * 
   * 3: paid to the seller
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: string;
  /**
   * @remarks
   * pay time(timestamp)
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * discount amount
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * actual payment amount
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * order success time(timestamp)
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * total price of current order
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @remarks
   * current page index
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * the number of total orders
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * the number of total pages
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * order list
   */
  list?: OrderListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 100
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 10
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 100
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 200
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 20
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * available seats (for reference only)
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * ALL_CABIN
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating airline flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stop city list. when stop_quantity > 1 , use “,” for seperation
   * 
   * @example
   * MFM,PVG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stops
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * segment list
   */
  segmentList?: PricingResponseBodyDataSolutionJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * through check-in baggage policy type
   * 
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 3. baggage through check-in at stop city ( applies for stop flight )
   * 4. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage through check-in policy
   */
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
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * segment id list all the listed segment id share the same baggage rule
   */
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
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy detail
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same change and refund policy
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: PricingResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * description
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund coupon description
   * 
   * @example
   * description
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule list
   */
  segmentBaggageMappingList?: PricingResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * solution_id, equals to solution_id in request
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * price information after the price change
   */
  changedPriceInfo?: PricingResponseBodyDataChangedPriceInfo;
  /**
   * @remarks
   * whether the price has changed
   * 
   * @example
   * true
   */
  isChanged?: boolean;
  /**
   * @remarks
   * the price information before the change, only available when is_changed = true
   */
  originalPriceInfo?: PricingResponseBodyDataOriginalPriceInfo;
  /**
   * @remarks
   * remaining seats: A indicates more than 9, 0-9 represents the specific number
   * 
   * @example
   * A
   */
  remainSeats?: string;
  /**
   * @remarks
   * the solution represented by the solution_id in request
   */
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
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
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
  /**
   * @remarks
   * segment list
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
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
  /**
   * @remarks
   * attachment file URLs
   * 
   * (note: upload the files using a separate file upload interface to get the file URLs)
   * 
   * @example
   * [xxx,yyy]
   */
  file?: string[];
  /**
   * @remarks
   * refund type 
   * 
   * 2: voluntary (I want to change my travel plan/I don\\"t want to fly) 
   * 
   * 5: involuntary, due to flight delay or cancellation, schedule changes, etc., by the airline 
   * 
   * 6: involuntary, due to health reasons with a certificate from a hospital of at least secondary level A or above 
   * 
   *  (note: attachments are not mandatory, but it is recommended to provide them for involuntary refunds as they can increase the success rate)
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  refundTypeId?: number;
  /**
   * @remarks
   * remark
   * 
   * @example
   * remark desc
   */
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
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
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
  /**
   * @remarks
   * reason for refund application failure
   * 
   * @example
   * desc reason
   */
  failReason?: string;
  /**
   * @remarks
   * refund order number
   * 
   * @example
   * 4966***617202
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * passengers of current refund order
   */
  refundPassengers?: RefundApplyResponseBodyDataRefundResultsRefundPassengers[];
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund order created successfully
   * 
   * 1: refund order creation failed
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund results
   */
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
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
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
  /**
   * @remarks
   * amount of the supplementary refund for the change order
   * 
   * @example
   * 30
   */
  changeOrderRefundFee?: number;
  /**
   * @remarks
   * amount of the supplementary refund for the original order
   * 
   * @example
   * 30
   */
  originalOrderRefundFee?: number;
  /**
   * @remarks
   * passenger for the refund
   */
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
  /**
   * @remarks
   * supplementary refund order number
   * 
   * @example
   * 498843***6950
   */
  multiRefundOrderNum?: number;
  /**
   * @remarks
   * transaction number of the supplementary refund order
   * 
   * @example
   * 498843***6950
   */
  multiRefundTransactionNo?: string;
  /**
   * @remarks
   * supplementary refund details in passenger dimension
   */
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
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * ZHANG
   */
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
  /**
   * @remarks
   * total price of the used flight tickets
   * 
   * @example
   * 30
   */
  alreadyUsedTotalFee?: number;
  /**
   * @remarks
   * amount refunded to the user after change (only available when has change order)
   * 
   * @example
   * 30
   */
  modifyRefundToBuyerMoney?: number;
  /**
   * @remarks
   * non-refundable change service fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeServiceFee?: number;
  /**
   * @remarks
   * non-refundable upgrade fee
   * 
   * @example
   * 30
   */
  nonRefundableChangeUpgradeFee?: number;
  /**
   * @remarks
   * non-refundable tax amount, i.e., tax refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTaxFee?: number;
  /**
   * @remarks
   * non-refundable ticket amount, i.e., ticket refund fee
   * 
   * @example
   * 30
   */
  nonRefundableTicketFee?: number;
  /**
   * @remarks
   * amount refundable to the user from the original ticket (fare + tax - non_refundable_ticket_fee - non_refundable_tax_fee - already_used_total_fee - discount)
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * information of the passenger applying for a refund
   */
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  /**
   * @remarks
   * details of the refund fee
   */
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
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * field deprecated
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stopover city list when stop_quantity > 0 , use “,” for seperation use
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stopover
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * segment list
   */
  segmentList?: RefundDetailResponseBodyDataRefundJourneysSegmentList[];
  /**
   * @remarks
   * number of transfer
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * false
   */
  containMultiRefund?: boolean;
  /**
   * @remarks
   * supplementary refund orders
   */
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund details by passenger dimension
   */
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  /**
   * @remarks
   * refund completed time(timestamp)
   * 
   * @example
   * 1677229005000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * URLs for refund attachments
   * 
   * @example
   * [zzz,yyy]
   */
  refundAttachmentUrls?: string[];
  /**
   * @remarks
   * refunded journey
   */
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 4966***617654
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * reason for refund
   * 
   * @example
   * desc reason
   */
  refundReason?: string;
  /**
   * @remarks
   * refund type 
   * 
   * 2: voluntary application
   * 
   * 5: flight delay or cancellation, flight schedule change, etc., due to airline reasons
   * 
   * 6: health reasons with a certificate from a secondary class A hospital or above
   * 
   * 7: non-voluntary confirmed guidance
   * 
   * 100: non-voluntary non-confirmed guidance
   * 
   * @example
   * 5
   */
  refundType?: number;
  /**
   * @remarks
   * reason for refund rejection
   * 
   * @example
   * refuse reason
   */
  refuseReason?: string;
  /**
   * @remarks
   * refund order status
   * 
   * 0: refund application
   * 
   * 1: refund in progress
   * 
   * 2: refund failed
   * 
   * 3: refund succeeded
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 1677229005000
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund order created time(timestamp)
   * 
   * @example
   * 1677229002000
   */
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
  /**
   * @remarks
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * true
   */
  isMultiRefund?: boolean;
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 49884*****2345
   */
  orderNum?: number;
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 49884*****950
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund application
   * 
   * 1: refund in progress
   * 
   * 2: refund failed
   * 
   * 3: refund succeeded
   * 
   * @example
   * 1
   */
  refundOrderStatus?: number;
  /**
   * @remarks
   * the original refund order number associated with this supplementary refund order, only avaliable when is_multi_refund=true
   * 
   * @example
   * 49884*****2387
   */
  relatedRefundOrderNum?: string;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 49884**tde-95za
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund time(timestamp)
   * 
   * @example
   * 1677229002000
   */
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
  /**
   * @remarks
   * current page index
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * the number of total refund orders
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * the number of total pages
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * refund order list
   */
  list?: RefundDetailListResponseBodyDataList[];
  /**
   * @remarks
   * information of pagination
   */
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
  /**
   * @remarks
   * arrival airport [IATA airport code] list
   * 
   * @example
   * MFM
   */
  arrivalAirportList?: string[];
  /**
   * @remarks
   * arrival city code
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * departure airport [IATA airport code] list
   * 
   * @example
   * PVG
   */
  departureAirportList?: string[];
  /**
   * @remarks
   * departure city code
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure date (eg: yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20230310
   */
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

export class SearchRequestSearchControlOptions extends $tea.Model {
  /**
   * @remarks
   * excluded airlines list
   */
  airlineExcludedList?: string[];
  /**
   * @remarks
   * preferred airlines list
   */
  airlinePreferList?: string[];
  /**
   * @example
   * A1
   */
  serviceQuality?: string;
  static names(): { [key: string]: string } {
    return {
      airlineExcludedList: 'airline_excluded_list',
      airlinePreferList: 'airline_prefer_list',
      serviceQuality: 'service_quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineExcludedList: { 'type': 'array', 'itemType': 'string' },
      airlinePreferList: { 'type': 'array', 'itemType': 'string' },
      serviceQuality: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListJourneyListSegmentList extends $tea.Model {
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * available seats (for reference only)
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (ex.: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing airline flight no. (ex.: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing airline integer flight no. (ex.: 5809)
   * 
   * @example
   * 1259
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (ex.: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating airline flight no. (ex.: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stop city list
   * when stop_quantity > 1, use “,” for seperation
   * 
   * @example
   * MFM,PVG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stops
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * segment Info
   */
  segmentList?: SearchResponseBodyDataSolutionListJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * through check-in baggage policy type
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 3. baggage through check-in at stop city ( applies for stop flight )
   * 4. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. 
   * all the listed segment ids share the same baggage through check-in  policy
   */
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
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * segment id list. 
   * all the listed segment id share the same baggage rule
   */
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
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * segment id list. 
   * all the listed segment ids share the same change and refund policy
   */
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
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 600
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 11
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 500
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 400
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 9
   */
  infantTax?: number;
  /**
   * @remarks
   * segment list
   */
  journeyList?: SearchResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * ""
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund airline coupon description
   * 
   * @example
   * ""
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule
   */
  segmentBaggageMappingList?: SearchResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * solution ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
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
  /**
   * @remarks
   * solution list
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 496***2617111
   */
  orderNum?: number;
  /**
   * @remarks
   * transaction serial number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
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
  /**
   * @remarks
   * order number
   * 
   * @example
   * 496***2617111
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SIN
   */
  arrivalAirport?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  arrivalTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  codeShare?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  departureAirport?: string;
  /**
   * @example
   * T1
   */
  departureTerminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1705285430445
   */
  departureTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ
   */
  marketingAirline?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ616
   */
  marketingFlightNo?: string;
  /**
   * @example
   * CZ
   */
  operatingAirline?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @example
   * CZ
   */
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
  /**
   * @example
   * HGH
   */
  cityCode?: string;
  /**
   * @example
   * 1
   */
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

  /**
   * 账号资金流水
   * 
   * @param request - AccountFlowListRequest
   * @param headers - AccountFlowListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccountFlowListResponse
   */
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

  /**
   * 账号资金流水
   * 
   * @param request - AccountFlowListRequest
   * @returns AccountFlowListResponse
   */
  async accountFlowList(request: AccountFlowListRequest): Promise<AccountFlowListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AccountFlowListHeaders({ });
    return await this.accountFlowListWithOptions(request, headers, runtime);
  }

  /**
   * Ancillary - Suggestion
   * 
   * @remarks
   * search ancillary for selected solution, you should enter the solution_id returned by enrich.
   * 
   * @param request - AncillarySuggestRequest
   * @param headers - AncillarySuggestHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AncillarySuggestResponse
   */
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

  /**
   * Ancillary - Suggestion
   * 
   * @remarks
   * search ancillary for selected solution, you should enter the solution_id returned by enrich.
   * 
   * @param request - AncillarySuggestRequest
   * @returns AncillarySuggestResponse
   */
  async ancillarySuggest(request: AncillarySuggestRequest): Promise<AncillarySuggestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new AncillarySuggestHeaders({ });
    return await this.ancillarySuggestWithOptions(request, headers, runtime);
  }

  /**
   * Transaction-Reservation
   * 
   * @remarks
   * Enter solution_id returned by enrich, ancillary_id returned by ancillarySuggest(optional), passengers information and contact information, the book interface will create an order wait for pay.
   * There are two issues should be noticed:
   * 1. the solution_id must be processed by pricing.
   * 2. the order created by book interface should be pay within 30 minutes, otherwise the order will be closed.
   * 
   * @param tmpReq - BookRequest
   * @param headers - BookHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BookResponse
   */
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

  /**
   * Transaction-Reservation
   * 
   * @remarks
   * Enter solution_id returned by enrich, ancillary_id returned by ancillarySuggest(optional), passengers information and contact information, the book interface will create an order wait for pay.
   * There are two issues should be noticed:
   * 1. the solution_id must be processed by pricing.
   * 2. the order created by book interface should be pay within 30 minutes, otherwise the order will be closed.
   * 
   * @param request - BookRequest
   * @returns BookResponse
   */
  async book(request: BookRequest): Promise<BookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new BookHeaders({ });
    return await this.bookWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Unpaid Cancellation
   * 
   * @remarks
   * close an unpaid order
   * 
   * @param request - CancelRequest
   * @param headers - CancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelResponse
   */
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

  /**
   * Transaction - Unpaid Cancellation
   * 
   * @remarks
   * close an unpaid order
   * 
   * @param request - CancelRequest
   * @returns CancelResponse
   */
  async cancel(request: CancelRequest): Promise<CancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CancelHeaders({ });
    return await this.cancelWithOptions(request, headers, runtime);
  }

  /**
   * 改签-Apply
   * 
   * @param tmpReq - ChangeApplyRequest
   * @param headers - ChangeApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeApplyResponse
   */
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

  /**
   * 改签-Apply
   * 
   * @param request - ChangeApplyRequest
   * @returns ChangeApplyResponse
   */
  async changeApply(request: ChangeApplyRequest): Promise<ChangeApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeApplyHeaders({ });
    return await this.changeApplyWithOptions(request, headers, runtime);
  }

  /**
   * 改签-取消
   * 
   * @param request - ChangeCancelRequest
   * @param headers - ChangeCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCancelResponse
   */
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

  /**
   * 改签-取消
   * 
   * @param request - ChangeCancelRequest
   * @returns ChangeCancelResponse
   */
  async changeCancel(request: ChangeCancelRequest): Promise<ChangeCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeCancelHeaders({ });
    return await this.changeCancelWithOptions(request, headers, runtime);
  }

  /**
   * 改签-确认
   * 
   * @param request - ChangeConfirmRequest
   * @param headers - ChangeConfirmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeConfirmResponse
   */
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

  /**
   * 改签-确认
   * 
   * @param request - ChangeConfirmRequest
   * @returns ChangeConfirmResponse
   */
  async changeConfirm(request: ChangeConfirmRequest): Promise<ChangeConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeConfirmHeaders({ });
    return await this.changeConfirmWithOptions(request, headers, runtime);
  }

  /**
   * 改签-Detail
   * 
   * @param request - ChangeDetailRequest
   * @param headers - ChangeDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailResponse
   */
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

  /**
   * 改签-Detail
   * 
   * @param request - ChangeDetailRequest
   * @returns ChangeDetailResponse
   */
  async changeDetail(request: ChangeDetailRequest): Promise<ChangeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailHeaders({ });
    return await this.changeDetailWithOptions(request, headers, runtime);
  }

  /**
   * 改签单列表-关于买家账号
   * 
   * @param request - ChangeDetailListOfBuyerRequest
   * @param headers - ChangeDetailListOfBuyerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailListOfBuyerResponse
   */
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

  /**
   * 改签单列表-关于买家账号
   * 
   * @param request - ChangeDetailListOfBuyerRequest
   * @returns ChangeDetailListOfBuyerResponse
   */
  async changeDetailListOfBuyer(request: ChangeDetailListOfBuyerRequest): Promise<ChangeDetailListOfBuyerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailListOfBuyerHeaders({ });
    return await this.changeDetailListOfBuyerWithOptions(request, headers, runtime);
  }

  /**
   * 改签单列表-关于正向订单
   * 
   * @param request - ChangeDetailListOfOrderNumRequest
   * @param headers - ChangeDetailListOfOrderNumHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailListOfOrderNumResponse
   */
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

  /**
   * 改签单列表-关于正向订单
   * 
   * @param request - ChangeDetailListOfOrderNumRequest
   * @returns ChangeDetailListOfOrderNumResponse
   */
  async changeDetailListOfOrderNum(request: ChangeDetailListOfOrderNumRequest): Promise<ChangeDetailListOfOrderNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ChangeDetailListOfOrderNumHeaders({ });
    return await this.changeDetailListOfOrderNumWithOptions(request, headers, runtime);
  }

  /**
   * 数据收集-低价航班信息
   * 
   * @param tmpReq - CollectFlightLowestPriceRequest
   * @param headers - CollectFlightLowestPriceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CollectFlightLowestPriceResponse
   */
  async collectFlightLowestPriceWithOptions(tmpReq: CollectFlightLowestPriceRequest, headers: CollectFlightLowestPriceHeaders, runtime: $Util.RuntimeOptions): Promise<CollectFlightLowestPriceResponse> {
    Util.validateModel(tmpReq);
    let request = new CollectFlightLowestPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lowestPriceFlightInfoList)) {
      request.lowestPriceFlightInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lowestPriceFlightInfoList, "lowest_price_flight_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lowestPriceFlightInfoListShrink)) {
      body["lowest_price_flight_info_list"] = request.lowestPriceFlightInfoListShrink;
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
      action: "CollectFlightLowestPrice",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/data-collect/flight-lowest-price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CollectFlightLowestPriceResponse>(await this.callApi(params, req, runtime), new CollectFlightLowestPriceResponse({}));
  }

  /**
   * 数据收集-低价航班信息
   * 
   * @param request - CollectFlightLowestPriceRequest
   * @returns CollectFlightLowestPriceResponse
   */
  async collectFlightLowestPrice(request: CollectFlightLowestPriceRequest): Promise<CollectFlightLowestPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CollectFlightLowestPriceHeaders({ });
    return await this.collectFlightLowestPriceWithOptions(request, headers, runtime);
  }

  /**
   * Search-Enrich
   * 
   * @remarks
   * Enrich supports two modes:
   * 1. mode1: enter solution_id returned by Search.
   * 2. mode2: enter journeyParamList.
   * If you already confirm which flight to fly with, then you can use mode2, otherwise, use mode1(search first, then chose one solution_ID and Enrich).
   * 
   * @param tmpReq - EnrichRequest
   * @param headers - EnrichHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnrichResponse
   */
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

  /**
   * Search-Enrich
   * 
   * @remarks
   * Enrich supports two modes:
   * 1. mode1: enter solution_id returned by Search.
   * 2. mode2: enter journeyParamList.
   * If you already confirm which flight to fly with, then you can use mode2, otherwise, use mode1(search first, then chose one solution_ID and Enrich).
   * 
   * @param request - EnrichRequest
   * @returns EnrichResponse
   */
  async enrich(request: EnrichRequest): Promise<EnrichResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EnrichHeaders({ });
    return await this.enrichWithOptions(request, headers, runtime);
  }

  /**
   * 附件上传
   * 
   * @param request - FileUploadRequest
   * @param headers - FileUploadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileUploadResponse
   */
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

  /**
   * 附件上传
   * 
   * @param request - FileUploadRequest
   * @returns FileUploadResponse
   */
  async fileUpload(request: FileUploadRequest): Promise<FileUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FileUploadHeaders({ });
    return await this.fileUploadWithOptions(request, headers, runtime);
  }

  /**
   * 航变信息-关于订单
   * 
   * @param request - FlightChangeOfOrderRequest
   * @param headers - FlightChangeOfOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightChangeOfOrderResponse
   */
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

  /**
   * 航变信息-关于订单
   * 
   * @param request - FlightChangeOfOrderRequest
   * @returns FlightChangeOfOrderResponse
   */
  async flightChangeOfOrder(request: FlightChangeOfOrderRequest): Promise<FlightChangeOfOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new FlightChangeOfOrderHeaders({ });
    return await this.flightChangeOfOrderWithOptions(request, headers, runtime);
  }

  /**
   * Get Token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
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

  /**
   * Get Token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 航程行李直挂
   * 
   * @param tmpReq - LuggageDirectRequest
   * @param headers - LuggageDirectHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LuggageDirectResponse
   */
  async luggageDirectWithOptions(tmpReq: LuggageDirectRequest, headers: LuggageDirectHeaders, runtime: $Util.RuntimeOptions): Promise<LuggageDirectResponse> {
    Util.validateModel(tmpReq);
    let request = new LuggageDirectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flightSegmentParamListShrink)) {
      query["flight_segment_param_list"] = request.flightSegmentParamListShrink;
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
      action: "LuggageDirect",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/luggage-direct`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LuggageDirectResponse>(await this.callApi(params, req, runtime), new LuggageDirectResponse({}));
  }

  /**
   * 航程行李直挂
   * 
   * @param request - LuggageDirectRequest
   * @returns LuggageDirectResponse
   */
  async luggageDirect(request: LuggageDirectRequest): Promise<LuggageDirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new LuggageDirectHeaders({ });
    return await this.luggageDirectWithOptions(request, headers, runtime);
  }

  /**
   * Trade-Order Details
   * 
   * @remarks
   * query order detail
   * 
   * @param request - OrderDetailRequest
   * @param headers - OrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderDetailResponse
   */
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

  /**
   * Trade-Order Details
   * 
   * @remarks
   * query order detail
   * 
   * @param request - OrderDetailRequest
   * @returns OrderDetailResponse
   */
  async orderDetail(request: OrderDetailRequest): Promise<OrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OrderDetailHeaders({ });
    return await this.orderDetailWithOptions(request, headers, runtime);
  }

  /**
   * Trade - Order List
   * 
   * @remarks
   * query order list
   * 
   * @param request - OrderListRequest
   * @param headers - OrderListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderListResponse
   */
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

  /**
   * Trade - Order List
   * 
   * @remarks
   * query order list
   * 
   * @param request - OrderListRequest
   * @returns OrderListResponse
   */
  async orderList(request: OrderListRequest): Promise<OrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new OrderListHeaders({ });
    return await this.orderListWithOptions(request, headers, runtime);
  }

  /**
   * Trade - Seat and Price Verification
   * 
   * @remarks
   * Check is price and remaining seats of solution you selected has changed. You should enter the solution_id returned by enrich.
   * 
   * @param request - PricingRequest
   * @param headers - PricingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PricingResponse
   */
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

  /**
   * Trade - Seat and Price Verification
   * 
   * @remarks
   * Check is price and remaining seats of solution you selected has changed. You should enter the solution_id returned by enrich.
   * 
   * @param request - PricingRequest
   * @returns PricingResponse
   */
  async pricing(request: PricingRequest): Promise<PricingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PricingHeaders({ });
    return await this.pricingWithOptions(request, headers, runtime);
  }

  /**
   * 退票-申请
   * 
   * @remarks
   * Apply for a refund and generate a refund order.
   * 
   * @param tmpReq - RefundApplyRequest
   * @param headers - RefundApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundApplyResponse
   */
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

  /**
   * 退票-申请
   * 
   * @remarks
   * Apply for a refund and generate a refund order.
   * 
   * @param request - RefundApplyRequest
   * @returns RefundApplyResponse
   */
  async refundApply(request: RefundApplyRequest): Promise<RefundApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundApplyHeaders({ });
    return await this.refundApplyWithOptions(request, headers, runtime);
  }

  /**
   * Refund - Detail
   * 
   * @remarks
   * Query refund order detail.
   * 
   * @param request - RefundDetailRequest
   * @param headers - RefundDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundDetailResponse
   */
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

  /**
   * Refund - Detail
   * 
   * @remarks
   * Query refund order detail.
   * 
   * @param request - RefundDetailRequest
   * @returns RefundDetailResponse
   */
  async refundDetail(request: RefundDetailRequest): Promise<RefundDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundDetailHeaders({ });
    return await this.refundDetailWithOptions(request, headers, runtime);
  }

  /**
   * Refund - Detail List
   * 
   * @remarks
   * Query refund order detail.
   * 
   * @param request - RefundDetailListRequest
   * @param headers - RefundDetailListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundDetailListResponse
   */
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

  /**
   * Refund - Detail List
   * 
   * @remarks
   * Query refund order detail.
   * 
   * @param request - RefundDetailListRequest
   * @returns RefundDetailListResponse
   */
  async refundDetailList(request: RefundDetailListRequest): Promise<RefundDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RefundDetailListHeaders({ });
    return await this.refundDetailListWithOptions(request, headers, runtime);
  }

  /**
   * search
   * 
   * @remarks
   * Enter the information of departure, arrival, departure date, passenger number and cabin, return the lowest price for each flight.
   * 
   * @param tmpReq - SearchRequest
   * @param headers - SearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchResponse
   */
  async searchWithOptions(tmpReq: SearchRequest, headers: SearchHeaders, runtime: $Util.RuntimeOptions): Promise<SearchResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.airLegs)) {
      request.airLegsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.airLegs, "air_legs", "json");
    }

    if (!Util.isUnset(tmpReq.searchControlOptions)) {
      request.searchControlOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchControlOptions, "search_control_options", "json");
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

    if (!Util.isUnset(request.searchControlOptionsShrink)) {
      body["search_control_options"] = request.searchControlOptionsShrink;
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

  /**
   * search
   * 
   * @remarks
   * Enter the information of departure, arrival, departure date, passenger number and cabin, return the lowest price for each flight.
   * 
   * @param request - SearchRequest
   * @returns SearchResponse
   */
  async search(request: SearchRequest): Promise<SearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchHeaders({ });
    return await this.searchWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Payment and Ticket Issuance
   * 
   * @param request - TicketingRequest
   * @param headers - TicketingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketingResponse
   */
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

  /**
   * Transaction - Payment and Ticket Issuance
   * 
   * @param request - TicketingRequest
   * @returns TicketingResponse
   */
  async ticketing(request: TicketingRequest): Promise<TicketingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketingHeaders({ });
    return await this.ticketingWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Pre-payment verification
   * 
   * @remarks
   * Pre-check for Ticketing, this interface is optional to use.
   * 
   * @param request - TicketingCheckRequest
   * @param headers - TicketingCheckHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketingCheckResponse
   */
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

  /**
   * Transaction - Pre-payment verification
   * 
   * @remarks
   * Pre-check for Ticketing, this interface is optional to use.
   * 
   * @param request - TicketingCheckRequest
   * @returns TicketingCheckResponse
   */
  async ticketingCheck(request: TicketingCheckRequest): Promise<TicketingCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TicketingCheckHeaders({ });
    return await this.ticketingCheckWithOptions(request, headers, runtime);
  }

  /**
   * 航程过境签
   * 
   * @param tmpReq - TransitVisaRequest
   * @param headers - TransitVisaHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransitVisaResponse
   */
  async transitVisaWithOptions(tmpReq: TransitVisaRequest, headers: TransitVisaHeaders, runtime: $Util.RuntimeOptions): Promise<TransitVisaResponse> {
    Util.validateModel(tmpReq);
    let request = new TransitVisaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flightSegmentParamListShrink)) {
      query["flight_segment_param_list"] = request.flightSegmentParamListShrink;
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
      action: "TransitVisa",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/transit-visa`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TransitVisaResponse>(await this.callApi(params, req, runtime), new TransitVisaResponse({}));
  }

  /**
   * 航程过境签
   * 
   * @param request - TransitVisaRequest
   * @returns TransitVisaResponse
   */
  async transitVisa(request: TransitVisaRequest): Promise<TransitVisaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TransitVisaHeaders({ });
    return await this.transitVisaWithOptions(request, headers, runtime);
  }

}
