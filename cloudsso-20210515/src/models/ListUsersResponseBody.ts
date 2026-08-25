// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsersExternalId extends $dara.Model {
  /**
   * @remarks
   * The user identifier from the external identity provider.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The external identity synchronization channel. Currently, only SCIM-based user synchronization is supported.
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

export class ListUsersResponseBodyUsersTags extends $dara.Model {
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

export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created (UTC).
   * 
   * @example
   * 2021-06-30T09:20:08Z
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
   * AliceLee
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
   */
  email?: string;
  /**
   * @remarks
   * The identifier information of the user from the external identity provider.
   */
  externalId?: ListUsersResponseBodyUsersExternalId;
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
   * - Manual: The user is manually created.
   * - Synchronized: The user is synchronized from an external identity provider.
   * 
   * @example
   * Synchronized
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - Enabled: The user is enabled.
   * - Disabled: The user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListUsersResponseBodyUsersTags[];
  /**
   * @remarks
   * The time when the user was last modified (UTC).
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u-00bikzkuzbb58luh****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
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
      externalId: ListUsersResponseBodyUsersExternalId,
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersTags },
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

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the results are truncated. Valid values:
   * 
   * - true: The results are truncated.
   * - false: The results are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. 
   * 
   * > This parameter is returned only when `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 734D9AAC-9A8E-5DF6-A633-ADE70FF2A9B1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the request parameters.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  /**
   * @remarks
   * The user list.
   */
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

