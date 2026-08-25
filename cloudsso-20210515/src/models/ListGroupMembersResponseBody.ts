// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupMembersResponseBodyGroupMembers extends $dara.Model {
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
   * AliceLee@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the user was added to the group.
   * 
   * @example
   * 2021-11-01T06:58:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      groupId: 'GroupId',
      joinTime: 'JoinTime',
      provisionType: 'ProvisionType',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      email: 'string',
      groupId: 'string',
      joinTime: 'string',
      provisionType: 'string',
      status: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The users in the group.
   */
  groupMembers?: ListGroupMembersResponseBodyGroupMembers[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the value of the `IsTruncated` parameter is `true`.
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
   * BB759F84-2C64-5C36-B6C6-253172C5C370
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      groupMembers: 'GroupMembers',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMembers: { 'type': 'array', 'itemType': ListGroupMembersResponseBodyGroupMembers },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupMembers)) {
      $dara.Model.validateArray(this.groupMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

