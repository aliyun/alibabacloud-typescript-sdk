// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAgentTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfigShrink?: string;
  /**
   * @example
   * 2
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  llmConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 智能体模版
   */
  name?: string;
  ttsConfigShrink?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      asrConfigShrink: 'AsrConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      interruptMode: 'InterruptMode',
      llmConfigShrink: 'LlmConfig',
      name: 'Name',
      ttsConfigShrink: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      asrConfigShrink: 'string',
      chatMode: 'number',
      greeting: 'string',
      interruptMode: 'number',
      llmConfigShrink: 'string',
      name: 'string',
      ttsConfigShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

