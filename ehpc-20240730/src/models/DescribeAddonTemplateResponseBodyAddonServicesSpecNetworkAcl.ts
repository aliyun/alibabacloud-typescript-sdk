// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: forwards UDP packets.
   * *   **Any**: forwards all packets.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

