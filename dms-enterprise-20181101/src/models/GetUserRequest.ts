// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account. You can view your UID by moving the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console.
   * 
   * @example
   * 22973492647626****
   */
  uid?: string;
  /**
   * @remarks
   * The ID of the user. You can call the [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      uid: 'Uid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'number',
      uid: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

