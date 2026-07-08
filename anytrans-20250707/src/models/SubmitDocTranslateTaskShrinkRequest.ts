// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocTranslateTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Extension parameters that control translation features.
   */
  extShrink?: string;
  /**
   * @remarks
   * The format for the translation.
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * The translation model.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-turbo
   */
  scene?: string;
  /**
   * @remarks
   * The source language code.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The URL of the document to translate.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx-hangzhou.aliyuncs.com/docs/tmp/%E6%A0%B7%E4%BE%8B_%E6%97%A0%E5%9B%BE.pdf
   */
  text?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace for the current request.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xc
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

