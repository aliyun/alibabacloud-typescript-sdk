// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoicesResponseBodyDataVoices extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * 通义千问音色.
   */
  category?: string;
  /**
   * @remarks
   * The supported languages.
   * 
   * @example
   * Chinese and Chinese-English mixed.
   */
  language?: string;
  /**
   * @remarks
   * The TTS model.
   * 
   * @example
   * Qwen
   */
  model?: string;
  /**
   * @remarks
   * The voice timbre name.
   * 
   * @example
   * 芊悦.
   */
  name?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The style.
   * 
   * @example
   * Female voice.
   */
  style?: string;
  /**
   * @remarks
   * The list of supported parameters.
   */
  supportedParams?: string[];
  /**
   * @remarks
   * The speaker.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of voice timbres.
   */
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
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated result of voice timbres.
   */
  data?: ListVoicesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance llm-xdne77rxe14ziszr
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
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

