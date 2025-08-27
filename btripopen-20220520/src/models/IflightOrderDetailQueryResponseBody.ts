// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList extends $dara.Model {
  cabinClass?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass[];
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  /**
   * @example
   * 781-6605285563
   */
  ticketNo?: string;
  /**
   * @example
   * 0132
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
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass },
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee extends $dara.Model {
  modifyHandFee?: number;
  modifyUpgradeFee?: number;
  taxGap?: number;
  /**
   * @example
   * 0132
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList extends $dara.Model {
  corpPayPrice?: number;
  flightModifySegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList[];
  flightOrderModifyTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList[];
  /**
   * @example
   * 1005200138736000
   */
  modifyApplyId?: number;
  modifyFee?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee[];
  /**
   * @example
   * 1
   */
  modifyOrderStatus?: number;
  modifyTotalFee?: number;
  passengerList?: string[];
  personPayPrice?: number;
  /**
   * @example
   * 1005200138736028
   */
  relateModifyApplyId?: number;
  serviceFee?: number;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  submitModifyTime?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      flightModifySegmentList: 'flight_modify_segment_list',
      flightOrderModifyTicketList: 'flight_order_modify_ticket_list',
      modifyApplyId: 'modify_apply_id',
      modifyFee: 'modify_fee',
      modifyOrderStatus: 'modify_order_status',
      modifyTotalFee: 'modify_total_fee',
      passengerList: 'passenger_list',
      personPayPrice: 'person_pay_price',
      relateModifyApplyId: 'relate_modify_apply_id',
      serviceFee: 'service_fee',
      submitModifyTime: 'submit_modify_time',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      flightModifySegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList },
      flightOrderModifyTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList },
      modifyApplyId: 'number',
      modifyFee: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee },
      modifyOrderStatus: 'number',
      modifyTotalFee: 'number',
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personPayPrice: 'number',
      relateModifyApplyId: 'number',
      serviceFee: 'number',
      submitModifyTime: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.flightModifySegmentList)) {
      $dara.Model.validateArray(this.flightModifySegmentList);
    }
    if(Array.isArray(this.flightOrderModifyTicketList)) {
      $dara.Model.validateArray(this.flightOrderModifyTicketList);
    }
    if(Array.isArray(this.modifyFee)) {
      $dara.Model.validateArray(this.modifyFee);
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList extends $dara.Model {
  cabinClass?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass[];
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  /**
   * @example
   * 018-6605785754
   */
  ticketNo?: string;
  /**
   * @example
   * 0132
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
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass },
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee extends $dara.Model {
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
   * 0132
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList extends $dara.Model {
  corpRefundAmount?: number;
  flightOrderRefundTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList[];
  flightPassengerFee?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee[];
  flightRefundSegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList[];
  passengerList?: string[];
  personRefundAmount?: number;
  /**
   * @example
   * 1006200138737069
   */
  refundApplyId?: number;
  refundHandFee?: number;
  /**
   * @example
   * 3
   */
  refundOrderStatus?: number;
  refundServiceFee?: number;
  refundTotalAmount?: number;
  relateModifyApplyId?: number[];
  /**
   * @example
   * 10062001387370
   */
  relateRefundApplyId?: number;
  repeatRefund?: boolean;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  submitRefundTime?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpRefundAmount: 'corp_refund_Amount',
      flightOrderRefundTicketList: 'flight_order_refund_ticket_list',
      flightPassengerFee: 'flight_passenger_fee',
      flightRefundSegmentList: 'flight_refund_segment_list',
      passengerList: 'passenger_list',
      personRefundAmount: 'person_refund_Amount',
      refundApplyId: 'refund_apply_id',
      refundHandFee: 'refund_hand_fee',
      refundOrderStatus: 'refund_order_status',
      refundServiceFee: 'refund_service_fee',
      refundTotalAmount: 'refund_total_Amount',
      relateModifyApplyId: 'relate_modify_apply_id',
      relateRefundApplyId: 'relate_refund_apply_id',
      repeatRefund: 'repeat_refund',
      submitRefundTime: 'submit_refund_time',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundAmount: 'number',
      flightOrderRefundTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList },
      flightPassengerFee: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee },
      flightRefundSegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList },
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personRefundAmount: 'number',
      refundApplyId: 'number',
      refundHandFee: 'number',
      refundOrderStatus: 'number',
      refundServiceFee: 'number',
      refundTotalAmount: 'number',
      relateModifyApplyId: { 'type': 'array', 'itemType': 'number' },
      relateRefundApplyId: 'number',
      repeatRefund: 'boolean',
      submitRefundTime: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.flightOrderRefundTicketList)) {
      $dara.Model.validateArray(this.flightOrderRefundTicketList);
    }
    if(Array.isArray(this.flightPassengerFee)) {
      $dara.Model.validateArray(this.flightPassengerFee);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.relateModifyApplyId)) {
      $dara.Model.validateArray(this.relateModifyApplyId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList extends $dara.Model {
  cabinClass?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass[];
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
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass },
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList extends $dara.Model {
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

export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder extends $dara.Model {
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
  bookerInfo?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo;
  corpPayPrice?: number;
  /**
   * @example
   * 123
   */
  exceedApplyId?: string;
  flightOrderInsureList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList[];
  flightOrderTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList[];
  flightSegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList[];
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
  passengerList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList[];
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
      bookerInfo: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo,
      corpPayPrice: 'number',
      exceedApplyId: 'string',
      flightOrderInsureList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList },
      flightOrderTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList },
      flightSegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList },
      mixPay: 'boolean',
      orderCreateTime: 'string',
      orderId: 'string',
      orderPayTime: 'string',
      orderReservePrice: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      orderType: 'number',
      passengerList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList },
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

export class IFlightOrderDetailQueryResponseBodyModule extends $dara.Model {
  flightModifyOrderList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList[];
  flightRefundOrderList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList[];
  flightSaleOrder?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder;
  static names(): { [key: string]: string } {
    return {
      flightModifyOrderList: 'flight_modify_order_list',
      flightRefundOrderList: 'flight_refund_order_list',
      flightSaleOrder: 'flight_sale_order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightModifyOrderList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList },
      flightRefundOrderList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList },
      flightSaleOrder: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrder,
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

export class IFlightOrderDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: IFlightOrderDetailQueryResponseBodyModule;
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
      module: IFlightOrderDetailQueryResponseBodyModule,
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

