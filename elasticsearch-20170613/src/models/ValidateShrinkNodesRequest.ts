// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateShrinkNodesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 192.168.xx.xx
   */
  host?: string;
  /**
   * @remarks
   * The node name of the cloud-native ACK-based cluster. You can call the [ListAllNode](https://help.aliyun.com/document_detail/183958.html) operation to obtain the node name.
   * 
   * @example
   * es-cn-pl32xxxxxxx-data-f-1
   */
  hostName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - WORKER: hot node
   * - WORKER_WARM: warm node
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  /**
   * @remarks
   * The access port number of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The zone ID of the node in the instance. For example, the zone ID of China (Shanghai) Zone C is cn-shanghai-c.
   * 
   * @example
   * cn-shanghai-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      hostName: 'hostName',
      nodeType: 'nodeType',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      hostName: 'string',
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

export class ValidateShrinkNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ValidateShrinkNodesRequestBody[];
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to ignore the cluster health status.
   * 
   * - true: ignores the cluster health status.
   * - false (default): does not ignore the cluster health status.
   * 
   * @example
   * false
   */
  ignoreStatus?: boolean;
  /**
   * @remarks
   * The type of nodes to scale in. Valid values:
   * 
   * - WORKER: hot node
   * - WORKER_WARM: warm node
   * 
   * This parameter is required.
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      count: 'count',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ValidateShrinkNodesRequestBody },
      count: 'number',
      ignoreStatus: 'boolean',
      nodeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

