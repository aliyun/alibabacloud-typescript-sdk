// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersInRecycleBinResponseBodyUsersUser extends $dara.Model {
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the RAM user will be permanently deleted from the recycle bin.
   * 
   * @example
   * 2020-11-15T09:12:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the RAM user was deleted and moved to the recycle bin.
   * 
   * @example
   * 2020-10-15T09:12:00Z
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
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deleteDate: 'DeleteDate',
      displayName: 'DisplayName',
      recycleDate: 'RecycleDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deleteDate: 'string',
      displayName: 'string',
      recycleDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersInRecycleBinResponseBodyUsers extends $dara.Model {
  user?: ListUsersInRecycleBinResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersInRecycleBinResponseBodyUsersUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersInRecycleBinResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The parameter that is used to obtain the truncated part. It takes effect only when `IsTruncated` is set to `true`.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3687BD52-49FD-585B-AB14-CD05B7C76963
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM users.
   */
  users?: ListUsersInRecycleBinResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      users: ListUsersInRecycleBinResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

