// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionListSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class EnrichResponseBodyDataSolutionListJourneyListSegmentList extends $dara.Model {
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

export class EnrichResponseBodyDataSolutionListSolutionAttribute extends $dara.Model {
  /**
   * @example
   * 1
   */
  supplySourceType?: string;
  static names(): { [key: string]: string } {
    return {
      supplySourceType: 'supply_source_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplySourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrichResponseBodyDataSolutionList extends $dara.Model {
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
  solutionAttribute?: EnrichResponseBodyDataSolutionListSolutionAttribute;
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
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
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

