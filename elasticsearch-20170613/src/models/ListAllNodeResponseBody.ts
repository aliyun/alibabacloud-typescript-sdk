// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllNodeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The disk usage.
   * 
   * @example
   * 4.2%
   */
  cpuPercent?: string;
  /**
   * @remarks
   * The health status of the node. Valid values: GREEN, YELLOW, RED, and GRAY.
   * 
   * @example
   * 1.0%
   */
  diskUsedPercent?: string;
  /**
   * @example
   * GREEN
   */
  health?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 21.6%
   */
  heapPercent?: string;
  /**
   * @remarks
   * The port that is used to connect to the node.
   * 
   * @example
   * 10.15.XX.XX
   */
  host?: string;
  /**
   * @example
   * 0.12
   */
  loadOneM?: string;
  /**
   * @remarks
   * The 1-minute load of the node.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  /**
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The type of the nodes. Valid values:
   * 
   * *   MASTER: dedicated master node
   * *   WORKER: hot node
   * *   WORKER_WARM: warm node
   * *   COORDINATING: client node
   * *   KIBANA: Kibana node
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
   * The zone ID of the node.
   * 
   * @example
   * 0D71B597-F3FF-5B56-88D7-74F9D3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The CPU utilization.
   * 
   * >  If the **extended** request parameter is set to **true** and the monitoring information of the nodes in the cluster is being synchronized, the value of the cpuPercent parameter is null. In this case, you need to send a request again after 10 seconds to obtain the value of the cpuPercent parameter.
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

