// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDLPublishRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * > You can create a schema design ticket in the Data Management (DMS) console. For more information, see [Design schemas](https://help.aliyun.com/document_detail/69711.html). You can also call the [CreateOrder](https://help.aliyun.com/document_detail/144649.html) operation to create a schema design ticket and obtain the ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 3214325
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, log on to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
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

