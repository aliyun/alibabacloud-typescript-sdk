// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDnsLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Public DNS configuration.
   * 
   * @example
   * 51**4
   */
  accountId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp in milliseconds.
   * >Warning: If you specify a wide time range, many logs may be returned. This can cause a query timeout or inaccurate results.
   * 
   * @example
   * 1741526400000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The module type.
   * 
   * - AUTHORITY (default): public authoritative DNS
   * 
   * - RECURSION: public recursive DNS
   * 
   * @example
   * AUTHORITY
   */
  module?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  preciseSort?: boolean;
  /**
   * @remarks
   * The query parameters.
   * 
   * - sourceIp: the source IP address
   * 
   * - queryNameFuzzy: the domain name (fuzzy match)
   * 
   * - queryType: the record type
   * 
   * - value: the resolution result
   * 
   * - status: the status
   * 
   * - serverIp: the IP address of the resolution server
   * 
   * @example
   * {"sourceIp":"59.82.XX.XX","queryType":"A"}
   */
  queryCondition?: string;
  recursionProtocolType?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1738848000000
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      lang: 'Lang',
      module: 'Module',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      preciseSort: 'PreciseSort',
      queryCondition: 'QueryCondition',
      recursionProtocolType: 'RecursionProtocolType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      domainName: 'string',
      endTimestamp: 'number',
      lang: 'string',
      module: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      preciseSort: 'boolean',
      queryCondition: 'string',
      recursionProtocolType: 'string',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

