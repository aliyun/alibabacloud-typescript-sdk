// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. If you leave this parameter empty, both types will be displayed.
   * 
   * Valid values:
   * 
   * *   INTERNET: access over the Internet.
   * *   VPC: access over an enterprise virtual private cloud (VPC).
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * Specifies whether to enable the immediate refresh feature.
   * 
   * >  To ensure the operation response speed, we recommend that you set the value to `false`.
   * 
   * Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  autoRefresh?: boolean;
  /**
   * @remarks
   * The level-2 resource category.
   * 
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @remarks
   * The level-1 resource category.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client. This parameter is non-sensitive and does not need encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * 54c17e1d-2d72-4b87-aa33-25f3b3f2****
   */
  clientId?: string;
  /**
   * @remarks
   * The client type.
   * 
   * Valid values:
   * 
   * *   html5: the web client.
   * *   android: the Android client.
   * *   windows: the Windows client.
   * *   ios: the iOS client.
   * *   macos: the macOS client.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 7.6.0-R-20241112.222305
   */
  clientVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable geo-redundant forwarding. Set the value to `false`.
   * 
   * Valid value:
   * 
   * *   false: disables geo-redundant forwarding.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  dualCenterForward?: boolean;
  /**
   * @remarks
   * The client language.
   * 
   * Valid values:
   * 
   * *   en_US: English.
   * *   zh_CN: Simplified Chinese.
   * *   ja_JP: Japanese.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the region where end users log on to clients. This parameter applies to office network ID-based logons. For organization ID-based logons, you can leave this parameter empty.
   * 
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * The logon token. You can call the `GetLoginToken` or `RefreshLoginToken` operation to retrieve the logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 500.
   * 
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network IDs. This parameter is required for logons by using enterprise Active Directory (AD) accounts.
   */
  officeSiteIds?: string[];
  /**
   * @remarks
   * The sorting field. If you do not specify this parameter, resources are sorted by creation time by default.
   * 
   * Valid values:
   * 
   * *   CreateTime: the time when resources are created.
   * *   AssignTime: the time when resources are assigned.
   * 
   * @example
   * AssignTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The service types. If you leave this parameter empty, services of all supported types will be queried.
   */
  productTypes?: string[];
  /**
   * @remarks
   * The protocol type. You can specify this parameter to filter cloud computers.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX).
   * *   ASP: Adaptive Streaming Protocol (ASP).
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * 是否查询云桌面套餐包信息，默认为true。
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  queryDesktopDurationList?: boolean;
  /**
   * @remarks
   * 是否查询云电脑定时任务信息，默认为true。
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  queryDesktopTimers?: boolean;
  /**
   * @remarks
   * Specifies whether to return the image version information of cloud computers.
   * 
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @remarks
   * Specifies whether to refresh over-the-air (OTA) information in real time.
   * 
   * @example
   * false
   */
  refreshFotaUpdate?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify up to 100 resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource name. Fuzzy search is supported.
   * 
   * @example
   * testName
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource types. If you leave this parameter empty, resources of all supported types will be queried.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The client usage scenario. Set the value to `desktop`.
   * 
   * Valid value:
   * 
   * *   desktop: cloud computers.
   * 
   * @example
   * desktop
   */
  scene?: string;
  /**
   * @remarks
   * The ID of the searched region. You can specify this parameter to filter cloud resources in specific regions.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The session ID. You can call the `GetLoginToken` operation to retrieve the session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * Valid values:
   * 
   * *   ASC (default): the ascending order.
   * *   DESC: the descending order.
   * 
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

