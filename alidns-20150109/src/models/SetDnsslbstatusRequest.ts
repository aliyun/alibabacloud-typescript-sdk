// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDNSSLBStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line. The line can be the default line, China Telecom, and China Mobile.
   * 
   * @example
   * China Mobile.
   */
  line?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable weighted round-robin. Valid values:
   * 
   * *   **true** (default): enables weighted round-robin.
   * *   **false**: disables weighted round-robin.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The subdomain name for which you want to enable weighted round-robin. Set the parameter to @.example.com instead of example.com.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of the Domain Name System (DNS) record. Valid values: A and AAAA. Default value: A.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      open: 'Open',
      subDomain: 'SubDomain',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      open: 'boolean',
      subDomain: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

