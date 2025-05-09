// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkipDataCorrectRowCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket ID. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to obtain the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 420****
   */
  orderId?: number;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The reason for skipping the verification on the number of rows in the precheck for data change.
   * 
   * This parameter is required.
   * 
   * @example
   * save test time
   */
  reason?: string;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      reason: 'Reason',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      realLoginUserUid: 'string',
      reason: 'string',
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

