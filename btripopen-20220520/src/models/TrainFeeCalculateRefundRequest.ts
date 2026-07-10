// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos extends $dara.Model {
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

export class TrainFeeCalculateRefundRequestRefundTrainInfos extends $dara.Model {
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
  refundPassengerInfos?: TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos[];
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
      refundPassengerInfos: 'refund_passenger_infos',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      depStationCode: 'string',
      depTime: 'string',
      refundPassengerInfos: { 'type': 'array', 'itemType': TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos },
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundPassengerInfos)) {
      $dara.Model.validateArray(this.refundPassengerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainFeeCalculateRefundRequest extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  refundTrainInfos?: TrainFeeCalculateRefundRequestRefundTrainInfos[];
  static names(): { [key: string]: string } {
    return {
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
      refundTrainInfos: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeOrderId: 'string',
      orderId: 'string',
      refundTrainInfos: { 'type': 'array', 'itemType': TrainFeeCalculateRefundRequestRefundTrainInfos },
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainInfos)) {
      $dara.Model.validateArray(this.refundTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

