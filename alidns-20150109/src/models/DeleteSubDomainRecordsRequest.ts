// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubDomainRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china">You can call [DescribeDomains](https://help.aliyun.com/en/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0) to obtain the domain name.
   * <props="intl">You can call [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
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
   * The host record.
   * 
   * To resolve @.example.com, set the host record to \\"@\\" instead of leaving it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The type of the DNS record. If you do not specify this parameter, all types of DNS records for the subdomain are deleted.
   * 
   * Valid values (case-insensitive): A, MX, CNAME, TXT, REDIRECT_URL, FORWARD_URL, NS, AAAA, and **SRV**.
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
   * 192.0.2.1
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

