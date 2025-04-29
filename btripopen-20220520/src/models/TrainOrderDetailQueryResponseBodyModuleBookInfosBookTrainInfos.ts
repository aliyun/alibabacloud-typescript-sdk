// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos } from "./TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos";


export class TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfos extends $dara.Model {
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-07 15:19:01
   */
  arriveTime?: string;
  bookTicketInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos[];
  /**
   * @example
   * BDC
   */
  depStationCode?: string;
  depStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * D1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      arrStationName: 'arr_station_name',
      arriveTime: 'arrive_time',
      bookTicketInfos: 'book_ticket_infos',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      arrStationName: 'string',
      arriveTime: 'string',
      bookTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos },
      depStationCode: 'string',
      depStationName: 'string',
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

