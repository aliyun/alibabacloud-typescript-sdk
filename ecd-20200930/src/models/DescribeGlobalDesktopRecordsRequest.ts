// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The IDs of the cloud desktops. You can specify up to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   */
  desktopStatusList?: string[];
  /**
   * @remarks
   * The desktop type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of the supported desktop types.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time of the query. The time must be in UTC and in the `YYYY-MM-DDThh:mm:ssZ` format. The interval between the start and end times cannot exceed 30 days.
   * 
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
   * - Asc: ascending order
   * 
   * - Desc: descending order
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  excludeDesktopStatusList?: string[];
  /**
   * @remarks
   * The ID of the office site.
   * 
   * - China (Shanghai)
   * 
   * - Singapore
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The field by which to sort the results. If you do not specify this parameter, the results are sorted by creation time in descending order. Valid value:
   * 
   * - `uptime`: Sorts the results by cloud desktop uptime.
   * 
   * @example
   * uptime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number to return.<br>Default value: 1.<br>
   * 
   * - Format: YYYY-MM-DDThh:mm:ssZ.
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
   * The ID of the region.
   * 
   * - Shanghai
   * 
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
   * The query scope. This parameter is empty by default. Valid value:
   * 
   * - `ADVANCED`: Queries statistical records, such as connection duration.
   * 
   * - postPaid: Pay-as-you-go.
   * 
   * - monthPackage: monthly time-based package.
   * 
   * @example
   * ADVANCED
   */
  scope?: string;
  /**
   * @remarks
   * The sort order. The default is `Asc`. Valid values:
   * 
   * - `Asc`: ascending order
   * 
   * @example
   * Asc
   */
  sortType?: string;
  /**
   * @remarks
   * The start time of the query. The time must be in UTC and in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * The billing method of the cloud desktop. Valid values:
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

