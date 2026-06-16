// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextCorrectRequest extends $dara.Model {
  /**
   * @remarks
   * Source language code. Required. You can pass "auto" for automatic language detection. Supports 14 languages.
   * 
   * This parameter is required.
   * 
   * @example
   * de
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Text to be corrected. Required.
   * 
   * This parameter is required.
   * 
   * @example
   * Empfelung
   */
  sourceText?: string;
  static names(): { [key: string]: string } {
    return {
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLanguage: 'string',
      sourceText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

