// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemShoppingItemMapValue } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValue";


export class IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes extends $dara.Model {
  /**
   * @example
   * V5400000
   */
  code?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemLabelList extends $dara.Model {
  /**
   * @example
   * 0
   */
  labelCode?: number;
  /**
   * @example
   * 测试商品
   */
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelCode: 'labelCode',
      labelName: 'labelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCode: 'number',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem extends $dara.Model {
  agreementPriceCodes?: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes[];
  /**
   * @example
   * normal
   */
  itemType?: string;
  labelList?: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemLabelList[];
  shoppingItemMap?: { [key: string]: ModuleFlightItemListBestPriceItemShoppingItemMapValue };
  static names(): { [key: string]: string } {
    return {
      agreementPriceCodes: 'agreement_price_codes',
      itemType: 'item_type',
      labelList: 'label_list',
      shoppingItemMap: 'shopping_item_map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPriceCodes: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes },
      itemType: 'string',
      labelList: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemLabelList },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemShoppingItemMapValue },
    };
  }

  validate() {
    if(Array.isArray(this.agreementPriceCodes)) {
      $dara.Model.validateArray(this.agreementPriceCodes);
    }
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo extends $dara.Model {
  /**
   * @example
   * 9H
   */
  airlineCode?: string;
  /**
   * @example
   * 中国国际航空
   */
  airlineName?: string;
  /**
   * @example
   * 国航
   */
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo extends $dara.Model {
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
   * --
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo extends $dara.Model {
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * DR
   */
  airlineCode?: string;
  /**
   * @example
   * 中国南方航空
   */
  airlineName?: string;
  /**
   * @example
   * 南航
   */
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo;
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
      operatingAirlineInfo: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfoOperatingAirlineInfo,
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList extends $dara.Model {
  /**
   * @example
   * SZX
   */
  stopAirport?: string;
  /**
   * @example
   * 深圳宝安国际机场
   */
  stopAirportName?: string;
  /**
   * @example
   * T3
   */
  stopArrTerm?: string;
  /**
   * @example
   * 2025-10-10 09:25
   */
  stopArrTime?: string;
  /**
   * @example
   * SZX
   */
  stopCityCode?: string;
  /**
   * @example
   * 深圳
   */
  stopCityName?: string;
  /**
   * @example
   * T3
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2025-10-10 07:25
   */
  stopDepTime?: string;
  /**
   * @example
   * 120
   */
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos extends $dara.Model {
  airlineInfo?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo;
  arrAirportInfo?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 北京
   */
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:45
   */
  arrTime?: string;
  depAirportInfo?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * 杭州
   */
  depCityName?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  depTime?: string;
  /**
   * @remarks
   * duration
   * 
   * @example
   * 140
   */
  duration?: number;
  /**
   * @example
   * HO1116
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo;
  /**
   * @example
   * 中型机
   */
  flightSize?: string;
  flightStopInfoList?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList[];
  /**
   * @example
   * 320
   */
  flightType?: string;
  /**
   * @example
   * 空客
   */
  manufacturer?: string;
  /**
   * @example
   * 小食
   */
  mealDesc?: string;
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
  /**
   * @example
   * false
   */
  share?: boolean;
  /**
   * @example
   * 中
   */
  shortFlightSize?: string;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @example
   * 2小时20分
   */
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
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      oneMore: 'one_more',
      oneMoreShow: 'one_more_show',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      stop: 'stop',
      totalTime: 'total_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosAirlineInfo,
      arrAirportInfo: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfoList },
      flightType: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos extends $dara.Model {
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
   * 2023-08-13 09:45
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
   * 60
   */
  duration?: number;
  flightSegmentInfos?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos[];
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
      flightSegmentInfos: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfos },
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

export class IntlFlightListingSearchResponseBodyModuleFlightItemList extends $dara.Model {
  bestPriceItem?: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem;
  flightJourneyInfos?: IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos[];
  static names(): { [key: string]: string } {
    return {
      bestPriceItem: 'best_price_item',
      flightJourneyInfos: 'flight_journey_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestPriceItem: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem,
      flightJourneyInfos: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfos },
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

export class IntlFlightListingSearchResponseBodyModule extends $dara.Model {
  flightItemList?: IntlFlightListingSearchResponseBodyModuleFlightItemList[];
  /**
   * @example
   * false
   */
  needContinue?: boolean;
  /**
   * @example
   * ASDFASDFASDFASDFASDF
   */
  queryRecordId?: string;
  /**
   * @example
   * ee229f2d-1835-4199-bfe6-fd14afe8645e
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      flightItemList: 'flight_item_list',
      needContinue: 'need_continue',
      queryRecordId: 'query_record_id',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightItemList: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemList },
      needContinue: 'boolean',
      queryRecordId: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightItemList)) {
      $dara.Model.validateArray(this.flightItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchResponseBody extends $dara.Model {
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
  module?: IntlFlightListingSearchResponseBodyModule;
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
      module: IntlFlightListingSearchResponseBodyModule,
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

