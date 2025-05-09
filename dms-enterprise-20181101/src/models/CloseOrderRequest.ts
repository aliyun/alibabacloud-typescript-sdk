// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The reason why the ticket is closed.
   * 
   * This parameter is required.
   * 
   * @example
   * close reason
   */
  closeReason?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 1343
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      closeReason: 'CloseReason',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeReason: 'string',
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

