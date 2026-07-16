// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleReShopItemListShoppingItemMapValue } from "./ModuleReShopItemListShoppingItemMapValue";
import { ModuleReShopItemListSubItemsShoppingItemMapValue } from "./ModuleReShopItemListSubItemsShoppingItemMapValue";
import { ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue } from "./ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue";
import { ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue } from "./ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue";


export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  cheapAirline?: boolean;
  iconUrl?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo extends $dara.Model {
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo extends $dara.Model {
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  cheapAirline?: boolean;
  iconUrl?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo extends $dara.Model {
  adcode?: string;
  airportCityCode?: string;
  airportCityName?: string;
  airportCode?: string;
  airportName?: string;
  airportParentCityName?: string;
  countyCityAdcode?: string;
  countyCityName?: string;
  prefectureCityAdcode?: string;
  prefectureCityName?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      airportCityCode: 'airport_city_code',
      airportCityName: 'airport_city_name',
      airportCode: 'airport_code',
      airportName: 'airport_name',
      airportParentCityName: 'airport_parent_city_name',
      countyCityAdcode: 'county_city_adcode',
      countyCityName: 'county_city_name',
      prefectureCityAdcode: 'prefecture_city_adcode',
      prefectureCityName: 'prefecture_city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      airportCityCode: 'string',
      airportCityName: 'string',
      airportCode: 'string',
      airportName: 'string',
      airportParentCityName: 'string',
      countyCityAdcode: 'string',
      countyCityName: 'string',
      prefectureCityAdcode: 'string',
      prefectureCityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  stopAirport?: string;
  stopAirportCountyInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo;
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
      stopAirportCountyInfo: 'stop_airport_county_info',
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
      stopAirportCountyInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo,
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
    if(this.stopAirportCountyInfo && typeof (this.stopAirportCountyInfo as any).validate === 'function') {
      (this.stopAirportCountyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo extends $dara.Model {
  aircraftAge?: string;
  avgDelayTime?: string;
  flightCancelRate?: string;
  jetBridgeRate?: string;
  onTimeRate?: string;
  wifi?: boolean;
  static names(): { [key: string]: string } {
    return {
      aircraftAge: 'aircraft_age',
      avgDelayTime: 'avg_delay_time',
      flightCancelRate: 'flight_cancel_rate',
      jetBridgeRate: 'jet_bridge_rate',
      onTimeRate: 'on_time_rate',
      wifi: 'wifi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aircraftAge: 'string',
      avgDelayTime: 'string',
      flightCancelRate: 'string',
      jetBridgeRate: 'string',
      onTimeRate: 'string',
      wifi: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  cheapAirline?: boolean;
  iconUrl?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      cheapAirline: 'cheap_airline',
      iconUrl: 'icon_url',
      shortName: 'short_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      cheapAirline: 'boolean',
      iconUrl: 'string',
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

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  arrTimeUTC?: string;
  depAirportInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  depTimeUTC?: string;
  duration?: number;
  flightNo?: string;
  flightShareInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList[];
  flightType?: string;
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo;
  manufacturer?: string;
  meal?: number;
  mealDesc?: string;
  miles?: number;
  onTimeRate?: string;
  oneMore?: number;
  oneMoreShow?: string;
  otherInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo;
  segmentIndex?: number;
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark;
  share?: boolean;
  shortFlightSize?: string;
  stop?: boolean;
  ticketingAirlineInfo?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo;
  totalTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      arrTimeUTC: 'arr_time_u_t_c',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      depTimeUTC: 'dep_time_u_t_c',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfoList: 'flight_stop_info_list',
      flightType: 'flight_type',
      journeyIndex: 'journey_index',
      luggageDirectInfo: 'luggage_direct_info',
      manufacturer: 'manufacturer',
      meal: 'meal',
      mealDesc: 'meal_desc',
      miles: 'miles',
      onTimeRate: 'on_time_rate',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      otherInfo: 'other_info',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      segmentVisaRemark: 'segment_visa_remark',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      ticketingAirlineInfo: 'ticketing_airline_info',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arrTimeUTC: 'string',
      depAirportInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      depTimeUTC: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      meal: 'number',
      mealDesc: 'string',
      miles: 'number',
      onTimeRate: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      otherInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosOtherInfo,
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      ticketingAirlineInfo: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo,
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
    if(this.otherInfo && typeof (this.otherInfo as any).validate === 'function') {
      (this.otherInfo as any).validate();
    }
    if(this.segmentVisaRemark && typeof (this.segmentVisaRemark as any).validate === 'function') {
      (this.segmentVisaRemark as any).validate();
    }
    if(this.ticketingAirlineInfo && typeof (this.ticketingAirlineInfo as any).validate === 'function') {
      (this.ticketingAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos extends $dara.Model {
  arrCityCode?: string;
  arrCityName?: string;
  arrTime?: string;
  depCityCode?: string;
  depCityName?: string;
  depTime?: string;
  duration?: number;
  flightSegmentInfos?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos[];
  journeyIndex?: number;
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
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfosFlightSegmentInfos },
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

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule extends $dara.Model {
  baggageDescShowColor?: string;
  baggageDigest?: string;
  baggageRuleDesc?: string;
  offerBaggageInfoMap?: { [key: string]: ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue[] };
  structuredBaggage?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageDescShowColor: 'baggage_desc_show_color',
      baggageDigest: 'baggage_digest',
      baggageRuleDesc: 'baggage_rule_desc',
      offerBaggageInfoMap: 'offer_baggage_info_map',
      structuredBaggage: 'structured_baggage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDescShowColor: 'string',
      baggageDigest: 'string',
      baggageRuleDesc: 'string',
      offerBaggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsBaggageRuleOfferBaggageInfoMapValue } },
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

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule extends $dara.Model {
  cancelFeeInd?: boolean;
  changeFeeInd?: boolean;
  changeRuleDesc?: string;
  changeRuleShowColor?: string;
  offerPenaltyInfoMap?: { [key: string]: ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue[] };
  refundChangeDigest?: string;
  refundChangeRuleDesc?: string;
  refundRuleDesc?: string;
  refundRuleShowColor?: string;
  structuredRefund?: boolean;
  static names(): { [key: string]: string } {
    return {
      cancelFeeInd: 'cancel_fee_ind',
      changeFeeInd: 'change_fee_ind',
      changeRuleDesc: 'change_rule_desc',
      changeRuleShowColor: 'change_rule_show_color',
      offerPenaltyInfoMap: 'offer_penalty_info_map',
      refundChangeDigest: 'refund_change_digest',
      refundChangeRuleDesc: 'refund_change_rule_desc',
      refundRuleDesc: 'refund_rule_desc',
      refundRuleShowColor: 'refund_rule_show_color',
      structuredRefund: 'structured_refund',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFeeInd: 'boolean',
      changeFeeInd: 'boolean',
      changeRuleDesc: 'string',
      changeRuleShowColor: 'string',
      offerPenaltyInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleReShopItemListSubItemsRefundChangeRuleOfferPenaltyInfoMapValue } },
      refundChangeDigest: 'string',
      refundChangeRuleDesc: 'string',
      refundRuleDesc: 'string',
      refundRuleShowColor: 'string',
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

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList extends $dara.Model {
  journeyIndex?: number;
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems extends $dara.Model {
  baggageRule?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule;
  discountNum?: number;
  refundChangeRule?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule;
  segmentKeys?: string[];
  segmentPositionList?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList[];
  shoppingItemMap?: { [key: string]: ModuleReShopItemListSubItemsShoppingItemMapValue };
  uniqKey?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      discountNum: 'discount_num',
      refundChangeRule: 'refund_change_rule',
      segmentKeys: 'segment_keys',
      segmentPositionList: 'segment_position_list',
      shoppingItemMap: 'shopping_item_map',
      uniqKey: 'uniq_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsBaggageRule,
      discountNum: 'number',
      refundChangeRule: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsRefundChangeRule,
      segmentKeys: { 'type': 'array', 'itemType': 'string' },
      segmentPositionList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItemsSegmentPositionList },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListSubItemsShoppingItemMapValue },
      uniqKey: 'string',
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    if(Array.isArray(this.segmentKeys)) {
      $dara.Model.validateArray(this.segmentKeys);
    }
    if(Array.isArray(this.segmentPositionList)) {
      $dara.Model.validateArray(this.segmentPositionList);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList extends $dara.Model {
  itemId?: string;
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleReShopItemListShoppingItemMapValue };
  subItems?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'item_id',
      itemType: 'item_type',
      shoppingItemMap: 'shopping_item_map',
      subItems: 'sub_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListShoppingItemMapValue },
      subItems: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemListSubItems },
    };
  }

  validate() {
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    if(Array.isArray(this.subItems)) {
      $dara.Model.validateArray(this.subItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBodyModule extends $dara.Model {
  flightJourneyInfos?: IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos[];
  needContinue?: boolean;
  nextReqWaitTime?: number;
  reShopItemList?: IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList[];
  token?: string;
  static names(): { [key: string]: string } {
    return {
      flightJourneyInfos: 'flight_journey_infos',
      needContinue: 'need_continue',
      nextReqWaitTime: 'next_req_wait_time',
      reShopItemList: 're_shop_item_list',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleFlightJourneyInfos },
      needContinue: 'boolean',
      nextReqWaitTime: 'number',
      reShopItemList: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchResponseBodyModuleReShopItemList },
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    if(Array.isArray(this.reShopItemList)) {
      $dara.Model.validateArray(this.reShopItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchResponseBody extends $dara.Model {
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
  module?: IntlFlightReShopOtaSearchResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
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
      module: IntlFlightReShopOtaSearchResponseBodyModule,
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

