// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInRecycleBinResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2020-10-11T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the RAM user will be permanently deleted from the recycle bin.
   * 
   * @example
   * 2020-11-12T09:12:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the RAM user was deleted and moved to the recycle bin.
   * 
   * @example
   * 2020-10-12T09:12:00Z
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

export class GetUserInRecycleBinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
   */
  user?: GetUserInRecycleBinResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserInRecycleBinResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

