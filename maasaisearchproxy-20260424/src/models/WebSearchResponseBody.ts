// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebSearchResponseBodyDataResultSource extends $dara.Model {
  /**
   * @example
   * domain
   */
  domain?: string;
  /**
   * @example
   * favicon
   */
  favicon?: string;
  /**
   * @example
   * name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      favicon: 'favicon',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      favicon: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebSearchResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 1990-01-01 12:00:00
   */
  date?: string;
  /**
   * @example
   * snippet
   */
  snippet?: string;
  source?: WebSearchResponseBodyDataResultSource;
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
      date: 'date',
      snippet: 'snippet',
      source: 'source',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      snippet: 'string',
      source: WebSearchResponseBodyDataResultSource,
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: WebSearchResponseBodyData,
      message: 'string',
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

