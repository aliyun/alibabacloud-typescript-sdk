// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLongTextTranslateTaskResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 495
   */
  inputTokens?: number;
  /**
   * @example
   * 515
   */
  outputTokens?: number;
  /**
   * @example
   * 1010
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

export class GetLongTextTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Featured Double Color Ball experts: Liu Ke and A Wang both hit the second prize, winning 1.43 million!
   */
  translation?: string;
  usage?: GetLongTextTranslateTaskResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translation: 'string',
      usage: GetLongTextTranslateTaskResponseBodyDataUsage,
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

export class GetLongTextTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetLongTextTranslateTaskResponseBodyData;
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
   * @example
   * AC642EEB-C29D-54DF-8F52-622565BBB78A
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
      data: GetLongTextTranslateTaskResponseBodyData,
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

