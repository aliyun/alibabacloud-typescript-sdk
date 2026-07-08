// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchTranslateResponseBodyDataTranslationListUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens in the source text.
   * 
   * @example
   * 53
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens in the generated translation.
   * 
   * @example
   * 8
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens processed for the translation (the sum of `inputTokens` and `outputTokens`).
   * 
   * @example
   * 61
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

export class BatchTranslateResponseBodyDataTranslationList extends $dara.Model {
  /**
   * @remarks
   * The status code for the individual translation within the batch.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The language code of the detected source language.
   */
  detectedLang?: string;
  /**
   * @remarks
   * The zero-based index of this result, which corresponds to the order of the source text in the original request.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The status message for the individual translation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The translated text.
   * 
   * @example
   * What will the weather be like tomorrow?
   */
  translation?: string;
  /**
   * @remarks
   * An object detailing the token usage for this translation.
   */
  usage?: BatchTranslateResponseBodyDataTranslationListUsage;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      detectedLang: 'detectedLang',
      index: 'index',
      message: 'message',
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      detectedLang: 'string',
      index: 'string',
      message: 'string',
      translation: 'string',
      usage: BatchTranslateResponseBodyDataTranslationListUsage,
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

export class BatchTranslateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array of translation results, one for each text provided in the request.
   */
  translationList?: BatchTranslateResponseBodyDataTranslationList[];
  static names(): { [key: string]: string } {
    return {
      translationList: 'translationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translationList: { 'type': 'array', 'itemType': BatchTranslateResponseBodyDataTranslationList },
    };
  }

  validate() {
    if(Array.isArray(this.translationList)) {
      $dara.Model.validateArray(this.translationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code for the overall API call.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response payload that contains the translation results.
   */
  data?: BatchTranslateResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request. Use this ID for tracing and troubleshooting.
   * 
   * @example
   * 3BE338D3-16B1-513F-8DD2-57C8528DEAAA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
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
      data: BatchTranslateResponseBodyData,
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

