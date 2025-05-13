// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkNodeRequestBody extends $dara.Model {
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

