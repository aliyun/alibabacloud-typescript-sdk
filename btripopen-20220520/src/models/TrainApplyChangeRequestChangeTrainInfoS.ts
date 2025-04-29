// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS } from "./TrainApplyChangeRequestChangeTrainInfoSchangeTicketInfoS";


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

