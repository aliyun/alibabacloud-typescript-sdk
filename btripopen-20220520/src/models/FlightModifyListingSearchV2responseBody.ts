// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo extends $dara.Model {
  /**
   * @example
   * 中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @example
   * //gw.alicdn.com/tfs/TB12fJAFHr1gK0jSZR0XXbP8XXa-450-450.png_80x80.jpg
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo extends $dara.Model {
  /**
   * @example
   * XIL
   */
  airportCode?: string;
  /**
   * @example
   * 锡林浩特机场
   */
  airportName?: string;
  /**
   * @example
   * 锡林浩特
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

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  /**
   * @example
   * 首都国际机场
   */
  airportName?: string;
  /**
   * @example
   * 首都
   */
  airportShortName?: string;
  /**
   * @example
   * T2
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

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * 航空公司中文名, 如：中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 航空公司中文简称, 如：国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * 航空公司代码, 如"HU", 表示海航
   */
  airlineCode?: string;
  /**
   * @example
   * 航空公司logo，如：https://img.alicdn.com/tps/TB1DjLzLXXXXXaoXFXXXXXXXXXX-64-64.png
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * 承运方航班号（共享航班时有值）
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
      operatingAirlineInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfoOperatingAirlineInfo,
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

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo extends $dara.Model {
  /**
   * @example
   * 经停机场
   */
  stopAirport?: string;
  /**
   * @example
   * 经停航站楼: 降落
   */
  stopArrTerm?: string;
  /**
   * @example
   * 经停站到达时间
   */
  stopArrTime?: string;
  /**
   * @example
   * 经停城市三字码
   */
  stopCityCode?: string;
  /**
   * @example
   * 经停城市名称
   */
  stopCityName?: string;
  /**
   * @example
   * 经停航站楼: 起飞
   */
  stopDepTerm?: string;
  /**
   * @example
   * 经停站出发时间
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo extends $dara.Model {
  /**
   * @example
   * 航空公司中文名, 如：中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 航空公司中文简称, 如：国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * 航空公司代码, 如"HU", 表示海航
   */
  airlineCode?: string;
  /**
   * @example
   * 航空公司logo，如：https://img.alicdn.com/tps/TB1DjLzLXXXXXaoXFXXXXXXXXXX-64-64.png
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo extends $dara.Model {
  transferAirlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo;
  /**
   * @example
   * 中转城市三字码
   */
  transferCityCode?: string;
  /**
   * @example
   * 中转城市名称
   */
  transferCityName?: string;
  /**
   * @example
   * 中转出发时间
   */
  transferDepTime?: string;
  /**
   * @example
   * 中转第二段航班号
   */
  transferFlightNo?: string;
  /**
   * @example
   * 中转第二段航班机型中文名，如"中型机"
   */
  transferFlightSize?: string;
  /**
   * @example
   * false
   */
  transferShare?: boolean;
  /**
   * @example
   * 60
   */
  transferStopTime?: number;
  static names(): { [key: string]: string } {
    return {
      transferAirlineInfo: 'transfer_airline_info',
      transferCityCode: 'transfer_city_code',
      transferCityName: 'transfer_city_name',
      transferDepTime: 'transfer_dep_time',
      transferFlightNo: 'transfer_flight_no',
      transferFlightSize: 'transfer_flight_size',
      transferShare: 'transfer_share',
      transferStopTime: 'transfer_stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferAirlineInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfoTransferAirlineInfo,
      transferCityCode: 'string',
      transferCityName: 'string',
      transferDepTime: 'string',
      transferFlightNo: 'string',
      transferFlightSize: 'string',
      transferShare: 'boolean',
      transferStopTime: 'number',
    };
  }

  validate() {
    if(this.transferAirlineInfo && typeof (this.transferAirlineInfo as any).validate === 'function') {
      (this.transferAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTOReShopPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * -1
   */
  reShopAdultChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopAdultPrice?: number;
  /**
   * @example
   * -1
   */
  reShopAdultPriceGap?: number;
  /**
   * @example
   * -1
   */
  reShopChildChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopChildPrice?: number;
  /**
   * @example
   * -1
   */
  reShopChildPriceGap?: number;
  /**
   * @example
   * -1
   */
  reShopInfChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopInfPrice?: number;
  /**
   * @example
   * -1
   */
  reShopInfPriceGap?: number;
  static names(): { [key: string]: string } {
    return {
      reShopAdultChangeFee: 're_shop_adult_change_fee',
      reShopAdultPrice: 're_shop_adult_price',
      reShopAdultPriceGap: 're_shop_adult_price_gap',
      reShopChildChangeFee: 're_shop_child_change_fee',
      reShopChildPrice: 're_shop_child_price',
      reShopChildPriceGap: 're_shop_child_price_gap',
      reShopInfChangeFee: 're_shop_inf_change_fee',
      reShopInfPrice: 're_shop_inf_price',
      reShopInfPriceGap: 're_shop_inf_price_gap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reShopAdultChangeFee: 'number',
      reShopAdultPrice: 'number',
      reShopAdultPriceGap: 'number',
      reShopChildChangeFee: 'number',
      reShopChildPrice: 'number',
      reShopChildPriceGap: 'number',
      reShopInfChangeFee: 'number',
      reShopInfPrice: 'number',
      reShopInfPriceGap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * 126000
   */
  adultPrice?: number;
  /**
   * @example
   * 11000
   */
  adultTax?: number;
  /**
   * @example
   * 137000
   */
  adultTotalPrice?: number;
  /**
   * @example
   * 126000
   */
  beforeControlPrice?: number;
  /**
   * @example
   * 64000
   */
  childPrice?: number;
  /**
   * @example
   * 2000
   */
  childTax?: number;
  /**
   * @example
   * 66000
   */
  childTotalPrice?: number;
  /**
   * @example
   * 12000
   */
  infantPrice?: number;
  /**
   * @example
   * 0
   */
  infantTax?: number;
  /**
   * @example
   * 12000
   */
  infantTotalPrice?: number;
  /**
   * @example
   * 1300
   */
  originalAdultPrice?: number;
  /**
   * @example
   * 12300
   */
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTOReShopPriceInfoDTO;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      adultTotalPrice: 'adult_total_price',
      beforeControlPrice: 'before_control_price',
      childPrice: 'child_price',
      childTax: 'child_tax',
      childTotalPrice: 'child_total_price',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      infantTotalPrice: 'infant_total_price',
      originalAdultPrice: 'original_adult_price',
      originalAdultTotalPrice: 'original_adult_total_price',
      reShopPriceInfoDTO: 're_shop_price_info_d_t_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      adultTotalPrice: 'number',
      beforeControlPrice: 'number',
      childPrice: 'number',
      childTax: 'number',
      childTotalPrice: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      infantTotalPrice: 'number',
      originalAdultPrice: 'number',
      originalAdultTotalPrice: 'number',
      reShopPriceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTOReShopPriceInfoDTO,
    };
  }

  validate() {
    if(this.reShopPriceInfoDTO && typeof (this.reShopPriceInfoDTO as any).validate === 'function') {
      (this.reShopPriceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList extends $dara.Model {
  airlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo;
  arrAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-09-18 10:25:00
   */
  arrTime?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  depAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo;
  /**
   * @example
   * XIL
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-18 09:10:00
   */
  depTime?: string;
  /**
   * @example
   * 240
   */
  duration?: number;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  flightShareInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo;
  /**
   * @example
   * 小型机
   */
  flightSize?: string;
  flightStopInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo;
  flightTransferInfo?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * 8
   */
  leftNum?: string;
  /**
   * @example
   * 波音
   */
  manufacturer?: string;
  /**
   * @example
   * 餐食描述
   */
  mealDesc?: string;
  priceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO;
  /**
   * @example
   * 0
   */
  segmentSeq?: number;
  /**
   * @example
   * false
   */
  share?: boolean;
  /**
   * @example
   * 小
   */
  shortFlightSize?: string;
  /**
   * @example
   * 跨天展示文案，如"+1天"
   */
  spanDay?: string;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @example
   * false
   */
  transfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      cabinClass: 'cabinClass',
      cabinClassName: 'cabinClassName',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfo: 'flight_stop_info',
      flightTransferInfo: 'flight_transfer_info',
      flightType: 'flight_type',
      journeySeq: 'journey_seq',
      leftNum: 'left_num',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      priceInfoDTO: 'price_info_d_t_o',
      segmentSeq: 'segment_seq',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      spanDay: 'span_day',
      stop: 'stop',
      transfer: 'transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListAirlineInfo,
      arrAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListArrAirportInfo,
      arrCityCode: 'string',
      arrTime: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListDepAirportInfo,
      depCityCode: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightStopInfo,
      flightTransferInfo: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListFlightTransferInfo,
      flightType: 'string',
      journeySeq: 'number',
      leftNum: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      priceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightListPriceInfoDTO,
      segmentSeq: 'number',
      share: 'boolean',
      shortFlightSize: 'string',
      spanDay: 'string',
      stop: 'boolean',
      transfer: 'boolean',
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
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
    }
    if(this.flightTransferInfo && typeof (this.flightTransferInfo as any).validate === 'function') {
      (this.flightTransferInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo extends $dara.Model {
  /**
   * @example
   * 航空公司中文名, 如：中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 航空公司中文简称, 如：国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * 航空公司代码, 如"HU", 表示海航
   */
  airlineCode?: string;
  /**
   * @example
   * 航空公司logo，如：https://img.alicdn.com/tps/TB1DjLzLXXXXXaoXFXXXXXXXXXX-64-64.png
   */
  airlineIcon?: string;
  /**
   * @example
   * 廉航标识
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo extends $dara.Model {
  /**
   * @example
   * 机场代码
   */
  airportCode?: string;
  /**
   * @example
   * 机场名称
   */
  airportName?: string;
  /**
   * @example
   * 机场简称
   */
  airportShortName?: string;
  /**
   * @example
   * 航站楼
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

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * 机场代码
   */
  airportCode?: string;
  /**
   * @example
   * 机场名称
   */
  airportName?: string;
  /**
   * @example
   * 机场简称
   */
  airportShortName?: string;
  /**
   * @example
   * 航站楼
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

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * 航空公司中文名, 如：中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 航空公司中文简称, 如：国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * 航空公司代码, 如"HU", 表示海航
   */
  airlineCode?: string;
  /**
   * @example
   * 航空公司logo，如：https://img.alicdn.com/tps/TB1DjLzLXXXXXaoXFXXXXXXXXXX-64-64.png
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * 承运方航班号（共享航班时有值）
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
      operatingAirlineInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfoOperatingAirlineInfo,
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

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo extends $dara.Model {
  /**
   * @example
   * 经停机场
   */
  stopAirport?: string;
  /**
   * @example
   * 经停航站楼: 降落
   */
  stopArrTerm?: string;
  /**
   * @example
   * 经停城市名称
   */
  stopArrTime?: string;
  /**
   * @example
   * 经停城市三字码
   */
  stopCityCode?: string;
  /**
   * @example
   * 经停城市名称
   */
  stopCityName?: string;
  /**
   * @example
   * 经停航站楼: 起飞
   */
  stopDepTerm?: string;
  /**
   * @example
   * 经停站出发时间
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerm: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfoTransferAirlineInfo extends $dara.Model {
  /**
   * @example
   * 航空公司中文名, 如：中国国航
   */
  airlineChineseName?: string;
  /**
   * @example
   * 航空公司中文简称, 如：国航
   */
  airlineChineseShortName?: string;
  /**
   * @example
   * 航空公司代码, 如"HU", 表示海航
   */
  airlineCode?: string;
  /**
   * @example
   * 航空公司logo，如：https://img.alicdn.com/tps/TB1DjLzLXXXXXaoXFXXXXXXXXXX-64-64.png
   */
  airlineIcon?: string;
  /**
   * @example
   * false
   */
  cheapFlight?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineChineseName: 'airline_chinese_name',
      airlineChineseShortName: 'airline_chinese_short_name',
      airlineCode: 'airline_code',
      airlineIcon: 'airline_icon',
      cheapFlight: 'cheap_flight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineChineseName: 'string',
      airlineChineseShortName: 'string',
      airlineCode: 'string',
      airlineIcon: 'string',
      cheapFlight: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo extends $dara.Model {
  transferAirlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfoTransferAirlineInfo;
  /**
   * @example
   * 中转城市三字码
   */
  transferCityCode?: string;
  /**
   * @example
   * 中转城市名称
   */
  transferCityName?: string;
  /**
   * @example
   * 中转出发时间
   */
  transferDepTime?: string;
  /**
   * @example
   * 中转第二段航班号
   */
  transferFlightNo?: string;
  /**
   * @example
   * 中转第二段航班机型中文名，如"中型机"
   */
  transferFlightSize?: string;
  /**
   * @example
   * false
   */
  transferShare?: boolean;
  /**
   * @example
   * 20
   */
  transferStopTime?: number;
  static names(): { [key: string]: string } {
    return {
      transferAirlineInfo: 'transfer_airline_info',
      transferCityCode: 'transfer_city_code',
      transferCityName: 'transfer_city_name',
      transferDepTime: 'transfer_dep_time',
      transferFlightNo: 'transfer_flight_no',
      transferFlightSize: 'transfer_flight_size',
      transferShare: 'transfer_share',
      transferStopTime: 'transfer_stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transferAirlineInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfoTransferAirlineInfo,
      transferCityCode: 'string',
      transferCityName: 'string',
      transferDepTime: 'string',
      transferFlightNo: 'string',
      transferFlightSize: 'string',
      transferShare: 'boolean',
      transferStopTime: 'number',
    };
  }

  validate() {
    if(this.transferAirlineInfo && typeof (this.transferAirlineInfo as any).validate === 'function') {
      (this.transferAirlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * -1
   */
  reShopAdultChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopAdultPrice?: number;
  /**
   * @example
   * -1
   */
  reShopAdultPriceGap?: number;
  /**
   * @example
   * -1
   */
  reShopChildChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopChildPrice?: number;
  /**
   * @example
   * -1
   */
  reShopChildPriceGap?: number;
  /**
   * @example
   * -1
   */
  reShopInfChangeFee?: number;
  /**
   * @example
   * -1
   */
  reShopInfPrice?: number;
  /**
   * @example
   * -1
   */
  reShopInfPriceGap?: number;
  static names(): { [key: string]: string } {
    return {
      reShopAdultChangeFee: 're_shop_adult_change_fee',
      reShopAdultPrice: 're_shop_adult_price',
      reShopAdultPriceGap: 're_shop_adult_price_gap',
      reShopChildChangeFee: 're_shop_child_change_fee',
      reShopChildPrice: 're_shop_child_price',
      reShopChildPriceGap: 're_shop_child_price_gap',
      reShopInfChangeFee: 're_shop_inf_change_fee',
      reShopInfPrice: 're_shop_inf_price',
      reShopInfPriceGap: 're_shop_inf_price_gap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reShopAdultChangeFee: 'number',
      reShopAdultPrice: 'number',
      reShopAdultPriceGap: 'number',
      reShopChildChangeFee: 'number',
      reShopChildPrice: 'number',
      reShopChildPriceGap: 'number',
      reShopInfChangeFee: 'number',
      reShopInfPrice: 'number',
      reShopInfPriceGap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO extends $dara.Model {
  /**
   * @example
   * 1000
   */
  adultPrice?: number;
  /**
   * @example
   * 1000
   */
  adultTax?: number;
  /**
   * @example
   * 1000
   */
  adultTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  beforeControlPrice?: number;
  /**
   * @example
   * 1000
   */
  childPrice?: number;
  /**
   * @example
   * 1000
   */
  childTax?: number;
  /**
   * @example
   * 1000
   */
  childTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  infantPrice?: number;
  /**
   * @example
   * 1000
   */
  infantTax?: number;
  /**
   * @example
   * 1000
   */
  infantTotalPrice?: number;
  /**
   * @example
   * 1000
   */
  originalAdultPrice?: number;
  /**
   * @example
   * 1000
   */
  originalAdultTotalPrice?: number;
  reShopPriceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      adultTotalPrice: 'adult_total_price',
      beforeControlPrice: 'before_control_price',
      childPrice: 'child_price',
      childTax: 'child_tax',
      childTotalPrice: 'child_total_price',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      infantTotalPrice: 'infant_total_price',
      originalAdultPrice: 'original_adult_price',
      originalAdultTotalPrice: 'original_adult_total_price',
      reShopPriceInfoDTO: 're_shop_price_info_d_t_o',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      adultTotalPrice: 'number',
      beforeControlPrice: 'number',
      childPrice: 'number',
      childTax: 'number',
      childTotalPrice: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      infantTotalPrice: 'number',
      originalAdultPrice: 'number',
      originalAdultTotalPrice: 'number',
      reShopPriceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTOReShopPriceInfoDTO,
    };
  }

  validate() {
    if(this.reShopPriceInfoDTO && typeof (this.reShopPriceInfoDTO as any).validate === 'function') {
      (this.reShopPriceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList extends $dara.Model {
  airlineInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo;
  arrAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo;
  /**
   * @example
   * 到达城市三字码
   */
  arrCityCode?: string;
  /**
   * @example
   * 到达时间
   */
  arrTime?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClassName?: string;
  depAirportInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo;
  /**
   * @example
   * 出发城市三字码
   */
  depCityCode?: string;
  /**
   * @example
   * 出发时间
   */
  depTime?: string;
  /**
   * @example
   * 240
   */
  duration?: number;
  /**
   * @example
   * 航班号，中转多航段为第一程航班号
   */
  flightNo?: string;
  flightShareInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo;
  /**
   * @example
   * 机型中文名，如"中型机"
   */
  flightSize?: string;
  flightStopInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo;
  flightTransferInfo?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo;
  /**
   * @example
   * 机型代码，如738
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeySeq?: number;
  /**
   * @example
   * 7
   */
  leftNum?: string;
  /**
   * @example
   * 制造商，如"波音"
   */
  manufacturer?: string;
  /**
   * @example
   * 餐食描述
   */
  mealDesc?: string;
  priceInfoDTO?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO;
  /**
   * @example
   * 0
   */
  segmentSeq?: number;
  /**
   * @example
   * false
   */
  share?: boolean;
  /**
   * @example
   * 机型简称，如"中"
   */
  shortFlightSize?: string;
  /**
   * @example
   * 跨天展示文案，如"+1天"
   */
  spanDay?: string;
  /**
   * @example
   * false
   */
  stop?: boolean;
  /**
   * @example
   * false
   */
  transfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      airlineInfo: 'airline_info',
      arrAirportInfo: 'arr_airport_info',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      cabinClass: 'cabinClass',
      cabinClassName: 'cabinClassName',
      depAirportInfo: 'dep_airport_info',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      duration: 'duration',
      flightNo: 'flight_no',
      flightShareInfo: 'flight_share_info',
      flightSize: 'flight_size',
      flightStopInfo: 'flight_stop_info',
      flightTransferInfo: 'flight_transfer_info',
      flightType: 'flight_type',
      journeySeq: 'journey_seq',
      leftNum: 'left_num',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      priceInfoDTO: 'price_info_d_t_o',
      segmentSeq: 'segment_seq',
      share: 'share',
      shortFlightSize: 'short_flight_size',
      spanDay: 'span_day',
      stop: 'stop',
      transfer: 'transfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListAirlineInfo,
      arrAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListArrAirportInfo,
      arrCityCode: 'string',
      arrTime: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depAirportInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListDepAirportInfo,
      depCityCode: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightShareInfo,
      flightSize: 'string',
      flightStopInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightStopInfo,
      flightTransferInfo: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListFlightTransferInfo,
      flightType: 'string',
      journeySeq: 'number',
      leftNum: 'string',
      manufacturer: 'string',
      mealDesc: 'string',
      priceInfoDTO: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightListPriceInfoDTO,
      segmentSeq: 'number',
      share: 'boolean',
      shortFlightSize: 'string',
      spanDay: 'string',
      stop: 'boolean',
      transfer: 'boolean',
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
    if(this.flightStopInfo && typeof (this.flightStopInfo as any).validate === 'function') {
      (this.flightStopInfo as any).validate();
    }
    if(this.flightTransferInfo && typeof (this.flightTransferInfo as any).validate === 'function') {
      (this.flightTransferInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBodyModule extends $dara.Model {
  directFlightList?: FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList[];
  /**
   * @example
   * 2000
   */
  nextReqWaitTime?: number;
  /**
   * @example
   * true
   */
  retry?: boolean;
  /**
   * @example
   * a2c230080358295f99e03aa4e3ccf1bd
   */
  searchRetryToken?: string;
  /**
   * @example
   * a2ffebfe733742aab5c491d960ba3d59
   */
  sessionId?: string;
  transferFlightList?: FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList[];
  /**
   * @example
   * 为您推荐中转航班!
   */
  transferTitle?: string;
  static names(): { [key: string]: string } {
    return {
      directFlightList: 'direct_flight_list',
      nextReqWaitTime: 'next_req_wait_time',
      retry: 'retry',
      searchRetryToken: 'search_retry_token',
      sessionId: 'session_id',
      transferFlightList: 'transfer_flight_list',
      transferTitle: 'transfer_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directFlightList: { 'type': 'array', 'itemType': FlightModifyListingSearchV2ResponseBodyModuleDirectFlightList },
      nextReqWaitTime: 'number',
      retry: 'boolean',
      searchRetryToken: 'string',
      sessionId: 'string',
      transferFlightList: { 'type': 'array', 'itemType': FlightModifyListingSearchV2ResponseBodyModuleTransferFlightList },
      transferTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directFlightList)) {
      $dara.Model.validateArray(this.directFlightList);
    }
    if(Array.isArray(this.transferFlightList)) {
      $dara.Model.validateArray(this.transferFlightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightModifyListingSearchV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightModifyListingSearchV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2136019116915615924561621e06ee
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
      module: FlightModifyListingSearchV2ResponseBodyModule,
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

