// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo } from "./TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo";


export class TrainFeeCalculateChangeRequestChangeTrainDetails extends $dara.Model {
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
   */
  passengerInfo?: TrainFeeCalculateChangeRequestChangeTrainDetailsPassengerInfo;
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
   * K2345
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

