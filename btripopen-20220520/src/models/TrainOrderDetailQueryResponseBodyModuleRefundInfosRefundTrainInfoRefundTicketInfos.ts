// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfoRefundTicketInfos extends $dara.Model {
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 0
   */
  refundCost?: number;
  /**
   * @example
   * 10000
   */
  refundPrice?: number;
  /**
   * @example
   * 10000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      refundCost: 'refund_cost',
      refundPrice: 'refund_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      refundCost: 'number',
      refundPrice: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

