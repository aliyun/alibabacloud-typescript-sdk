// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList extends $dara.Model {
  /**
   * @example
   * 03
   */
  changeCoachNo?: string;
  /**
   * @example
   * 100
   */
  changeGapFee?: number;
  /**
   * @example
   * 100
   */
  changeHandlingFee?: number;
  changeOrderId?: string;
  /**
   * @example
   * 004C
   */
  changeSeatNo?: string;
  changeSeatTypeName?: string;
  /**
   * @example
   * 100
   */
  changeServiceFee?: number;
  /**
   * @example
   * D103
   */
  changeTrainNo?: string;
  changeTrainTypeName?: string;
  checkInTime?: string;
  checkOutTime?: string;
  endTime?: string;
  fromCityName?: string;
  fromStationName?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * CS987JKDF
   */
  originTicketNo?: string;
  /**
   * @example
   * m
   */
  outTicketStatus?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  shortTicketNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  ticketEntrance?: string;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  ticketStatus?: number;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * 0
   */
  useTicket?: string;
  /**
   * @example
   * 12312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changeCoachNo: 'change_coach_no',
      changeGapFee: 'change_gap_fee',
      changeHandlingFee: 'change_handling_fee',
      changeOrderId: 'change_order_id',
      changeSeatNo: 'change_seat_no',
      changeSeatTypeName: 'change_seat_type_name',
      changeServiceFee: 'change_service_fee',
      changeTrainNo: 'change_train_no',
      changeTrainTypeName: 'change_train_type_name',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      endTime: 'end_time',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      originTicketNo: 'origin_ticket_no',
      outTicketStatus: 'out_ticket_status',
      segmentIndex: 'segment_index',
      shortTicketNo: 'short_ticket_no',
      startTime: 'start_time',
      ticketEntrance: 'ticket_entrance',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      useTicket: 'use_ticket',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCoachNo: 'string',
      changeGapFee: 'number',
      changeHandlingFee: 'number',
      changeOrderId: 'string',
      changeSeatNo: 'string',
      changeSeatTypeName: 'string',
      changeServiceFee: 'number',
      changeTrainNo: 'string',
      changeTrainTypeName: 'string',
      checkInTime: 'string',
      checkOutTime: 'string',
      endTime: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      originTicketNo: 'string',
      outTicketStatus: 'string',
      segmentIndex: 'number',
      shortTicketNo: 'string',
      startTime: 'string',
      ticketEntrance: 'string',
      ticketNo: 'string',
      ticketStatus: 'number',
      toCityName: 'string',
      toStationName: 'string',
      useTicket: 'string',
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

export class TrainOrderQueryV2ResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 3815504
   */
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

