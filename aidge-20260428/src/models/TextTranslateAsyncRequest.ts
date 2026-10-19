// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncRequest extends $dara.Model {
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
  sourceTextList?: string[];
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
      sourceTextList: 'SourceTextList',
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
      sourceTextList: { 'type': 'array', 'itemType': 'string' },
      targetLanguage: 'string',
      translateScene: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceTextList)) {
      $dara.Model.validateArray(this.sourceTextList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

