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

