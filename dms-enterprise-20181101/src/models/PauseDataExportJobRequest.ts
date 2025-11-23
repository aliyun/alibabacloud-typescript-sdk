// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseDataExportJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL result set export task. You can call the [GetDataExportOrderDetail](https://help.aliyun.com/document_detail/465911.html) operation to obtain the value of this parameter. If you set this parameter to Null, no SQL result set export task is suspended.
   * 
   * This parameter is required.
   * 
   * @example
   * 1276****
   */
  jobId?: number;
  /**
   * @remarks
   * The ticket ID. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 546****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
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

