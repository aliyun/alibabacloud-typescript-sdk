// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamResponseBodyDataAgents extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The role of the agent in the team. Valid values: LEADER, WORKER. Each team must have exactly one LEADER.
   * 
   * @example
   * WORKER
   */
  teamRole?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      teamRole: 'teamRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
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

export class UpdateTeamResponseBodyDataUsers extends $dara.Model {
  /**
   * @remarks
   * The role of the user in the team. Valid values: ADMIN, MEMBER. Each team must have exactly one ADMIN.
   * 
   * @example
   * ADMIN
   */
  teamRole?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * usr-123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      teamRole: 'teamRole',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      teamRole: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTeamResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of agent members in the team.
   */
  agents?: UpdateTeamResponseBodyDataAgents[];
  /**
   * @remarks
   * The creation time in UTC, in RFC 3339 format.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The team description.
   * 
   * @example
   * Team responsible for intelligent customer service
   */
  description?: string;
  /**
   * @remarks
   * The team name. The name can contain only lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or digit. The name must be 1 to 128 characters in length.
   * 
   * @example
   * team-01
   */
  name?: string;
  /**
   * @remarks
   * The team status. Valid values: Creating, Active, Updating, Deleting, Failed, Deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * tm-123456
   */
  teamId?: string;
  /**
   * @remarks
   * The time of the last modification in UTC, in RFC 3339 format.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The list of user members in the team.
   */
  users?: UpdateTeamResponseBodyDataUsers[];
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
      agents: { 'type': 'array', 'itemType': UpdateTeamResponseBodyDataAgents },
      createdAt: 'string',
      description: 'string',
      name: 'string',
      status: 'string',
      teamId: 'string',
      updatedAt: 'string',
      users: { 'type': 'array', 'itemType': UpdateTeamResponseBodyDataUsers },
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

export class UpdateTeamResponseBody extends $dara.Model {
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
   * The updated team information.
   */
  data?: UpdateTeamResponseBodyData;
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
   * The response message. An error description is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateTeamResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

