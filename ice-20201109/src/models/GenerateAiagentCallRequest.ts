// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { GenerateAIAgentCallRequestChatSyncConfig } from "./GenerateAiagentCallRequestChatSyncConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class GenerateAIAgentCallRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  agentConfig?: AIAgentConfig;
  chatSyncConfig?: GenerateAIAgentCallRequestChatSyncConfig;
  /**
   * @remarks
   * The time when the token expires. Unit: seconds. Default value: 3600. Valid values: 0 to 604800.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @example
   * fw1gr0bc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * The template configurations of the AI agent. The specified configurations are merged with the template configurations that are specified in the console. If you do not specify this parameter, the system uses the default configurations for an AI agent created in the console.
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  /**
   * @remarks
   * The username of the AI agent in the channel. If you do not specify this parameter, the system automatically generates a username. The value can be up to 64 characters in length.
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

