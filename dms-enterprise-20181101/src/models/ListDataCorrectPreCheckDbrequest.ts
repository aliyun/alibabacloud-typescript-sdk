// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCorrectPreCheckDBRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket for the data change.
   * 
   * This parameter is required.
   * 
   * @example
   * 432****
   */
  orderId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Valid values: an integer that is greater than 0.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the ID of the tenant.
   * 
   * @example
   * 4321****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

