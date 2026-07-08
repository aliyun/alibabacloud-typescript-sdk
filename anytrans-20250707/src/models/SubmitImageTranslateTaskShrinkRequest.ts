// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageTranslateTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation features.
   */
  extShrink?: string;
  /**
   * @remarks
   * The translation format.
   * 
   * @example
   * image
   */
  format?: string;
  /**
   * @remarks
   * Specifies the translation model.
   * 
   * This parameter is required.
   * 
   * @example
   * flash
   */
  scene?: string;
  /**
   * @remarks
   * The source language.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * A list of target languages.
   * 
   * This parameter is required.
   */
  targetLanguageShrink?: string;
  /**
   * @remarks
   * The URL of the image to translate.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/2214557014466/O1CN0174Thmb1irTsyTXYFO_!!4611686018427386306-0-item_pic.jpg
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      extShrink: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguageShrink: 'targetLanguage',
      text: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extShrink: 'string',
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguageShrink: 'string',
      text: 'string',
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

