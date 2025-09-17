// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesRequest extends $dara.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * false
   */
  autoRefresh?: boolean;
  /**
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54c17e1d-2d72-4b87-aa33-25f3b3f2****
   */
  clientId?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 7.6.0-R-20241112.222305
   */
  clientVersion?: string;
  /**
   * @example
   * false
   * 
   * @deprecated
   */
  dualCenterForward?: boolean;
  /**
   * @example
   * zh-CN
   */
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
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  officeSiteIds?: string[];
  /**
   * @example
   * AssignTime
   */
  orderBy?: string;
  productTypes?: string[];
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * **if can be null:**
   * true
   */
  queryDesktopDurationList?: boolean;
  /**
   * **if can be null:**
   * true
   */
  queryDesktopTimers?: boolean;
  /**
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @example
   * false
   */
  refreshFotaUpdate?: boolean;
  resourceIds?: string[];
  /**
   * @example
   * testName
   */
  resourceName?: string;
  resourceTypes?: string[];
  /**
   * @example
   * desktop
   */
  scene?: string;
  /**
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @example
   * ASC
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      autoRefresh: 'AutoRefresh',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      clientId: 'ClientId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      dualCenterForward: 'DualCenterForward',
      language: 'Language',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteIds: 'OfficeSiteIds',
      orderBy: 'OrderBy',
      productTypes: 'ProductTypes',
      protocolType: 'ProtocolType',
      queryDesktopDurationList: 'QueryDesktopDurationList',
      queryDesktopTimers: 'QueryDesktopTimers',
      queryFotaUpdate: 'QueryFotaUpdate',
      refreshFotaUpdate: 'RefreshFotaUpdate',
      resourceIds: 'ResourceIds',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      scene: 'Scene',
      searchRegionId: 'SearchRegionId',
      sessionId: 'SessionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      autoRefresh: 'boolean',
      categoryId: 'number',
      categoryType: 'number',
      clientId: 'string',
      clientType: 'string',
      clientVersion: 'string',
      dualCenterForward: 'boolean',
      language: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteIds: { 'type': 'array', 'itemType': 'string' },
      orderBy: 'string',
      productTypes: { 'type': 'array', 'itemType': 'string' },
      protocolType: 'string',
      queryDesktopDurationList: 'boolean',
      queryDesktopTimers: 'boolean',
      queryFotaUpdate: 'boolean',
      refreshFotaUpdate: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      scene: 'string',
      searchRegionId: 'string',
      sessionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteIds)) {
      $dara.Model.validateArray(this.officeSiteIds);
    }
    if(Array.isArray(this.productTypes)) {
      $dara.Model.validateArray(this.productTypes);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

