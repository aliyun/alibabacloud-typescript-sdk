// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataImportSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket ID. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 14****
   */
  orderId?: number;
  /**
   * @remarks
   * The SQL ID. You can call the ListDataImportSQLPreCheckDetail operation to query the SQL ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15****
   */
  sqlId?: number;
  /**
   * @remarks
   * The tenant ID. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      sqlId: 'SqlId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      sqlId: 'number',
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

