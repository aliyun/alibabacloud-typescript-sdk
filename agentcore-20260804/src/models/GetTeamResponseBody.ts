// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTeamResponseBodyDataAgents extends $dara.Model {
  /**
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * MANAGED
   */
  deployType?: string;
  /**
   * @example
   * 处理售后咨询的智能体
   */
  description?: string;
  /**
   * @example
   * 1
   */
  effectiveSpecVersion?: number;
  /**
   * @example
   * 2
   */
  latestSpecVersion?: number;
  /**
   * @example
   * agent-01
   */
  name?: string;
  /**
   * @example
   * qwenpaw
   */
  runtime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * WORKER
   */
  teamRole?: string;
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
      agentId: 'agentId',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      effectiveSpecVersion: 'effectiveSpecVersion',
      latestSpecVersion: 'latestSpecVersion',
      name: 'name',
      runtime: 'runtime',
      status: 'status',
      teamRole: 'teamRole',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      effectiveSpecVersion: 'number',
      latestSpecVersion: 'number',
      name: 'string',
      runtime: 'string',
      status: 'string',
      teamRole: 'string',
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

export class GetTeamResponseBodyDataUsers extends $dara.Model {
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
   * Example@2026
   */
  initialPassword?: string;
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
   * Active
   */
  status?: string;
  /**
   * @example
   * ADMIN
   */
  teamRole?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @example
   * usr-123456
   */
  userId?: string;
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'authMethod',
      createdAt: 'createdAt',
      displayName: 'displayName',
      email: 'email',
      initialPassword: 'initialPassword',
      name: 'name',
      note: 'note',
      status: 'status',
      teamRole: 'teamRole',
      updatedAt: 'updatedAt',
      userId: 'userId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      createdAt: 'string',
      displayName: 'string',
      email: 'string',
      initialPassword: 'string',
      name: 'string',
      note: 'string',
      status: 'string',
      teamRole: 'string',
      updatedAt: 'string',
      userId: 'string',
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

export class GetTeamResponseBodyData extends $dara.Model {
  agents?: GetTeamResponseBodyDataAgents[];
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
   * tm-123456
   */
  teamId?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  users?: GetTeamResponseBodyDataUsers[];
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
      regionId: 'regionId',
      status: 'status',
      teamId: 'teamId',
      updatedAt: 'updatedAt',
      users: 'users',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': GetTeamResponseBodyDataAgents },
      createdAt: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      teamId: 'string',
      updatedAt: 'string',
      users: { 'type': 'array', 'itemType': GetTeamResponseBodyDataUsers },
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

export class GetTeamResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetTeamResponseBodyData;
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
      data: GetTeamResponseBodyData,
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

