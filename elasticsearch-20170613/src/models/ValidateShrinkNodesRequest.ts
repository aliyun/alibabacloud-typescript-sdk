// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateShrinkNodesRequestBody extends $dara.Model {
  /**
   * @example
   * 192.168.xx.xx
   */
  host?: string;
  /**
   * @example
   * es-cn-pl32xxxxxxx-data-f-1
   */
  hostName?: string;
  /**
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
  body?: ValidateShrinkNodesRequestBody[];
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * false
   */
  ignoreStatus?: boolean;
  /**
   * @remarks
   * Returned results:
   * 
   * *   true: can be scaled in
   * *   false: cannot be scaled in.
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

