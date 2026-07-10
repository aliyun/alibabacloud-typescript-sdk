// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos extends $dara.Model {
  coachNo?: string;
  failCode?: string;
  failReason?: string;
  passengerId?: string;
  realTicketPrice?: number;
  seatNo?: string;
  seatType?: string;
  ticketEntrance?: string;
  ticketPrice?: number;
  ticketStatus?: number;
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
  arrStationCode?: string;
  arrStationName?: string;
  arriveTime?: string;
  bookTicketInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos[];
  depStationCode?: string;
  depStationName?: string;
  depTime?: string;
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
  failCode?: string;
  failMsg?: string;
  lastPayTime?: string;
  status?: number;
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
  changeCost?: number;
  changeDiff?: number;
  changeGapHandingFee?: number;
  changeMinTicketAmountHandingFee?: number;
  coachNo?: string;
  failCode?: string;
  failReason?: string;
  passengerId?: string;
  realTicketPrice?: number;
  seatNo?: string;
  seatType?: string;
  ticketEntrance?: string;
  ticketPrice?: number;
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
  arrStationCode?: string;
  arrStationName?: string;
  arriveTime?: string;
  changeTicketInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos[];
  depStationCode?: string;
  depStationName?: string;
  depTime?: string;
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
  changeApplyId?: string;
  changeTrainInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos[];
  limitPayTime?: string;
  outChangeApplyId?: string;
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
  passengerId?: string;
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
  offlineRefundId?: string;
  offlineRefundInfos?: TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos[];
  offlineRefundType?: string;
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
  costCenterId?: string;
  costCenterName?: string;
  costCenterNo?: string;
  departId?: string;
  departName?: string;
  invoiceId?: string;
  invoiceTitle?: string;
  passengerId?: string;
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
  countryCode?: string;
  passengerCertNo?: string;
  passengerCertType?: string;
  passengerId?: string;
  passengerMobile?: string;
  passengerName?: string;
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
  passengerId?: string;
  refundCost?: number;
  refundPrice?: number;
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
  arrTime?: string;
  depStationCode?: string;
  depStationName?: string;
  depTime?: string;
  refundTicketInfos?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos[];
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
  failCode?: string;
  failMsg?: string;
  outRefundId?: string;
  refundId?: string;
  refundTrainInfo?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo[];
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
  orderId?: string;
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
  code?: string;
  message?: string;
  module?: TrainOrderDetailQueryResponseBodyModule;
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

