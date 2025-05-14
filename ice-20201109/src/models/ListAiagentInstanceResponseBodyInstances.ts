// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class ListAIAgentInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The URL of the call log file for the AI agent. The structure of the file is CallLog in the JSON format.
   * 
   * @example
   * https://example.com/call_logs/12345.json
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
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   Executing
   * *   Finished
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
   * {"VoiceChat": {"VoiceId": "zhixiaoxia"}}
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
      status: 'Status',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLogUrl: 'string',
      runtimeConfig: AIAgentRuntimeConfig,
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

