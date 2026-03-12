// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeInfo extends $dara.Model {
  /**
   * @example
   * 172.16.xx.xx
   */
  host?: string;
  /**
   * @example
   * es-cn-tl32vdghe0005cd99-data-b-2
   */
  hostName?: string;
  /**
   * @example
   * 9200
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      hostName: 'hostName',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      hostName: 'string',
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

