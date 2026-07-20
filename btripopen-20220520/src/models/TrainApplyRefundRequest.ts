// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos extends $dara.Model {
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
   * 12334
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

export class TrainApplyRefundRequestRefundTrainInfos extends $dara.Model {
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
   */
  refundPassengerInfos?: TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * K234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      depTime: 'dep_time',
      refundPassengerInfos: 'refund_passenger_infos',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depTime: 'string',
      refundPassengerInfos: { 'type': 'array', 'itemType': TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos },
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

export class TrainApplyRefundRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456778
   */
  outRefundId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refundTrainInfos?: TrainApplyRefundRequestRefundTrainInfos[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundId: 'out_refund_id',
      refundTrainInfos: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outRefundId: 'string',
      refundTrainInfos: { 'type': 'array', 'itemType': TrainApplyRefundRequestRefundTrainInfos },
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

