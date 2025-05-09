// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrackJobTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the ID of the tenant.
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

