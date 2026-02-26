// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseOrderCreateResult extends $dara.Model {
  /**
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      purchaseOrderId: 'purchaseOrderId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchaseOrderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

