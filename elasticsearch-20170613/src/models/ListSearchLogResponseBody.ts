// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchLogResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node that generates the log.
   * 
   * @example
   * 1000
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * [GC (Allocation Failure) 2018-07-19T17:24:20.682+0800: 7516.513: [ParNew: 6604768K->81121K(7341504K), 0.0760606 secs] 7226662K->703015K(31813056K), 0.0762507 secs] [Times: user=0.52 sys=0.00, real=0.07 secs]
   */
  content?: string;
  /**
   * @example
   * {"level": "info", "host": "``192.168.**.**``", "time": "2019-03-18T08:16:12.741Z","content": "[o.e.c.r.a.AllocationService] [MnNASM_] Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[my_index][3]] ...])."}
   */
  contentCollection?: { [key: string]: any };
  /**
   * @remarks
   * Details of the log entry. Different content fields are returned for different log types.
   * 
   * @example
   * ``192.168.**.**``
   */
  host?: string;
  /**
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp when the log is generated. Unit: ms.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @example
   * 1531985112420
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentCollection: 'contentCollection',
      host: 'host',
      instanceId: 'instanceId',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentCollection: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      host: 'string',
      instanceId: 'string',
      level: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.contentCollection) {
      $dara.Model.validateMap(this.contentCollection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The level of the log. Valid values:
   * 
   * *   warn: warning log
   * *   info: information log
   * *   error: error log
   * *   trace: trace logs
   * *   debug: debug logs
   * 
   * The level information has been migrated to the contentCollection field.
   */
  headers?: ListSearchLogResponseBodyHeaders;
  /**
   * @remarks
   * The list of logs returned by the request.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the log entry. Migrated to the contentCollection field.
   */
  result?: ListSearchLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListSearchLogResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSearchLogResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

