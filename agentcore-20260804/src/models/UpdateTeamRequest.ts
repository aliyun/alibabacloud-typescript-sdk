// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamRequestBodyAgents extends $dara.Model {
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
   * The role of the agent in the team. Valid values:
   * - LEADER
   * - WORKER
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

export class UpdateTeamRequestBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The role of the user in the team. Valid values:
   * - ADMIN
   * - MEMBER
   * 
   * Each team must have exactly one ADMIN.
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

export class UpdateTeamRequestBody extends $dara.Model {
  /**
   * @remarks
   * The new agent member list. Replaces the existing agent members using full overwrite semantics. If not specified, the existing agent members remain unchanged.
   */
  agents?: UpdateTeamRequestBodyAgents[];
  /**
   * @remarks
   * The new team description. If not specified, the existing description remains unchanged.
   * 
   * @example
   * A team responsible for intelligent customer service
   */
  description?: string;
  /**
   * @remarks
   * The new user member list. Replaces the existing user members using full overwrite semantics. When specified, the list must contain exactly one member with the ADMIN role. If not specified, the existing user members remain unchanged.
   */
  users?: UpdateTeamRequestBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      description: 'description',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': UpdateTeamRequestBodyAgents },
      description: 'string',
      users: { 'type': 'array', 'itemType': UpdateTeamRequestBodyUsers },
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

export class UpdateTeamRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the team.
   */
  body?: UpdateTeamRequestBody;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
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
      body: UpdateTeamRequestBody,
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

