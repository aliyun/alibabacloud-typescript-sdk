// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   * 
   * **if can be null:**
   * false
   */
  formatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * query
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   * 
   * **if can be null:**
   * false
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 今天天气不错
   */
  sourceText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatType: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

