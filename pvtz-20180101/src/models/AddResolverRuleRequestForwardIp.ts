// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddResolverRuleRequestForwardIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * >  The following CIDR blocks are reserved by the system: 100.100.2.136 to 100.100.2.138 and 100.100.2.116 to 100.100.2.118. You cannot specify the IP addresses within these CIDR blocks for the external DNS servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port of the destination server.
   * 
   * This parameter is required.
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

