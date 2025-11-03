// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer IDs. You can specify 1 to 100 office network IDs.
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
   * The cloud computer type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of the specifications supported by the cloud computer.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time. The interval between the start time and end time can be up to 30 days. Supported formats:
   * 
   * *   Format: YYYY-MM-DDThh:mm:ssZ.
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
  /**
   * @remarks
   * The office network IDs.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The sorting field. If this parameter is not provided, results are sorted by creation time in descending order. Valid values:
   * 
   * *   uptime: indicates that the cloud computers are sorted by startup duration.
   * 
   * @example
   * uptime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number of the current page.\\
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * *   China (Shanghai)
   * *   Singapore
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
   * The query range. This parameter is empty by default. Optional values are:
   * 
   * *   ADVANCED: indicates that statistics such as the connection duration are queried.
   * 
   * @example
   * ADVANCED
   */
  scope?: string;
  /**
   * @remarks
   * The sorting method. Default value: ascending. Valid value:
   * 
   * *   Asc: ascending order
   * *   Desc: descending.
   * 
   * @example
   * Asc
   */
  sortType?: string;
  /**
   * @remarks
   * The start time. Supported formats:
   * 
   * *   Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  /**
   * @remarks
   * The way to purchase cloud computers. Valid values:
   * 
   * *   prePaid: The monthly purchase is unlimited.
   * *   postPaid: pay-as-you-go
   * *   monthPackage: monthly duration.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
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
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopType: 'string',
      endTime: 'string',
      endUserId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

