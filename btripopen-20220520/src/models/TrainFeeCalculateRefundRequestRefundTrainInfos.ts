// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos } from "./TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos";


export class TrainFeeCalculateRefundRequestRefundTrainInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BDC
   */
  arrStationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BTC
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
   */
  refundPassengerInfos?: TrainFeeCalculateRefundRequestRefundTrainInfosRefundPassengerInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * K1234
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

