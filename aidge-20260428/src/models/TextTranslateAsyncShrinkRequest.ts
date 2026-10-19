// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncShrinkRequest extends $dara.Model {
  /**
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @example
   * BUxxx-chat
   */
  bizName?: string;
  /**
   * @example
   * text
   */
  formatType?: string;
  /**
   * @example
   * " glossary_1"
   */
  glossary?: string;
  /**
   * @example
   * auto
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceTextListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @example
   * e-commerce-title
   */
  translateScene?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizName: 'BizName',
      formatType: 'FormatType',
      glossary: 'Glossary',
      sourceLanguage: 'SourceLanguage',
      sourceTextListShrink: 'SourceTextList',
      targetLanguage: 'TargetLanguage',
      translateScene: 'TranslateScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizName: 'string',
      formatType: 'string',
      glossary: 'string',
      sourceLanguage: 'string',
      sourceTextListShrink: 'string',
      targetLanguage: 'string',
      translateScene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

