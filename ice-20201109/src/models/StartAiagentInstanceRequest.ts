// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class StartAIAgentInstanceRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the IM agent.
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

export class StartAIAgentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent configured in the [IMS console](https://ims.console.aliyun.com/ai/robot/list).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The agent template configuration. The specified configuration is merged and updated with the agent template configuration in the console. If this parameter is not specified, the default configurations of the agent in the console are used.
   * 
   * > Compatible with TemplateConfig rules: Fields in AgentConfig take precedence. If TemplateConfig contains fields that are not specified in AgentConfig, the fields in TemplateConfig are used. Use AgentConfig instead of TemplateConfig.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * The configuration for synchronizing chat history.
   */
  chatSyncConfig?: StartAIAgentInstanceRequestChatSyncConfig;
  /**
   * @remarks
   * The configuration required for the agent runtime.
   * 
   * This parameter is required.
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  /**
   * @remarks
   * The unique identifier of the conversation. Default value: none.
   * 
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * The agent template configuration. The specified configuration is merged and updated with the agent template configuration in the console. If this parameter is not specified, the default configurations of the agent in the console are used.
   * 
   * > Agent template configuration. **[Deprecated]** For more information, see the AgentConfig field.
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * The user-defined information.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      agentConfig: 'AgentConfig',
      chatSyncConfig: 'ChatSyncConfig',
      runtimeConfig: 'RuntimeConfig',
      sessionId: 'SessionId',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      agentConfig: AIAgentConfig,
      chatSyncConfig: StartAIAgentInstanceRequestChatSyncConfig,
      runtimeConfig: AIAgentRuntimeConfig,
      sessionId: 'string',
      templateConfig: AIAgentTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
    }
    if(this.chatSyncConfig && typeof (this.chatSyncConfig as any).validate === 'function') {
      (this.chatSyncConfig as any).validate();
    }
    if(this.runtimeConfig && typeof (this.runtimeConfig as any).validate === 'function') {
      (this.runtimeConfig as any).validate();
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

