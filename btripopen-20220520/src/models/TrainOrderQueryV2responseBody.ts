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
  /**
   * @example
   * 2849819724653209258
   */
  changeOrderId?: string;
  /**
   * @example
   * 004C
   */
  changeSeatNo?: string;
  /**
   * @example
   * 二等座
   */
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
  /**
   * @example
   * 高铁
   */
  changeTrainTypeName?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkInTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOutTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  endTime?: string;
  /**
   * @example
   * 北京
   */
  fromCityName?: string;
  /**
   * @example
   * 北京
   */
  fromStationName?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
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
  /**
   * @example
   * ECW0603604
   */
  shortTicketNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  /**
   * @example
   * 2B
   */
  ticketEntrance?: string;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  /**
   * @example
   * 1
   */
  ticketStatus?: number;
  /**
   * @example
   * 上海
   */
  toCityName?: string;
  /**
   * @example
   * 上海
   */
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
  /**
   * @example
   * 抬头发票
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

export class TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 1003784135
   */
  applyId?: string;
  /**
   * @example
   * 杭州出差
   */
  btripTitle?: string;
  /**
   * @example
   * 张三
   */
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
  /**
   * @example
   * 阿里商旅
   */
  corpName?: string;
  /**
   * @example
   * 部门id
   */
  departId?: string;
  /**
   * @example
   * 行政部
   */
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
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
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
  /**
   * @example
   * 2849819724653209258
   */
  replenishOrderIds?: string;
  /**
   * @example
   * 2849819724653209258
   */
  replenishOriginalOrderId?: string;
  /**
   * @example
   * 00021230721000002Test-2
   */
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
  /**
   * @example
   * 昵称
   */
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
      replenishOrderIds: 'replenish_order_ids',
      replenishOriginalOrderId: 'replenish_original_order_id',
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
      replenishOrderIds: 'string',
      replenishOriginalOrderId: 'string',
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
  /**
   * @example
   * 6
   */
  categoryCode?: number;
  /**
   * @example
   * 1669344020
   */
  gmtCreate?: string;
  /**
   * @example
   * 张三/李四
   */
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

export class TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList extends $dara.Model {
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtModify?: string;
  /**
   * @example
   * 284981
   */
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
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkInTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOutTime?: string;
  /**
   * @example
   * 01
   */
  coachNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  endTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
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
  /**
   * @example
   * 硬座
   */
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
  /**
   * @example
   * ECW0603604
   */
  shortTicketNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  /**
   * @example
   * 2B
   */
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
  /**
   * @example
   * 高铁
   */
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
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  arrTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  depTime?: string;
  /**
   * @example
   * 330100
   */
  fromCityAdCode?: string;
  /**
   * @example
   * 北京
   */
  fromCityName?: string;
  /**
   * @example
   * 北京
   */
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
  /**
   * @example
   * 330127
   */
  subFromCityAdCode?: string;
  /**
   * @example
   * 淳安
   */
  subFromCityAdName?: string;
  /**
   * @example
   * 330483
   */
  subToCityCode?: string;
  /**
   * @example
   * 桐乡
   */
  subToCityName?: string;
  /**
   * @example
   * 330100
   */
  toCityAdCode?: string;
  /**
   * @example
   * 上海
   */
  toCityName?: string;
  /**
   * @example
   * 上海
   */
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
  /**
   * @example
   * 330100
   */
  fromCityAdCode?: string;
  /**
   * @example
   * 北京
   */
  fromCityName?: string;
  /**
   * @example
   * 北京
   */
  fromStationName?: string;
  /**
   * @example
   * 杭州
   */
  middleCity?: string;
  /**
   * @example
   * 330100
   */
  middleCityAdCode?: string;
  /**
   * @example
   * 2023-01-29 18:10:00
   */
  middleDate?: string;
  /**
   * @example
   * 杭州南
   */
  middleStation?: string;
  /**
   * @example
   * 同站
   */
  middleType?: string;
  /**
   * @example
   * 2022-11-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 330127
   */
  subFromCityAdCode?: string;
  /**
   * @example
   * 淳安
   */
  subFromCityAdName?: string;
  /**
   * @example
   * 330127
   */
  subMiddleCityCode?: string;
  /**
   * @example
   * 淳安
   */
  subMiddleCityName?: string;
  /**
   * @example
   * 330483
   */
  subToCityCode?: string;
  /**
   * @example
   * 桐乡
   */
  subToCityName?: string;
  /**
   * @example
   * 330100
   */
  toCityAdCode?: string;
  /**
   * @example
   * 上海
   */
  toCityName?: string;
  /**
   * @example
   * 上海
   */
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
  /**
   * @example
   * 成功
   */
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

