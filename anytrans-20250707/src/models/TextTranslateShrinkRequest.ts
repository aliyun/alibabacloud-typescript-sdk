// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Extended parameters to control translation behavior
   */
  extShrink?: string;
  /**
   * @remarks
   * text format
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * Model type
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * Source language code
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Target Language Code
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Text to be translated
   * 
   * This parameter is required.
   * 
   * @example
   * 今天天气怎么样
   */
  text?: string;
  /**
   * @remarks
   * Workspace ID
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
      targetLanguage: 'targetLanguage',
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
      targetLanguage: 'string',
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

