// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The type of operation logs. Valid values:
   * 
   * *   **PV_ZONE**: the logs that record the operations on built-in authoritative zones
   * *   **PV_RECORD**: the logs that record the operations on DNS records
   * *   **RESOLVER_RULE**: the logs that record the operations on forwarding rules
   * *   **CUSTOM_LINE**: the logs that record the operations on user-defined lines
   * *   **RESOLVER_ENDPOINT**: the logs that record the operations on outbound endpoints
   * *   **INBOUND_ENDPOINT**: the logs that record the operations on inbound endpoints
   * *   **CACHE_RESERVE_DOMAIN**: the logs that record the operations on cache retention domain names
   * 
   * >  If you set EntityType to other values, all types of logs are queried.
   * 
   * @example
   * PV_ZONE
   */
  entityType?: string;
  /**
   * @remarks
   * The keyword of the operation or the operation content. Fuzzy search is supported. The value is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516779348000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. Valid values:
   * 
   * *   If you set ZoneId to a zone ID, the logs that record the operations on the DNS records of the specified zone are queried.\\
   * 
   * *   If you leave ZoneId empty, the logs that record the operations on all zones and the DNS records of these zones that belong to the current Alibaba Cloud account are queried.
   * 
   * @example
   * df2d03865266bd9842306db586d3****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      entityType: 'EntityType',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      entityType: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      userClientIp: 'string',
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

