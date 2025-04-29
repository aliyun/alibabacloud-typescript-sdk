// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderCreateRequestBookTrainInfosBookTicketInfos } from "./TrainOrderCreateRequestBookTrainInfosBookTicketInfos";


export class TrainOrderCreateRequestBookTrainInfos extends $dara.Model {
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
   */
  bookTicketInfos?: TrainOrderCreateRequestBookTrainInfosBookTicketInfos[];
  /**
   * @example
   * 1T
   */
  chooseBeds?: string;
  /**
   * @example
   * 1T
   */
  chooseSeats?: string;
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
   * K123456
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      bookTicketInfos: 'book_ticket_infos',
      chooseBeds: 'choose_beds',
      chooseSeats: 'choose_seats',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      bookTicketInfos: { 'type': 'array', 'itemType': TrainOrderCreateRequestBookTrainInfosBookTicketInfos },
      chooseBeds: 'string',
      chooseSeats: 'string',
      depStationCode: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookTicketInfos)) {
      $dara.Model.validateArray(this.bookTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

