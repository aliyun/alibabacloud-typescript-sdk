// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos } from "./TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos";


export class TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo extends $dara.Model {
  arrStationName?: string;
  /**
   * @example
   * 2024-05-06 15:19:01
   */
  arrTime?: string;
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
  refundTicketInfos?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos[];
  /**
   * @example
   * K1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationName: 'arr_station_name',
      arrTime: 'arr_time',
      depStationCode: 'dep_station_code',
      depStationName: 'dep_station_name',
      depTime: 'dep_time',
      refundTicketInfos: 'refund_ticket_infos',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationName: 'string',
      arrTime: 'string',
      depStationCode: 'string',
      depStationName: 'string',
      depTime: 'string',
      refundTicketInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos },
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTicketInfos)) {
      $dara.Model.validateArray(this.refundTicketInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

