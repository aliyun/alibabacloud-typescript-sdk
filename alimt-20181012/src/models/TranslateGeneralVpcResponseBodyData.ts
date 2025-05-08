// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateGeneralVpcResponseBodyData extends $dara.Model {
  /**
   * @example
   * zh
   */
  detectedLanguage?: string;
  /**
   * @example
   * Hello
   */
  translated?: string;
  /**
   * @example
   * 10
   */
  wordCount?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      translated: 'Translated',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      translated: 'string',
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

