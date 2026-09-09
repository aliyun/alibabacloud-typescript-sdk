// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTeamRequestBodyAgents extends $dara.Model {
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

export class CreateTeamRequestBodyUsers extends $dara.Model {
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

export class CreateTeamRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of agent members for the team.
   */
  agents?: CreateTeamRequestBodyAgents[];
  /**
   * @remarks
   * The team description.
   * 
   * @example
   * A team responsible for intelligent customer service
   */
  description?: string;
  /**
   * @remarks
   * The team name. The name can contain only lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or digit. The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * team-01
   */
  name?: string;
  /**
   * @remarks
   * The list of user members for the team. The list must include exactly one member with the ADMIN role.
   */
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
  /**
   * @remarks
   * The request body for creating a team.
   */
  body?: CreateTeamRequestBody;
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

