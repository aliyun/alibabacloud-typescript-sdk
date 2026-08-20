// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. This value is a UNIX timestamp.
   * 
   * @example
   * 2516779348000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The type of log to obtain. Valid values:
   * 
   * - **PV_ZONE**: operation logs of built-in authoritative zones.
   * 
   * - **PV_RECORD**: operation logs of DNS records.
   * 
   * - **RESOLVER_RULE**: operation logs of forwarding rules.
   * 
   * - **CUSTOM_LINE**: operation logs of custom lines.
   * 
   * - **RESOLVER_ENDPOINT**: operation logs of outbound endpoints.
   * 
   * - **INBOUND_ENDPOINT**: operation logs of inbound endpoints.
   * 
   * - **CACHE_RESERVE_DOMAIN**: operation logs of domains for which cache is retained.
   * 
   * > If you specify another value, this parameter is ignored and logs of all types are returned.
   * 
   * @example
   * PV_ZONE
   */
  entityType?: string;
  /**
   * @remarks
   * The keyword, such as a behavior or content. Fuzzy search is supported. The keyword is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp.
   * 
   * @example
   * 1516779348000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 192.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * - If you specify this parameter, the operation returns the change logs of DNS records for the specified zone.<br>
   * 
   * - If you leave this parameter empty, the operation returns the change logs of all zones and DNS records that belong to the current account.
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

