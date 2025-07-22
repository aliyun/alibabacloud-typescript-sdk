// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderSummaryForPartnerRequest extends $dara.Model {
  /**
   * @example
   * 1672369049358
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

