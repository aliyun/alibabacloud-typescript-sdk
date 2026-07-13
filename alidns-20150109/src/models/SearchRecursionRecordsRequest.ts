// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values: asc for ascending and dsc for descending.
   * 
   * @example
   * asc
   */
  direction?: string;
  /**
   * @remarks
   * The status of the DNS record. Valid values: enable and **disable**.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
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
   * The sorting method. Valid values: rr, type, value, requestSource, weight, ttl, and enableStatus.
   * 
   * @example
   * rr
   */
  orderBy?: string;
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
   * The number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The DNS resolution line. The default value is **default**. For more information, see [DNS resolution lines](https://www.alibabacloud.com/help/en/doc-detail/29807.htm).
   * 
   * <props="china">
   * 
   * [DNS Line Enumeration](https://help.aliyun.com/document_detail/29807.html)
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
   * The time to live (TTL) in the local cache, in seconds. Valid values are 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. The following types are supported:A: Maps a domain name to an IPv4 address.AAAA: Maps a domain name to an IPv6 address.CNAME: An alias record that points a domain name to another domain name.MX: A mail exchanger record that points a domain name to a mail server.TXT: A text record that contains arbitrary human-readable text.SRV: A service record that identifies a server for a specific service. This is common in directory management for Microsoft systems.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The record value.
   * 
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @remarks
   * The weight of the DNS record. The value ranges from 0 to 100.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 169438909000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      enableStatus: 'EnableStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      enableStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      value: 'string',
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

