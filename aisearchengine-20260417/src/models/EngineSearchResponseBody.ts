// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EngineSearchResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * {"rankScore":1.0}
   */
  algorithm?: { [key: string]: any };
  /**
   * @example
   * {"titile":"大疆无人机"}
   */
  content?: { [key: string]: any };
  /**
   * @example
   * iceberg-tbl-b7420156-6d23-4555-8e05-12285b36d6ca
   */
  id?: string;
  /**
   * @example
   * 1.75
   */
  score?: number;
  /**
   * @example
   * {"traceId":"12285b36d6ca"}
   */
  traceInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      content: 'content',
      id: 'id',
      score: 'score',
      traceInfo: 'traceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      score: 'number',
      traceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.algorithm) {
      $dara.Model.validateMap(this.algorithm);
    }
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(this.traceInfo) {
      $dara.Model.validateMap(this.traceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchResponseBodyData extends $dara.Model {
  /**
   * @example
   * 搜索词违禁
   */
  errorMessage?: string;
  /**
   * @example
   * {}
   */
  extra?: { [key: string]: any };
  items?: EngineSearchResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 62CC3999-5380-5344-ABC7-46453625A910
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * 121
   */
  total?: number;
  /**
   * @example
   * {"traceId":"234234324"}
   */
  traceInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      extra: 'extra',
      items: 'items',
      page: 'page',
      requestId: 'requestId',
      size: 'size',
      status: 'status',
      total: 'total',
      traceInfo: 'traceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      items: { 'type': 'array', 'itemType': EngineSearchResponseBodyDataItems },
      page: 'number',
      requestId: 'string',
      size: 'number',
      status: 'string',
      total: 'number',
      traceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.traceInfo) {
      $dara.Model.validateMap(this.traceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EngineSearchResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: number;
  data?: EngineSearchResponseBodyData;
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
      data: EngineSearchResponseBodyData,
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

