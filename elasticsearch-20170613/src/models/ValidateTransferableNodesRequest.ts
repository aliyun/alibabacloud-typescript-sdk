// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTransferableNodesRequestBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 172.16.xx.xx
   */
  host?: string;
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
   * The zone ID of the instance node. For example, the ID of Zone C in the China (Shanghai) region is cn-shanghai-c.
   * 
   * @example
   * cn-shanghai-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
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

export class ValidateTransferableNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: ValidateTransferableNodesRequestBody[];
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - WORKER: hot node
   * - WORKER_WARM: warm node
   * 
   * > COORDINATING (client node) and KIBANA (Kibana node) are not supported.
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
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ValidateTransferableNodesRequestBody },
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

