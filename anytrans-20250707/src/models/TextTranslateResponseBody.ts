// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 491
   */
  inputTokens?: number;
  /**
   * @example
   * 400
   */
  outputTokens?: number;
  /**
   * @example
   * 891
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTranslateResponseBodyData extends $dara.Model {
  /**
   * @example
   * How does Mogujie solve the data annotation challenge by building a platform?
   */
  translation?: string;
  usage?: TextTranslateResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translation: 'string',
      usage: TextTranslateResponseBodyDataUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextTranslateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: TextTranslateResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 299C57B2-EBB4-57E2-A6FE-723B874ACB74
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TextTranslateResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

