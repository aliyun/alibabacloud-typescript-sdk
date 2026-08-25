// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUserExternalId extends $dara.Model {
  /**
   * @remarks
   * The user identifier of the external identity provider.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The external identity synchronization channel. Currently, only SCIM synchronization is supported.
   * 
   * @example
   * SCIM
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      issuer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserTags extends $dara.Model {
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

export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created (in UTC).
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
   * The user identifier information of the external identity provider.
   */
  externalId?: GetUserResponseBodyUserExternalId;
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
   * - Synchronized: Synchronized from an external identity provider.
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
  tags?: GetUserResponseBodyUserTags[];
  /**
   * @remarks
   * The time when the user was last modified (in UTC).
   * 
   * @example
   * 2021-10-26T06:43:55Z
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
   * The username of the user.
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
      externalId: 'ExternalId',
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
      externalId: GetUserResponseBodyUserExternalId,
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetUserResponseBodyUserTags },
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.externalId && typeof (this.externalId as any).validate === 'function') {
      (this.externalId as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE42D2C4-A30A-59B7-ACEB-6D22FB44174A
   */
  requestId?: string;
  /**
   * @remarks
   * The user information.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
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

