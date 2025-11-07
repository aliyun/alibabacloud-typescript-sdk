// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class EnrichResponseBodyDataSolutionListJourneyListSegmentList extends $dara.Model {
  /**
   * @remarks
   * Three-letter code of the arrival airport (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Three-letter code of the arrival city (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Arrival terminal of the flight
   * 
   * @example
   * null
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Arrival date and time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Number of remaining seats. The value range is 1,2,3,4,5,6,7,8,9,A; A indicates more than 9 seats available.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * Cabin class
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * Cabin grade
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Whether it is a code-share flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Three-letter code of the departure airport (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Three-letter code of the departure city (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure terminal of the flight
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Departure date and time in string format (yyyy-MM-dd HH:mm:ss)
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
   * Flight duration in minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Marketing airline (e.g., KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing flight number in digits (e.g., 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g., CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating flight number (e.g., CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight number + departure airport + arrival airport + departure date (MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * List of stopover cities, with values when stopQuantity > 0, separated by commas
   * 
   * @example
   * ""
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

export class EnrichResponseBodyDataSolutionListJourneyList extends $dara.Model {
  /**
   * @remarks
   * segment information
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

export class EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList extends $dara.Model {
  /**
   * @remarks
   * Baggage check-in rule type 1: Direct baggage between segments; 2: Re-check baggage between segments; 3: Direct baggage at stopover cities; 4: Re-check baggage at stopover cities
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * List of segment IDs that use the same baggage check-in rule
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

export class EnrichResponseBodyDataSolutionListSegmentBaggageMappingList extends $dara.Model {
  /**
   * @remarks
   * Mapping of passenger type to free baggage allowance
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * List of segment IDs that use the same free baggage allowance rule
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

export class EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList extends $dara.Model {
  /**
   * @remarks
   * Passenger type - refund and change rule mapping
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * Segment ID list. These segment IDs use the same refund and change rules.
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

export class EnrichResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo extends $dara.Model {
  /**
   * @remarks
   * Issue ticket type:  1: after payment; 2: before departure; -1: unknown
   */
  issueTicketType?: number;
  /**
   * @remarks
   * Estimated issue ticket time, unit: minutes
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

export class EnrichResponseBodyDataSolutionListSolutionAttribute extends $dara.Model {
  /**
   * @remarks
   * Issue ticket time related
   */
  issueTimeInfo?: EnrichResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo;
  /**
   * @remarks
   * Supply source type 1: Self-operated; 2: Agent; 3: Flagship store
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
      issueTimeInfo: EnrichResponseBodyDataSolutionListSolutionAttributeIssueTimeInfo,
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

export class EnrichResponseBodyDataSolutionList extends $dara.Model {
  /**
   * @remarks
   * adult unit price
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
   * child unit price
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
   * infant unit price
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
   * journey
   */
  journeyList?: EnrichResponseBodyDataSolutionListJourneyList[];
  /**
   * @remarks
   * Baggage check-in rules
   */
  segmentBaggageCheckInInfoList?: EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * Free baggage rules
   */
  segmentBaggageMappingList?: EnrichResponseBodyDataSolutionListSegmentBaggageMappingList[];
  /**
   * @remarks
   * Refund and change rules
   */
  segmentRefundChangeRuleMappingList?: EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList[];
  /**
   * @remarks
   * Quotation attributes
   */
  solutionAttribute?: EnrichResponseBodyDataSolutionListSolutionAttribute;
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
      journeyList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListJourneyList },
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': EnrichResponseBodyDataSolutionListSegmentRefundChangeRuleMappingList },
      solutionAttribute: EnrichResponseBodyDataSolutionListSolutionAttribute,
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

export class EnrichResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * search quotation results
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

export class EnrichResponseBody extends $dara.Model {
  /**
   * @remarks
   * request RequestId
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * correctly processed return data
   */
  data?: EnrichResponseBodyData;
  /**
   * @remarks
   * business error code
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
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http request successful, status value is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * whether the request was successful
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

