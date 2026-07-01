// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentCallInfo } from "./AiagentCallInfo";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class DescribeAIAgentInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The configuration of the AI agent.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * Information about the call.
   */
  callInfo?: AIAgentCallInfo;
  /**
   * @remarks
   * The URL of the call log.
   * 
   * @example
   * https://example.com/call_logs/12345
   */
  callLogUrl?: string;
  /**
   * @remarks
   * The creation time (UTC).
   * 
   * @example
   * 2025-07-18T06:39:08.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time (UTC).
   * 
   * @example
   * 2025-07-18T06:40:12.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The runtime configuration of the AI agent.
   * 
   * @example
   * {"VoiceChat":{"AgentUserId":"voice_agent_001","ChannelId":"voice_channel_001","AuthToken":"your_voice_chat_auth_token"}}
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  /**
   * @remarks
   * The session ID for the conversation. This parameter is empty by default.
   * 
   * @example
   * 955535**************
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the AI agent instance, such as `Finished` or `Executing`.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The AI agent template configuration.
   * 
   * @example
   * {"VoiceChat": {"AppId": "your_voice_chat_app_id"}}
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'AgentConfig',
      callInfo: 'CallInfo',
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
      callInfo: AIAgentCallInfo,
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
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
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
   * Information about the AI agent instance.
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

