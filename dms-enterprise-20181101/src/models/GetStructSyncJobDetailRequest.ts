// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4324321
   */
  orderId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
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

