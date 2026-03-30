// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyInfoInRecycleBinResponseBodyAccessKey extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAI*******************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the AccessKey pair will be permanently deleted from the recycle bin.
   * 
   * @example
   * 2020-11-12T10:12:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was deleted and moved to the recycle bin.
   * 
   * @example
   * 2020-10-12T10:12:00Z
   */
  recycleDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  /**
   * @remarks
   * Indicates whether the RAM user to which the AccessKey pair belongs is in the recycle bin. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  userRecycled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      deleteDate: 'DeleteDate',
      recycleDate: 'RecycleDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
      userRecycled: 'UserRecycled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      deleteDate: 'string',
      recycleDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
      userRecycled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyInfoInRecycleBinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AccessKey pair.
   */
  accessKey?: GetAccessKeyInfoInRecycleBinResponseBodyAccessKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: GetAccessKeyInfoInRecycleBinResponseBodyAccessKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKey && typeof (this.accessKey as any).validate === 'function') {
      (this.accessKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

