// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the hostname. The value is not case-sensitive. You can set SearchMode to LIKE or EXACT. The default value of SearchMode is EXACT.
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
   * The search mode. Valid values:
   * 
   * *   **LIKE**: fuzzy search
   * *   **EXACT** (default): exact search
   * 
   * The value of Keyword is the search scope.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The tag added to the DNS record. Valid values:
   * 
   * *   ecs: If you set Tag to ecs, the DNS records added to the hostnames of Elastic Compute Service (ECS) instances in the zone are queried.
   * *   If Tag is left empty, the DNS records in the zone are queried.
   * 
   * @example
   * ecs
   */
  tag?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * a96d70eb4ab8ef01503dc5486914****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      tag: 'Tag',
      userClientIp: 'UserClientIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      tag: 'string',
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

