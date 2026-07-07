// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmDisburseCmd extends $dara.Model {
  disputeId?: string;
  /**
   * @remarks
   * The primary distribution order ID.
   * 
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @remarks
   * The distribution transaction ID.
   * 
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'disputeId',
      orderId: 'orderId',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'string',
      orderId: 'string',
      purchaseOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

