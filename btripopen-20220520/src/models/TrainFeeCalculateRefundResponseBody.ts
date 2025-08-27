// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo extends $dara.Model {
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
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerCertNo: 'string',
      passengerCertType: 'string',
      passengerId: 'string',
      passengerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails extends $dara.Model {
  /**
   * @example
   * true
   */
  canRefund?: boolean;
  passengerInfo?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo;
  /**
   * @example
   * 90
   */
  refundCostFee?: number;
  /**
   * @example
   * 10
   */
  refundPrice?: number;
  /**
   * @example
   * 90
   */
  refundRate?: number;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      canRefund: 'can_refund',
      passengerInfo: 'passenger_info',
      refundCostFee: 'refund_cost_fee',
      refundPrice: 'refund_price',
      refundRate: 'refund_rate',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRefund: 'boolean',
      passengerInfo: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo,
      refundCostFee: 'number',
      refundPrice: 'number',
      refundRate: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    if(this.passengerInfo && typeof (this.passengerInfo as any).validate === 'function') {
      (this.passengerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails extends $dara.Model {
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
  /**
   * @example
   * BDC
   */
  depStationCode?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  refundTicketDetails?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails[];
  /**
   * @example
   * K1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      refundTicketDetails: 'refund_ticket_details',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      depStationCode: 'string',
      depTime: 'string',
      refundTicketDetails: { 'type': 'array', 'itemType': TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails },
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTicketDetails)) {
      $dara.Model.validateArray(this.refundTicketDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateRefundResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123445
   */
  distributeOrderId?: string;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: string;
  refundTrainDetails?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails[];
  static names(): { [key: string]: string } {
    return {
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
      refundTrainDetails: 'refund_train_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeOrderId: 'string',
      orderId: 'string',
      refundTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails },
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainDetails)) {
      $dara.Model.validateArray(this.refundTrainDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateRefundResponseBody extends $dara.Model {
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
  module?: TrainFeeCalculateRefundResponseBodyModule;
  /**
   * @example
   * 210bc4c416859457407135025d509c
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
      module: TrainFeeCalculateRefundResponseBodyModule,
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

