// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLReviewOriginSQLShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to filter SQL statements involved in the ticket.
   */
  orderActionDetailShrink?: string;
  /**
   * @remarks
   * The ID of the SQL review ticket. You can call the [CreateSQLReviewOrder](https://help.aliyun.com/document_detail/257777.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123321
   */
  orderId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderActionDetailShrink: 'OrderActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderActionDetailShrink: 'string',
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

