// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos } from "./TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos";


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

