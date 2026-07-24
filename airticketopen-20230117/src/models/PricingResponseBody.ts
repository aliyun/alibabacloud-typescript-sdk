// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class PricingResponseBodyDataChangedPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The unit price per adult.
   * 
   * @example
   * 100
   */
  adultPrice?: number;
  /**
   * @remarks
   * The tax per adult.
   * 
   * @example
   * 10
   */
  adultTax?: number;
  /**
   * @remarks
   * The unit price per child.
   * 
   * @example
   * 100
   */
  childPrice?: number;
  /**
   * @remarks
   * The tax per child.
   * 
   * @example
   * 10
   */
  childTax?: number;
  /**
   * @remarks
   * The unit price per infant.
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * The tax per infant.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataOriginalPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The unit price per adult.
   * 
   * @example
   * 200
   */
  adultPrice?: number;
  /**
   * @remarks
   * The tax per adult.
   * 
   * @example
   * 20
   */
  adultTax?: number;
  /**
   * @remarks
   * The unit price per child.
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * The tax per child.
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * The unit price per infant.
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * The tax per infant.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBodyDataSolutionJourneyListSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
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
   * The number of remaining seats.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The cabin code.
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
   * ALL_CABIN
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
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
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
   * The flight duration in minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (for example, KA).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (for example, KA5809).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (for example, 5809).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (for example, CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (for example, CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID in the format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This field has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
   * 
   * @example
   * ""
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

export class PricingResponseBodyDataSolutionJourneyList extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: PricingResponseBodyDataSolutionJourneyListSegmentList[];
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
      segmentList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionJourneyListSegmentList },
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

export class PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList extends $dara.Model {
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
   * The list of segment IDs that share the same baggage through-check rule.
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

export class PricingResponseBodyDataSolutionSegmentBaggageMappingList extends $dara.Model {
  /**
   * @remarks
   * The mapping between passenger types and free baggage allowances.
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * The list of segment IDs that share the same free baggage allowance rule.
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

export class PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList extends $dara.Model {
  /**
   * @remarks
   * The mapping between passenger types and refund and change rules.
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * The list of segment IDs that share the same refund and change rule.
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

export class PricingResponseBodyDataSolutionSolutionAttributeIssueTimeInfo extends $dara.Model {
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

export class PricingResponseBodyDataSolutionSolutionAttribute extends $dara.Model {
  issueTimeInfo?: PricingResponseBodyDataSolutionSolutionAttributeIssueTimeInfo;
  supplySourceType?: string;
  static names(): { [key: string]: string } {
    return {
      issueTimeInfo: 'issue_time_info',
      supplySourceType: 'supply_source_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTimeInfo: PricingResponseBodyDataSolutionSolutionAttributeIssueTimeInfo,
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

export class PricingResponseBodyDataSolution extends $dara.Model {
  /**
   * @remarks
   * The unit price per adult.
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * The tax per adult.
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * The unit price per child.
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * The tax per child.
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * The unit price per infant.
   * 
   * @example
   * 200
   */
  infantPrice?: number;
  /**
   * @remarks
   * The tax per infant.
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * The journey list.
   */
  journeyList?: PricingResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * The baggage through-check rules.
   */
  segmentBaggageCheckInInfoList?: PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * The free baggage allowance rules.
   */
  segmentBaggageMappingList?: PricingResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * The refund and change rules.
   */
  segmentRefundChangeRuleMappingList?: PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  solutionAttribute?: PricingResponseBodyDataSolutionSolutionAttribute;
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
      journeyList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionJourneyList },
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': PricingResponseBodyDataSolutionSegmentRefundChangeRuleMappingList },
      solutionAttribute: PricingResponseBodyDataSolutionSolutionAttribute,
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

export class PricingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The price information after the price change.
   */
  changedPriceInfo?: PricingResponseBodyDataChangedPriceInfo;
  /**
   * @remarks
   * Indicates whether the price has changed.
   * 
   * @example
   * true
   */
  isChanged?: boolean;
  /**
   * @remarks
   * The price information before the price change. This field has a value only when isChanged is true.
   */
  originalPriceInfo?: PricingResponseBodyDataOriginalPriceInfo;
  /**
   * @remarks
   * The number of remaining seats. A indicates more than 9. Values 0 through 9 represent the exact number.
   * 
   * @example
   * A
   */
  remainSeats?: string;
  /**
   * @remarks
   * solution
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

  validate() {
    if(this.changedPriceInfo && typeof (this.changedPriceInfo as any).validate === 'function') {
      (this.changedPriceInfo as any).validate();
    }
    if(this.originalPriceInfo && typeof (this.originalPriceInfo as any).validate === 'function') {
      (this.originalPriceInfo as any).validate();
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PricingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: PricingResponseBodyData;
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
   * Indicates whether the request was successful.
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

