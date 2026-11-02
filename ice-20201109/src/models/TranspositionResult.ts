// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranspositionResult extends $dara.Model {
  /**
   * @remarks
   * - The target language for translation transposition. For more information, see the list of target languages for video translation.
   * - This field is only used in video translation scenarios.
   * 
   * @example
   * zh
   */
  targetLanguage?: string;
  /**
   * @remarks
   * - The text after translation transposition, which is the expected output text after the matched hot word is translated. The maximum length is 100 characters.
   * - This field is only used in scenarios related to the translation feature.
   * 
   * @example
   * hello
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

