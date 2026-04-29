// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
  /**
   * @example
   * test
   */
  avatar?: string;
  /**
   * @example
   * test
   */
  avatarUrl?: string;
  /**
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @example
   * work
   */
  name?: string;
  /**
   * @example
   * work
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      avatarUrl: 'AvatarUrl',
      emoji: 'Emoji',
      name: 'Name',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      avatarUrl: 'string',
      emoji: 'string',
      name: 'string',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarClawAgentResponseBodyAgent extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * work
   */
  id?: string;
  identity?: CreatePolarClawAgentResponseBodyAgentIdentity;
  /**
   * @example
   * work
   */
  name?: string;
  /**
   * @example
   * /home/node/.openclaw/workspace-work
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      identity: 'Identity',
      name: 'Name',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      identity: CreatePolarClawAgentResponseBodyAgentIdentity,
      name: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarClawAgentResponseBody extends $dara.Model {
  agent?: CreatePolarClawAgentResponseBodyAgent;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * work
   */
  name?: string;
  /**
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @example
   * /home/node/.openclaw/workspace-work
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      name: 'Name',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: CreatePolarClawAgentResponseBodyAgent,
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      message: 'string',
      name: 'string',
      requestId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

