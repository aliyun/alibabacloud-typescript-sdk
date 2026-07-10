// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo extends $dara.Model {
  passengerCertNo?: string;
  passengerCertType?: string;
  passengerId?: string;
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
  canRefund?: boolean;
  passengerInfo?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo;
  refundCostFee?: number;
  refundPrice?: number;
  refundRate?: number;
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
  arrStationCode?: string;
  depStationCode?: string;
  depTime?: string;
  refundTicketDetails?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails[];
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
  distributeOrderId?: string;
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
  code?: string;
  message?: string;
  module?: TrainFeeCalculateRefundResponseBodyModule;
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

