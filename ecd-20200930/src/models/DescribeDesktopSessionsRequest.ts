// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the session status within the cloud computer.
   * 
   * @example
   * true
   */
  checkOsSession?: boolean;
  /**
   * @remarks
   * The cloud computer IDs. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2023-02-13T02:51:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The end user ID. This parameter is the same as EndUserId. You only need to specify one of them.
   * 
   * @example
   * alice
   */
  endUserIdFilter?: string;
  endUserIds?: string[];
  /**
   * @remarks
   * Specifies whether to include terminal information in the response.
   */
  fillHardwareInfo?: boolean;
  /**
   * @remarks
   * The language type of the response.
   * 
   * @example
   * zh-CN
   */
  language?: string;
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
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The session connection status.
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The purchase method of the cloud computer.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  static names(): { [key: string]: string } {
    return {
      checkOsSession: 'CheckOsSession',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      endUserIdFilter: 'EndUserIdFilter',
      endUserIds: 'EndUserIds',
      fillHardwareInfo: 'FillHardwareInfo',
      language: 'Language',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sessionStatus: 'SessionStatus',
      startTime: 'StartTime',
      subPayType: 'SubPayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkOsSession: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      endUserIdFilter: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      fillHardwareInfo: 'boolean',
      language: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sessionStatus: 'string',
      startTime: 'string',
      subPayType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

