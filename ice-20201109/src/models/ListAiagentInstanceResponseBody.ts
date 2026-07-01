// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfig } from "./AiagentConfig";
import { AIAgentRuntimeConfig } from "./AiagentRuntimeConfig";
import { AIAgentTemplateConfig } from "./AiagentTemplateConfig";


export class ListAIAgentInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * Template configuration used by the agent instance.
   */
  agentConfig?: AIAgentConfig;
  /**
   * @remarks
   * URL of the call log file. The file contains a JSON-formatted CallLog structure.
   * 
   * @example
   * https://example.com/call_logs/12345.json
   */
  callLogUrl?: string;
  /**
   * @remarks
   * Runtime configuration required by the agent.
   * 
   * @example
   * {"VoiceChat":{"AgentUserId":"voice_agent_001","ChannelId":"voice_channel_001","AuthToken":"your_voice_chat_auth_token"}}
   */
  runtimeConfig?: AIAgentRuntimeConfig;
  /**
   * @remarks
   * Instance status:
   * 
   * - Created: The call started but no connection was established between both ends.
   * 
   * - Executing: The call is in progress and a connection is established between both ends.
   * 
   * - Finished: The call ended.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * Template configuration used by the agent instance.
   * 
   * @example
   * {"VoiceChat": {"VoiceId": "zhixiaoxia"}}
   * 
   * @deprecated
   */
  templateConfig?: AIAgentTemplateConfig;
  /**
   * @remarks
   * User-defined information.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'AgentConfig',
      callLogUrl: 'CallLogUrl',
      runtimeConfig: 'RuntimeConfig',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: AIAgentConfig,
      callLogUrl: 'string',
      runtimeConfig: AIAgentRuntimeConfig,
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

export class ListAIAgentInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of agent instance objects.
   */
  instances?: ListAIAgentInstanceResponseBodyInstances[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListAIAgentInstanceResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

