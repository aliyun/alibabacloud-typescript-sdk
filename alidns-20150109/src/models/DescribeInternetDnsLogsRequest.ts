// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetDnsLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The account ID displayed on the Recursive Resolution (Public DNS) page after you activate Alibaba Cloud Public DNS.
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
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the query (timestamp, unit: milliseconds). >Warning: If the query time span is too large and the amount of resolution logs for the queried domain is excessive, it may lead to a query timeout or inaccurate query results.
   * 
   * @example
   * 1709196299999
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Return value language, options: 
   * - zh: Chinese 
   * - en: English
   * 
   * Default: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Module type 
   * - AUTHORITY (default): Public Authoritative DNS 
   * - RECURSION: Public Recursive DNS
   * 
   * @example
   * AUTHORITY
   */
  module?: string;
  /**
   * @remarks
   * Page number, default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size for query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  preciseSort?: boolean;
  /**
   * @remarks
   * Query parameters 
   * - sourceIp: Source IP address 
   * - queryNameFuzzy: Domain name (fuzzy value) 
   * - queryType: Record type 
   * - value: Resolution result 
   * - status: Status 
   * - serverIp: Resolution server IP
   * 
   * @example
   * {"sourceIp":"59.82.XX.XX","queryType":"A"}
   */
  queryCondition?: string;
  recursionProtocolType?: string;
  /**
   * @remarks
   * The start time of the query (timestamp, unit: milliseconds).
   * 
   * @example
   * 1709192640000
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

