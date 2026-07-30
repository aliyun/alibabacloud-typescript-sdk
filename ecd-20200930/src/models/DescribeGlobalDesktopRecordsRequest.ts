// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The cloud desktop ID. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  desktopStatusList?: string[];
  /**
   * @remarks
   * The cloud desktop specification. You can call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) to query the supported specification IDs for cloud desktops.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time. The maximum interval between the start time and end time is 30 days. Supported format:
   * - Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-08-31T06:56:45Z
   */
  endTime?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
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
   * The sort field. If this parameter is not specified, results are sorted by creation time in descending order. Valid values:
   * 
   * - uptime: sorts by cloud desktop uptime.
   * 
   * @example
   * uptime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Paging starts from page 1.    
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
   * The resource group ID.
   * 
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The query scope. This parameter is empty by default. Valid values:
   * 
   * - ADVANCED: queries statistical records such as connection duration.
   * 
   * @example
   * ADVANCED
   */
  scope?: string;
  /**
   * @remarks
   * The sort order. Default value: ascending order. Valid values:
   * - Asc: ascending order.
   * - Desc: descending order.
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
   * The billing method of the cloud desktop. Valid values:
   * 
   * - prePaid: monthly subscription with unlimited usage duration.
   * - postPaid: pay-as-you-go.
   * - monthPackage: monthly duration package.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
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
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

