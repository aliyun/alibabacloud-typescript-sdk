// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  passengerCertNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerCertType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
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
   */
  seatType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ticketPrice?: string;
  /**
   * @remarks
   * This parameter is required.
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
   */
  arrStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeTicketInfoS?: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS[];
  chooseBedS?: string;
  chooseSeatS?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  originalDepTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  originalTrainNo?: string;
  /**
   * @remarks
   * This parameter is required.
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
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainInfoS?: TrainApplyChangeRequestChangeTrainInfoS[];
  forceMatch?: string;
  isPayNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outChangeApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
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

