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
   * The end time of the query.
   * 
   * @example
   * 2023-02-13T02:51:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the end user. This parameter is the same as the `EndUserId` parameter. Specify only one of them.
   * 
   * @example
   * alice
   */
  endUserIdFilter?: string;
  /**
   * @remarks
   * Specifies whether to return information about the terminal.
   */
  fillHardwareInfo?: boolean;
  /**
   * @remarks
   * The language of the returned information.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. Call [](t2167755.xdita#)to obtain a list of regions that Elastic Desktop Service (EDS) supports.
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
   * The connection status of the session.
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
   * The billing method of the cloud computer.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

