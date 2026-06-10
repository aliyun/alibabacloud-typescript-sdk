// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop. If you omit this parameter, the operation returns events for all cloud desktops in the region.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The IP address of the cloud desktop. If you omit this parameter, the operation returns events for all cloud desktops in the region.
   * 
   * @example
   * 10.10.*.*
   */
  desktopIp?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * > This parameter is not in use.
   * 
   * @example
   * To be hidden.
   */
  directoryId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.<br>
   * If you omit this parameter, the operation uses the current time.<br>
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the end user, which can be a RAM user ID or an AD username. If you omit this parameter, the operation returns events for all users in the region.
   * 
   * @example
   * 28961708130834****
   */
  endUserId?: string;
  /**
   * @remarks
   * The event type to query. If EventTypes is specified, this parameter is ignored. If you omit both this parameter and EventTypes, the operation returns all events.
   * 
   * @example
   * DESKTOP_DISCONNECT
   */
  eventType?: string;
  /**
   * @remarks
   * An array of event types to query. The operation returns events that match any of the specified types.
   */
  eventTypes?: string[];
  fillHardwareInfo?: boolean;
  language?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.<br>
   * Default value: 100.<br>
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous response to retrieve the next page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network to which the cloud desktop belongs. If you omit this parameter, the operation returns events for users in all office networks in the region.
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
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.<br>
   * If you omit this parameter, the query returns events that occurred before the time specified by `EndTime`.<br>
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
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

