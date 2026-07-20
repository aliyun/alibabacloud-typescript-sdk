// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundConsultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @example
   * 3753197470069161984
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

