// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo extends $dara.Model {
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
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerCertNo: 'string',
      passengerCertType: 'string',
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

export class TrainFeeCalculateChangeRequestChangeTrainDetails extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrStationCode?: string;
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
  passengerInfo?: TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  seatType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      originalDepTime: 'original_dep_time',
      originalTrainNo: 'original_train_no',
      passengerInfo: 'passenger_info',
      seatType: 'seat_type',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      depStationCode: 'string',
      depTime: 'string',
      originalDepTime: 'string',
      originalTrainNo: 'string',
      passengerInfo: TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo,
      seatType: 'string',
      trainNo: 'string',
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

export class TrainFeeCalculateChangeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainDetails?: TrainFeeCalculateChangeRequestChangeTrainDetails[];
  /**
   * @remarks
   * This parameter is required.
   */
  distributeOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
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
      changeTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeRequestChangeTrainDetails },
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

