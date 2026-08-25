// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyUserTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created (UTC).
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * - Manual: Manually created.
   * - Synchronized: Synchronized from an external source.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - Enabled: Enabled.
   * - Disabled: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateUserResponseBodyUserTags[];
  /**
   * @remarks
   * The time when the user was last modified (UTC).
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': CreateUserResponseBodyUserTags },
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The user information.
   */
  user?: CreateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: CreateUserResponseBodyUser,
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

