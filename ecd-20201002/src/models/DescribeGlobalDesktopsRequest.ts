// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c213150d-7ac3-432c-b749-6e1e090b****
   */
  clientId?: string;
  /**
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  desktopId?: string[];
  /**
   * @example
   * DesktopTest
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * cn-hangzhou+dir-880841****
   */
  directoryId?: string;
  /**
   * @remarks
   * 关键字。支持模糊搜索桌面ID、云桌面名称和终端用户自定义的桌面名称。
   * 
   * @example
   * ecd
   */
  keyword?: string;
  language?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v147c9114a180489f89691663893169****
   */
  loginToken?: string;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * eyJkZWZhdWx0IjpbIjk2MjEy****
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou+dir-880841****
   */
  officeSiteId?: string;
  /**
   * @example
   * AssignTime
   */
  orderBy?: string;
  /**
   * @example
   * true
   */
  queryFotaUpdate?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @example
   * 5c456a41-1e65-4e72-ab4d-5dcfff52****
   */
  sessionId?: string;
  /**
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @example
   * true
   */
  withoutLatency?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopAccessType: 'DesktopAccessType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      language: 'Language',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      orderBy: 'OrderBy',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      sessionId: 'SessionId',
      sortType: 'SortType',
      withoutLatency: 'WithoutLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopAccessType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      directoryId: 'string',
      keyword: 'string',
      language: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      orderBy: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      searchRegionId: 'string',
      sessionId: 'string',
      sortType: 'string',
      withoutLatency: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

