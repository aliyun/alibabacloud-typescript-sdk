// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllNodeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The CPU usage.
   * > When **extended** is set to **true** and the monitoring information of the node is being synchronized, the parameter value returns null. In this case, wait 10 seconds and send the request again to retrieve the value.
   * 
   * @example
   * 4.2%
   */
  cpuPercent?: string;
  /**
   * @remarks
   * The disk usage.
   * 
   * @example
   * 1.0%
   */
  diskUsedPercent?: string;
  /**
   * @remarks
   * The health status of the node. Valid values: GREEN, YELLOW, RED, and GRAY.
   * 
   * @example
   * GREEN
   */
  health?: string;
  /**
   * @remarks
   * The JVM memory usage.
   * 
   * @example
   * 21.6%
   */
  heapPercent?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.15.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The one-minute load average.
   * 
   * @example
   * 0.12
   */
  loadOneM?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - MASTER: dedicated master node
   * - WORKER: hot node
   * - WORKER_WARM: warm node
   * - COORDINATING: client node
   * - KIBANA: Kibana node.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  /**
   * @remarks
   * The access port of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The zone where the node resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuPercent: 'cpuPercent',
      diskUsedPercent: 'diskUsedPercent',
      health: 'health',
      heapPercent: 'heapPercent',
      host: 'host',
      loadOneM: 'loadOneM',
      nodeType: 'nodeType',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercent: 'string',
      diskUsedPercent: 'string',
      health: 'string',
      heapPercent: 'string',
      host: 'string',
      loadOneM: 'string',
      nodeType: 'string',
      port: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D71B597-F3FF-5B56-88D7-74F9D3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListAllNodeResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAllNodeResponseBodyResult },
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