export class TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 1003784135
   */
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  /**
   * @example
   * 12110002222
   */
  contactPhone?: string;
  /**
   * @example
   * btripsy4yd7v0gdpdntpp
   */
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  /**
   * @example
   * 1422113021033961000
   */
  exceedApplyId?: string;
  /**
   * @example
   * 1422113021033961000
   */
  exceedThirdpartApplyId?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * 42942924
   */
  itineraryId?: string;
  /**
   * @example
   * 2849819724653209258
   */
  orderId?: number;
  /**
   * @example
   * 4
   */
  orderStatus?: number;
  thirdPartBusinessId?: string;
  /**
   * @example
   * 01-2023-01214
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * DHDI2209141OEGHWRN
   */
  thirdpartDepartId?: string;
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
   * 1231212
   */
  userId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdpartApplyId: 'exceed_thirdpart_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      thirdPartBusinessId: 'thirdPart_business_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      contactPhone: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdpartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      thirdPartBusinessId: 'string',
      thirdpartApplyId: 'string',
      thirdpartDepartId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryV2ResponseBodyModulePassengerInfoList extends $dara.Model {
  /**
   * @example
   * 11564
   */
  costCenterId?: number;
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
  projectTitle?: string;
  /**
   * @example
   * CS-KDISL
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * CS-22562
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * 1231231
   */
  userId?: string;
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
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
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
      thirdpartCostCenterId: 'string',
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

export class TrainOrderQueryV2ResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  /**
   * @example
   * 1669344020
   */
  gmtCreate?: string;
  passengerName?: string;
  /**
   * @example
   * 4
   */
  payType?: number;
  /**
   * @example
   * 176000
   */
  price?: number;
  /**
   * @example
   * 12345678910987654321
   */
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

export class TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList extends $dara.Model {
  gmtCreate?: string;
  gmtModify?: string;
  refundApplyId?: string;
  /**
   * @example
   * 10
   */
  refundFee?: number;
  /**
   * @example
   * 10
   */
  refundServiceFee?: number;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  /**
   * @example
   * 1231231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundApplyId: 'refund_apply_id',
      refundFee: 'refund_fee',
      refundServiceFee: 'refund_service_fee',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundApplyId: 'string',
      refundFee: 'number',
      refundServiceFee: 'number',
      ticketNo: 'string',
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

export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos extends $dara.Model {
  /**
   * @example
   * false
   */
  changed?: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  /**
   * @example
   * 01
   */
  coachNo?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * 1
   */
  outTicketStatus?: string;
  /**
   * @example
   * 2
   */
  payType?: number;
  /**
   * @example
   * 02A
   */
  seatNo?: string;
  seatTypeName?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 100
   */
  serviceFee?: number;
  shortTicketNo?: string;
  startTime?: string;
  ticketEntrance?: string;
  /**
   * @example
   * ew123121
   */
  ticketNo?: string;
  /**
   * @example
   * 400
   */
  ticketPrice?: number;
  /**
   * @example
   * 1
   */
  ticketStatus?: number;
  trainTypeName?: string;
  /**
   * @example
   * 0
   */
  useTicket?: string;
  /**
   * @example
   * 231212
   */
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
      segmentIndex: 'segment_index',
      serviceFee: 'service_fee',
      shortTicketNo: 'short_ticket_no',
      startTime: 'start_time',
      ticketEntrance: 'ticket_entrance',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      trainTypeName: 'train_type_name',
      useTicket: 'use_ticket',
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
      segmentIndex: 'number',
      serviceFee: 'number',
      shortTicketNo: 'string',
      startTime: 'string',
      ticketEntrance: 'string',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      trainTypeName: 'string',
      useTicket: 'string',
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

export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList extends $dara.Model {
  arrTime?: string;
  depTime?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  fromStationName?: string;
  /**
   * @remarks
   * itemId
   * 
   * @example
   * 12312
   */
  itemId?: number;
  /**
   * @example
   * 120
   */
  runTime?: number;
  subFromCityAdCode?: string;
  subFromCityAdName?: string;
  subToCityCode?: string;
  subToCityName?: string;
  toCityAdCode?: string;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * D11
   */
  trainNo?: string;
  trainTicketInfos?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos[];
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      depTime: 'dep_time',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      itemId: 'item_id',
      runTime: 'run_time',
      subFromCityAdCode: 'sub_from_city_ad_code',
      subFromCityAdName: 'sub_from_city_ad_name',
      subToCityCode: 'sub_to_city_code',
      subToCityName: 'sub_to_city_name',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      trainNo: 'train_no',
      trainTicketInfos: 'train_ticket_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      depTime: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      itemId: 'number',
      runTime: 'number',
      subFromCityAdCode: 'string',
      subFromCityAdName: 'string',
      subToCityCode: 'string',
      subToCityName: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      toStationName: 'string',
      trainNo: 'string',
      trainTicketInfos: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos },
    };
  }

  validate() {
    if(Array.isArray(this.trainTicketInfos)) {
      $dara.Model.validateArray(this.trainTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo extends $dara.Model {
  /**
   * @example
   * 200
   */
  costTime?: string;
  /**
   * @example
   * 2022-11-15 00:00:00
   */
  endTime?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  fromStationName?: string;
  middleCity?: string;
  middleCityAdCode?: string;
  /**
   * @example
   * 2023-01-29 18:10:00
   */
  middleDate?: string;
  middleStation?: string;
  middleType?: string;
  /**
   * @example
   * 2022-11-01 00:00:00
   */
  startTime?: string;
  subFromCityAdCode?: string;
  subFromCityAdName?: string;
  subMiddleCityCode?: string;
  subMiddleCityName?: string;
  subToCityCode?: string;
  subToCityName?: string;
  toCityAdCode?: string;
  toCityName?: string;
  toStationName?: string;
  /**
   * @example
   * 60
   */
  waitTime?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'cost_time',
      endTime: 'end_time',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      fromStationName: 'from_station_name',
      middleCity: 'middle_city',
      middleCityAdCode: 'middle_city_ad_code',
      middleDate: 'middle_date',
      middleStation: 'middle_station',
      middleType: 'middle_type',
      startTime: 'start_time',
      subFromCityAdCode: 'sub_from_city_ad_code',
      subFromCityAdName: 'sub_from_city_ad_name',
      subMiddleCityCode: 'sub_middle_city_code',
      subMiddleCityName: 'sub_middle_city_name',
      subToCityCode: 'sub_to_city_code',
      subToCityName: 'sub_to_city_name',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      toStationName: 'to_station_name',
      waitTime: 'wait_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'string',
      endTime: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      fromStationName: 'string',
      middleCity: 'string',
      middleCityAdCode: 'string',
      middleDate: 'string',
      middleStation: 'string',
      middleType: 'string',
      startTime: 'string',
      subFromCityAdCode: 'string',
      subFromCityAdName: 'string',
      subMiddleCityCode: 'string',
      subMiddleCityName: 'string',
      subToCityCode: 'string',
      subToCityName: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      toStationName: 'string',
      waitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo extends $dara.Model {
  trainInfoList?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList[];
  trainTransferInfo?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo;
  static names(): { [key: string]: string } {
    return {
      trainInfoList: 'train_info_list',
      trainTransferInfo: 'train_transfer_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trainInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoList },
      trainTransferInfo: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainTransferInfo,
    };
  }

  validate() {
    if(Array.isArray(this.trainInfoList)) {
      $dara.Model.validateArray(this.trainInfoList);
    }
    if(this.trainTransferInfo && typeof (this.trainTransferInfo as any).validate === 'function') {
      (this.trainTransferInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryV2ResponseBodyModule extends $dara.Model {
  changeTicketInfoList?: TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList[];
  invoiceInfo?: TrainOrderQueryV2ResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: TrainOrderQueryV2ResponseBodyModulePassengerInfoList[];
  priceInfoList?: TrainOrderQueryV2ResponseBodyModulePriceInfoList[];
  refundTicketInfoList?: TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList[];
  trainOrderInfo?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo;
  static names(): { [key: string]: string } {
    return {
      changeTicketInfoList: 'change_ticket_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
      refundTicketInfoList: 'refund_ticket_info_list',
      trainOrderInfo: 'train_order_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList },
      invoiceInfo: TrainOrderQueryV2ResponseBodyModuleInvoiceInfo,
      orderBaseInfo: TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModulePriceInfoList },
      refundTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList },
      trainOrderInfo: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo,
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
    if(this.trainOrderInfo && typeof (this.trainOrderInfo as any).validate === 'function') {
      (this.trainOrderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderQueryV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: TrainOrderQueryV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 1213ds1d
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 123412dcdsac sd
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
      module: TrainOrderQueryV2ResponseBodyModule,
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

