// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. Call the [DescribeDomains](https://www.alibabacloud.com/help/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to query the domain name.
   * 
   * This parameter is required.
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
   *   The default value is **zh**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line. The default value is **default**. For more information, see [DNS resolution lines](https://www.alibabacloud.com/help/doc-detail/29807.htm).
   * 
   * <props="china">
   * 
   * [Resolution line enumeration](https://help.aliyun.com/document_detail/29807.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [Resolution Line Enumeration](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm)
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. Valid values: `[1,50]`.
   * 
   * This parameter is required if the record type is MX. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The host record.
   * 
   * To resolve example.com, set the host record to "@" instead of leaving it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The time to live (TTL) value of the Domain Name System (DNS) record. Default value: 600. Unit: seconds. For more information, see the following topic:
   * 
   * <props="china">
   * 
   * [TTL overview](https://help.aliyun.com/document_detail/29806.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * The time to live (TTL) of the DNS record. The default value is 600 seconds. For more information, see [TTL](https://www.alibabacloud.com/help/doc-detail/29806.htm).
   * 
   * @example
   * 600
   */
  TTL?: number;
  /**
   * @remarks
   * The type of the DNS record. For more information, see
   * 
   * <props="china">
   * 
   * [DNS record type format](https://help.aliyun.com/document_detail/29805.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * The type of the DNS record. For more information, see [DNS record types](https://www.alibabacloud.com/help/doc-detail/29805.htm).
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
   * 192.0.2.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The record value.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
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

