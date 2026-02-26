// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmDisburseCmd extends $dara.Model {
  /**
   * @example
   * 6692****5457
   */
  orderId?: string;
  /**
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
      purchaseOrderId: 'purchaseOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

