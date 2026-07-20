// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList extends $dara.Model {
  /**
   * @example
   * 165485404
   */
  applyId?: string;
  /**
   * @example
   * 大兴国际机场
   */
  arrAirport?: string;
  /**
   * @example
   * PKX
   */
  arrAirportCode?: string;
  /**
   * @example
   * 北京
   */
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  changeCabin?: string;
  /**
   * @example
   * Y
   */
  changeCabinLevel?: string;
  /**
   * @example
   * 100
   */
  changeFee?: number;
  /**
   * @example
   * MU7767
   */
  changeFlightNo?: string;
  /**
   * @example
   * 33576
   */
  changeOrderId?: number;
  /**
   * @example
   * 个人原因
   */
  changeReason?: string;
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * 萧山国际机场
   */
  depAirport?: string;
  /**
   * @example
   * HGH
   */
  depAirportCode?: string;
  /**
   * @example
   * 杭州
   */
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * 无
   */
  discount?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 00-123123
   */
  originTicketNo?: string;
  /**
   * @example
   * a165485404
   */
  outApplyId?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 西安
   */
  stopCity?: string;
  /**
   * @example
   * 000-123123
   */
  ticketNo?: string;
  /**
   * @example
   * OPEN
   */
  ticketStatus?: string;
  /**
   * @example
   * 0
   */
  ticketStatusCode?: number;
  /**
   * @example
   * 100
   */
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      changeCabin: 'change_cabin',
      changeCabinLevel: 'change_cabin_level',
      changeFee: 'change_fee',
      changeFlightNo: 'change_flight_no',
      changeOrderId: 'change_order_id',
      changeReason: 'change_reason',
      changeType: 'change_type',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      discount: 'discount',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      originTicketNo: 'origin_ticket_no',
      outApplyId: 'out_apply_id',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTime: 'string',
      changeCabin: 'string',
      changeCabinLevel: 'string',
      changeFee: 'number',
      changeFlightNo: 'string',
      changeOrderId: 'number',
      changeReason: 'string',
      changeType: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTime: 'string',
      discount: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      originTicketNo: 'string',
      outApplyId: 'string',
      segmentIndex: 'number',
      stopCity: 'string',
      ticketNo: 'string',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty extends $dara.Model {
  /**
   * @example
   * 330100
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
   * null
   */
  airportParentCityName?: string;
  /**
   * @example
   * null
   */
  countyCityAdcode?: string;
  /**
   * @example
   * null
   */
  countyCityName?: string;
  /**
   * @example
   * 330100
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

export class FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty extends $dara.Model {
  /**
   * @example
   * 110100
   */
  adcode?: string;
  /**
   * @example
   * BJS
   */
  airportCityCode?: string;
  /**
   * @example
   * 北京
   */
  airportCityName?: string;
  /**
   * @example
   * PKX
   */
  airportCode?: string;
  /**
   * @example
   * 北京大兴国际机场
   */
  airportName?: string;
  /**
   * @example
   * 北京
   */
  airportParentCityName?: string;
  /**
   * @example
   * null
   */
  countyCityAdcode?: string;
  /**
   * @example
   * null
   */
  countyCityName?: string;
  /**
   * @example
   * 110100
   */
  prefectureCityAdcode?: string;
  /**
   * @example
   * 北京
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

export class FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty extends $dara.Model {
  /**
   * @example
   * 330100
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
   * null
   */
  airportParentCityName?: string;
  /**
   * @example
   * null
   */
  countyCityAdcode?: string;
  /**
   * @example
   * null
   */
  countyCityName?: string;
  /**
   * @example
   * 330100
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

export class FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList extends $dara.Model {
  stopAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty;
  /**
   * @example
   * HGH
   */
  stopAirportCode?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirportCityCounty: 'stop_airport_city_county',
      stopAirportCode: 'stop_airport_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoListStopAirportCityCounty,
      stopAirportCode: 'string',
    };
  }

  validate() {
    if(this.stopAirportCityCounty && typeof (this.stopAirportCityCounty as any).validate === 'function') {
      (this.stopAirportCityCounty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightInfoList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  /**
   * @example
   * 东航
   */
  airlineName?: string;
  arrAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty;
  /**
   * @example
   * LHW
   */
  arrAirportCode?: string;
  /**
   * @example
   * 兰州中川机场
   */
  arrAirportName?: string;
  /**
   * @example
   * 330100
   */
  arrCityAdCode?: string;
  /**
   * @example
   * LHW
   */
  arrCityCode?: string;
  /**
   * @example
   * 兰州
   */
  arrCityName?: string;
  /**
   * @example
   * T3
   */
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinLevel?: string;
  depAirportCityCounty?: FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  /**
   * @example
   * 栎社国际机场
   */
  depAirportName?: string;
  /**
   * @example
   * 330100
   */
  depCityAdCode?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  /**
   * @example
   * 宁波
   */
  depCityName?: string;
  /**
   * @example
   * T4
   */
  depTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * 900
   */
  flightMile?: number;
  /**
   * @example
   * MU3849
   */
  flightNo?: string;
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
  stopCity?: string[];
  stopCityInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList[];
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrAirportCityCounty: 'arr_airport_city_county',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityAdCode: 'arr_city_ad_code',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinLevel: 'cabin_level',
      depAirportCityCounty: 'dep_airport_city_county',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityAdCode: 'dep_city_ad_code',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
      stopCityInfoList: 'stop_city_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListArrAirportCityCounty,
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityAdCode: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinLevel: 'string',
      depAirportCityCounty: FlightOrderQueryResponseBodyModuleFlightInfoListDepAirportCityCounty,
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityAdCode: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
      stopCityInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoListStopCityInfoList },
    };
  }

  validate() {
    if(this.arrAirportCityCounty && typeof (this.arrAirportCityCounty as any).validate === 'function') {
      (this.arrAirportCityCounty as any).validate();
    }
    if(this.depAirportCityCounty && typeof (this.depAirportCityCounty as any).validate === 'function') {
      (this.depAirportCityCounty as any).validate();
    }
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    if(Array.isArray(this.stopCityInfoList)) {
      $dara.Model.validateArray(this.stopCityInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList extends $dara.Model {
  /**
   * @example
   * 131241241
   */
  applyId?: string;
  /**
   * @example
   * 大兴国际机场
   */
  arrAirport?: string;
  /**
   * @example
   * PKX
   */
  arrAirportCode?: string;
  /**
   * @example
   * 北京
   */
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 100
   */
  companyRefundTicketFee?: number;
  /**
   * @example
   * 萧山国际机场
   */
  depAirport?: string;
  /**
   * @example
   * HGH
   */
  depAirportCode?: string;
  /**
   * @example
   * 杭州
   */
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * MU9688
   */
  flightNo?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * a131241241
   */
  outApplyId?: string;
  /**
   * @example
   * 100
   */
  personalRefundTicketFee?: number;
  /**
   * @example
   * 43667
   */
  refundOrderId?: number;
  /**
   * @example
   * 临时不出差
   */
  refundReason?: string;
  /**
   * @example
   * 100
   */
  refundTicketFee?: number;
  /**
   * @example
   * 0
   */
  refundType?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 000-13232
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      companyRefundTicketFee: 'company_refund_ticket_fee',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      outApplyId: 'out_apply_id',
      personalRefundTicketFee: 'personal_refund_ticket_fee',
      refundOrderId: 'refund_order_id',
      refundReason: 'refund_reason',
      refundTicketFee: 'refund_ticket_fee',
      refundType: 'refund_type',
      segmentIndex: 'segment_index',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      companyRefundTicketFee: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      outApplyId: 'string',
      personalRefundTicketFee: 'number',
      refundOrderId: 'number',
      refundReason: 'string',
      refundTicketFee: 'number',
      refundType: 'number',
      segmentIndex: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleFlightTicketInfoList extends $dara.Model {
  /**
   * @example
   * 大兴国际机场
   */
  arrAirport?: string;
  /**
   * @example
   * PKX
   */
  arrAirportCode?: string;
  /**
   * @example
   * 北京
   */
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * false
   */
  changed?: boolean;
  /**
   * @example
   * 萧山国际机场
   */
  depAirport?: string;
  /**
   * @example
   * HGH
   */
  depAirportCode?: string;
  /**
   * @example
   * 杭州
   */
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * 10
   */
  discount?: number;
  /**
   * @example
   * HO1739
   */
  flightNo?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  /**
   * @example
   * 1
   */
  journeyIndex?: number;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 100 票价个人支付部分，如果是真中转/往返，体现在第一个航段上，第二个航段为0
   */
  personalPrice?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 100
   */
  settlePrice?: number;
  /**
   * @example
   * 000-123
   */
  ticketNo?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * OPEN
   */
  ticketStatus?: string;
  /**
   * @example
   * 1
   */
  ticketStatusCode?: number;
  /**
   * @example
   * 机票对应乘客用户id
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      buildPrice: 'build_price',
      changed: 'changed',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      oilPrice: 'oil_price',
      payType: 'pay_type',
      personalPrice: 'personal_price',
      segmentIndex: 'segment_index',
      settlePrice: 'settle_price',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      buildPrice: 'number',
      changed: 'boolean',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      discount: 'number',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      oilPrice: 'number',
      payType: 'number',
      personalPrice: 'number',
      segmentIndex: 'number',
      settlePrice: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleInsuranceInfoList extends $dara.Model {
  /**
   * @example
   * 100
   */
  amount?: number;
  /**
   * @example
   * 345-987-098
   */
  insuranceNo?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 航空意外险
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      insuranceNo: 'insurance_no',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      insuranceNo: 'string',
      name: 'string',
      status: 'number',
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

export class FlightOrderQueryResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 43316
   */
  id?: number;
  /**
   * @example
   * 测试发票
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 175634
   */
  applyId?: string;
  /**
   * @example
   * 出差
   */
  btripTitle?: string;
  /**
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @example
   * 商旅企业id
   */
  corpId?: string;
  /**
   * @example
   * 阿里巴巴
   */
  corpName?: string;
  /**
   * @example
   * 部门id
   */
  departId?: string;
  /**
   * @example
   * 测试部门
   */
  departName?: string;
  /**
   * @example
   * 12345,34556
   */
  exceedApplyId?: string;
  /**
   * @example
   * a12345,a34556
   */
  exceedThirdPartApplyId?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  /**
   * @example
   * 13628
   */
  itineraryId?: string;
  /**
   * @example
   * 146178
   */
  orderId?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  /**
   * @example
   * 阿里商旅
   */
  supplier?: string;
  /**
   * @example
   * CS-FLIGHT
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 00021230711000001Test-2
   */
  thirdpartBusinessId?: string;
  /**
   * @example
   * 三方企业id
   */
  thirdpartCorpId?: string;
  /**
   * @example
   * CS-FLIGHT
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  tripType?: number;
  /**
   * @example
   * 用户id
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdPartApplyId: 'exceed_third_part_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdPartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModulePassengerInfoList extends $dara.Model {
  /**
   * @example
   * 13446
   */
  costCenterId?: number;
  /**
   * @example
   * 测试成本中心
   */
  costCenterName?: string;
  /**
   * @example
   * CS-3345
   */
  costCenterNumber?: string;
  /**
   * @example
   * CS-PROJECT
   */
  projectCode?: string;
  /**
   * @example
   * 133576
   */
  projectId?: number;
  /**
   * @example
   * 测试项目
   */
  projectTitle?: string;
  /**
   * @example
   * CS-THIRDPROJECT
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * 出行人用户id
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
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

export class FlightOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 张三,李四
   */
  passengerName?: string;
  /**
   * @example
   * 4
   */
  payType?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * CS73290
   */
  tradeId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBodyModule extends $dara.Model {
  flightChangeTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList[];
  flightInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoList[];
  flightRefundTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList[];
  flightTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightTicketInfoList[];
  insuranceInfoList?: FlightOrderQueryResponseBodyModuleInsuranceInfoList[];
  invoiceInfo?: FlightOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: FlightOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: FlightOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: FlightOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightChangeTicketInfoList: 'flight_change_ticket_info_list',
      flightInfoList: 'flight_info_list',
      flightRefundTicketInfoList: 'flight_refund_ticket_info_list',
      flightTicketInfoList: 'flight_ticket_info_list',
      insuranceInfoList: 'insurance_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList },
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoList },
      flightRefundTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList },
      flightTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightTicketInfoList },
      insuranceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleInsuranceInfoList },
      invoiceInfo: FlightOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: FlightOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightChangeTicketInfoList)) {
      $dara.Model.validateArray(this.flightChangeTicketInfoList);
    }
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    if(Array.isArray(this.flightRefundTicketInfoList)) {
      $dara.Model.validateArray(this.flightRefundTicketInfoList);
    }
    if(Array.isArray(this.flightTicketInfoList)) {
      $dara.Model.validateArray(this.flightTicketInfoList);
    }
    if(Array.isArray(this.insuranceInfoList)) {
      $dara.Model.validateArray(this.insuranceInfoList);
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerInfoList)) {
      $dara.Model.validateArray(this.passengerInfoList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderQueryResponseBody extends $dara.Model {
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
  module?: FlightOrderQueryResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
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
      module: FlightOrderQueryResponseBodyModule,
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

