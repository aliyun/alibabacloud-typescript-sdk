// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID. If you do not specify a value for this parameter, events of all cloud desktops in the specified region are queried.
   * 
   * @example
   * ecd-8fupvkhg0aayu****
   */
  desktopId?: string;
  /**
   * @remarks
   * The IP address of the cloud desktop. If you do not specify a value for this parameter, the events of all cloud desktops in the specified region are queried.
   * 
   * @example
   * 10.10.*.*
   */
  desktopIp?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * This parameter is not available to the public.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  directoryId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.\\
   * If you do not specify a value for this parameter, the current time is used.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The information about the end user that connects to the cloud desktop from the Elastic Desktop Service (EDS) client. The information can be a Resource Access Management (RAM) user ID or an Active Directory (AD) username. If you do not specify a value for this parameter, the events of all end users in the specified region are queried.
   * 
   * @example
   * 28961708130834****
   */
  endUserId?: string;
  /**
   * @remarks
   * The type of the events that you want to query. If you specify multiple values for the EventTypes parameter, the events of all specified types are returned. If you do not specify values for the EventTypes and EventType parameters, all events of end users in the specified region are returned.
   * 
   * Valid values:
   * 
   * *   DESKTOP_STOP: End users stop the cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   GET_LITE_CONNECTION_TICKET: End users obtain the credential for reconnecting to the cloud desktop upon disconnection.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DESKTOP_DISCONNECT: End users disconnect desktop sessions.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   GET_CONNECTION_TICKET: End users request to connect to the cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CLIENT_LOGIN: End users log on to the cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DESKTOP_REBOOT: End users restart the cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DESKTOP_CONNECT: End users establish desktop sessions.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DESKTOP_START: End users start the cloud desktop.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DESKTOP_DISCONNECT
   */
  eventType?: string;
  /**
   * @remarks
   * The array of event types that you want to query. You can specify multiple event types. The response contains all or specified types of events.
   */
  eventTypes?: string[];
  fillHardwareInfo?: boolean;
  language?: string;
  /**
   * @remarks
   * The number of entries per page.\\
   * Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the workspace to which the cloud desktop belongs. If you do not specify a value for this parameter, the events of all workspaces in the specified region are queried.
   * 
   * @example
   * cn-hangzhou+dir-bh77qa8nmjot4****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.\\
   * If you do not specify a value for this parameter, all events that occurred before the point in time that you specify for `EndTime` are queried.
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

