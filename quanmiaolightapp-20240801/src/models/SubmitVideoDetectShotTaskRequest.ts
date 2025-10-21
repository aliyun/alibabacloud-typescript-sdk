// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoDetectShotTaskRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  deduplicationId?: string;
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
  options?: string[];
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
  recognitionOptions?: string[];
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
      deduplicationId: 'deduplicationId',
      intelliSimpPrompt: 'intelliSimpPrompt',
      intelliSimpPromptTemplateId: 'intelliSimpPromptTemplateId',
      language: 'language',
      modelCustomPromptTemplateId: 'modelCustomPromptTemplateId',
      modelId: 'modelId',
      modelVlCustomPromptTemplateId: 'modelVlCustomPromptTemplateId',
      options: 'options',
      originalSessionId: 'originalSessionId',
      preModelId: 'preModelId',
      prompt: 'prompt',
      recognitionOptions: 'recognitionOptions',
      taskId: 'taskId',
      videoUrl: 'videoUrl',
      vlPrompt: 'vlPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deduplicationId: 'string',
      intelliSimpPrompt: 'string',
      intelliSimpPromptTemplateId: 'string',
      language: 'string',
      modelCustomPromptTemplateId: 'string',
      modelId: 'string',
      modelVlCustomPromptTemplateId: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
      originalSessionId: 'string',
      preModelId: 'string',
      prompt: 'string',
      recognitionOptions: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      videoUrl: 'string',
      vlPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    if(Array.isArray(this.recognitionOptions)) {
      $dara.Model.validateArray(this.recognitionOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

