// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyInfoInRecycleBinResponseBodyAccessKey extends $dara.Model {
  /**
   * @remarks
   * The access key ID.
   * 
   * @example
   * LTAI*******************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The time when the access key was created.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the access key will be permanently deleted from the recycle bin.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-11-12T10:12:00Z.
   * 
   * @example
   * 2020-11-12T10:12:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The time when the access key was deleted and moved to the recycle bin.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-12T10:12:00Z.
   * 
   * @example
   * 2020-10-12T10:12:00Z
   */
  recycleDate?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  /**
   * @remarks
   * Indicates whether the Resource Access Management (RAM) user to which the access key belongs is revoked. Valid values:
   * 
   * - true: The Resource Access Management (RAM) user is revoked.
   * - false: The Resource Access Management (RAM) user is not revoked.
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
   * The access key information.
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

