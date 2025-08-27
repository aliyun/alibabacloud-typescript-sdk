// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo extends $dara.Model {
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
   * 123
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

export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeFee?: number;
  /**
   * @example
   * 5
   */
  changeRate?: number;
  /**
   * @example
   * 10000
   */
  changeRefundFee?: number;
  /**
   * @example
   * 10
   */
  changeRefundRate?: number;
  passengerInfo?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
  changeTicketDetails?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails[];
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
  /**
   * @example
   * K2345
   */
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
  /**
   * @example
   * 123456
   */
  distributeOrderId?: string;
  /**
   * @example
   * 1683901850297448200
   */
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
  module?: TrainFeeCalculateChangeResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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

