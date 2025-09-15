// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to turn on the switch to check session status of cloud computers.
   * 
   * @example
   * true
   */
  checkOsSession?: boolean;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 100 cloud computers.
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
   * The end of the time range to query.
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
   * testUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The user ID. This parameter functions the same as the `EndUserId` parameter. You only need to include one of them in your request.
   * 
   * @example
   * alice
   */
  endUserIdFilter?: string;
  fillHardwareInfo?: boolean;
  /**
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
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
   * The state of the session.
   * 
   * Valid values:
   * 
   * *   Connected
   * *   Disconnected
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The billing method of cloud computers.
   * 
   * Valid values:
   * 
   * *   duration: hourly plan (available for users in the whitelist)
   * *   postPaid: pay-as-you-go
   * *   monthPackage: monthly subscription (the 120-hour/250-hour computing plan)
   * *   prePaid: monthly subscription (the Unlimited computing plan)
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

