// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAgentInstanceShrinkRequest extends $dara.Model {
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
  agentConfigShrink?: string;
  /**
   * @remarks
   * The configuration for synchronizing chat history.
   */
  chatSyncConfigShrink?: string;
  /**
   * @remarks
   * The configuration required for the agent runtime.
   * 
   * This parameter is required.
   */
  runtimeConfigShrink?: string;
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
  templateConfigShrink?: string;
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

