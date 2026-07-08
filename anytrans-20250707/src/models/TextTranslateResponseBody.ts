// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateResponseBodyDataUsage extends $dara.Model {
  /**
   * @remarks
   * The number of Tokens in the input text.
   * 
   * @example
   * 491
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of Tokens in the output text.
   * 
   * @example
   * 400
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of Tokens consumed by the request.
   * 
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
   * @remarks
   * The detected source language.
   */
  detectedLang?: string;
  /**
   * @remarks
   * The translated text.
   * 
   * @example
   * How does Mogujie solve the data annotation challenge by building a platform?
   */
  translation?: string;
  /**
   * @remarks
   * Details about the Tokens consumed by the request.
   */
  usage?: TextTranslateResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      detectedLang: 'detectedLang',
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLang: 'string',
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
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data object returned by the request.
   */
  data?: TextTranslateResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * A message that provides details about the response.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 299C57B2-EBB4-57E2-A6FE-723B874ACB74
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

