// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseOrderCreateResult extends $dara.Model {
  /**
   * @remarks
   * Purchase Order ID
   * 
   * @example
   * 6692****5696
   */
  purchaseOrderId?: string;
  /**
   * @remarks
   * API Request requestId
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
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

