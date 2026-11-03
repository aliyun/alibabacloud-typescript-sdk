// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel. Valid values:
   * - Enterprise: Enterprise Edition
   * - Business: Business Edition
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The ID of the cloud computer. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The list of cloud computer statuses to include.
   */
  desktopStatusList?: string[];
  /**
   * @remarks
   * The specifications of the cloud computer. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of the specifications supported by cloud computers.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time. The maximum interval between the start time and the end time is 30 days. Supported format:
   * - Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-08-31T06:56:45Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of cloud computer statuses to exclude.
   */
  excludeDesktopStatusList?: string[];
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The sorting field. If not specified, the results are sorted in descending order of creation time. Valid values:
   * 
   * - uptime: Sorts the results by the uptime of the cloud computer.
   * 
   * @example
   * uptime
   */
  orderBy?: string;
  /**
   * @remarks
   * The list of organization IDs.
   */
  orgIdList?: string[];
  /**
   * @remarks
   * The page number of the current page in a paging query.    
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * - Shanghai
   * - Singapore
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The query scope. Default value: empty. Valid values:
   * 
   * - ADVANCED: Queries statistical records such as connection duration.
   * 
   * @example
   * ADVANCED
   */
  scope?: string;
  /**
   * @remarks
   * The sorting order. Default value: Asc. Valid values:
   * - Asc: ascending order
   * - Desc: descending order
   * 
   * @example
   * Asc
   */
  sortType?: string;
  /**
   * @remarks
   * The start time. Supported format:
   * - Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * The billing method of the cloud computer. Valid values:
   * 
   * - prePaid: monthly subscription with unlimited duration
   * - postPaid: pay-as-you-go
   * - monthPackage: monthly time package
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The list of usernames.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatusList: 'DesktopStatusList',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      excludeDesktopStatusList: 'ExcludeDesktopStatusList',
      officeSiteId: 'OfficeSiteId',
      orderBy: 'OrderBy',
      orgIdList: 'OrgIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      sortType: 'SortType',
      startTime: 'StartTime',
      subPayType: 'SubPayType',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatusList: { 'type': 'array', 'itemType': 'string' },
      desktopType: 'string',
      endTime: 'string',
      endUserId: 'string',
      excludeDesktopStatusList: { 'type': 'array', 'itemType': 'string' },
      officeSiteId: 'string',
      orderBy: 'string',
      orgIdList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      sortType: 'string',
      startTime: 'string',
      subPayType: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.desktopStatusList)) {
      $dara.Model.validateArray(this.desktopStatusList);
    }
    if(Array.isArray(this.excludeDesktopStatusList)) {
      $dara.Model.validateArray(this.excludeDesktopStatusList);
    }
    if(Array.isArray(this.orgIdList)) {
      $dara.Model.validateArray(this.orgIdList);
    }
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

