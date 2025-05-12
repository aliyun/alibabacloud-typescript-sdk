// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportClientEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * testName
   */
  desktopName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * If you do not specify a value for this parameter, the current time is used.
   * 
   * @example
   * 2022-03-23T07:11:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the endpoint user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The type of the event that you want to query. If you provide multiple values for EventTypes, the response will include events of all the specified types. If you provide no values for EventTypes and EventType, the response will include all events in the designated region.
   * 
   * Valid values:
   * 
   * *   DESKTOP_STOP: the shutdown event.
   * *   GET_LITE_CONNECTION_TICKET: the event of retrieving the connection ticket.
   * *   DESKTOP_DISCONNECT: the session disconnection event.
   * *   CLIENT_LOGIN: the user logon event.
   * *   GET_CONNECTION_TICKET: the connection credential retrieval event.
   * *   DESKTOP_REBOOT: the restart event.
   * *   DESKTOP_CONNECT: the session establishment event.
   * *   DESKTOP_START: the start event.
   * 
   * @example
   * CLIENT_LOGIN
   */
  eventType?: string;
  /**
   * @remarks
   * The types of the events that you want to query. You can include multiple event types, and the response will return events matching the specified types or all events if none are specified.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The language displayed on the frontend page. The backend uses this setting to define the language of exported files.
   * 
   * Valid values:
   * 
   * *   zh-CN: Simplified Chinese.
   * *   en-GB: British English.
   * 
   * @example
   * zh-CN
   */
  langType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Maximum value: 5000.
   * *   Default value: 5000.
   * 
   * @example
   * 50
   */
  maxResults?: number;
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
   * The office network name.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * If you do not specify a value for this parameter, all events that occurred before the point in time that you specify for `EndTime` are queried.
   * 
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      eventType: 'EventType',
      eventTypes: 'EventTypes',
      langType: 'LangType',
      maxResults: 'MaxResults',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      eventType: 'string',
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      langType: 'string',
      maxResults: 'number',
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

