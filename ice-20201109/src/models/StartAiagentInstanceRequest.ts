// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class StartAIAgentInstanceRequestChatSyncConfig extends $dara.Model {
  /**
   * @remarks
   * IM的智能体Id。
   * 
   * @example
   * ******005e4f309379701645f4****
   */
  IMAIAgentId?: string;
  /**
   * @remarks
   * 接收用户Id。
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
   * The ID of the AI agent created in the [IMS](https://ims.console.aliyun.com/ai/robot/list) console.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * 同步聊天记录配置。
   */
  chatSyncConfig?: StartAIAgentInstanceRequestChatSyncConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  /**
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
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

