// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class DescribeAIAgentInstanceResponseBodyInstance extends $dara.Model {
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * The URL of the call log file.
   * 
   * @example
   * https://example.com/call_logs/12345
   */
  callLogUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
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
   * 
   * @deprecated
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
      agentConfig: 'AgentConfig',
      callLogUrl: 'CallLogUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      runtimeConfig: 'RuntimeConfig',
      sessionId: 'SessionId',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: AIAgentConfig,
      callLogUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      runtimeConfig: AIAgentRuntimeConfig,
      sessionId: 'string',
      status: 'string',
      templateConfig: AIAgentTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
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

export class DescribeAIAgentInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AI agent.
   */
  instance?: DescribeAIAgentInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeAIAgentInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

