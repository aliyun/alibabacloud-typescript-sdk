// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo extends $dara.Model {
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

export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails extends $dara.Model {
  changeFee?: number;
  changeRate?: number;
  changeRefundFee?: number;
  changeRefundRate?: number;
  passengerInfo?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo;
  seatType?: string;
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      changeRate: 'change_rate',
      changeRefundFee: 'change_refund_fee',
      changeRefundRate: 'change_refund_rate',
      passengerInfo: 'passenger_info',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      changeRate: 'number',
      changeRefundFee: 'number',
      changeRefundRate: 'number',
      passengerInfo: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo,
      seatType: 'string',
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

export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails extends $dara.Model {
  arrStationCode?: string;
  changeTicketDetails?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails[];
  depStationCode?: string;
  depTime?: string;
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      changeTicketDetails: 'change_ticket_details',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      changeTicketDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails },
      depStationCode: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketDetails)) {
      $dara.Model.validateArray(this.changeTicketDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateChangeResponseBodyModule extends $dara.Model {
  changeTrainDetails?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails[];
  distributeOrderId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeTrainDetails: 'change_train_details',
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails },
      distributeOrderId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTrainDetails)) {
      $dara.Model.validateArray(this.changeTrainDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateChangeResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainFeeCalculateChangeResponseBodyModule;
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
      module: TrainFeeCalculateChangeResponseBodyModule,
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

