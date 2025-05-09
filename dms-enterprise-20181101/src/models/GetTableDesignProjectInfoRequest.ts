// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDesignProjectInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the schema design ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/465867.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95****
   */
  orderId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic
   * 
   * @example
   * 3***
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

