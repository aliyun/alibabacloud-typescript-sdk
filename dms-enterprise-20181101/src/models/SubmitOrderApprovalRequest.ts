// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOrderApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the API operation.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
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
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      realLoginUserUid: 'string',
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

