// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * translate_standard
   */
  apiType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  formatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"11":"hello boy","12":"go home","13":"we can"}
   */
  sourceText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
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

