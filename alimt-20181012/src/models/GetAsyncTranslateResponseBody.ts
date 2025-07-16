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

export class GetAsyncTranslateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetAsyncTranslateResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * DC2DCCC9-C3DF-4F59-8D8E-78185729F16D
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
      data: GetAsyncTranslateResponseBodyData,
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

