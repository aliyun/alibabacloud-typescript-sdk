// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList extends $dara.Model {
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  arrAptCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  depAptCode?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
  share?: boolean;
  stopAptCode?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopCityCode?: string;
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
  cabin?: string;
  cabinClass?: string;
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
  flightNo?: string;
  ticketNo?: string;
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
  modifyApplyId?: number;
  modifyFee?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee[];
  modifyOrderStatus?: number;
  modifyTotalFee?: number;
  passengerList?: string[];
  personPayPrice?: number;
  relateModifyApplyId?: number;
  serviceFee?: number;
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
  cabin?: string;
  cabinClass?: string;
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
  flightNo?: string;
  ticketNo?: string;
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
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  arrAptCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  depAptCode?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
  share?: boolean;
  stopAptCode?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopCityCode?: string;
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
  refundApplyId?: number;
  refundHandFee?: number;
  refundOrderStatus?: number;
  refundServiceFee?: number;
  refundTotalAmount?: number;
  relateModifyApplyId?: number[];
  relateRefundApplyId?: number;
  repeatRefund?: boolean;
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
  insOrderId?: string;
  insPayType?: string;
  insTotalPrice?: number;
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
  cabin?: string;
  cabinClass?: string;
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
  ticketNo?: string;
  ticketPrice?: number;
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
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  arrAptCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrTerminal?: string;
  arrTime?: string;
  carrierAirlineCode?: string;
  carrierAirlineName?: string;
  depApt?: string;
  depAptCode?: string;
  depCity?: string;
  depCityCode?: string;
  depTerminal?: string;
  depTime?: string;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
  share?: boolean;
  stopAptCode?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopCityCode?: string;
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
  costCenterId?: string;
  costCenterName?: string;
  departmentId?: string;
  departmentName?: string;
  invoiceId?: string;
  invoiceTitle?: string;
  jobNo?: string;
  passengerType?: number;
  projectCode?: string;
  projectTitle?: string;
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
  applyId?: number;
  bookType?: number;
  bookerInfo?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderBookerInfo;
  corpPayPrice?: number;
  exceedApplyId?: string;
  flightOrderInsureList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderInsureList[];
  flightOrderTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList[];
  flightSegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightSegmentList[];
  itineraryId?: string;
  mixPay?: boolean;
  orderCreateTime?: string;
  orderId?: string;
  orderPayTime?: string;
  orderReservePrice?: number;
  orderStatus?: number;
  orderStatusDesc?: string;
  orderType?: number;
  passengerList?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderPassengerList[];
  payType?: number;
  personPayPrice?: number;
  serviceFee?: number;
  thirdPartApplyId?: string;
  thirdpartItineraryId?: string;
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
      itineraryId: 'itinerary_id',
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
      thirdpartItineraryId: 'thirdpart_itinerary_id',
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
      itineraryId: 'string',
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
      thirdpartItineraryId: 'string',
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
  code?: string;
  message?: string;
  module?: IFlightOrderDetailQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

