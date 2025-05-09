// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are required to perform the operation. You do not need to specify this parameter.
   * 
   * @example
   * {}
   */
  actionDetail?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the ticket. You can call the [ListOrders](https://help.aliyun.com/document_detail/144643.html) operation to obtain the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4200000
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      actionDetail: 'ActionDetail',
      orderId: 'OrderId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(this.actionDetail) {
      $dara.Model.validateMap(this.actionDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

