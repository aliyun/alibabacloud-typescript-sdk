// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class StandardSearchResponseBodyDataSolutionListJourneyListSegmentList extends $dara.Model {
  /**
   * @remarks
   * Flight arrival airport three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Flight arrival city three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Flight arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Flight arrival date and time, string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Remaining seat count. Value range: 1,2,3,4,5,6,7,8,9,A; A indicates more than 9 seats available.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * Cabin
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * Cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Whether it is a codeshare flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Flight departure airport three-letter code (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Flight departure city three-letter code (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Flight departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Flight departure date and time, string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Aircraft type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * Flight duration, unit: minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Marketing airline (e.g.: HO)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g.: HO1295)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing flight number in integer format (e.g.: 1295)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g.: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating flight number (e.g.: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * Segment ID, format: flight number + departure airport + arrival airport + departure date (MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * Stopover city list, has values when stopQuantity > 0, multiple values separated by commas
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * Number of stopover cities
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

export class StandardSearchResponseBodyDataSolutionListJourneyList extends $dara.Model {
  /**
   * @remarks
   * Segment information
   */
  segmentList?: StandardSearchResponseBodyDataSolutionListJourneyListSegmentList[];
  /**
   * @remarks
   * Number of transfers
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
      segmentList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionListJourneyListSegmentList },
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

export class StandardSearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $dara.Model {
  /**
   * @remarks
   * Baggage through-check rule type. 1: Baggage direct transfer between segments; 2: Baggage re-check between segments; 3: Baggage direct transfer at stopover city; 4: Baggage re-check at stopover city
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * Segment ID list. These segment IDs share the same baggage through-check rule
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

export class StandardSearchResponseBodyDataSolutionListSegmentBaggageMappingList extends $dara.Model {
  /**
   * @remarks
   * Passenger type to free baggage allowance mapping. Key values: ADT: Adult; CHD: Child; INF: Infant
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * Segment ID list. These segment IDs share the same free baggage allowance rule
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

export class StandardSearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList extends $dara.Model {
  /**
   * @remarks
   * Passenger type to refund and change rule mapping. Key values: ADT: Adult; CHD: Child; INF: Infant
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * Segment ID list. These segment IDs share the same refund and change rule
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

export class StandardSearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo extends $dara.Model {
  /**
   * @remarks
   * Ticketing type. 1: After payment; 2: Before departure; -1: Unknown
   * 
   * @example
   * 1
   */
  issueTicketType?: number;
  /**
   * @remarks
   * Estimated ticketing duration, unit: minutes
   * 
   * @example
   * 60
   */
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

export class StandardSearchResponseBodyDataSolutionListSolutionAttribute extends $dara.Model {
  /**
   * @remarks
   * Ticketing time information
   */
  issueTimeInfo?: StandardSearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo;
  /**
   * @remarks
   * Supply source type. 1: Self-operated; 2: Agent; 3: Flagship store
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
      issueTimeInfo: StandardSearchResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo,
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

export class StandardSearchResponseBodyDataSolutionList extends $dara.Model {
  /**
   * @remarks
   * Adult unit price
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * Adult tax
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * Child unit price
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * Child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * Infant unit price
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * Infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * Journey
   */
  journeyList?: StandardSearchResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * Baggage through-check rules
   */
  segmentBaggageCheckInInfoList?: StandardSearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * Free baggage allowance rules
   */
  segmentBaggageMappingList?: StandardSearchResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * Refund and change rules
   */
  segmentRefundChangeRuleMappingList?: StandardSearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * Quote attributes
   */
  solutionAttribute?: StandardSearchResponseBodyDataSolutionListSolutionAttribute;
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
      journeyList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionListJourneyList },
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionAttribute: StandardSearchResponseBodyDataSolutionListSolutionAttribute,
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

export class StandardSearchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Search and quote results
   */
  solutionList?: StandardSearchResponseBodyDataSolutionList[];
  static names(): { [key: string]: string } {
    return {
      solutionList: 'solution_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      solutionList: { 'type': 'array', 'itemType': StandardSearchResponseBodyDataSolutionList },
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

export class StandardSearchResponseBody extends $dara.Model {
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
   * Data returned on successful processing
   */
  data?: StandardSearchResponseBodyData;
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
   * Data carried with error handling
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
   * When HTTP request is successful, status value is always 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Whether the request is successful
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
      data: StandardSearchResponseBodyData,
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

