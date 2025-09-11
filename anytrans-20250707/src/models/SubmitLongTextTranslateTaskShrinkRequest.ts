// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLongTextTranslateTaskShrinkRequest extends $dara.Model {
  extShrink?: string;
  /**
   * @example
   * text
   */
  format?: string;
  /**
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @example
   * en
   */
  targetLanguage?: string;
  text?: string;
  /**
   * @remarks
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

