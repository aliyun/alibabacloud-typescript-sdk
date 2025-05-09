// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportDownloadURLRequest extends $dara.Model {
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
   * The ID of the Alibaba Cloud account that is used to call the API operation.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
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
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      realLoginUserUid: 'string',
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

