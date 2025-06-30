// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResolverRuleRequestForwardIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * >  You cannot specify the following IP addresses as the IP addresses of the external DNS servers because the IP addresses are reserved by the system: 100.100.2.136 to 100.100.2.138, and 100.100.2.116 to 100.100.2.118.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
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

