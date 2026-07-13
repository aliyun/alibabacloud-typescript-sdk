// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecursionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the DNS record. Valid values: enable and **disable**.
   * 
   * @example
   * enable
   */
  enable?: string;
  /**
   * @remarks
   * The maximum number of records to return for the current request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. The value starts from 1. The default value is 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The DNS line. The default value is **default**. For more information, see [DNS lines](https://help.aliyun.com/document_detail/29807.html).
   * 
   * <props="china">
   * 
   * [DNS line enumeration](https://help.aliyun.com/document_detail/29807.html)
   * 
   * 
   * 
   * <props="intl">
   * 
   * [DNS line enumeration](https://www.alibabacloud.com/help/en/doc-detail/29807.htm)
   * 
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The time-to-live (TTL) in seconds. The default value is 60. Valid values are 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (24 hours).
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. The following types are supported: A: Maps a domain name to an IPv4 address. AAAA: Maps a domain name to an IPv6 address. CNAME: An alias record that maps a domain name to another domain name. MX: A mail exchanger record that points a domain name to a mail server address. TXT: A text record that contains arbitrary, human-readable text. SRV: A service record that identifies a server for a specific service. This record type is common in directory management for Microsoft systems.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The weight of the DNS record. The value ranges from 0 to 100.
   * 
   * @example
   * 1
   */
  weight?: number;
  /**
   * @remarks
   * The ID of the zone to which the DNS record belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 17832322323
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

