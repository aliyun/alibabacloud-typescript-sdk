// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class SearchResponseBodyDataSolutionListJourneyListSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter code of the arrival city (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * The number of remaining seats. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, and A. A indicates that more than 9 seats are available.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The booking class.
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter code of the departure city (uppercase).
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * The aircraft type.
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * The flight duration. Unit: minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline (such as KA).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (such as KA5809).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (such as 5809).
   * 
   * @example
   * 1259
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline (such as CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This parameter has a value when stopQuantity is greater than 0. Multiple values are separated by commas.
   * 
   * @example
   * MFM,PVG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The number of stopover cities.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListJourneyList extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: SearchResponseBodyDataSolutionListJourneyListSegmentList[];
  /**
   * @remarks
   * The number of transfers.
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

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $dara.Model {
  /**
   * @remarks
   * The baggage through-check rule type. Valid values: 1: baggage is checked through between segments. 2: baggage must be rechecked between segments. 3: baggage is checked through at stopover cities. 4: baggage must be rechecked at stopover cities.
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * The list of segment IDs. These segments share the same baggage through-check rule.
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

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentBaggageMappingList extends $dara.Model {
  /**
   * @remarks
   * The mapping between passenger types and free baggage allowances.
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * The list of segment IDs. These segments share the same free baggage rule.
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

  validate() {
    if(this.passengerBaggageAllowanceMapping) {
      $dara.Model.validateMap(this.passengerBaggageAllowanceMapping);
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList extends $dara.Model {
  /**
   * @remarks
   * The mapping between passenger types and refund and change rules.
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * The list of segment IDs. These segments share the same refund and change rule.
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

  validate() {
    if(this.refundChangeRuleMap) {
      $dara.Model.validateMap(this.refundChangeRuleMap);
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo extends $dara.Model {
  issueTicketType?: number;
  issueTimeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      issueTicketType: 'issue_ticket_type',
      issueTimeLimit: 'issue_time_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTicketType: 'number',
      issueTimeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionListSolutionAttribute extends $dara.Model {
  issueTimeInfo?: SearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo;
  /**
   * @remarks
   * The supply source type. Valid values: 1: self-operated. 2: agent. 3: flagship store.
   * 
   * @example
   * 1
   */
  supplySourceType?: string;
  static names(): { [key: string]: string } {
    return {
      issueTimeInfo: 'issue_time_info',
      supplySourceType: 'supply_source_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTimeInfo: SearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo,
      supplySourceType: 'string',
    };
  }

  validate() {
    if(this.issueTimeInfo && typeof (this.issueTimeInfo as any).validate === 'function') {
      (this.issueTimeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDataSolutionList extends $dara.Model {
  /**
   * @remarks
   * The unit price for an adult.
   * 
   * @example
   * 600
   */
  adultPrice?: number;
  /**
   * @remarks
   * The tax for an adult.
   * 
   * @example
   * 11
   */
  adultTax?: number;
  /**
   * @remarks
   * The unit price for a child.
   * 
   * @example
   * 500
   */
  childPrice?: number;
  /**
   * @remarks
   * The tax for a child.
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * The unit price for an infant.
   * 
   * @example
   * 400
   */
  infantPrice?: number;
  /**
   * @remarks
   * The tax for an infant.
   * 
   * @example
   * 9
   */
  infantTax?: number;
  /**
   * @remarks
   * The journey.
   */
  journeyList?: SearchResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * The baggage through-check rules.
   */
  segmentBaggageCheckInInfoList?: SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * The free baggage rules.
   */
  segmentBaggageMappingList?: SearchResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * The refund and change rules.
   */
  segmentRefundChangeRuleMappingList?: SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * The quote attributes.
   */
  solutionAttribute?: SearchResponseBodyDataSolutionListSolutionAttribute;
  /**
   * @remarks
   * solution_id
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
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionAttribute: 'solution_attribute',
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
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': SearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionAttribute: SearchResponseBodyDataSolutionListSolutionAttribute,
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.segmentBaggageCheckInInfoList)) {
      $dara.Model.validateArray(this.segmentBaggageCheckInInfoList);
    }
    if(Array.isArray(this.segmentBaggageMappingList)) {
      $dara.Model.validateArray(this.segmentBaggageMappingList);
    }
    if(Array.isArray(this.segmentRefundChangeRuleMappingList)) {
      $dara.Model.validateArray(this.segmentRefundChangeRuleMappingList);
    }
    if(this.solutionAttribute && typeof (this.solutionAttribute as any).validate === 'function') {
      (this.solutionAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The search quote results.
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

  validate() {
    if(Array.isArray(this.solutionList)) {
      $dara.Model.validateArray(this.solutionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2236993B-7BE7-5F92-B179-21FF08570165
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: SearchResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful HTTP requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

