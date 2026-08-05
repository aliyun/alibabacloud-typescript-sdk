// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionRestrictionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {
   * 					"taskType":"text-embedding",
   * 					"modelSource":[
   * 						"ai_search"
   * 					],
   * 					"regionId":[
   * 						"cn-hangzhou",
   * 						"cn-zhangjiakou"
   * 					],
   * 					"instanceType":[
   * 						"gpu.v100.16g.x1",
   * 						"gpu.t4.16g.x1",
   * 						"gpu.a10.24g.x1"
   * 					]
   * 				}
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'meta',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionRestrictionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * not found
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 10.444
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "xx not found"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2423C841-91C4-5E51-B296-590D367967FC
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListFunctionRestrictionsResponseBodyResult[];
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      latency: 'latency',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionRestrictionsResponseBodyResult },
      status: 'string',
      totalCount: 'number',
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

