// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppAndBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  bindingConfigShrink?: string;
  conversationConfigShrink?: string;
  memoryConfigShrink?: string;
  modelConfigShrink?: string;
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      bindingConfigShrink: 'BindingConfig',
      conversationConfigShrink: 'ConversationConfig',
      memoryConfigShrink: 'MemoryConfig',
      modelConfigShrink: 'ModelConfig',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      bindingConfigShrink: 'string',
      conversationConfigShrink: 'string',
      memoryConfigShrink: 'string',
      modelConfigShrink: 'string',
      prompt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

