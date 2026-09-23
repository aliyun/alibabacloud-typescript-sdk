// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The time when the Resource Access Management (RAM) user was created.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the Resource Access Management (RAM) user.
   * 
   * @example
   * new
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the Resource Access Management (RAM) user.
   * 
   * > This parameter is applicable only to China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The most recent time when the Resource Access Management (RAM) user logged on to the console.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the Resource Access Management (RAM) user.
   * 
   * > This parameter is applicable only to China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - Manual: The Resource Access Management (RAM) user was manually created in RAM.
   * - SCIM: The Resource Access Management (RAM) user was created by using the System for Cross-domain Identity Management protocol.
   * - CloudSSO: The user was created by using CloudSSO.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the Resource Access Management (RAM) user was last updated.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-13T09:19:49Z.
   * 
   * @example
   * 2020-10-13T09:19:49Z
   */
  updateDate?: string;
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
   * new@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      lastLoginDate: 'string',
      mobilePhone: 'string',
      provisionType: 'string',
      updateDate: 'string',
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

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B56DD42-6962-4F89-A19C-079EED1F0FE3
   */
  requestId?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user information.
   */
  user?: UpdateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: UpdateUserResponseBodyUser,
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

