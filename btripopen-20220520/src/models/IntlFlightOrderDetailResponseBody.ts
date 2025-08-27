// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue } from "./ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue";
import { ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue } from "./ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue";


export class IntlFlightOrderDetailResponseBodyModuleContactInfo extends $dara.Model {
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'contact_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo extends $dara.Model {
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportShortName: 'airport_short_name',
      terminal: 'terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airportCode: 'string',
      airportName: 'string',
      airportShortName: 'string',
      terminal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
      operatingFlightNo: 'string',
    };
  }

  validate() {
    if(this.operatingAirlineInfo && typeof (this.operatingAirlineInfo as any).validate === 'function') {
      (this.operatingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  stopAirport?: string;
  stopAirportName?: string;
  stopArrTerm?: string;
  stopArrTime?: string;
  stopCityCode?: string;
  stopCityName?: string;
  stopDepTerm?: string;
  stopDepTime?: string;
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportName: 'stop_airport_name',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
      stopTime: 'stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportName: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
  depCityLuggageDirect?: number;
  stopCityLuggageDirect?: number;
  static names(): { [key: string]: string } {
    return {
      depCityLuggageDirect: 'dep_city_luggage_direct',
      stopCityLuggageDirect: 'stop_city_luggage_direct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityLuggageDirect: 'number',
      stopCityLuggageDirect: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
  depCityVisaRemark?: string;
  depCityVisaType?: number;
  stopCityVisaRemarks?: string[];
  stopCityVisaTypes?: number[];
  static names(): { [key: string]: string } {
    return {
      depCityVisaRemark: 'dep_city_visa_remark',
      depCityVisaType: 'dep_city_visa_type',
      stopCityVisaRemarks: 'stop_city_visa_remarks',
      stopCityVisaTypes: 'stop_city_visa_types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depCityVisaRemark: 'string',
      depCityVisaType: 'number',
      stopCityVisaRemarks: { 'type': 'array', 'itemType': 'string' },
      stopCityVisaTypes: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCityVisaRemarks)) {
      $dara.Model.validateArray(this.stopCityVisaRemarks);
    }
    if(Array.isArray(this.stopCityVisaTypes)) {
      $dara.Model.validateArray(this.stopCityVisaTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo;
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  depAirportInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo;
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  duration?: number;
  flightNo?: string;
  flightShareInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList[];
  flightType?: string;
  luggageDirectInfo?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  oneMore?: number;
  oneMoreShow?: string;
  segmentIndex?: number;
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark;
  share?: boolean;
  shortFlightSize?: string;
  stop?: boolean;
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      luggageDirectInfo: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      totalTime: 'string',
    };
  }

  validate() {
    if(this.airlineInfo && typeof (this.airlineInfo as any).validate === 'function') {
      (this.airlineInfo as any).validate();
    }
    if(this.arrAirportInfo && typeof (this.arrAirportInfo as any).validate === 'function') {
      (this.arrAirportInfo as any).validate();
    }
    if(this.depAirportInfo && typeof (this.depAirportInfo as any).validate === 'function') {
      (this.depAirportInfo as any).validate();
    }
    if(this.flightShareInfo && typeof (this.flightShareInfo as any).validate === 'function') {
      (this.flightShareInfo as any).validate();
    }
    if(Array.isArray(this.flightStopInfoList)) {
      $dara.Model.validateArray(this.flightStopInfoList);
    }
    if(this.luggageDirectInfo && typeof (this.luggageDirectInfo as any).validate === 'function') {
      (this.luggageDirectInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleJourneyList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  /**
   * @example
   * SHA
   */
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  duration?: number;
  flightSegmentInfos?: IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos[];
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  transferTime?: number;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      duration: 'duration',
      flightSegmentInfos: 'flight_segment_infos',
      journeyIndex: 'journey_index',
      transferTime: 'transfer_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyListFlightSegmentInfos },
      journeyIndex: 'number',
      transferTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule extends $dara.Model {
  baggageDigest?: string;
  offerBaggageInfoMap?: { [key: string]: ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue[] };
  /**
   * @example
   * true
   */
  structuredBaggage?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageDigest: 'baggage_digest',
      offerBaggageInfoMap: 'offer_baggage_info_map',
      structuredBaggage: 'structured_baggage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDigest: 'string',
      offerBaggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue } },
      structuredBaggage: 'boolean',
    };
  }

  validate() {
    if(this.offerBaggageInfoMap) {
      $dara.Model.validateMap(this.offerBaggageInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList extends $dara.Model {
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 21300
   */
  sellPrice?: number;
  /**
   * @example
   * 19300
   */
  tax?: number;
  /**
   * @example
   * 2000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
      sellPrice: 'number',
      tax: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule extends $dara.Model {
  /**
   * @example
   * false
   */
  cancelFeeInd?: boolean;
  /**
   * @example
   * false
   */
  changeFeeInd?: boolean;
  changeRuleDesc?: string;
  offerPenaltyInfoMap?: { [key: string]: ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue[] };
  refundChangeDigest?: string;
  refundRuleDesc?: string;
  /**
   * @example
   * true
   */
  structuredRefund?: boolean;
  static names(): { [key: string]: string } {
    return {
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      changeRuleDesc: 'change_rule_desc',
      offerPenaltyInfoMap: 'offer_penalty_info_map',
      refundChangeDigest: 'refund_change_digest',
      refundRuleDesc: 'refund_rule_desc',
      structuredRefund: 'structured_refund',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      changeRuleDesc: 'string',
      offerPenaltyInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleOrderItemListRefundChangeRuleOfferPenaltyInfoMapValue } },
      refundChangeDigest: 'string',
      refundRuleDesc: 'string',
      structuredRefund: 'boolean',
    };
  }

  validate() {
    if(this.offerPenaltyInfoMap) {
      $dara.Model.validateMap(this.offerPenaltyInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModuleOrderItemList extends $dara.Model {
  baggageRule?: IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule;
  passengerPriceList?: IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList[];
  refundChangeRule?: IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule;
  segmentKeyList?: string[];
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      passengerPriceList: 'passenger_price_list',
      refundChangeRule: 'refund_change_rule',
      segmentKeyList: 'segment_key_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule,
      passengerPriceList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList },
      refundChangeRule: IntlFlightOrderDetailResponseBodyModuleOrderItemListRefundChangeRule,
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(Array.isArray(this.passengerPriceList)) {
      $dara.Model.validateArray(this.passengerPriceList);
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * 1001101
   */
  jobNo?: string;
  nationality?: string;
  /**
   * @example
   * CN
   */
  nationalityCode?: string;
  /**
   * @example
   * 8432002
   */
  passengerId?: number;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 12292812036903456
   */
  userId?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      fullName: 'full_name',
      gender: 'gender',
      jobNo: 'job_no',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerId: 'passenger_id',
      type: 'type',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      gender: 'number',
      jobNo: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerId: 'number',
      type: 'number',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo extends $dara.Model {
  sellPrice?: number;
  tax?: number;
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      tax: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList extends $dara.Model {
  cabin?: string;
  cabinClass?: string;
  modified?: boolean;
  openTicketStatus?: string;
  refunded?: boolean;
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      modified: 'modified',
      openTicketStatus: 'open_ticket_status',
      refunded: 'refunded',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      modified: 'boolean',
      openTicketStatus: 'string',
      refunded: 'boolean',
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList extends $dara.Model {
  issueTime?: string;
  pnrNo?: string;
  priceInfo?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo;
  segmentKeyList?: string[];
  ticketNo?: string;
  ticketSegmentList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList[];
  static names(): { [key: string]: string } {
    return {
      issueTime: 'issue_time',
      pnrNo: 'pnr_no',
      priceInfo: 'price_info',
      segmentKeyList: 'segment_key_list',
      ticketNo: 'ticket_no',
      ticketSegmentList: 'ticket_segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTime: 'string',
      pnrNo: 'string',
      priceInfo: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo,
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
      ticketNo: 'string',
      ticketSegmentList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListTicketSegmentList },
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
    }
    if(Array.isArray(this.ticketSegmentList)) {
      $dara.Model.validateArray(this.ticketSegmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModulePassengerTicketList extends $dara.Model {
  passengerId?: number;
  ticketList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      ticketList: 'ticket_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      ticketList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList },
    };
  }

  validate() {
    if(Array.isArray(this.ticketList)) {
      $dara.Model.validateArray(this.ticketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBodyModule extends $dara.Model {
  bookerUserId?: string;
  bookerUserName?: string;
  closeReason?: string;
  /**
   * @example
   * 1709708165000
   */
  closeTime?: string;
  contactInfo?: IntlFlightOrderDetailResponseBodyModuleContactInfo;
  journeyList?: IntlFlightOrderDetailResponseBodyModuleJourneyList[];
  /**
   * @example
   * 1012000000000000
   */
  orderId?: string;
  orderItemList?: IntlFlightOrderDetailResponseBodyModuleOrderItemList[];
  orderStatus?: number;
  /**
   * @example
   * F11374007131319304192
   */
  outOrderId?: string;
  passengerList?: IntlFlightOrderDetailResponseBodyModulePassengerList[];
  passengerTicketList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketList[];
  payLatestTime?: string;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 2024-03-06 15:00:35
   */
  payTime?: string;
  /**
   * @example
   * 8
   */
  payType?: number;
  successTime?: string;
  /**
   * @example
   * 21300
   */
  totalPrice?: number;
  totalTaxPrice?: number;
  totalTicketPrice?: number;
  /**
   * @example
   * 0
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      bookerUserId: 'booker_user_id',
      bookerUserName: 'booker_user_name',
      closeReason: 'close_reason',
      closeTime: 'close_time',
      contactInfo: 'contact_info',
      journeyList: 'journey_list',
      orderId: 'order_id',
      orderItemList: 'order_item_list',
      orderStatus: 'order_status',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      passengerTicketList: 'passenger_ticket_list',
      payLatestTime: 'pay_latest_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      payType: 'pay_type',
      successTime: 'success_time',
      totalPrice: 'total_price',
      totalTaxPrice: 'total_tax_price',
      totalTicketPrice: 'total_ticket_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookerUserId: 'string',
      bookerUserName: 'string',
      closeReason: 'string',
      closeTime: 'string',
      contactInfo: IntlFlightOrderDetailResponseBodyModuleContactInfo,
      journeyList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyList },
      orderId: 'string',
      orderItemList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleOrderItemList },
      orderStatus: 'number',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerList },
      passengerTicketList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketList },
      payLatestTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      payType: 'number',
      successTime: 'string',
      totalPrice: 'number',
      totalTaxPrice: 'number',
      totalTicketPrice: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.orderItemList)) {
      $dara.Model.validateArray(this.orderItemList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerTicketList)) {
      $dara.Model.validateArray(this.passengerTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightOrderDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: IntlFlightOrderDetailResponseBodyModule;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210bc4b116835992457938931db4de
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IntlFlightOrderDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

