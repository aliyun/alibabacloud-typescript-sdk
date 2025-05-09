// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To obtain the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Tenant information](https://help.aliyun.com/document_detail/181330.html).
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

