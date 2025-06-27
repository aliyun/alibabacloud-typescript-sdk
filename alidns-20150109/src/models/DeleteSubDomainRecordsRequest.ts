// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubDomainRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * The hostname field in the DNS record.
   * 
   * For example, if you want to resolve @.example.com, you must set this parameter to an at sign (@) instead of leaving it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The type of DNS records. If you do not specify this parameter, all types of DNS records corresponding to the subdomain are returned.
   * 
   * Valid values: **A, MX, CNAME, TXT, REDIRECT_URL, FORWORD_URL, NS, AAAA, and SRV**. The value is not case-sensitive.
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
      RR: 'RR',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      RR: 'string',
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

