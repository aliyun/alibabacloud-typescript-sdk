// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTeamRequestBodyAgents extends $dara.Model {
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

export class UpdateTeamRequestBodyUsers extends $dara.Model {
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

export class UpdateTeamRequestBody extends $dara.Model {
  agents?: UpdateTeamRequestBodyAgents[];
  /**
   * @example
   * 负责智能客服业务的团队
   */
  description?: string;
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
  body?: UpdateTeamRequestBody;
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

