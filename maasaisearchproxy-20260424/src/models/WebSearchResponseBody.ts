// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class WebSearchResponseBodyDataResult extends $dara.Model {
  snippet?: string;
  /**
   * @example
   * 4567
   */
  title?: string;
  /**
   * @example
   * https://pai-dlc-proxy-1-cn-wulanchabu.aliyun.com/ray/dashboard/dlc1a9r0uhfn24cl
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      snippet: 'snippet',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snippet: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebSearchResponseBodyData extends $dara.Model {
  result?: WebSearchResponseBodyDataResult[];
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': WebSearchResponseBodyDataResult },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebSearchResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: number;
  data?: WebSearchResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 3b5215d417623961959166934d009a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebSearchResponseBodyData,
      message: 'string',
      traceId: 'string',
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

