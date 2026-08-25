// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamRequestBodyAgents extends $dara.Model {
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

export class CreateTeamRequestBodyUsers extends $dara.Model {
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

export class CreateTeamRequestBody extends $dara.Model {
  agents?: CreateTeamRequestBodyAgents[];
  /**
   * @example
   * 负责智能客服业务的团队
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * team-01
   */
  name?: string;
  users?: CreateTeamRequestBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      description: 'description',
      name: 'name',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': CreateTeamRequestBodyAgents },
      description: 'string',
      name: 'string',
      users: { 'type': 'array', 'itemType': CreateTeamRequestBodyUsers },
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

export class CreateTeamRequest extends $dara.Model {
  body?: CreateTeamRequestBody;
  /**
   * @example
   * 暂不支持
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateTeamRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

