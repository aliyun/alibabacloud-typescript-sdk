// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRecordRequest extends $dara.Model {
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
   * The resolution line. Default value: **default**.
   * 
   * For more information, see
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
   * This parameter is required if the type of the DNS record is MX.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * For example, if you want to resolve @.example.com, you must set RR to an at sign (@) instead of leaving it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  RR?: string;
  /**
   * @remarks
   * The ID of the Domain Name System (DNS) record.
   * 
   * You can call the [DescribeDomainRecords](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9999985
   */
  recordId?: string;
  /**
   * @remarks
   * The time to live (TTL) period of the Alibaba Cloud DNS (DNS) record. Default value: 600. Unit: seconds.
   * 
   * For more information, see
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
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      TTL: 'TTL',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      line: 'string',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
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

