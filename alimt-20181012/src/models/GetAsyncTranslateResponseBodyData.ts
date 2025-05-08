// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncTranslateResponseBodyData extends $dara.Model {
  /**
   * @example
   * zh
   */
  detectedLanguage?: string;
  /**
   * @example
   * ready
   */
  status?: string;
  /**
   * @example
   * hello
   */
  translatedText?: string;
  /**
   * @example
   * 2
   */
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      status: 'Status',
      translatedText: 'TranslatedText',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      status: 'string',
      translatedText: 'string',
      wordCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

