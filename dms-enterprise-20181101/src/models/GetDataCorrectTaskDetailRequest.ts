// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket. You can call the [CreateDataCorrectOrder](https://help.aliyun.com/document_detail/208388.html), [CreateDataImportOrder](https://help.aliyun.com/document_detail/208387.html), or [CreateFreeLockCorrectOrder](https://help.aliyun.com/document_detail/208386.html) operation to obtain the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12435523
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 14325432
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

