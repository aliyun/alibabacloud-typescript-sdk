// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleChangeTicketInfoList extends $dara.Model {
  changeCoachNo?: string;
  changeGapFee?: number;
  changeHandlingFee?: number;
  changeSeatNo?: string;
  changeSeatTypeName?: string;
  changeServiceFee?: number;
  changeTrainNo?: string;
  changeTrainTypeName?: string;
  checkInTime?: string;
  checkOutTime?: string;
  endTime?: string;
  fromStationName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  originTicketNo?: string;
  outTicketStatus?: string;
  startTime?: string;
  ticketNo?: string;
  toStationName?: string;
  static names(): { [key: string]: string } {
    return {
      changeCoachNo: 'change_coach_no',
      changeGapFee: 'change_gap_fee',
      changeHandlingFee: 'change_handling_fee',
      changeSeatNo: 'change_seat_no',
      changeSeatTypeName: 'change_seat_type_name',
      changeServiceFee: 'change_service_fee',
      changeTrainNo: 'change_train_no',
      changeTrainTypeName: 'change_train_type_name',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      endTime: 'end_time',
      fromStationName: 'from_station_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      outTicketStatus: 'out_ticket_status',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      toStationName: 'to_station_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCoachNo: 'string',
      changeGapFee: 'number',
      changeHandlingFee: 'number',
      changeSeatNo: 'string',
      changeSeatTypeName: 'string',
      changeServiceFee: 'number',
      changeTrainNo: 'string',
      changeTrainTypeName: 'string',
      checkInTime: 'string',
      checkOutTime: 'string',
      endTime: 'string',
      fromStationName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      outTicketStatus: 'string',
      startTime: 'string',
      ticketNo: 'string',
      toStationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModuleInvoiceInfo extends $dara.Model {
  id?: number;
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

export class TrainOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  exceedApplyId?: string;
  exceedThirdPartApplyId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  itineraryId?: string;
  orderId?: number;
  orderStatus?: number;
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  thirdpartItineraryId?: string;
  tripType?: number;
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
      thirdpartApplyId: 'thirdpart_apply_id',
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
      thirdpartApplyId: 'string',
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

export class TrainOrderQueryResponseBodyModulePassengerInfoList extends $dara.Model {
  costCenterId?: number;
  costCenterName?: string;
  costCenterNumber?: string;
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  thirdpartProjectId?: string;
  userId?: string;
  userName?: string;
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

export class TrainOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
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

export class TrainOrderQueryResponseBodyModuleRefundTicketInfoList extends $dara.Model {
  gmtCreate?: string;
  gmtModify?: string;
  refundFee?: number;
  refundServiceFee?: number;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundFee: 'refund_fee',
      refundServiceFee: 'refund_service_fee',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundFee: 'number',
      refundServiceFee: 'number',
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

export class TrainOrderQueryResponseBodyModuleTicketInfoList extends $dara.Model {
  changed?: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  coachNo?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModify?: string;
  outTicketStatus?: string;
  payType?: number;
  seatNo?: string;
  seatTypeName?: string;
  serviceFee?: number;
  startTime?: string;
  ticketNo?: string;
  ticketPrice?: number;
  ticketStatus?: number;
  trainTypeName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changed: 'changed',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      coachNo: 'coach_no',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      outTicketStatus: 'out_ticket_status',
      payType: 'pay_type',
      seatNo: 'seat_no',
      seatTypeName: 'seat_type_name',
      serviceFee: 'service_fee',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      trainTypeName: 'train_type_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      checkInTime: 'string',
      checkOutTime: 'string',
      coachNo: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      outTicketStatus: 'string',
      payType: 'number',
      seatNo: 'string',
      seatTypeName: 'string',
      serviceFee: 'number',
      startTime: 'string',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      trainTypeName: 'string',
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

export class TrainOrderQueryResponseBodyModuleTrainInfo extends $dara.Model {
  arrTime?: string;
  depTime?: string;
  fromCityAdCode?: string;
  fromStationName?: string;
  runTime?: number;
  toCityAdCode?: string;
  toStationName?: string;
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fromCityAdCode: 'from_city_ad_code',
      fromStationName: 'from_station_name',
      runTime: 'run_time',
      toCityAdCode: 'to_city_ad_code',
      toStationName: 'to_station_name',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fromCityAdCode: 'string',
      fromStationName: 'string',
      runTime: 'number',
      toCityAdCode: 'string',
      toStationName: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBodyModule extends $dara.Model {
  changeTicketInfoList?: TrainOrderQueryResponseBodyModuleChangeTicketInfoList[];
  invoiceInfo?: TrainOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: TrainOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: TrainOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: TrainOrderQueryResponseBodyModulePriceInfoList[];
  refundTicketInfoList?: TrainOrderQueryResponseBodyModuleRefundTicketInfoList[];
  ticketInfoList?: TrainOrderQueryResponseBodyModuleTicketInfoList[];
  trainInfo?: TrainOrderQueryResponseBodyModuleTrainInfo;
  static names(): { [key: string]: string } {
    return {
      changeTicketInfoList: 'change_ticket_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
      refundTicketInfoList: 'refund_ticket_info_list',
      ticketInfoList: 'ticket_info_list',
      trainInfo: 'train_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleChangeTicketInfoList },
      invoiceInfo: TrainOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: TrainOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePriceInfoList },
      refundTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleRefundTicketInfoList },
      ticketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleTicketInfoList },
      trainInfo: TrainOrderQueryResponseBodyModuleTrainInfo,
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketInfoList)) {
      $dara.Model.validateArray(this.changeTicketInfoList);
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
    if(Array.isArray(this.refundTicketInfoList)) {
      $dara.Model.validateArray(this.refundTicketInfoList);
    }
    if(Array.isArray(this.ticketInfoList)) {
      $dara.Model.validateArray(this.ticketInfoList);
    }
    if(this.trainInfo && typeof (this.trainInfo as any).validate === 'function') {
      (this.trainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainOrderQueryResponseBodyModule;
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
      module: TrainOrderQueryResponseBodyModule,
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

