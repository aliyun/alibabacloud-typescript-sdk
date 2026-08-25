// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsResponseBodyItemsAgents extends $dara.Model {
  /**
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @example
   * agent-01
   */
  agentName?: string;
  /**
   * @example
   * WORKER
   */
  teamRole?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
      teamRole: 'teamRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      teamRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBodyItemsUsers extends $dara.Model {
  /**
   * @example
   * ADMIN
   */
  teamRole?: string;
  /**
   * @example
   * usr-123456
   */
  userId?: string;
  /**
   * @example
   * user-01
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      teamRole: 'teamRole',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamRole: 'string',
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

export class ListTeamsResponseBodyItems extends $dara.Model {
  agents?: ListTeamsResponseBodyItemsAgents[];
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * 负责智能客服业务的团队
   */
  description?: string;
  /**
   * @example
   * team-01
   */
  name?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * tm-123456
   */
  teamId?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  users?: ListTeamsResponseBodyItemsUsers[];
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      createdAt: 'createdAt',
      description: 'description',
      name: 'name',
      status: 'status',
      teamId: 'teamId',
      updatedAt: 'updatedAt',
      users: 'users',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': ListTeamsResponseBodyItemsAgents },
      createdAt: 'string',
      description: 'string',
      name: 'string',
      status: 'string',
      teamId: 'string',
      updatedAt: 'string',
      users: { 'type': 'array', 'itemType': ListTeamsResponseBodyItemsUsers },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamsResponseBody extends $dara.Model {
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
  items?: ListTeamsResponseBodyItems[];
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
   * dGVhbS1vZmZzZXQ6MTA
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
      items: { 'type': 'array', 'itemType': ListTeamsResponseBodyItems },
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

