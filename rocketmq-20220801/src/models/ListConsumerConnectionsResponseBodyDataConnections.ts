// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * 172.17.135.197@17392#1936705963#551717232#9873695589062458
   */
  clientId?: string;
  /**
   * @remarks
   * Host IP/Public IP
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * vos
   */
  hostname?: string;
  /**
   * @remarks
   * The language of the client.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * Consumption Mode
   * - BROADCASTING
   * - CLUSTERING
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The version of the client.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      egressIp: 'egressIp',
      hostname: 'hostname',
      language: 'language',
      messageModel: 'messageModel',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      egressIp: 'string',
      hostname: 'string',
      language: 'string',
      messageModel: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

