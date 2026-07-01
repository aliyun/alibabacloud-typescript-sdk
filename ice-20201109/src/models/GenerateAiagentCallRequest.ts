// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class GenerateAIAgentCallRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Instant Messaging (IM) agent.
   * 
   * @example
   * ******005e4f309379701645f4****
   */
  IMAIAgentId?: string;
  /**
   * @remarks
   * The user ID of the recipient.
   * 
   * @example
   * 4167626d312034b2b1c3b7f2f3e41884
   */
  receiverId?: string;
  static names(): { [key: string]: string } {
    return {
      IMAIAgentId: 'IMAIAgentId',
      receiverId: 'ReceiverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IMAIAgentId: 'string',
      receiverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAIAgentCallRequest extends $dara.Model {
  /**
   * @remarks
   * The AI agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The agent template configuration. The configuration you provide merges with the agent template configuration in the console. If you omit this parameter, the agent uses the default configuration from the console.
   * 
   * > Compatibility with `TemplateConfig`: Fields in `AgentConfig` take precedence. If a field is specified in `TemplateConfig` but not in `AgentConfig`, the system uses the value from `TemplateConfig`. We recommend using `AgentConfig` instead of `TemplateConfig`.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * The chat synchronization configuration.
   */
  chatSyncConfig?: GenerateAIAgentCallRequestChatSyncConfig;
  /**
   * @remarks
   * Optional. The expiration time of the token in seconds. Default value: 3600. Value range: 0 to 604800.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * A unique identifier for the session. If not provided, a new session is created.
   * 
   * @example
   * fw1gr0bc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * - This configuration merges with the agent template configuration in the console.
   * 
   * - If you omit this parameter, the agent uses the default configuration from the console.
   * 
   * > The agent template configuration. This parameter is deprecated. Use the AgentConfig parameter instead.
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * User data.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  /**
   * @remarks
   * The username in the channel. If you do not specify a username, one is automatically generated. The username can be up to 64 characters in length.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      agentConfig: 'AgentConfig',
      chatSyncConfig: 'ChatSyncConfig',
      expire: 'Expire',
      sessionId: 'SessionId',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      agentConfig: AIAgentConfig,
      chatSyncConfig: GenerateAIAgentCallRequestChatSyncConfig,
      expire: 'number',
      sessionId: 'string',
      templateConfig: AIAgentTemplateConfig,
      userData: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
    }
    if(this.chatSyncConfig && typeof (this.chatSyncConfig as any).validate === 'function') {
      (this.chatSyncConfig as any).validate();
    }
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

