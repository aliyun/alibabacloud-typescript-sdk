// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateGeneralResponseBodyData extends $dara.Model {
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

export class TranslateGeneralResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: TranslateGeneralResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 86D18195-D89C-4C8C-9DC4-5FCE789CE6D5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateGeneralResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

