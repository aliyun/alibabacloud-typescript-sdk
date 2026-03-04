// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranspositionResult } from "./TranspositionResult";


export class Hotword extends $dara.Model {
  /**
   * @remarks
   * The language of the hotword text. Valid values:
   * 
   * *   For structured media analysis and ASR: zh: Chinese en: English
   * *   For video translation: Supports 53 languages.
   * *
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The text of the hotword.
   * 
   * *   For structured media analysis and ASR:
   * *   *   Chinese: Up to 15 characters.
   * *   *   English: Up to 10 words, separated by spaces.
   * *   *   Mixed: Each letter is counted as one character (following the Chinese limit).
   * *   For video translation: Up to 100 characters.
   * *
   * 
   * @example
   * hello
   */
  text?: string;
  /**
   * @remarks
   * *   Predefined translation results for the hotword.
   * *   This field is only used in translation-related scenarios.
   */
  transpositionResultList?: TranspositionResult[];
  /**
   * @remarks
   * The weight of the hotword.
   * 
   * 1.  Valid values: [-6,5].
   * 2.  A positive value increases the likelihood of the word being recognized, while a negative value decreases the likelihood.
   * 3.  A value of -6 specifies that recognition of this word should be minimized.
   * 4.  Recommended value: 2.
   * 5.  If the desired effect is not achieved, you can increase the weight. However, excessively high weights may negatively impact the recognition accuracy of other words.
   * 
   * @example
   * 2
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      text: 'Text',
      transpositionResultList: 'TranspositionResultList',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      text: 'string',
      transpositionResultList: { 'type': 'array', 'itemType': TranspositionResult },
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.transpositionResultList)) {
      $dara.Model.validateArray(this.transpositionResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

