// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeInfo extends $dara.Model {
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
   * The node name. This parameter is supported only for instances of version 7.16 deployed on ACK.
   * 
   * @example
   * es-cn-tl32vdghe0005cd99-data-b-2
   */
  hostName?: string;
  /**
   * @remarks
   * The port number of the node.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The zone ID of the node.
   * 
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

