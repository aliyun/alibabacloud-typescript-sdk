// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateGeneralRequest extends $dara.Model {
  /**
   * @example
   * {\\"appName\\":\\"alynx\\"}
   */
  context?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  formatType?: string;
  /**
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
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
      context: 'Context',
      formatType: 'FormatType',
      scene: 'Scene',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
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

