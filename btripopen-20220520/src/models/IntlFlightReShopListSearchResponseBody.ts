// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleReShopItemListBestPriceItemShoppingItemMapValue } from "./ModuleReShopItemListBestPriceItemShoppingItemMapValue";
import { ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue } from "./ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue";


export class IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItemsSegmentPositionList extends $dara.Model {
  /**
   * @remarks
   * The journey ordinal number (starting from 0).
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The segment ordinal number (starting from 0 within the same journey).
   * 
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
   * @remarks
   * The discount value.
   * 
   * @example
   * 5.1
   */
  discountNum?: number;
  /**
   * @remarks
   * The list of segment keys contained in the sub-item.
   */
  segmentKeys?: string[];
  /**
   * @remarks
   * The list of segment position information contained in the sub-item.
   */
  segmentPositionList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItemSubItemsSegmentPositionList[];
  /**
   * @remarks
   * Key: ADT (adult), CHD (child), or INFANT (infant).
   */
  shoppingItemMap?: { [key: string]: ModuleReShopItemListBestPriceItemSubItemsShoppingItemMapValue };
  /**
   * @remarks
   * The unique item ID.
   * 
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
   * @remarks
   * The item ID.
   * 
   * @example
   * b83e3d6ebb8b44dfb94c763abc66c966_2
   */
  itemId?: string;
  /**
   * @remarks
   * The item type. Valid values: normal: standard item. combination: combined special offer.
   * 
   * @example
   * normal
   */
  itemType?: string;
  /**
   * @remarks
   * The pricing information mapped by passenger type.
   */
  shoppingItemMap?: { [key: string]: ModuleReShopItemListBestPriceItemShoppingItemMapValue };
  /**
   * @remarks
   * The sub-items. Combined products may have multiple sub-items.
   */
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
   * @remarks
   * The airline code.
   * 
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
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
   * @remarks
   * The airport code.
   * 
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @remarks
   * The short name of the airport.
   * 
   * @example
   * 萧山
   */
  airportShortName?: string;
  /**
   * @remarks
   * The terminal.
   * 
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
   * @remarks
   * The airport code.
   * 
   * @example
   * PKX
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 大兴国际机场
   */
  airportName?: string;
  /**
   * @remarks
   * The short name of the airport.
   * 
   * @example
   * 大兴
   */
  airportShortName?: string;
  /**
   * @remarks
   * The terminal.
   * 
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
   * @remarks
   * The airline code.
   * 
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
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
  /**
   * @remarks
   * The operating airline information.
   */
  operatingAirlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
  /**
   * @remarks
   * The operating carrier flight number. This field has a value only for codeshare flights.
   * 
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
   * @remarks
   * The administrative division code.
   * 
   * @example
   * 330182
   */
  adcode?: string;
  /**
   * @remarks
   * The airport city code.
   * 
   * @example
   * HGH
   */
  airportCityCode?: string;
  /**
   * @remarks
   * The city name of the airport.
   * [_single.resp.200.props.module.re_shop_item_list.items.flight_journey_infos.items.flight_segment_infos.items.flight_stop_info
   * 
   * @example
   * 杭州
   */
  airportCityName?: string;
  /**
   * @remarks
   * The airport code.
   * 
   * @example
   * HGH
   */
  airportCode?: string;
  /**
   * @remarks
   * The airport name.
   * 
   * @example
   * 萧山国际机场
   */
  airportName?: string;
  /**
   * @remarks
   * The parent city name of the airport.
   * 
   * @example
   * 杭州
   */
  airportParentCityName?: string;
  /**
   * @remarks
   * The administrative division code of the county-level city where the airport is located.
   * >Notice: This value is null if the airport is not at the county level.</notice>
   * 
   * @example
   * 杭州
   */
  countyCityAdcode?: string;
  /**
   * @remarks
   * The name of the county-level city where the airport is located.
   * >Notice: This value is null if the airport is not at the county level.</notice>
   * 
   * @example
   * 330182
   */
  countyCityName?: string;
  /**
   * @remarks
   * The administrative division code of the prefecture-level city where the airport is located.
   * 
   * @example
   * 330182
   */
  prefectureCityAdcode?: string;
  /**
   * @remarks
   * The name of the prefecture-level city where the airport is located.
   * 
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
   * @remarks
   * The stopover airport.
   * 
   * @example
   * HGH
   */
  stopAirport?: string;
  /**
   * @remarks
   * The county information of the stopover airport.
   */
  stopAirportCountyInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoListStopAirportCountyInfo;
  /**
   * @remarks
   * The name of the stopover airport.
   * 
   * @example
   * 萧山国际机场
   */
  stopAirportName?: string;
  /**
   * @remarks
   * The arrival terminal at the stopover.
   * 
   * @example
   * T1
   */
  stopArrTerm?: string;
  /**
   * @remarks
   * The arrival time at the stopover. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 07:25
   */
  stopArrTime?: string;
  /**
   * @remarks
   * The three-letter code of the stopover city.
   * 
   * @example
   * BJS
   */
  stopCityCode?: string;
  /**
   * @remarks
   * The name of the stopover city.
   * 
   * @example
   * 北京
   */
  stopCityName?: string;
  /**
   * @remarks
   * The departure terminal at the stopover.
   * 
   * @example
   * T1
   */
  stopDepTerm?: string;
  /**
   * @remarks
   * The departure time from the stopover. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 09:25
   */
  stopDepTime?: string;
  /**
   * @remarks
   * The stopover duration, in minutes.
   * 
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
   * @remarks
   * The luggage through-check status for the departure city. Valid values:
   * - 0: re-check required.
   * - 1: through-checked.
   * - null: unknown.
   * 
   * @example
   * 1
   */
  depCityLuggageDirect?: number;
  /**
   * @remarks
   * The luggage through-check status for the departure city. Valid values:
   * - 0: re-check required.
   * - 1: through-checked.
   * - null: unknown.
   * 
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
   * @remarks
   * The aircraft age.
   * 
   * @example
   * 2.5年
   */
  aircraftAge?: string;
  /**
   * @remarks
   * The average delay time.
   * 
   * @example
   * 平均延误58分钟
   */
  avgDelayTime?: string;
  /**
   * @remarks
   * The flight cancellation rate.
   * 
   * @example
   * 10%
   */
  flightCancelRate?: string;
  /**
   * @remarks
   * The jet bridge rate.
   * 
   * @example
   * 10%
   */
  jetBridgeRate?: string;
  /**
   * @remarks
   * The on-time rate information.
   * 
   * @example
   * 到达准点率90%
   */
  onTimeRate?: string;
  /**
   * @remarks
   * Indicates whether Wi-Fi is available.
   * 
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
   * @remarks
   * The transit visa information for the departure city.
   * 
   * @example
   * 前往菲律宾的旅客，请确保持有往返纸质行程单以及纸质签证办理登记手续，否则可能会被当地政府拒绝入境
   */
  depCityVisaRemark?: string;
  /**
   * @remarks
   * The transit visa type for the departure city. Valid values:
   * - 0: no transit visa required.
   * - 1: transit visa required.
   * 
   * @example
   * 0
   */
  depCityVisaType?: number;
  /**
   * @remarks
   * The transit visa information for stopover cities, one entry per stopover city.
   */
  stopCityVisaRemarks?: string[];
  /**
   * @remarks
   * The transit visa types for stopover cities, one entry per stopover city.
   */
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
   * @remarks
   * The airline code.
   * 
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * The airline name.
   * 
   * @example
   * 中国国航
   */
  airlineName?: string;
  /**
   * @remarks
   * Indicates whether the airline is a low-cost airline.
   * 
   * @example
   * false
   */
  cheapAirline?: boolean;
  /**
   * @remarks
   * The URL of the airline icon.
   * 
   * @example
   * https://
   */
  iconUrl?: string;
  /**
   * @remarks
   * The short name of the airline.
   * 
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
  /**
   * @remarks
   * The marketing airline information.
   */
  airlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  /**
   * @remarks
   * The arrival airport information.
   */
  arrAirportInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The name of the arrival city.
   * 
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @remarks
   * The arrival time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  /**
   * @remarks
   * The arrival time with time zone.
   * 
   * @example
   * 2022-06-06T12:56:34Z
   */
  arrTimeUTC?: string;
  /**
   * @remarks
   * The departure airport information.
   */
  depAirportInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * The name of the departure city.
   * 
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @remarks
   * The departure time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @remarks
   * The departure time with time zone.
   * 
   * @example
   * 2022-06-06T12:56:34Z
   */
  depTimeUTC?: string;
  /**
   * @remarks
   * The total duration of the flight segment in minutes.
   * 
   * @example
   * 320
   */
  duration?: number;
  /**
   * @remarks
   * The flight number.
   * 
   * @example
   * CA2013
   */
  flightNo?: string;
  /**
   * @remarks
   * The codeshare flight information.
   */
  flightShareInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  /**
   * @remarks
   * The aircraft type name.
   * 
   * @example
   * 中型机
   */
  flightSize?: string;
  /**
   * @remarks
   * The flight stopover list.
   */
  flightStopInfoList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList[];
  /**
   * @remarks
   * The aircraft type code.
   * 
   * @example
   * 320
   */
  flightType?: string;
  /**
   * @remarks
   * The journey index.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * Indicates whether luggage is through-checked for the current segment.
   */
  luggageDirectInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosLuggageDirectInfo;
  /**
   * @remarks
   * The manufacturer.
   * 
   * @example
   * 空客
   */
  manufacturer?: string;
  /**
   * @remarks
   * Indicates whether a meal is provided. Valid values:
   * - 0: no meal.
   * - 1: meal provided.
   * 
   * @example
   * 1
   */
  meal?: number;
  /**
   * @remarks
   * The meal description.
   * 
   * @example
   * 小食
   */
  mealDesc?: string;
  /**
   * @remarks
   * The flight mileage.
   * 
   * @example
   * 12
   */
  miles?: number;
  /**
   * @remarks
   * The on-time rate information.
   * 
   * @example
   * 90%
   */
  onTimeRate?: string;
  /**
   * @remarks
   * The number of extra days. For example, 1 indicates that the flight crosses 1 day.
   * 
   * @example
   * 0
   */
  oneMore?: number;
  /**
   * @remarks
   * The cross-day display text.
   * 
   * @example
   * +1天
   */
  oneMoreShow?: string;
  /**
   * @remarks
   * The other information about the flight segment.
   */
  otherInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosOtherInfo;
  /**
   * @remarks
   * The segment index, starting from 0 within the same journey.
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @remarks
   * The unique key of the segment.
   * 
   * @example
   * KN6728HGHPKX0725
   */
  segmentKey?: string;
  /**
   * @remarks
   * The transit visa information for the current segment.
   */
  segmentVisaRemark?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosSegmentVisaRemark;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * @example
   * true
   */
  share?: boolean;
  /**
   * @remarks
   * The short name of the aircraft type.
   * 
   * @example
   * 中
   */
  shortFlightSize?: string;
  /**
   * @remarks
   * Indicates whether the flight has a stopover.
   * 
   * @example
   * true
   */
  stop?: boolean;
  /**
   * @remarks
   * The ticketing airline information.
   */
  ticketingAirlineInfo?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfosTicketingAirlineInfo;
  /**
   * @remarks
   * The total duration of the flight segment.
   * 
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
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The name of the arrival city.
   * 
   * @example
   * 杭州
   */
  arrCityName?: string;
  /**
   * @remarks
   * The arrival time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * The name of the departure city.
   * 
   * @example
   * 北京
   */
  depCityName?: string;
  /**
   * @remarks
   * The departure time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @remarks
   * The total duration, in minutes.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The flight segment information.
   */
  flightSegmentInfos?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListFlightJourneyInfosFlightSegmentInfos[];
  /**
   * @remarks
   * The journey index, starting from 0.
   * 
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @remarks
   * The transfer duration.
   * 
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
  /**
   * @remarks
   * The lowest price item.
   */
  bestPriceItem?: IntlFlightReShopListSearchResponseBodyModuleReShopItemListBestPriceItem;
  /**
   * @remarks
   * The flight journey information.
   */
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
   * @remarks
   * Indicates whether polling needs to continue.
   * 
   * @example
   * false
   */
  needContinue?: boolean;
  /**
   * @remarks
   * The wait time before the next search request, in milliseconds.
   * 
   * @example
   * 2000
   */
  nextReqWaitTime?: number;
  /**
   * @remarks
   * The flight list.
   */
  reShopItemList?: IntlFlightReShopListSearchResponseBodyModuleReShopItemList[];
  /**
   * @remarks
   * The query record token for external polling.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: IntlFlightReShopListSearchResponseBodyModule;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace ID of the request, typically used for troubleshooting.
   * 
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

