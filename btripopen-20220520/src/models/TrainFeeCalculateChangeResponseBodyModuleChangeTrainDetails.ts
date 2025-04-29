// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails } from "./TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails";


export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetails extends $dara.Model {
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
  changeTicketDetails?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails[];
  /**
   * @example
   * BDC
   */
  depStationCode?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  depTime?: string;
  /**
   * @example
   * K2345
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      changeTicketDetails: 'change_ticket_details',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      changeTicketDetails: { 'type': 'array', 'itemType': TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails },
      depStationCode: 'string',
      depTime: 'string',
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketDetails)) {
      $dara.Model.validateArray(this.changeTicketDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

