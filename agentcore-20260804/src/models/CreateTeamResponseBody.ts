// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamResponseBodyDataAgents extends $dara.Model {
  /**
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
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

export class CreateTeamResponseBodyDataUsers extends $dara.Model {
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

export class CreateTeamResponseBodyData extends $dara.Model {
  agents?: CreateTeamResponseBodyDataAgents[];
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
  users?: CreateTeamResponseBodyDataUsers[];
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
      agents: { 'type': 'array', 'itemType': CreateTeamResponseBodyDataAgents },
      createdAt: 'string',
      description: 'string',
      name: 'string',
      status: 'string',
      teamId: 'string',
      updatedAt: 'string',
      users: { 'type': 'array', 'itemType': CreateTeamResponseBodyDataUsers },
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

export class CreateTeamResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: CreateTeamResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
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
      data: CreateTeamResponseBodyData,
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

