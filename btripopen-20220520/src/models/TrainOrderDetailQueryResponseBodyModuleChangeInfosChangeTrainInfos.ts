// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos } from "./TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos";


export class TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfos extends $dara.Model {
  /**
   * @example
   * BDC
   */
  arrStationCode?: string;
  arrStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arriveTime?: string;
  changeTicketInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos[];
  /**
   * @example
   * BTC
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
      changeTicketInfos: 'change_ticket_infos',
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
      changeTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos },
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketInfos)) {
      $dara.Model.validateArray(this.changeTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

