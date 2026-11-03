// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkNodeRequestBody extends $dara.Model {
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
   * The name of the node in a cloud-native ACK cluster. You can call the [ListAllNode](https://help.aliyun.com/document_detail/183958.html) operation to query the node name.
   * 
   * @example
   * es-cn-pl32xxxxxxx-data-f-1
   */
  hostName?: string;
  /**
   * @remarks
   * The type of nodes to remove. Valid values:
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
   * The access port of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The zone ID of the node. For example, cn-shanghai-c indicates Zone C in the China (Shanghai) region.
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

export class ShrinkNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ShrinkNodeRequestBody[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of nodes to remove.
   * >Notice:  This parameter applies only to instances deployed in the ACK architecture. If you specify this parameter, you cannot specify the host parameter in the body.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to ignore the health status of the cluster. Valid values:
   * 
   * - true: Ignore the health status.
   * - false: Do not ignore the health status.
   * 
   * @example
   * false
   */
  ignoreStatus?: boolean;
  /**
   * @remarks
   * The type of nodes to remove. Valid values:
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
      clientToken: 'clientToken',
      count: 'count',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ShrinkNodeRequestBody },
      clientToken: 'string',
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

