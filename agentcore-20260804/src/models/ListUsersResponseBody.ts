// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @remarks
   * The authentication method of the user. A value of password indicates that local password authentication in the workspace is used. A value of dingtalk or feishu indicates that the user is synchronized and authenticated by the corresponding external identity provider.
   * 
   * @example
   * password
   */
  authMethod?: string;
  /**
   * @remarks
   * The creation time in UTC format based on RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The display name of the user. The name must be 1 to 32 characters in length.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The email address can be up to 256 characters in length.
   * 
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @remarks
   * The user name. The name must be unique within the workspace, contain only lowercase letters, digits, and hyphens, start and end with a lowercase letter or a digit, and be 1 to 32 characters in length.
   * 
   * @example
   * user-01
   */
  name?: string;
  /**
   * @remarks
   * The user remarks. The remarks can be up to 1,024 characters in length.
   * 
   * @example
   * Member of the agent operations team
   */
  note?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user status. Valid values: Creating, Active, Updating, Deleting, Failed, and DeleteFailed.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The last modification time in UTC format based on RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentCoreUserId: 'agentCoreUserId',
      authMethod: 'authMethod',
      createdAt: 'createdAt',
      displayName: 'displayName',
      email: 'email',
      name: 'name',
      note: 'note',
      regionId: 'regionId',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCoreUserId: 'string',
      authMethod: 'string',
      createdAt: 'string',
      displayName: 'string',
      email: 'string',
      name: 'string',
      note: 'string',
      regionId: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of users.
   */
  items?: ListUsersResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page that takes effect in this query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page. This parameter is empty if no next page exists.
   * 
   * @example
   * dXNlci1vZmZzZXQ6MTA
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of users that meet the query conditions.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListUsersResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

