// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class GenerateAIAgentCallRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The agent ID for IM.
   * 
   * @example
   * ******005e4f309379701645f4****
   */
  IMAIAgentId?: string;
  /**
   * @remarks
   * The ID of the receiving user.
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
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The agent template configurations. The specified configurations are merged and updated with the agent template configurations in the console. If you do not specify this parameter, the default configurations of the agent in the console are used.
   * 
   * > Compatibility rules for TemplateConfig: Fields in AgentConfig take precedence. If TemplateConfig contains fields that are not specified in AgentConfig, the fields in TemplateConfig are used. We recommend that you use AgentConfig instead of TemplateConfig.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * The configurations for synchronizing chat records.
   */
  chatSyncConfig?: GenerateAIAgentCallRequestChatSyncConfig;
  /**
   * @remarks
   * Optional. The expiration time of the token, in seconds. Default value: 3600. Valid values: 0 to 604800.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * The unique identifier of the conversation. Default value: none.
   * 
   * @example
   * fw1gr0bc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * - The specified configurations are merged and updated with the agent template configurations in the console.
   * 
   * - If you do not specify this parameter, the default configurations of the agent in the console are used.
   * 
   * > Agent template configurations. **[Deprecated]** For more information, see the AgentConfig parameter.
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * The custom user information.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  /**
   * @remarks
   * The username in the conversation channel. If you do not specify this parameter, the system automatically generates a username. The username can be up to 64 characters in length.
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

