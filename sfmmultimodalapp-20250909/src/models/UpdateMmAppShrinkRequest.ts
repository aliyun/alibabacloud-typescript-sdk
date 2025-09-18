// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mm_xxx
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多模态应用xxxxx
   */
  appName?: string;
  bindingConfigShrink?: string;
  conversationConfigShrink?: string;
  modelConfigShrink?: string;
  /**
   * @example
   * 提示词，不超过8000字符
   */
  prompt?: string;
  /**
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

