// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 192.168.50.191@19908#-2093249153#1534215565#40385215750900
   */
  clientId?: string;
  /**
   * @remarks
   * The public IP address of the host.
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * nginx
   */
  hostname?: string;
  /**
   * @remarks
   * The language used by the client.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group. Valid values:
   * 
   * *   BROADCASTING: broadcasting consumption
   * *   CLUSTERING: clustering consumption
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 1.0.0
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

