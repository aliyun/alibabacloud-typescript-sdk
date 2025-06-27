// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainRecordRequest extends $dara.Model {
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
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English Default: **zh**
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The resolution line. Default value: **default**. For more information, see
   * 
   * [DNS resolution lines](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm).
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record. Valid values: `1 to 50`.
   * 
   * This parameter is required if the type of the DNS record is MX. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * For example, to resolve @.example.com, you must set this parameter to an at sign (@). You cannot leave this parameter empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The time to live (TTL) period of the Alibaba Cloud DNS (DNS) record. Default value: 600. Unit: seconds. For more information, see
   * 
   * [TTL definition](https://www.alibabacloud.com/help/zh/doc-detail/29806.htm).
   * 
   * @example
   * 600
   */
  TTL?: number;
  /**
   * @remarks
   * The type of the DNS record. For more information, see
   * 
   * [DNS record types](https://www.alibabacloud.com/help/zh/doc-detail/29805.htm).
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * The value of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.2.254
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      RR: 'RR',
      TTL: 'TTL',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      RR: 'string',
      TTL: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

