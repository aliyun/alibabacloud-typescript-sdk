// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  passengerCertNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 170d9ac6f8807f9ec603c688f45f78a41
   */
  passengerCertType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

export class TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  passengerInfo?: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  ticketPrice?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      passengerInfo: 'passenger_info',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerInfo: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo,
      seatType: 'string',
      ticketPrice: 'string',
      ticketType: 'string',
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

export class TrainApplyChangeRequestChangeTrainInfoS extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BTC
   */
  arrStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeTicketInfoS?: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS[];
  /**
   * @example
   * null
   */
  chooseBedS?: string;
  /**
   * @example
   * 1T
   */
  chooseSeatS?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BDC
   */
  depStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-06 15:19:01
   */
  originalDepTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * K234
   */
  originalTrainNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * K2345
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      changeTicketInfoS: 'change_ticket_info_s',
      chooseBedS: 'choose_bed_s',
      chooseSeatS: 'choose_seat_s',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      originalDepTime: 'original_dep_time',
      originalTrainNo: 'original_train_no',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      changeTicketInfoS: { 'type': 'array', 'itemType': TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS },
      chooseBedS: 'string',
      chooseSeatS: 'string',
      depStationCode: 'string',
      depTime: 'string',
      originalDepTime: 'string',
      originalTrainNo: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketInfoS)) {
      $dara.Model.validateArray(this.changeTicketInfoS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainApplyChangeRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainInfoS?: TrainApplyChangeRequestChangeTrainInfoS[];
  /**
   * @example
   * 0
   */
  forceMatch?: string;
  /**
   * @example
   * false
   */
  isPayNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1017028198411054446
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  outChangeApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptNoSeat: 'accept_no_seat',
      changeTrainInfoS: 'change_train_info_s',
      forceMatch: 'force_match',
      isPayNow: 'is_pay_now',
      orderId: 'order_id',
      outChangeApplyId: 'out_change_apply_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptNoSeat: 'string',
      changeTrainInfoS: { 'type': 'array', 'itemType': TrainApplyChangeRequestChangeTrainInfoS },
      forceMatch: 'string',
      isPayNow: 'boolean',
      orderId: 'string',
      outChangeApplyId: 'string',
      outOrderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTrainInfoS)) {
      $dara.Model.validateArray(this.changeTrainInfoS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

