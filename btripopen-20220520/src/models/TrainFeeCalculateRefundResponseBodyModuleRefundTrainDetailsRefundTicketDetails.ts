// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo } from "./TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo";


export class TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetails extends $dara.Model {
  /**
   * @example
   * true
   */
  canRefund?: boolean;
  passengerInfo?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo;
  /**
   * @example
   * 90
   */
  refundCostFee?: number;
  /**
   * @example
   * 10
   */
  refundPrice?: number;
  /**
   * @example
   * 90
   */
  refundRate?: number;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      canRefund: 'can_refund',
      passengerInfo: 'passenger_info',
      refundCostFee: 'refund_cost_fee',
      refundPrice: 'refund_price',
      refundRate: 'refund_rate',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRefund: 'boolean',
      passengerInfo: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetailsRefundTicketDetailsPassengerInfo,
      refundCostFee: 'number',
      refundPrice: 'number',
      refundRate: 'number',
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

