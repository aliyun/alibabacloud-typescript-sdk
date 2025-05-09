// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitStructSyncOrderApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 4324535
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

