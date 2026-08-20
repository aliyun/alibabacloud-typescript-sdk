// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the hostname. The search is not case-sensitive. Use the SearchMode parameter to switch between a fuzzy search and an exact search. The default is an exact search.
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
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * - **LIKE**: fuzzy search
   * 
   * - **EXACT**: exact search (default)
   * 
   * This parameter is used with the Keyword parameter.
   * 
   * @example
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The tag. Valid values:
   * 
   * - ecs: Queries the hostnames that are synchronized from ECS instances to the zone.
   * 
   * - If you do not specify this parameter, all DNS records in the zone are queried.
   * 
   * @example
   * ecs
   */
  tag?: string;
  /**
   * @remarks
   * The client IP address of the user.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  /**
   * @remarks
   * The unique ID of the zone.
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

