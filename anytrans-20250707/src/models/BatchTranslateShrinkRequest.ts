// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchTranslateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the calling application.
   * 
   * @example
   * baidufanyi
   */
  appName?: string;
  /**
   * @remarks
   * The extended parameters that control translation features.
   */
  extShrink?: string;
  /**
   * @remarks
   * The translation format.
   * 
   * @example
   * text
   */
  format?: string;
  /**
   * @remarks
   * The translation model.
   * 
   * @example
   * mt-turbo
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
   * The target language.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * A map of texts to translate, in which the key is a custom identifier and the value is the source text.
   * 
   * This parameter is required.
   * 
   * @example
   * {"0":"明天天气怎么样？","1":"你中午吃饭了吗"}
   */
  textShrink?: string;
  /**
   * @remarks
   * The ID of the Model Studio workspace used for this request.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-kqtrcpdee4xm29xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      extShrink: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      textShrink: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      extShrink: 'string',
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      textShrink: 'string',
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

