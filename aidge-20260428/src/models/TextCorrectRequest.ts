// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextCorrectRequest extends $dara.Model {
  /**
   * @remarks
   * The source language code. This parameter is required. You can set this parameter to auto for automatic language detection. 14 languages are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * de
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The text to correct. This parameter is required.
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

