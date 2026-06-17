// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
  /**
   * @remarks
   * The path or content of the avatar.
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * The avatar URL.
   * 
   * @example
   * test
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The identity\\"s Emoji identifier. This can be a Unicode code point, such as U+1F99E, or the Emoji character itself.
   * 
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @remarks
   * The name of the identity.
   * 
   * @example
   * PolarClaw
   */
  name?: string;
  /**
   * @remarks
   * The theme of the identity.
   * 
   * @example
   * soul lobster
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

export class UpdatePolarClawAgentResponseBodyAgent extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * main
   */
  id?: string;
  /**
   * @remarks
   * The identity information of the agent.
   */
  identity?: UpdatePolarClawAgentResponseBodyAgentIdentity;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * PolarClaw
   */
  name?: string;
  /**
   * @remarks
   * The workspace path.
   * 
   * @example
   * /home/node/.openclaw/workspace-work-v2
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
      identity: UpdatePolarClawAgentResponseBodyAgentIdentity,
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

export class UpdatePolarClawAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the updated agent.
   */
  agent?: UpdatePolarClawAgentResponseBodyAgent;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: UpdatePolarClawAgentResponseBodyAgent,
      agentId: 'string',
      applicationId: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
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

