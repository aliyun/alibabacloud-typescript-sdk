// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectLanguageResponseBody extends $dara.Model {
  /**
   * @example
   * zh
   */
  detectedLanguage?: string;
  languageProbabilities?: string;
  /**
   * @example
   * 0C5EC1EC-1A06-4D60-97E6-4D41350945E4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      languageProbabilities: 'LanguageProbabilities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      languageProbabilities: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

