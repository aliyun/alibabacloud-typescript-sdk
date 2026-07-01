// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAgentInstanceShrinkRequest extends $dara.Model {
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
  agentConfigShrink?: string;
  /**
   * @remarks
   * The chat history synchronization configuration.
   */
  chatSyncConfigShrink?: string;
  /**
   * @remarks
   * The configuration required for the agent at runtime.
   * 
   * This parameter is required.
   */
  runtimeConfigShrink?: string;
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
  templateConfigShrink?: string;
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
      agentConfigShrink: 'AgentConfig',
      chatSyncConfigShrink: 'ChatSyncConfig',
      runtimeConfigShrink: 'RuntimeConfig',
      sessionId: 'SessionId',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      agentConfigShrink: 'string',
      chatSyncConfigShrink: 'string',
      runtimeConfigShrink: 'string',
      sessionId: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

