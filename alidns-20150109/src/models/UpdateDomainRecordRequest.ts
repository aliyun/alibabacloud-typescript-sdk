// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRecordRequest extends $dara.Model {
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
   * The resolution line. The default value is **default**.
   * For more information, see
   * <props="china">[Enumeration of resolution lines](https://help.aliyun.com/document_detail/29807.html).
   * <props="intl">[Enumeration of resolution lines](https://www.alibabacloud.com/help/en/doc-detail/29807.htm).
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The priority of the MX record. Valid values: `[1, 50]`.
   * 
   * This parameter is required if the record type is MX.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The host record.
   * To resolve the root domain, such as example.com, set the host record to the at sign (@).
   * 
   * This parameter is required.
   * 
   * @example
   * @
   */
  RR?: string;
  /**
   * @remarks
   * The ID of the DNS record. To obtain the ID, call the [DescribeDomainRecords](https://help.aliyun.com/document_detail/2357159.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 99*******
   */
  recordId?: string;
  /**
   * @remarks
   * The time to live (TTL). The default value is 600 seconds (10 minutes).
   * For more information, see
   * <props="china">[TTL definition](https://help.aliyun.com/document_detail/29806.html).
   * <props="intl">[TTL definition](https://www.alibabacloud.com/help/en/doc-detail/29806.htm).
   * 
   * @example
   * 600
   */
  TTL?: number;
  /**
   * @remarks
   * The type of the DNS record. For more information, see
   * <props="china">[DNS record types](https://help.aliyun.com/document_detail/29805.html).
   * <props="intl">[DNS record types](https://www.alibabacloud.com/help/en/doc-detail/29805.htm).
   * 
   * This parameter is required.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The client IP address.
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
   * 192.0.2.1
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

