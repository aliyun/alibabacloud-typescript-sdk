// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAgentInstanceShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * 同步聊天记录配置。
   */
  chatSyncConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  runtimeConfigShrink?: string;
  /**
   * @example
   * f213fbc005e4f309379701645f4****
   */
  sessionId?: string;
  templateConfigShrink?: string;
  /**
   * @example
   * {"Email":"johndoe@example.com","Preferences":{"Language":"en"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
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

