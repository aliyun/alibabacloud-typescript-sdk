// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleReShopItemListBestPriceItemShoppingItemMapValue } from "./ModuleReShopItemListBestPriceItemShoppingItemMapValue";
import { ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue } from "./ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue";


export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItemsSegmentPositionList extends $dara.Model {
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItems extends $dara.Model {
  /**
   * @example
   * 5.1
   */
  discountNum?: number;
  segmentKeys?: string[];
  segmentPositionList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItemsSegmentPositionList[];
  shoppingItemMap?: { [key: string]: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue };
  /**
   * @example
   * 07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  uniqKey?: string;
  static names(): { [key: string]: string } {
    return {
      discountNum: 'discount_num',
      segmentKeys: 'segment_keys',
      segmentPositionList: 'segment_position_list',
      shoppingItemMap: 'shopping_item_map',
      uniqKey: 'uniq_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountNum: 'number',
      segmentKeys: { 'type': 'array', 'itemType': 'string' },
      segmentPositionList: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItemsSegmentPositionList },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue },
      uniqKey: 'string',
    };
  }

  validate() {
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItem extends $dara.Model {
  /**
   * @example
   * b83e3d6ebb8b44dfb94c763abc66c966_2
   */
  itemId?: string;
  /**
   * @example
   * normal
   */
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleReShopItemListBestPriceItemShoppingItemMapValue };
  subItems?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItems[];
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
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleReShopItemListBestPriceItemShoppingItemMapValue },
      subItems: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItems },
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @example
   * 国航
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo extends $dara.Model {
  /**
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @example
   * 萧山
   */
  airportShortName?: string;
  /**
   * @example
   * T3
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PKX
   */
  airportCode?: string;
  /**
   * @example
   * 大兴国际机场
   */
  airportName?: string;
  /**
   * @example
   * 大兴
   */
  airportShortName?: string;
  /**
   * @example
   * T3
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @example
   * 国航
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * CX601
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      operatingAirlineInfo: 'operating_airline_info',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingAirlineInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo extends $dara.Model {
  /**
   * @example
   * 330182
   */
  adcode?: string;
  /**
   * @example
   * HGH
   */
  airportCityCode?: string;
  /**
   * @example
   * 杭州
   */
  airportCityName?: string;
  /**
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @example
   * 杭州
   */
  airportParentCityName?: string;
  /**
   * @example
   * 杭州
   */
  countyCityAdcode?: string;
  /**
   * @example
   * 330182
   */
  countyCityName?: string;
  /**
   * @example
   * 330182
   */
  prefectureCityAdcode?: string;
  /**
   * @example
   * 杭州
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  /**
   * @example
   * HGH
   */
  stopAirport?: string;
  stopAirportCountyInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo;
  /**
   * @example
   * 萧山国际机场
   */
  stopAirportName?: string;
  /**
   * @example
   * T1
   */
  stopArrTerm?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  stopArrTime?: string;
  /**
   * @example
   * BJS
   */
  stopCityCode?: string;
  /**
   * @example
   * 北京
   */
  stopCityName?: string;
  /**
   * @example
   * T1
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  stopDepTime?: string;
  /**
   * @example
   * 60
   */
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
      stopAirportCountyInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo,
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  depCityLuggageDirect?: number;
  /**
   * @example
   * 1
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosOtherInfo extends $dara.Model {
  /**
   * @example
   * 2.5年
   */
  aircraftAge?: string;
  /**
   * @example
   * 平均延误58分钟
   */
  avgDelayTime?: string;
  /**
   * @example
   * 10%
   */
  flightCancelRate?: string;
  /**
   * @example
   * 10%
   */
  jetBridgeRate?: string;
  /**
   * @example
   * 到达准点率90%
   */
  onTimeRate?: string;
  /**
   * @example
   * true
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark extends $dara.Model {
  /**
   * @example
   * 前往菲律宾的旅客，请确保持有往返纸质行程单以及纸质签证办理登记手续，否则可能会被当地政府拒绝入境
   */
  depCityVisaRemark?: string;
  /**
   * @example
   * 0
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @example
   * 国航
   */
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  /**
   * @example
   * 2022-06-06T12:56:34Z
   */
  arrTimeUTC?: string;
  depAirportInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @example
   * 2022-06-06T12:56:34Z
   */
  depTimeUTC?: string;
  /**
   * @example
   * 320
   */
  duration?: number;
  /**
   * @example
   * CA2013
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  /**
   * @example
   * 中型机
   */
  flightSize?: string;
  flightStopInfoList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList[];
  /**
   * @example
   * 320
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo;
  /**
   * @example
   * 空客
   */
  manufacturer?: string;
  /**
   * @example
   * 1
   */
  meal?: number;
  /**
   * @example
   * 小食
   */
  mealDesc?: string;
  /**
   * @example
   * 12
   */
  miles?: number;
  /**
   * @example
   * 90%
   */
  onTimeRate?: string;
  /**
   * @example
   * 0
   */
  oneMore?: number;
  /**
   * @example
   * +1天
   */
  oneMoreShow?: string;
  otherInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosOtherInfo;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * KN6728HGHPKX0725
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark;
  /**
   * @example
   * true
   */
  share?: boolean;
  /**
   * @example
   * 中
   */
  shortFlightSize?: string;
  /**
   * @example
   * true
   */
  stop?: boolean;
  ticketingAirlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo;
  /**
   * @example
   * 5小时20分
   */
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
      airlineInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arrTimeUTC: 'string',
      depAirportInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      depTimeUTC: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo,
      manufacturer: 'string',
      meal: 'number',
      mealDesc: 'string',
      miles: 'number',
      onTimeRate: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      otherInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosOtherInfo,
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark,
      share: 'boolean',
      shortFlightSize: 'string',
      stop: 'boolean',
      ticketingAirlineInfo: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo,
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfos extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @example
   * 120
   */
  duration?: number;
  flightSegmentInfos?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfos[];
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
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfos },
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

export class IntlFlightReShopListSearchResponseBodyModuleReShopItemList extends $dara.Model {
  bestPriceItem?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItem;
  flightJourneyInfos?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfos[];
  static names(): { [key: string]: string } {
    return {
      bestPriceItem: 'best_price_item',
      flightJourneyInfos: 'flight_journey_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestPriceItem: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItem,
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfos },
    };
  }

  validate() {
    if(this.bestPriceItem && typeof (this.bestPriceItem as any).validate === 'function') {
      (this.bestPriceItem as any).validate();
    }
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopListSearchResponseBodyModule extends $dara.Model {
  /**
   * @example
   * false
   */
  needContinue?: boolean;
  /**
   * @example
   * 2000
   */
  nextReqWaitTime?: number;
  reShopItemList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemList[];
  /**
   * @example
   * 284e692fffdf71e8a49aebbe0657a625
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      needContinue: 'need_continue',
      nextReqWaitTime: 'next_req_wait_time',
      reShopItemList: 're_shop_item_list',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needContinue: 'boolean',
      nextReqWaitTime: 'number',
      reShopItemList: { 'type': 'array', 'itemType': IntlFlightReShopListSearchResponseBodyModuleReShopItemList },
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reShopItemList)) {
      $dara.Model.validateArray(this.reShopItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopListSearchResponseBody extends $dara.Model {
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
  module?: IntlFlightReShopListSearchResponseBodyModule;
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
      module: IntlFlightReShopListSearchResponseBodyModule,
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

