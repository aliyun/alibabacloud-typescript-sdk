// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebRulesResponseBodyWebRulesRealServers extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * 192.0.XX.XX
   */
  realServer?: string;
  /**
   * @remarks
   * The type of the origin server address. Valid values:
   * 
   * *   **0**: IP address
   * *   **1**: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

