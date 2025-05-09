// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataTrackResultDownloadStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the download key, which is used to identify the parsing progress of data tracking logs. You can call the DownloadDataTrackResult operation to query the ID of the key.
   * 
   * This parameter is required.
   * 
   * @example
   * e23dd7ec-a19f-4a69-8eb3-8ffd26e6****
   */
  downloadKeyId?: string;
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to query the ID of the ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 11****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the ID of the tenant.
   * 
   * @example
   * 1***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      downloadKeyId: 'DownloadKeyId',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadKeyId: 'string',
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

