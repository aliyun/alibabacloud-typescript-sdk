// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAIAgentCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The AI agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The agent template configuration. The configuration you provide merges with the agent template configuration in the console. If you omit this parameter, the agent uses the default configuration from the console.
   * 
   * > Compatibility with `TemplateConfig`: Fields in `AgentConfig` take precedence. If a field is specified in `TemplateConfig` but not in `AgentConfig`, the system uses the value from `TemplateConfig`. We recommend using `AgentConfig` instead of `TemplateConfig`.
   */
  agentConfigShrink?: string;
  /**
   * @remarks
   * The chat synchronization configuration.
   */
  chatSyncConfigShrink?: string;
  /**
   * @remarks
   * Optional. The expiration time of the token in seconds. Default value: 3600. Value range: 0 to 604800.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * A unique identifier for the session. If not provided, a new session is created.
   * 
   * @example
   * fw1gr0bc005e4f309379701645f4****
   */
  sessionId?: string;
  /**
   * @remarks
   * - This configuration merges with the agent template configuration in the console.
   * 
   * - If you omit this parameter, the agent uses the default configuration from the console.
   * 
   * > The agent template configuration. This parameter is deprecated. Use the AgentConfig parameter instead.
   * 
   * @deprecated
   */
  templateConfigShrink?: string;
  /**
   * @remarks
   * User data.
   * 
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  /**
   * @remarks
   * The username in the channel. If you do not specify a username, one is automatically generated. The username can be up to 64 characters in length.
   * 
   * @example
   * 877ae632caae49b1afc81c2e8194ffb4
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      agentConfigShrink: 'AgentConfig',
      chatSyncConfigShrink: 'ChatSyncConfig',
      expire: 'Expire',
      sessionId: 'SessionId',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      agentConfigShrink: 'string',
      chatSyncConfigShrink: 'string',
      expire: 'number',
      sessionId: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

