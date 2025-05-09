// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCronClearTaskDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket. You can query the ticket ID from the response parameters of the [CreateDataCronClearOrder](https://help.aliyun.com/document_detail/208385.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 432532
   */
  orderId?: number;
  /**
   * @remarks
   * The number of the page to return.
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
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 12345
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

