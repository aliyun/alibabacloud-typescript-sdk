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
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line, such as default, telecom, or mobile.
   * 
   * @example
   * telecom
   */
  line?: string;
  /**
   * @remarks
   * Specifies whether to enable the weight configuration. Valid values:
   * 
   * - **true** (default): Enable
   * 
   * - **false**: Disable
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The subdomain for which to configure weights. A primary domain name, such as example.com, is not valid. Use @.example.com instead.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of the DNS record. Valid values: A and AAAA. Default value: A.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 192.0.2.1
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

