// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails } from "./TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails";


export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails extends $dara.Model {
  /**
   * @example
   * BTC
   */
  arrStationCode?: string;
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
  refundTicketDetails?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails[];
  /**
   * @example
   * K1234
   */
  trainNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrStationCode: 'arr_station_code',
      depStationCode: 'dep_station_code',
      depTime: 'dep_time',
      refundTicketDetails: 'refund_ticket_details',
      trainNo: 'train_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrStationCode: 'string',
      depStationCode: 'string',
      depTime: 'string',
      refundTicketDetails: { 'type': 'array', 'itemType': TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails },
      trainNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTicketDetails)) {
      $dara.Model.validateArray(this.refundTicketDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

