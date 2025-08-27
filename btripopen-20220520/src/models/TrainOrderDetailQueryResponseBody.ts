// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos extends $dara.Model {
  /**
   * @example
   * 04
   */
  coachNo?: string;
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failReason?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 10000
   */
  realTicketPrice?: number;
  /**
   * @example
   * 1A
   */
  seatNo?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * null
   */
  ticketEntrance?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 11
   */
  ticketStatus?: number;
  /**
   * @example
   * 0
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      coachNo: 'coach_no',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      passengerId: 'passenger_id',
      realTicketPrice: 'real_ticket_price',
      seatNo: 'seat_no',
      seatType: 'seat_type',
      ticketEntrance: 'ticket_entrance',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coachNo: 'string',
      failCode: 'string',
      failReason: 'string',
      passengerId: 'string',
      realTicketPrice: 'number',
      seatNo: 'string',
      seatType: 'string',
      ticketEntrance: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      ticketType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos extends $dara.Model {
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-07 15:19:01
   */
  arriveTime?: string;
  bookTicketInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos[];
  /**
   * @example
   * BDC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * D1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arriveTime: 'arrive_time',
      bookTicketInfos: 'book_ticket_infos',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      arrStationName: 'string',
      arriveTime: 'string',
      bookTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos },
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookTicketInfos)) {
      $dara.Model.validateArray(this.bookTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleBookInfos extends $dara.Model {
  bookTrainInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos[];
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failMsg?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  lastPayTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * GW123456
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      bookTrainInfos: 'book_train_infos',
      failCode: 'fail_code',
      failMsg: 'fail_msg',
      lastPayTime: 'last_pay_time',
      status: 'status',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTrainInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos },
      failCode: 'string',
      failMsg: 'string',
      lastPayTime: 'string',
      status: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookTrainInfos)) {
      $dara.Model.validateArray(this.bookTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeCost?: number;
  /**
   * @example
   * 0
   */
  changeDiff?: number;
  /**
   * @example
   * 0
   */
  changeGapHandingFee?: number;
  /**
   * @example
   * 0
   */
  changeMinTicketAmountHandingFee?: number;
  /**
   * @example
   * 04
   */
  coachNo?: string;
  /**
   * @example
   * 4000
   */
  failCode?: string;
  failReason?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 10000
   */
  realTicketPrice?: number;
  /**
   * @example
   * 1A
   */
  seatNo?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * null
   */
  ticketEntrance?: string;
  /**
   * @example
   * 1234
   */
  ticketPrice?: number;
  /**
   * @example
   * 11
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      changeCost: 'change_cost',
      changeDiff: 'change_diff',
      changeGapHandingFee: 'change_gap_handing_fee',
      changeMinTicketAmountHandingFee: 'change_min_ticket_amount_handing_fee',
      coachNo: 'coach_no',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      passengerId: 'passenger_id',
      realTicketPrice: 'real_ticket_price',
      seatNo: 'seat_no',
      seatType: 'seat_type',
      ticketEntrance: 'ticket_entrance',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCost: 'number',
      changeDiff: 'number',
      changeGapHandingFee: 'number',
      changeMinTicketAmountHandingFee: 'number',
      coachNo: 'string',
      failCode: 'string',
      failReason: 'string',
      passengerId: 'string',
      realTicketPrice: 'number',
      seatNo: 'string',
      seatType: 'string',
      ticketEntrance: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos extends $dara.Model {
  /**
   * @example
   * BDC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arriveTime?: string;
  changeTicketInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos[];
  /**
   * @example
   * BTC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * D1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arriveTime: 'arrive_time',
      changeTicketInfos: 'change_ticket_infos',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      arrStationName: 'string',
      arriveTime: 'string',
      changeTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos },
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketInfos)) {
      $dara.Model.validateArray(this.changeTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleChangeInfos extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  changeApplyId?: string;
  changeTrainInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos[];
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  limitPayTime?: string;
  /**
   * @example
   * 12345
   */
  outChangeApplyId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      changeApplyId: 'change_apply_id',
      changeTrainInfos: 'change_train_infos',
      limitPayTime: 'limit_pay_time',
      outChangeApplyId: 'out_change_apply_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeApplyId: 'string',
      changeTrainInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos },
      limitPayTime: 'string',
      outChangeApplyId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTrainInfos)) {
      $dara.Model.validateArray(this.changeTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos extends $dara.Model {
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 111
   */
  refundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      refundPrice: 'refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      refundPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails extends $dara.Model {
  /**
   * @example
   * 123456
   */
  offlineRefundId?: string;
  offlineRefundInfos?: TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos[];
  /**
   * @example
   * 1
   */
  offlineRefundType?: string;
  /**
   * @example
   * 10000
   */
  refundTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      offlineRefundId: 'offline_refund_id',
      offlineRefundInfos: 'offline_refund_infos',
      offlineRefundType: 'offline_refund_type',
      refundTotalPrice: 'refund_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineRefundId: 'string',
      offlineRefundInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos },
      offlineRefundType: 'string',
      refundTotalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.offlineRefundInfos)) {
      $dara.Model.validateArray(this.offlineRefundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo extends $dara.Model {
  cascadeDeptName?: string;
  /**
   * @example
   * 111111
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 123456
   */
  costCenterNo?: string;
  /**
   * @example
   * 582000002311
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 11111
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 1234
   */
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptName: 'cascade_dept_name',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      departId: 'depart_id',
      departName: 'depart_name',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      passengerId: 'passenger_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptName: 'string',
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      departId: 'string',
      departName: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      passengerId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModulePassengerInfoS extends $dara.Model {
  costCenterInfo?: TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  countryCode?: string;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  passengerCertNo?: string;
  /**
   * @example
   * 170d9ac6f8807f9ec603c688f45f78a41
   */
  passengerCertType?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  passengerMobile?: string;
  /**
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  /**
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  validDateEnd?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterInfo: 'cost_center_info',
      countryCode: 'country_code',
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerId: 'passenger_id',
      passengerMobile: 'passenger_mobile',
      passengerName: 'passenger_name',
      validDateEnd: 'valid_date_end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterInfo: TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo,
      countryCode: 'string',
      passengerCertNo: 'string',
      passengerCertType: 'string',
      passengerId: 'string',
      passengerMobile: 'string',
      passengerName: 'string',
      validDateEnd: 'string',
    };
  }

  validate() {
    if(this.costCenterInfo && typeof (this.costCenterInfo as any).validate === 'function') {
      (this.costCenterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos extends $dara.Model {
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 0
   */
  refundCost?: number;
  /**
   * @example
   * 10000
   */
  refundPrice?: number;
  /**
   * @example
   * 10000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      refundCost: 'refund_cost',
      refundPrice: 'refund_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      refundCost: 'number',
      refundPrice: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo extends $dara.Model {
  arrStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arrTime?: string;
  /**
   * @example
   * BTC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  refundTicketInfos?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos[];
  /**
   * @example
   * K1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationName: 'arr_station_name',
      arrTime: 'arr_time',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      refundTicketInfos: 'refund_ticket_infos',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationName: 'string',
      arrTime: 'string',
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      refundTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos },
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTicketInfos)) {
      $dara.Model.validateArray(this.refundTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModuleRefundInfos extends $dara.Model {
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failMsg?: string;
  /**
   * @example
   * 123456778
   */
  outRefundId?: string;
  /**
   * @remarks
   * String
   * 
   * @example
   * 123456
   */
  refundId?: string;
  refundTrainInfo?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo[];
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'fail_code',
      failMsg: 'fail_msg',
      outRefundId: 'out_refund_id',
      refundId: 'refund_id',
      refundTrainInfo: 'refund_train_info',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failMsg: 'string',
      outRefundId: 'string',
      refundId: 'string',
      refundTrainInfo: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainInfo)) {
      $dara.Model.validateArray(this.refundTrainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBodyModule extends $dara.Model {
  bookInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfos;
  changeInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfos[];
  offlineRefundDetails?: TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails[];
  /**
   * @example
   * 1017028198411054446
   */
  orderId?: string;
  /**
   * @example
   * 3703184209587306496
   */
  outOrderId?: string;
  passengerInfoS?: TrainOrderDetailQueryResponseBodyModulePassengerInfoS[];
  refundInfos?: TrainOrderDetailQueryResponseBodyModuleRefundInfos[];
  static names(): { [key: string]: string } {
    return {
      bookInfos: 'book_infos',
      changeInfos: 'change_infos',
      offlineRefundDetails: 'offlineRefundDetails',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerInfoS: 'passenger_info_s',
      refundInfos: 'refund_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookInfos: TrainOrderDetailQueryResponseBodyModuleBookInfos,
      changeInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfos },
      offlineRefundDetails: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails },
      orderId: 'string',
      outOrderId: 'string',
      passengerInfoS: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModulePassengerInfoS },
      refundInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfos },
    };
  }

  validate() {
    if(this.bookInfos && typeof (this.bookInfos as any).validate === 'function') {
      (this.bookInfos as any).validate();
    }
    if(Array.isArray(this.changeInfos)) {
      $dara.Model.validateArray(this.changeInfos);
    }
    if(Array.isArray(this.offlineRefundDetails)) {
      $dara.Model.validateArray(this.offlineRefundDetails);
    }
    if(Array.isArray(this.passengerInfoS)) {
      $dara.Model.validateArray(this.passengerInfoS);
    }
    if(Array.isArray(this.refundInfos)) {
      $dara.Model.validateArray(this.refundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: TrainOrderDetailQueryResponseBodyModule;
  /**
   * @example
   * 210bc81a17090871660176894d008c
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 2103a05c16872420814992343d8a09
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
      module: TrainOrderDetailQueryResponseBodyModule,
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

