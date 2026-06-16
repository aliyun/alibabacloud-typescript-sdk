// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EngineSearchResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * 算法内容
   * 
   * @example
   * {"rankScore":1.0}
   */
  algorithm?: { [key: string]: any };
  /**
   * @remarks
   * 内容详情对象（详细结构见下文）
   * 
   * @example
   * {"titile":"大疆无人机"}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * 权益绑定 ID
   * 
   * @example
   * iceberg-tbl-b7420156-6d23-4555-8e05-12285b36d6ca
   */
  id?: string;
  /**
   * @remarks
   * 相关性得分
   * 
   * @example
   * 0.005369
   */
  score?: number;
  /**
   * @remarks
   * 回传日志时使用。
   * 
   * 取值：
   * 
   * trace_id=ali。
   * 
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
   * @remarks
   * The error message.
   * 
   * @example
   * 搜索词违禁
   */
  errorMessage?: string;
  /**
   * @remarks
   * The additional metadata. 
   * 
   * > Contains the exclude_ids field, which represents the list of IDs that were actually excluded. The format is `Array[String]`.
   * > - Example: ["id_1", "id_2"].
   * 
   * @example
   * {exclude_ids: ["id_1", "id_2"]}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * 搜索结果列表
   */
  items?: EngineSearchResponseBodyDataItems[];
  /**
   * @remarks
   * The search page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The response ID of this request.
   * 
   * @example
   * 62CC3999-5380-5344-ABC7-46453625A910
   */
  requestId?: string;
  /**
   * @remarks
   * The number of results returned on the current page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The execution status.
   * 200: succeeded.
   * 500: failed.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 121
   */
  total?: number;
  /**
   * @remarks
   * The Tracing Analysis information.
   * 
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
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The business data body.
   */
  data?: EngineSearchResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
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

