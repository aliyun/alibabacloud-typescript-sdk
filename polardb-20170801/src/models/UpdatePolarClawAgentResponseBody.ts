// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
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
   * PolarClaw
   */
  name?: string;
  /**
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
   * Agent ID
   * 
   * @example
   * main
   */
  id?: string;
  identity?: UpdatePolarClawAgentResponseBodyAgentIdentity;
  /**
   * @example
   * PolarClaw
   */
  name?: string;
  /**
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
  agent?: UpdatePolarClawAgentResponseBodyAgent;
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * main
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
   * @remarks
   * Id of the request
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

