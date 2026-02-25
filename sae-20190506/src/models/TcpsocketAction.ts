// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TCPSocketAction extends $dara.Model {
  /**
   * @remarks
   * Optional. The hostname to which you want to connect. The default value is the IP address of the pod.
   * 
   * @example
   * 172.16.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The port number that you want to access on the container. Valid values: 1 to 65535.
   * 
   * @example
   * 80
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

