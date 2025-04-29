// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo } from "./TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo";


export class TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetails extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeFee?: number;
  /**
   * @example
   * 5
   */
  changeRate?: number;
  /**
   * @example
   * 10000
   */
  changeRefundFee?: number;
  /**
   * @example
   * 10
   */
  changeRefundRate?: number;
  passengerInfo?: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      changeRate: 'change_rate',
      changeRefundFee: 'change_refund_fee',
      changeRefundRate: 'change_refund_rate',
      passengerInfo: 'passenger_info',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      changeRate: 'number',
      changeRefundFee: 'number',
      changeRefundRate: 'number',
      passengerInfo: TrainFeeCalculateChangeResponseBodyModuleChangeTrainDetailsChangeTicketDetailsPassengerInfo,
      seatType: 'string',
      ticketPrice: 'number',
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

