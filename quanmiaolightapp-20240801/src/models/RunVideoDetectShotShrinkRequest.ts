// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoDetectShotShrinkRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  intelliSimpPrompt?: string;
  /**
   * @example
   * intelliSimpShowPrompt
   */
  intelliSimpPromptTemplateId?: string;
  /**
   * @example
   * chinese
   */
  language?: string;
  /**
   * @example
   * videoDetectShotShowPrompt
   */
  modelCustomPromptTemplateId?: string;
  /**
   * @example
   * deepseek-r1
   */
  modelId?: string;
  /**
   * @example
   * videoDetectShotVlShowPrompt
   */
  modelVlCustomPromptTemplateId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  optionsShrink?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5ax
   */
  originalSessionId?: string;
  /**
   * @example
   * deepseek-v3.1
   */
  preModelId?: string;
  /**
   * @example
   * xxx
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recognitionOptionsShrink?: string;
  /**
   * @example
   * a3d1c2ac-f086-4a21-9069-f5631542f5a2
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx.mp4
   */
  videoUrl?: string;
  /**
   * @example
   * xxx
   */
  vlPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      intelliSimpPrompt: 'intelliSimpPrompt',
      intelliSimpPromptTemplateId: 'intelliSimpPromptTemplateId',
      language: 'language',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      modelVlCustomPromptTemplateId: 'modelVlCustomPromptTemplateId',
      optionsShrink: 'options',
      originalSessionId: 'originalSessionId',
      preModelId: 'preModelId',
      prompt: 'prompt',
      recognitionOptionsShrink: 'recognitionOptions',
      taskId: 'taskId',
      videoUrl: 'videoUrl',
      vlPrompt: 'vlPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intelliSimpPrompt: 'string',
      intelliSimpPromptTemplateId: 'string',
      language: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      modelVlCustomPromptTemplateId: 'string',
      optionsShrink: 'string',
      originalSessionId: 'string',
      preModelId: 'string',
      prompt: 'string',
      recognitionOptionsShrink: 'string',
      taskId: 'string',
      videoUrl: 'string',
      vlPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

