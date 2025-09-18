// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多模态xxx
   */
  appName?: string;
  bindingConfigShrink?: string;
  conversationConfigShrink?: string;
  modelConfigShrink?: string;
  /**
   * @example
   * 提示词
   */
  prompt?: string;
  /**
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bindingConfigShrink: 'BindingConfig',
      conversationConfigShrink: 'ConversationConfig',
      modelConfigShrink: 'ModelConfig',
      prompt: 'Prompt',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bindingConfigShrink: 'string',
      conversationConfigShrink: 'string',
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

