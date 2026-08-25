// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyItems extends $dara.Model {
  /**
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @example
   * password
   */
  authMethod?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @example
   * user-01
   */
  name?: string;
  /**
   * @example
   * 智能体运营组成员
   */
  note?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
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
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  items?: ListUsersResponseBodyItems[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * dXNlci1vZmZzZXQ6MTA
   */
  nextToken?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
  success?: boolean;
  /**
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

