// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class StartAIAgentInstanceRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The IM agent ID.
   * 
   * @example
   * ******005e4f309379701645f4****
   */
  IMAIAgentId?: string;
  /**
   * @remarks
   * The receiver user ID.
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
   * The agent ID configured in the [IMS console](https://ims.console.aliyun.com/ai/robot/list).
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The agent template configuration. Values you provide merge with the template configuration set in the console. If you omit this parameter, the agent uses its default configuration from the console.
   * 
   * > This field is compatible with TemplateConfig. Fields in AgentConfig take precedence. If TemplateConfig contains fields not defined in AgentConfig, those fields are used. Use AgentConfig instead of TemplateConfig.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * The chat history synchronization configuration.
   */
  chatSyncConfig?: StartAIAgentInstanceRequestChatSyncConfig;
  /**
   * @remarks
   * The configuration required for the agent at runtime.
   * 
   * This parameter is required.
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  /**
   * @remarks
   * A unique identifier for the chat session. This parameter is optional.
   * 
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * The agent template configuration. Values you provide merge with the template configuration set in the console. If you omit this parameter, the agent uses its default configuration from the console.
   * 
   * > The agent template configuration. This field is deprecated. See the AgentConfig field.
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * User-defined data.
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

