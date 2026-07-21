// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID. If you do not specify this parameter, all cloud computers in the region are queried.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The IP address of the cloud computer. If you do not specify this parameter, events of all cloud computers in the region are queried.
   * 
   * @example
   * 10.10.*.*
   */
  desktopIp?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * To be hidden.
   */
  directoryId?: string;
  /**
   * @remarks
   * The end time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC+0. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logon user information, which is a Resource Access Management (RAM) user ID or AD username. If you do not specify this parameter, events of all users in the region are queried.
   * 
   * @example
   * 28961708130834****
   */
  endUserId?: string;
  endUserIds?: string[];
  /**
   * @remarks
   * The event type to query. If EventTypes is not empty, the EventTypes combination is used as the query filter condition. If both EventTypes and EventType are empty, all events are queried.
   * 
   * @example
   * DESKTOP_DISCONNECT
   */
  eventType?: string;
  /**
   * @remarks
   * The combination of event types to query. You can specify multiple event types. The query results include events of all specified types.
   */
  eventTypes?: string[];
  fillHardwareInfo?: boolean;
  language?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned in the previous API call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network to which the cloud computer belongs. If you do not specify this parameter, user events in all office networks in the region are queried.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
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
  /**
   * @remarks
   * The start time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC+0. If you do not specify this parameter, events are queried backward from the time specified by `EndTime`.
   * 
   * @example
   * 2020-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      eventType: 'EventType',
      eventTypes: 'EventTypes',
      fillHardwareInfo: 'FillHardwareInfo',
      language: 'Language',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      endTime: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      fillHardwareInfo: 'boolean',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

