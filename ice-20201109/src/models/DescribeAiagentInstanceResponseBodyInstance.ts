// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class DescribeAIAgentInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The URL of the call log file.
   * 
   * @example
   * https://example.com/call_logs/12345
   */
  callLogUrl?: string;
  /**
   * @remarks
   * The runtime configurations of the AI agent.
   * 
   * @example
   * {"VoiceChat":{"AgentUserId":"voice_agent_001","ChannelId":"voice_channel_001","AuthToken":"your_voice_chat_auth_token"}}
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  sessionId?: string;
  /**
   * @remarks
   * The state of the AI agent. Valid values: Finished and Executing.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The template configurations of the AI agent.
   * 
   * @example
   * {"VoiceChat": {"AppId": "your_voice_chat_app_id"}}
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * The custom information.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callLogUrl: 'CallLogUrl',
      runtimeConfig: 'RuntimeConfig',
      sessionId: 'SessionId',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLogUrl: 'string',
      runtimeConfig: AIAgentRuntimeConfig,
      sessionId: 'string',
      status: 'string',
      templateConfig: AIAgentTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
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

