// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

