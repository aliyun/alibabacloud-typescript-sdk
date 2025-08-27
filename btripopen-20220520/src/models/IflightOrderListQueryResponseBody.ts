// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * HGH
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  /**
   * @example
   * T2
   */
  arrTerminal?: string;
  /**
   * @example
   * 2024-10-28 14:26:00
   */
  arrTime?: string;
  /**
   * @example
   * CA
   */
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2024-10-25 12:25:00
   */
  depTime?: string;
  /**
   * @example
   * MU7384
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
  share?: boolean;
  /**
   * @example
   * KIX
   */
  stopAptCode?: string;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  stopArrTime?: string;
  stopCity?: string;
  /**
   * @example
   * OSA
   */
  stopCityCode?: string;
  /**
   * @example
   * 2024-10-27 11:26:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineName: 'carrier_airline_name',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      share: 'share',
      stopAptCode: 'stop_apt_code',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityCode: 'stop_city_code',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      carrierAirlineCode: 'string',
      carrierAirlineName: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      share: 'boolean',
      stopAptCode: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityCode: 'string',
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

export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass extends $dara.Model {
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList extends $dara.Model {
  cabinClass?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass[];
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  /**
   * @example
   * 781-6605714721
   */
  ticketNo?: string;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass },
      flightNo: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee extends $dara.Model {
  modifyHandFee?: number;
  modifyUpgradeFee?: number;
  taxGap?: number;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyHandFee: 'modify_hand_fee',
      modifyUpgradeFee: 'modify_upgrade_fee',
      taxGap: 'tax_gap',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyHandFee: 'number',
      modifyUpgradeFee: 'number',
      taxGap: 'number',
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

export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderList extends $dara.Model {
  corpPayPrice?: number;
  flightModifySegmentList?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList[];
  flightOrderModifyTicketList?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList[];
  /**
   * @example
   * 1005200138736000
   */
  modifyApplyId?: number;
  passengerFee?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee[];
  passengerList?: string[];
  personPayPrice?: number;
  /**
   * @example
   * 1005200138736028
   */
  relateModifyApplyId?: number;
  serviceFee?: number;
  totalFee?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      flightModifySegmentList: 'flight_modify_segment_list',
      flightOrderModifyTicketList: 'flight_order_modify_ticket_list',
      modifyApplyId: 'modify_apply_id',
      passengerFee: 'passenger_fee',
      passengerList: 'passenger_list',
      personPayPrice: 'person_pay_price',
      relateModifyApplyId: 'relate_modify_apply_id',
      serviceFee: 'service_fee',
      totalFee: 'total_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      flightModifySegmentList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList },
      flightOrderModifyTicketList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList },
      modifyApplyId: 'number',
      passengerFee: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee },
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personPayPrice: 'number',
      relateModifyApplyId: 'number',
      serviceFee: 'number',
      totalFee: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightModifySegmentList)) {
      $dara.Model.validateArray(this.flightModifySegmentList);
    }
    if(Array.isArray(this.flightOrderModifyTicketList)) {
      $dara.Model.validateArray(this.flightOrderModifyTicketList);
    }
    if(Array.isArray(this.passengerFee)) {
      $dara.Model.validateArray(this.passengerFee);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass extends $dara.Model {
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * BK3162
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList extends $dara.Model {
  cabinClass?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass[];
  /**
   * @example
   * BK3162
   */
  flightNo?: string;
  /**
   * @example
   * 999-6605133193
   */
  ticketNo?: string;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass },
      flightNo: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * HKG
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2024-10-28 14:26:00
   */
  arrTime?: string;
  /**
   * @example
   * CA
   */
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2024-10-25 11:24:00
   */
  depTime?: string;
  /**
   * @example
   * MU5334
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
  share?: boolean;
  /**
   * @example
   * KIX
   */
  stopAptCode?: string;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  stopArrTime?: string;
  stopCity?: string;
  /**
   * @example
   * OSA
   */
  stopCityCode?: string;
  /**
   * @example
   * 2024-10-27 11:26:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineName: 'carrier_airline_name',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      share: 'share',
      stopAptCode: 'stop_apt_code',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityCode: 'stop_city_code',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      carrierAirlineCode: 'string',
      carrierAirlineName: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      share: 'boolean',
      stopAptCode: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityCode: 'string',
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

export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee extends $dara.Model {
  noRefundModifyHandFee?: number;
  noRefundModifyUpgradeFee?: number;
  refundAmount?: number;
  refundHandFee?: number;
  refundModifyAmount?: number;
  refundModifyHandAmount?: number;
  refundModifyUpgradeAmount?: number;
  refundTaxHandFee?: number;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      noRefundModifyHandFee: 'no_refund_modify_hand_fee',
      noRefundModifyUpgradeFee: 'no_refund_modify_upgrade_fee',
      refundAmount: 'refund_amount',
      refundHandFee: 'refund_hand_fee',
      refundModifyAmount: 'refund_modify_amount',
      refundModifyHandAmount: 'refund_modify_hand_amount',
      refundModifyUpgradeAmount: 'refund_modify_upgrade_amount',
      refundTaxHandFee: 'refund_tax_hand_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noRefundModifyHandFee: 'number',
      noRefundModifyUpgradeFee: 'number',
      refundAmount: 'number',
      refundHandFee: 'number',
      refundModifyAmount: 'number',
      refundModifyHandAmount: 'number',
      refundModifyUpgradeAmount: 'number',
      refundTaxHandFee: 'number',
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

export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderList extends $dara.Model {
  corpRefundAmount?: number;
  flightOrderRefundTicketList?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList[];
  flightRefundSegmentList?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList[];
  passengerFee?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee[];
  passengerInfo?: string[];
  personRefundAmount?: number;
  refundAmount?: number;
  /**
   * @example
   * 1006200138737069
   */
  refundApplyId?: number;
  refundHandFee?: number;
  serviceFee?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundAmount: 'corp_refund_Amount',
      flightOrderRefundTicketList: 'flight_order_refund_ticket_list',
      flightRefundSegmentList: 'flight_refund_segment_list',
      passengerFee: 'passenger_fee',
      passengerInfo: 'passenger_info',
      personRefundAmount: 'person_refund_Amount',
      refundAmount: 'refund_Amount',
      refundApplyId: 'refund_apply_id',
      refundHandFee: 'refund_hand_fee',
      serviceFee: 'service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundAmount: 'number',
      flightOrderRefundTicketList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList },
      flightRefundSegmentList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList },
      passengerFee: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee },
      passengerInfo: { 'type': 'array', 'itemType': 'string' },
      personRefundAmount: 'number',
      refundAmount: 'number',
      refundApplyId: 'number',
      refundHandFee: 'number',
      serviceFee: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightOrderRefundTicketList)) {
      $dara.Model.validateArray(this.flightOrderRefundTicketList);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.passengerFee)) {
      $dara.Model.validateArray(this.passengerFee);
    }
    if(Array.isArray(this.passengerInfo)) {
      $dara.Model.validateArray(this.passengerInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderBookerInfo extends $dara.Model {
  /**
   * @example
   * 01323
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList extends $dara.Model {
  /**
   * @example
   * 17060573244016310
   */
  insOrderId?: string;
  insPayType?: string;
  insTotalPrice?: number;
  /**
   * @example
   * 1
   */
  tradeAction?: string;
  static names(): { [key: string]: string } {
    return {
      insOrderId: 'ins_order_id',
      insPayType: 'ins_pay_type',
      insTotalPrice: 'ins_total_price',
      tradeAction: 'trade_action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insOrderId: 'string',
      insPayType: 'string',
      insTotalPrice: 'number',
      tradeAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass extends $dara.Model {
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @example
   * MF8765
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList extends $dara.Model {
  cabinClass?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass[];
  tax?: number;
  /**
   * @example
   * 018-6605785754
   */
  ticketNo?: string;
  ticketPrice?: number;
  /**
   * @example
   * 01323
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      tax: 'tax',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass },
      tax: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightSegmentList extends $dara.Model {
  /**
   * @example
   * MU
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * HKG
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  /**
   * @example
   * T2
   */
  arrTerminal?: string;
  /**
   * @example
   * 2024-10-25 15:26:00
   */
  arrTime?: string;
  /**
   * @example
   * CA
   */
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2024-10-24 15:26:00
   */
  depTime?: string;
  /**
   * @example
   * MU5925
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
  share?: boolean;
  /**
   * @example
   * KIX
   */
  stopAptCode?: string;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  stopArrTime?: string;
  stopCity?: string;
  /**
   * @example
   * OSA
   */
  stopCityCode?: string;
  /**
   * @example
   * 2024-10-27 11:26:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      carrierAirlineCode: 'carrier_airline_code',
      carrierAirlineName: 'carrier_airline_name',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      share: 'share',
      stopAptCode: 'stop_apt_code',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityCode: 'stop_city_code',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      carrierAirlineCode: 'string',
      carrierAirlineName: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      share: 'boolean',
      stopAptCode: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityCode: 'string',
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

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderPassengerList extends $dara.Model {
  /**
   * @example
   * 0111
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 1002
   */
  departmentId?: string;
  departmentName?: string;
  /**
   * @example
   * 01112
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * 100757
   */
  jobNo?: string;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 1111
   */
  projectCode?: string;
  projectTitle?: string;
  /**
   * @example
   * 01323
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      departmentId: 'department_id',
      departmentName: 'department_name',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      jobNo: 'job_no',
      passengerType: 'passenger_type',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'string',
      costCenterName: 'string',
      departmentId: 'string',
      departmentName: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      jobNo: 'string',
      passengerType: 'number',
      projectCode: 'string',
      projectTitle: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrder extends $dara.Model {
  /**
   * @example
   * 82587500
   */
  applyId?: number;
  /**
   * @example
   * 0
   */
  bookType?: number;
  bookerInfo?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderBookerInfo;
  corpPayPrice?: number;
  /**
   * @example
   * 123
   */
  exceedApplyId?: string;
  flightOrderInsureList?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList[];
  flightOrderTicketList?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList[];
  flightSegmentList?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightSegmentList[];
  mixPay?: boolean;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  orderCreateTime?: string;
  /**
   * @example
   * 1003038200110661039
   */
  orderId?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  orderPayTime?: string;
  orderReservePrice?: number;
  /**
   * @example
   * 5
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 1
   */
  orderType?: number;
  passengerList?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderPassengerList[];
  /**
   * @example
   * 2
   */
  payType?: number;
  personPayPrice?: number;
  serviceFee?: number;
  /**
   * @example
   * business_trip_api_000001
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      bookType: 'book_type',
      bookerInfo: 'booker_info',
      corpPayPrice: 'corp_pay_price',
      exceedApplyId: 'exceed_apply_id',
      flightOrderInsureList: 'flight_order_insure_list',
      flightOrderTicketList: 'flight_order_ticket_list',
      flightSegmentList: 'flight_segment_list',
      mixPay: 'mix_pay',
      orderCreateTime: 'order_create_time',
      orderId: 'order_id',
      orderPayTime: 'order_pay_time',
      orderReservePrice: 'order_reserve_price',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      passengerList: 'passenger_list',
      payType: 'pay_type',
      personPayPrice: 'person_pay_price',
      serviceFee: 'service_fee',
      thirdPartApplyId: 'third_part_apply_id',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      bookType: 'number',
      bookerInfo: IFlightOrderListQueryResponseBodyModuleFlightSaleOrderBookerInfo,
      corpPayPrice: 'number',
      exceedApplyId: 'string',
      flightOrderInsureList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList },
      flightOrderTicketList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList },
      flightSegmentList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightSaleOrderFlightSegmentList },
      mixPay: 'boolean',
      orderCreateTime: 'string',
      orderId: 'string',
      orderPayTime: 'string',
      orderReservePrice: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      orderType: 'number',
      passengerList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightSaleOrderPassengerList },
      payType: 'number',
      personPayPrice: 'number',
      serviceFee: 'number',
      thirdPartApplyId: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(this.bookerInfo && typeof (this.bookerInfo as any).validate === 'function') {
      (this.bookerInfo as any).validate();
    }
    if(Array.isArray(this.flightOrderInsureList)) {
      $dara.Model.validateArray(this.flightOrderInsureList);
    }
    if(Array.isArray(this.flightOrderTicketList)) {
      $dara.Model.validateArray(this.flightOrderTicketList);
    }
    if(Array.isArray(this.flightSegmentList)) {
      $dara.Model.validateArray(this.flightSegmentList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyModule extends $dara.Model {
  flightModifyOrderList?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderList[];
  flightRefundOrderList?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderList[];
  flightSaleOrder?: IFlightOrderListQueryResponseBodyModuleFlightSaleOrder;
  static names(): { [key: string]: string } {
    return {
      flightModifyOrderList: 'flight_modify_order_list',
      flightRefundOrderList: 'flight_refund_order_list',
      flightSaleOrder: 'flight_sale_order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightModifyOrderList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderList },
      flightRefundOrderList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderList },
      flightSaleOrder: IFlightOrderListQueryResponseBodyModuleFlightSaleOrder,
    };
  }

  validate() {
    if(Array.isArray(this.flightModifyOrderList)) {
      $dara.Model.validateArray(this.flightModifyOrderList);
    }
    if(Array.isArray(this.flightRefundOrderList)) {
      $dara.Model.validateArray(this.flightRefundOrderList);
    }
    if(this.flightSaleOrder && typeof (this.flightSaleOrder as any).validate === 'function') {
      (this.flightSaleOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBodyPageInfo extends $dara.Model {
  number?: number;
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4ZGViODFlYmM3MYzM4
   */
  scrollId?: string;
  /**
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
      scrollId: 'scroll_id',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      scrollId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: IFlightOrderListQueryResponseBodyModule[];
  pageInfo?: IFlightOrderListQueryResponseBodyPageInfo;
  /**
   * @example
   * C61ECFF6-****-****-****-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'pageInfo',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModule },
      pageInfo: IFlightOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

