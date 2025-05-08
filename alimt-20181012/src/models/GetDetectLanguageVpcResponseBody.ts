// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectLanguageVpcResponseBody extends $dara.Model {
  detectedLanguage?: string;
  languageProbabilities?: string;
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

