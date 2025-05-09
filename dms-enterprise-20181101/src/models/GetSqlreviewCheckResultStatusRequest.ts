// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewCheckResultStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket. You can obtain the ticket ID from the response parameters of the [CreateSQLReviewOrder](https://help.aliyun.com/document_detail/257777.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123321
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the ID of the tenant.
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

