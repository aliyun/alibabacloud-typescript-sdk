// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
  /**
   * @remarks
   * Avatar path or content
   * 
   * @example
   * test
   */
  avatar?: string;
  /**
   * @remarks
   * Avatar URL
   * 
   * @example
   * test
   */
  avatarUrl?: string;
  /**
   * @remarks
   * Emoji identifier (Unicode format such as U+1F99E, or direct emoji character)
   * 
   * @example
   * U+1F99E
   */
  emoji?: string;
  /**
   * @remarks
   * Identity name
   * 
   * @example
   * PolarClaw
   */
  name?: string;
  /**
   * @remarks
   * Theme
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
   * Agent ID
   * 
   * @example
   * main
   */
  id?: string;
  /**
   * @remarks
   * Identity information
   */
  identity?: UpdatePolarClawAgentResponseBodyAgentIdentity;
  /**
   * @remarks
   * Agent display name
   * 
   * @example
   * PolarClaw
   */
  name?: string;
  /**
   * @remarks
   * Workspace directory path
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
   * Updated Agent details
   */
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
   * @remarks
   * Application ID
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Response status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message
   * 
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

