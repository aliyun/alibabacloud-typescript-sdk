// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetailRefundReShopFeeDetailList extends $dara.Model {
  /**
   * @example
   * 21000
   */
  nonRefundableReShopHandlingFee?: number;
  /**
   * @example
   * 0
   */
  nonRefundableReShopUpgradeFee?: number;
  /**
   * @example
   * 0
   */
  nonRefundableTaxDiffFee?: number;
  /**
   * @example
   * 10002340021
   */
  reShopApplyId?: string;
  /**
   * @example
   * 14000
   */
  reShopRefundAmount?: number;
  /**
   * @example
   * 14000
   */
  reShopServiceRefundAmount?: number;
  /**
   * @example
   * 0
   */
  reShopUpgradeRefundAmount?: number;
  /**
   * @example
   * 0
   */
  refundTaxDiffAmount?: number;
  static names(): { [key: string]: string } {
    return {
      nonRefundableReShopHandlingFee: 'non_refundable_re_shop_handling_fee',
      nonRefundableReShopUpgradeFee: 'non_refundable_re_shop_upgrade_fee',
      nonRefundableTaxDiffFee: 'non_refundable_tax_diff_fee',
      reShopApplyId: 're_shop_apply_id',
      reShopRefundAmount: 're_shop_refund_amount',
      reShopServiceRefundAmount: 're_shop_service_refund_amount',
      reShopUpgradeRefundAmount: 're_shop_upgrade_refund_amount',
      refundTaxDiffAmount: 'refund_tax_diff_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonRefundableReShopHandlingFee: 'number',
      nonRefundableReShopUpgradeFee: 'number',
      nonRefundableTaxDiffFee: 'number',
      reShopApplyId: 'string',
      reShopRefundAmount: 'number',
      reShopServiceRefundAmount: 'number',
      reShopUpgradeRefundAmount: 'number',
      refundTaxDiffAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetail extends $dara.Model {
  /**
   * @example
   * 12400
   */
  alreadyUsedTotalAmount?: number;
  /**
   * @example
   * 21000
   */
  nonRefundableReShopHandlingFee?: number;
  /**
   * @example
   * 0
   */
  nonRefundableReShopUpgradeFee?: number;
  /**
   * @example
   * 0
   */
  nonRefundableTaxDiffFee?: number;
  /**
   * @example
   * 14000
   */
  reShopRefundAmount?: number;
  /**
   * @example
   * 14000
   */
  reShopServiceRefundAmount?: number;
  /**
   * @example
   * 0
   */
  reShopUpgradeRefundAmount?: number;
  refundReShopFeeDetailList?: IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetailRefundReShopFeeDetailList[];
  /**
   * @example
   * 0
   */
  refundTaxDiffAmount?: number;
  /**
   * @example
   * 45000
   */
  refundTaxFee?: number;
  /**
   * @example
   * 2000
   */
  refundTicketFee?: number;
  taxRefundAmount?: number;
  ticketRefundAmount?: number;
  totalRefundAmount?: number;
  static names(): { [key: string]: string } {
    return {
      alreadyUsedTotalAmount: 'already_used_total_amount',
      nonRefundableReShopHandlingFee: 'non_refundable_re_shop_handling_fee',
      nonRefundableReShopUpgradeFee: 'non_refundable_re_shop_upgrade_fee',
      nonRefundableTaxDiffFee: 'non_refundable_tax_diff_fee',
      reShopRefundAmount: 're_shop_refund_amount',
      reShopServiceRefundAmount: 're_shop_service_refund_amount',
      reShopUpgradeRefundAmount: 're_shop_upgrade_refund_amount',
      refundReShopFeeDetailList: 'refund_re_shop_fee_detail_list',
      refundTaxDiffAmount: 'refund_tax_diff_amount',
      refundTaxFee: 'refund_tax_fee',
      refundTicketFee: 'refund_ticket_fee',
      taxRefundAmount: 'tax_refund_amount',
      ticketRefundAmount: 'ticket_refund_amount',
      totalRefundAmount: 'total_refund_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUsedTotalAmount: 'number',
      nonRefundableReShopHandlingFee: 'number',
      nonRefundableReShopUpgradeFee: 'number',
      nonRefundableTaxDiffFee: 'number',
      reShopRefundAmount: 'number',
      reShopServiceRefundAmount: 'number',
      reShopUpgradeRefundAmount: 'number',
      refundReShopFeeDetailList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetailRefundReShopFeeDetailList },
      refundTaxDiffAmount: 'number',
      refundTaxFee: 'number',
      refundTicketFee: 'number',
      taxRefundAmount: 'number',
      ticketRefundAmount: 'number',
      totalRefundAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundReShopFeeDetailList)) {
      $dara.Model.validateArray(this.refundReShopFeeDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListTicketList extends $dara.Model {
  segmentKeyList?: string[];
  /**
   * @example
   * 784-3553845201
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      segmentKeyList: 'segment_key_list',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentKeyList: { 'type': 'array', 'itemType': 'string' },
      ticketNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segmentKeyList)) {
      $dara.Model.validateArray(this.segmentKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailList extends $dara.Model {
  /**
   * @example
   * 100001
   */
  passengerId?: number;
  refundFeeDetail?: IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetail;
  ticketList?: IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListTicketList[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      refundFeeDetail: 'refund_fee_detail',
      ticketList: 'ticket_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      refundFeeDetail: IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListRefundFeeDetail,
      ticketList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailListTicketList },
    };
  }

  validate() {
    if(this.refundFeeDetail && typeof (this.refundFeeDetail as any).validate === 'function') {
      (this.refundFeeDetail as any).validate();
    }
    if(Array.isArray(this.ticketList)) {
      $dara.Model.validateArray(this.ticketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * 1996-09-13
   */
  birthday?: string;
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @example
   * 1
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
   * btrip8432002
   */
  userId?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
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
      birthday: 'string',
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

export class IntlFlightRefundDetailResponseBodyModuleRefundOrderInfo extends $dara.Model {
  /**
   * @example
   * 2025-06-16 19:20:00
   */
  applyTime?: string;
  closeReason?: string;
  /**
   * @example
   * 4000
   */
  handingAmount?: number;
  /**
   * @example
   * 2025011317110900006
   */
  outRefundApplyId?: string;
  /**
   * @example
   * 0
   */
  reasonCode?: string;
  reasonDesc?: string;
  /**
   * @example
   * 10200
   */
  refundAmount?: number;
  /**
   * @example
   * 1000000003437017
   */
  refundApplyId?: string;
  /**
   * @example
   * 1000000003437020
   */
  relationRefundApplyId?: number;
  /**
   * @example
   * 9
   */
  status?: number;
  /**
   * @example
   * 2025-06-16 20:20:00
   */
  successTime?: string;
  /**
   * @example
   * true
   */
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'apply_time',
      closeReason: 'close_reason',
      handingAmount: 'handing_amount',
      outRefundApplyId: 'out_refund_apply_id',
      reasonCode: 'reason_code',
      reasonDesc: 'reason_desc',
      refundAmount: 'refund_amount',
      refundApplyId: 'refund_apply_id',
      relationRefundApplyId: 'relation_refund_apply_id',
      status: 'status',
      successTime: 'success_time',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'string',
      closeReason: 'string',
      handingAmount: 'number',
      outRefundApplyId: 'string',
      reasonCode: 'string',
      reasonDesc: 'string',
      refundAmount: 'number',
      refundApplyId: 'string',
      relationRefundApplyId: 'number',
      status: 'number',
      successTime: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBodyModuleSegmentListAirlineInfo extends $dara.Model {
  /**
   * @example
   * MU
   */
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListArrAirportInfo extends $dara.Model {
  /**
   * @example
   * HKG
   */
  airportCode?: string;
  airportName?: string;
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListDepAirportInfo extends $dara.Model {
  /**
   * @example
   * PEK
   */
  airportCode?: string;
  airportName?: string;
  airportShortName?: string;
  /**
   * @example
   * T1
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfoOperatingAirlineInfo extends $dara.Model {
  /**
   * @example
   * CA
   */
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfo extends $dara.Model {
  operatingAirlineInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfoOperatingAirlineInfo;
  /**
   * @example
   * CA0001
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
      operatingAirlineInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfoOperatingAirlineInfo,
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListFlightStopInfoList extends $dara.Model {
  /**
   * @example
   * HGH
   */
  stopAirport?: string;
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
   * HGH
   */
  stopCityCode?: string;
  stopCityName?: string;
  /**
   * @example
   * T1
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2023-08-13 07:45
   */
  stopDepTime?: string;
  /**
   * @example
   * 20
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListLuggageDirectInfo extends $dara.Model {
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentListSegmentVisaRemark extends $dara.Model {
  depCityVisaRemark?: string;
  /**
   * @example
   * 1
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

export class IntlFlightRefundDetailResponseBodyModuleSegmentList extends $dara.Model {
  airlineInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListAirlineInfo;
  arrAirportInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListArrAirportInfo;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-08-13 09:25
   */
  arrTime?: string;
  depAirportInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListDepAirportInfo;
  /**
   * @example
   * 370100
   */
  depCityCode?: string;
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
  /**
   * @example
   * NS8210
   */
  flightNo?: string;
  flightShareInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfo;
  flightSize?: string;
  flightStopInfoList?: IntlFlightRefundDetailResponseBodyModuleSegmentListFlightStopInfoList[];
  /**
   * @example
   * 787
   */
  flightType?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  luggageDirectInfo?: IntlFlightRefundDetailResponseBodyModuleSegmentListLuggageDirectInfo;
  manufacturer?: string;
  mealDesc?: string;
  /**
   * @example
   * 1
   */
  oneMore?: number;
  oneMoreShow?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * CZ5009PKXHKG0616
   */
  segmentKey?: string;
  segmentVisaRemark?: IntlFlightRefundDetailResponseBodyModuleSegmentListSegmentVisaRemark;
  /**
   * @example
   * true
   */
  share?: boolean;
  shortFlightSize?: string;
  /**
   * @example
   * true
   */
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
      journeyIndex: 'journey_index',
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
      airlineInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListAirlineInfo,
      arrAirportInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListArrAirportInfo,
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      depAirportInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListDepAirportInfo,
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      duration: 'number',
      flightNo: 'string',
      flightShareInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListFlightShareInfo,
      flightSize: 'string',
      flightStopInfoList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModuleSegmentListFlightStopInfoList },
      flightType: 'string',
      journeyIndex: 'number',
      luggageDirectInfo: IntlFlightRefundDetailResponseBodyModuleSegmentListLuggageDirectInfo,
      manufacturer: 'string',
      mealDesc: 'string',
      oneMore: 'number',
      oneMoreShow: 'string',
      segmentIndex: 'number',
      segmentKey: 'string',
      segmentVisaRemark: IntlFlightRefundDetailResponseBodyModuleSegmentListSegmentVisaRemark,
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

export class IntlFlightRefundDetailResponseBodyModule extends $dara.Model {
  passengeRefundFeeDetailList?: IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailList[];
  passengerList?: IntlFlightRefundDetailResponseBodyModulePassengerList[];
  refundOrderInfo?: IntlFlightRefundDetailResponseBodyModuleRefundOrderInfo;
  segmentList?: IntlFlightRefundDetailResponseBodyModuleSegmentList[];
  static names(): { [key: string]: string } {
    return {
      passengeRefundFeeDetailList: 'passenge_refund_fee_detail_list',
      passengerList: 'passenger_list',
      refundOrderInfo: 'refund_order_info',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengeRefundFeeDetailList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModulePassengeRefundFeeDetailList },
      passengerList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModulePassengerList },
      refundOrderInfo: IntlFlightRefundDetailResponseBodyModuleRefundOrderInfo,
      segmentList: { 'type': 'array', 'itemType': IntlFlightRefundDetailResponseBodyModuleSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.passengeRefundFeeDetailList)) {
      $dara.Model.validateArray(this.passengeRefundFeeDetailList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.refundOrderInfo && typeof (this.refundOrderInfo as any).validate === 'function') {
      (this.refundOrderInfo as any).validate();
    }
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundDetailResponseBody extends $dara.Model {
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
  module?: IntlFlightRefundDetailResponseBodyModule;
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
      module: IntlFlightRefundDetailResponseBodyModule,
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

