// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsRequest extends $dara.Model {
  desktopId?: string[];
  /**
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @example
   * 2022-08-31T06:56:45Z
   */
  endTime?: string;
  /**
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @example
   * uptime
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ADVANCED
   */
  scope?: string;
  /**
   * @example
   * Asc
   */
  sortType?: string;
  /**
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  /**
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

