// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateECommerceResponseBodyData extends $dara.Model {
  detectedLanguage?: string;
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

export class TranslateECommerceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: TranslateECommerceResponseBodyData;
  /**
   * @example
   * An error occurred while translating.
   */
  message?: string;
  /**
   * @example
   * CC93BB5C-EAB5-579B-AA44-F61528F48FF8
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
      data: TranslateECommerceResponseBodyData,
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

