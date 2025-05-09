// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

