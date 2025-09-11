// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchTranslateResponseBodyDataTranslationListUsage extends $dara.Model {
  /**
   * @example
   * 480
   */
  inputTokens?: number;
  /**
   * @example
   * 520
   */
  outputTokens?: number;
  /**
   * @example
   * 1000
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * Featured Double Color Ball experts: Liu Ke and A Wang both hit the second prize, winning 1.43 million!
   */
  translation?: string;
  usage?: BatchTranslateResponseBodyDataTranslationListUsage;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      index: 'index',
      message: 'message',
      translation: 'translation',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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
   * @example
   * 200
   */
  code?: string;
  data?: BatchTranslateResponseBodyData;
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
   * 3BE338D3-16B1-513F-8DD2-57C8528DEAAA
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

