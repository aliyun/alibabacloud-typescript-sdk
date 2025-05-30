// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranspositionResult extends $dara.Model {
  /**
   * @example
   * zh
   */
  targetLanguage?: string;
  /**
   * @example
   * 你好
   */
  translatedText?: string;
  static names(): { [key: string]: string } {
    return {
      targetLanguage: 'TargetLanguage',
      translatedText: 'TranslatedText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetLanguage: 'string',
      translatedText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

