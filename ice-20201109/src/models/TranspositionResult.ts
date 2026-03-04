// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranspositionResult extends $dara.Model {
  /**
   * @remarks
   * *   The target language of the translation.
   * *   This field is only used in translation-related scenarios.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
  /**
   * @remarks
   * *   The translated text corresponding to the matched hotwords. Maximum length: 100 characters.
   * *   This field is only used in translation-related scenarios.
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

