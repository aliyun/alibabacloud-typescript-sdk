// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTransferableNodesRequestBody extends $dara.Model {
  /**
   * @example
   * 172.16.xx.xx
   */
  host?: string;
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
  body?: ValidateTransferableNodesRequestBody[];
  /**
   * @remarks
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

