// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicesResponseBodyDataVoices extends $dara.Model {
  category?: string;
  language?: string;
  /**
   * @example
   * Qwen
   */
  model?: string;
  name?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  style?: string;
  supportedParams?: string[];
  /**
   * @example
   * Cherry
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      language: 'Language',
      model: 'Model',
      name: 'Name',
      nlsEngine: 'NlsEngine',
      style: 'Style',
      supportedParams: 'SupportedParams',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      language: 'string',
      model: 'string',
      name: 'string',
      nlsEngine: 'string',
      style: 'string',
      supportedParams: { 'type': 'array', 'itemType': 'string' },
      voice: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedParams)) {
      $dara.Model.validateArray(this.supportedParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  voices?: ListVoicesResponseBodyDataVoices[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voices: 'Voices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voices: { 'type': 'array', 'itemType': ListVoicesResponseBodyDataVoices },
    };
  }

  validate() {
    if(Array.isArray(this.voices)) {
      $dara.Model.validateArray(this.voices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoicesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListVoicesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance llm-xdne77rxe14ziszr
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * CF6D3484-19A1-5C77-863B-AC8B5754D37C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVoicesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

